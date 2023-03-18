import React, { useContext, useRef } from "react"; import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";
import { findAreaColor, sortArrOfObj } from "../common/utils";
import { formatDataToDisplay } from "./Chart";
import { Context } from "../Context";

const Graph = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);
	const {
		annnotationPosition,
		recordedData,
		heatMapItems,
		heatMapItemsValue,
		setHeatMapItemsValue,
		parameter,
	} = useContext(Context)

	const barRef = useRef()
	const options = {
		maintainAspectRatio: false,
		scales: {
			y: {
				ticks: {
					beginAtZero: false,
					font: { family: "Source Code Pro, monospace" },
				},
				grid: {
					color: "#B1BFC9",
				},
			},
			x: {
				ticks: {
					font: { family: "Source Code Pro, monospace" },
				},
				grid: {
					color: "#B1BFC9",
				},
			},
		},
	};
	const data = recordedData ? formatDataToDisplay(
		sortArrOfObj(recordedData, "cropGroup"), heatMapItems, heatMapItemsValue, setHeatMapItemsValue, parameter) : []
	return (
		<div>
			<span>Values</span>
			<div id='graphContainer' className='graph'>
				<Bar
					data={{
						labels: data.map((_) => _.label),
						datasets: [
							{
								label: parameter,
								data: data.map((_) => _.data[annnotationPosition].y),
								backgroundColor: data.map((_) => findAreaColor(parameter, _.data[annnotationPosition].y)),
							}
						]
					}}
					options={options}
					ref={barRef}
				/>
			</div>
		</div>
	);
};

export default Graph;
