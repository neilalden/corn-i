import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Papa from "papaparse";
import { createData } from "../service/firebase/firestore";
import { Context } from "../Context";
import { Timestamp } from "firebase/firestore";

const DataInputScreen = () => {
	const { parameter } = useContext(Context)
	const [dataFrame, setDataFrame] = useState([])
	const commonConfig = { delimiter: "," };
	const handleUploadData = async (event) => {
		event.preventDefault();
		for (const [i, row] of dataFrame.entries()) {
			const date = row["Date"] || row["date"];
			const rowKeys = Object.keys(row)
			for (const key of rowKeys) {
				if (key.toLowerCase() === "date") continue;
				const data = {
					value: row[key],
					date: Timestamp.fromDate(new Date(date)),
					cropGroup: key
				}
				const result = await createData(parameter, data);
				if (result && i === dataFrame.length - 2 && dataFrame.length > 0) {
					setDataFrame([]);
				}
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
