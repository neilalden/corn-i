import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	ArcElement,
	Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";
import { useRef, useContext } from "react";
import { Context } from "../Context";
import { NutrientsParameter } from "../utils/types";
import { findAreaColor, isDateGreater, isDateLesser, sortArrOfObj } from "../common/utils";
import { COLOR } from "../common/colors";
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ArcElement,
	Legend,
	Title,
	Tooltip,
	annotationPlugin,
);

const ChartComponent = (props) => {
	const {
		category,
		parameter,
		annnotationPosition,
		setAnnnotationPosition,
		recordedData,
		predictedData,
		heatMapItems,
		heatMapItemsValue,
		setHeatMapItemsValue
	} = useContext(Context);

	const chartRef = useRef();

	const onClick = (event, index) => {
		try {
			if (!chartRef.current) return;
			if (!event) {
				setAnnnotationPosition(index);
				chartRef.current.update();
				return
			}
			const position = chartRef.current.scales.x.getValueForPixel(event.x);
			setAnnnotationPosition(position);
			chartRef.current.update();
		} catch (e) {
			console.error(e);
		}
	};
	const handleAnimate = (event) => {
		const ANIMATIONSPEED = 1000;
		for (let i = 0; i < 8; i++) {
			setTimeout(() => {
				onClick(undefined, i)
			}, i * ANIMATIONSPEED);
		}
	}
	const datasets = recordedData ? formatDataToDisplay(
		sortArrOfObj(recordedData, "cropGroup"), heatMapItems, heatMapItemsValue, setHeatMapItemsValue, parameter) : []
	const data = {
		datasets: datasets,
	};
	const options = {
		// animation: false,
		maintainAspectRatio: false,
		onClick: onClick,
		plugins: {
			annotation: {
				annotations: {
					line1: {
						type: "line",
						xMin: annnotationPosition,
						xMax: annnotationPosition,
						mode: "vertical",
						borderColor: "rgb(255, 99, 132)",
						borderWidth: 8,
					},
				},
			},
		},
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

	return (
		<div className='mt-20'>
			<div className='flex-row justify-content-between'>
				<code className='mb-n12'>
					1 month {category}({String(parameter)}) record and predictions
				</code>

				<div className='button' onClick={handleAnimate}>
					<code>Play</code>
				</div>
			</div>
			<div className='border-box' id='chartContainer'>
				<Line
					className="h-100px"
					data={data}
					options={options}
					ref={chartRef}
				/>
			</div>
		</div>
	);
};

// array is sorted by date
export const formatDataToDisplay = (array, heatMapItems, heatMapItemsValue, setHeatMapItemsValue, parameter) => {
	if (!Array.isArray(array) || !array.length) return []
	const res = [];
	const cropGroups = [];
	let temp = []
	for (let i = 0; i < array.length; i++) {
		const item = array[i];
		const data = {
			x: item.date.toLocaleDateString("en-US"),
			y: item.value,
			isPrediction: item?.isPrediction
		}
		temp.push(data);
		if (temp.length === 8) {
			cropGroups.push(temp);
			temp = []
		}
	}
	if (!heatMapItemsValue) setHeatMapItemsValue(cropGroups)
	sortArrOfObj(cropGroups, "date").map((item, i) => {
		res.push({
			label: `Crop Group ${i + 1}`,
			data: item,
			backgroundColor: findAreaColor(parameter, getAvg(item)),
			borderColor: findAreaColor(parameter, getAvg(item)),
			tension: 0.3,
			pointRadius: 5,
			pointHoverRadius: 7,
			pointBorderWidth: 2,
			segment: {
				borderDash: (ctx) => dashed(ctx, [6, 6]),
			},
			spanGaps: true,
		})
	})
	return res;
}
const dashed = (ctx, value) => {
	return !!(ctx?.p1?.raw?.isPrediction) ? value : undefined
};
const getAvg = (arr) => {
	let avg = 0;
	arr?.map(num => {
		avg += Number(num.y)
	});
	return avg / arr.length
}
export default ChartComponent;
