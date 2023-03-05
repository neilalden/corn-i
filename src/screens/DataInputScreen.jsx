import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Papa from "papaparse";
import { createData } from "../service/firebase/firestore";
import { Context, predict } from "../Context";
import { Timestamp } from "firebase/firestore";
import { getDaysAfter, sortArrOfObj } from "../common/utils";

const DataInputScreen = () => {
	const { parameter } = useContext(Context)
	const [dataFrame, setDataFrame] = useState([])
	const commonConfig = { delimiter: "," };
	const handleUploadData = (event) => {
		event.preventDefault();
		for (const [index, row] of dataFrame.entries()) {
			const date = row["Date"] || row["date"];
			const rowKeys = Object.keys(row)
			for (const key of rowKeys) {
				if (key.toLowerCase() === "date") continue;
				const data = {
					value: row[key],
					date: Timestamp.fromDate(new Date(date)),
					cropGroup: key
				}

				const sorted = sortArrOfObj(dataFrame.map(data => ({ ...data, "date": new Date(data.Date || data.date) })), "date", "asc");
				const latestDate = sorted[0].date
				const cropGroup = []
				for (let i = 0; i < 4; i++) {
					const keys = Object.keys(sorted[i])
					for (let j = 0; j < keys.length; j++) {
						const value = Number(sorted[i][keys[j]])
						if (isNaN(keys[j])) continue;
						if (Array.isArray(cropGroup[i])) cropGroup[i].push(value)
						else cropGroup.push([value])
					}
				}
				const toPredict = (Object.keys(cropGroup[0]).map((_, colIndex) => (cropGroup).map(row => {
					const value = row[colIndex];
					if (!isNaN(value) && typeof value !== 'undefined') return Number(value)
				})))
				for (let i = 0; i < toPredict.length; i++) {
					for (let j = 0; j < 4; j++) {
						predict(toPredict[i]).then(res => {
							toPredict[i].pop();
							toPredict[i].unshift(Number((res.prediction?.toFixed(2))))
							if (i === 3 && j === 3) {
								toPredict.map((_, x) => {
									_.map((__, y) => {
										const predData = {
											value: __,
											date: Timestamp.fromDate(getDaysAfter(x + 1 * 7, latestDate)),
											cropGroup: y + 1,
											isPrediction: true
										}
										createData(parameter, predData).then(result => {
											// if (result && index === dataFrame.length - 2 && dataFrame.length > 0) {
											// 	setDataFrame([]);
											// }
											if (x === toPredict.length - 1 && y === toPredict[0].length - 1)
												console.log(result)
											alert("success!")
										})
									})
								})
							}
						})
					}
				}
				createData(parameter, data).then(result => {
					if (result && index === dataFrame.length - 2 && dataFrame.length > 0) {
						setDataFrame([]);
					}
				})
			}
		}
	}
	const handleOpenFile = (event) => {
		try {
			const file = event.target.files[0]
			if (file.size > 10240) {
				alert("File must not be greater than 10mb")
				return;
			}
			Papa.parse(
				file,
				{
					...commonConfig,
					header: true,
					download: true,
					complete: (result) => {
						setDataFrame(result.data);
					}
				}
			);
		}
		catch (e) {
			console.error(e)
		}
	}
	return (
		<div>
			<Header />
			<main>
				<form>
					<div className="input_container">
						<input type="file" id="fileUpload"
							onChange={handleOpenFile} />
					</div>
				</form>
				<table>
					<thead>
						<tr>
							{
								dataFrame?.length > 0 && Object.keys(dataFrame[0]).map((_, i) => {
									return (
										<th key={i}>{_}</th>)
								})
							}
						</tr>
					</thead>
					<tbody>
						{dataFrame?.length > 0 && dataFrame.map((_, i) => {
							return (
								<tr key={i}>
									{
										Object.keys(_).map((key, idx) => {
											return (
												<td key={idx}>{_[key]}</td>
											)
										})
									}
								</tr>)
						})}
					</tbody>
				</table>
				<button onClick={handleUploadData}>
					<h3>Upload</h3>
				</button>
			</main>
		</div>
	);
};

export default DataInputScreen;
