import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Papa from "papaparse";
import { createData, deletePrediction } from "../service/firebase/firestore";
import { Context, predict } from "../Context";
import { Timestamp } from "firebase/firestore";
import { getDaysAfter, isCSV, sortArrOfObj } from "../common/utils";
import { toast } from "react-toastify";
import ProgressBar from "customizable-progress-bar";

const WEEKS_IN_A_MONTH = 4
const DataInputScreen = () => {
	const { parameter, setRefetch, map, oldestPrediction, heatMapItems } = useContext(Context)
	const [dataFrame, setDataFrame] = useState([])
	const [uploadingData, setUploadingData] = useState(false);
	const [uploadingPred, setUploadingPred] = useState(false);
	const [uploadDataProgress, setUploadDataProgress] = useState(0)
	const [uploadPredProgress, setUploadPredProgress] = useState(0)
	const [uploadingDataMax, setUploadingDataMax] = useState(0);
	const [uploadingPredMax, setUploadingPredMax] = useState(heatMapItems.length * 4);
	const commonConfig = { delimiter: "," };
	const handleUploadData = async (event) => {
		event.preventDefault();
		if (dataFrame.length === 0) {
			toast.warn('Choose file first', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}
		let oldestDataDate;
		setUploadingData(true)
		setUploadingDataMax(dataFrame.flatMap(_ => _).length)
		for (const [index, row] of dataFrame.entries()) {
			const dateKey = row["Date"] || row["date"];
			const rowKeys = Object.keys(row)
			for (const key of rowKeys) {
				if (key.toLowerCase() === "date") continue;
				const date = new Date(dateKey);
				if (oldestDataDate === undefined || oldestDataDate < date) {
					oldestDataDate = date
				}
				const data = {
					value: Number(row[key]),
					date: Timestamp.fromDate(date),
					dateString: date.toLocaleDateString("en-US"),
					cropGroup: Number(key),
					map: map
				}
				createData(parameter, data).then(result => {
					setUploadDataProgress(prev => prev += 1)
					if (result && index === dataFrame.length - 2 && dataFrame.length > 0) {
						setUploadingData(false)
					}
				})
			}
		}
		if (oldestDataDate < oldestPrediction?.date?.toDate()) {
			toast.success('Upload success!', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else {
			setUploadingPred(true)
			const value = await deletePrediction(parameter, map, setUploadingPredMax, setUploadPredProgress);
			if (value === undefined)
				uploadPrediction(map, parameter, dataFrame, setDataFrame, setRefetch, setUploadingPred, setUploadPredProgress)
		}
	}
	const handleOpenFile = (event) => {
		try {
			const file = event.target.files[0];
			if (file.size > 51200) {
				toast.error('File must not be greater than 50mb', {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				return;
			}
			if (!isCSV(file)) {
				toast.error('We only accept ".csv" files', {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
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
			{uploadingData ?
				<div style={{ marginBottom: 10 }}>
					<h3>Data upload</h3>
					<ProgressBar
						slideIn={true} //Possible values true, false
						barHeight={30} //Possible value any number
						labelSize={"medium"} //Possible any number or small, medium, large, x-large, xx-large ...
						activeBackColor={"#2db92d"} //Possible value any string (color code)
						disabledBackColor={"#cccccc"} //Possible value any string (color code)
						striped={true} //Possible values true, false
						animated={true} //Possible values true, false
						labelColor={"#ffffff"} //Possible value any string (color code)
						borderRadius={8} //Possible value any number
						minValue={0} //Possible value any number
						currentValue={(uploadDataProgress / uploadingDataMax) * 100} //Possible value any number
						maxValue={100} //Possible value any number
						showLabel={true} //Possible values true, false
					/>
				</div>
				: null}

			{uploadingPred ?
				<div style={{ marginBottom: 10 }}>
					<h3>Generating prediction</h3>
					<ProgressBar
						slideIn={true} //Possible values true, false
						barHeight={30} //Possible value any number
						labelSize={"medium"} //Possible any number or small, medium, large, x-large, xx-large ...
						activeBackColor={"#fbbf24"} //Possible value any string (color code)
						disabledBackColor={"#cccccc"} //Possible value any string (color code)
						striped={true} //Possible values true, false
						animated={true} //Possible values true, false
						labelColor={"#ffffff"} //Possible value any string (color code)
						borderRadius={8} //Possible value any number
						minValue={0} //Possible value any number
						currentValue={(uploadPredProgress / uploadingPredMax) * 100} //Possible value any number
						maxValue={100} //Possible value any number
						showLabel={true} //Possible values true, false
					/>
				</div>
				: null}
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

const uploadPrediction = async (map, parameter, dataFrame, setDataFrame, setRefetch, setUploadingPred, setUploadPredProgress) => {
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
	const toPredict = (Object.keys(cropGroup[0]).map((_, colIndex) => (cropGroup).map(row => {
		const value = row[colIndex];
		if (!isNaN(value) && typeof value !== 'undefined') return Number(value)
	})))
	for (let i = 0; i < toPredict.length; i++) {
		for (let j = 0; j < WEEKS_IN_A_MONTH; j++) {
			try {
				const res = await predict(toPredict[i], parameter);
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
							setUploadPredProgress(prev => prev += 1)
							if (res && tempIdx === temp.length - 1) {
								toast.success('Upload success!', {
									position: "top-center",
									autoClose: 5000,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined,
									theme: "light",
								});
								setDataFrame([]);
								setRefetch(true)
								setUploadingPred(false)
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
