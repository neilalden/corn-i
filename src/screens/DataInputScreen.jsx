import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Papa from "papaparse";
import { createData } from "../service/firebase/firestore";
import { Context, predict } from "../Context";
import { Timestamp } from "firebase/firestore";
import { getDaysAfter, sortArrOfObj } from "../common/utils";
const WEEKS_IN_A_MONTH = 4
const DataInputScreen = () => {
	const { parameter, setRefetch, map } = useContext(Context)
	const [dataFrame, setDataFrame] = useState([])
	const commonConfig = { delimiter: "," };
	const handleUploadData = (event) => {
		event.preventDefault();
		for (const [index, row] of dataFrame.entries()) {
			const dateKey = row["Date"] || row["date"];
			const rowKeys = Object.keys(row)
			for (const key of rowKeys) {
				if (key.toLowerCase() === "date") continue;
				const date = new Date(dateKey)
				const data = {
					value: Number(row[key]),
					date: Timestamp.fromDate(date),
					dateString: date.toLocaleDateString("en-US"),
					cropGroup: Number(key),
					map: map
				}
				createData(parameter, data).then(result => {
					if (result && index === dataFrame.length - 2 && dataFrame.length > 0) {
					}
				})
			}
		}
		uploadPrediction(map, parameter, dataFrame, setDataFrame, setRefetch)
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

const uploadPrediction = async (map, parameter, dataFrame, setDataFrame, setRefetch) => {
	const sorted = sortArrOfObj(dataFrame.map(data => ({ ...data, "date": new Date(data.Date || data.date) })), "date", "asc");
	const latestDate = sorted[0].date
	const cropGroup = []
	for (let i = 0; i < WEEKS_IN_A_MONTH; i++) {
		const keys = Object.keys(sorted[i])
		for (let j = 0; j < keys.length; j++) {
			const value = Number(sorted[i][keys[j]])
			if (isNaN(keys[j])) continue;
			if (Array.isArray(cropGroup[i])) cropGroup[i].push(value)
			else cropGroup.push([value])
		}
	}
	console.log(cropGroup)
	const toPredict = (Object.keys(cropGroup[0]).map((_, colIndex) => (cropGroup).map(row => {
		const value = row[colIndex];
		if (!isNaN(value) && typeof value !== 'undefined') return Number(value)
	})))
	for (let i = 0; i < toPredict.length; i++) {
		for (let j = 0; j < WEEKS_IN_A_MONTH; j++) {
			try {
				const res = await predict(toPredict[i])
				toPredict[i].pop();
				toPredict[i].unshift(Number((res.prediction?.toFixed(2))))
				if (res && i === toPredict.length - 1 && j === 3) {
					const temp = []
					for (let ii = 0; ii < toPredict.length; ii++) {
						const cropGroup = ii + 1;
						const row = toPredict[ii];
						for (let jj = 0; jj < row.length; jj++) {
							const cellValue = row[jj];
							const date = getDaysAfter((jj + 1) * 7, new Date(latestDate))
							const data = {
								isPrediction: true,
								value: Number(cellValue),
								cropGroup: cropGroup,
								date: Timestamp.fromDate(date),
								dateString: date.toLocaleDateString("en-US"),
								map: map
							}
							temp.push(data)
						}
					}
					temp.map((tempData, tempIdx) => {
						createData(parameter, tempData).then(res => {
							if (res && tempIdx === temp.length - 1) {
								alert("success!")
								setDataFrame([]);
								setRefetch(true)
							}
						})
					})
				}
			} catch (e) {
				console.error(e)
			}
		}
	}
}

export default DataInputScreen;
