/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useEffect } from "react";
import { Category, Maps, NutrientsParameter, Screens, Months } from "./utils/types";
import {
	getOldestDocument,
	getOldestPredictionDocument,
	readCollection,
} from "./service/firebase/firestore";
import { findAreaColor, getDaysAgo, objectKeyHasValue, predictParam, sortArrOfObj } from "./common/utils";
import { collection, limit, orderBy, query, Timestamp, where } from "firebase/firestore";
import { firestore } from "./service/firebase/config";
import { formatDataToDisplay } from "./components/Chart";

export const Context = createContext("Default Value");
const ContextProvider = (props) => {
	const [screen, setScreen] = useState(Screens.Dashboard);
	const [map, setMap] = useState(Maps.MangilagSur);
	const [category, setCategory] = useState(Category.Nutrients);
	const [parameter, setParameter] = useState(NutrientsParameter.Nitrogen);
	const [heatMap, setHeatMap] = useState(undefined);
	const [heatMapItems, setHeatMapItems] = useState(undefined); // 110 the most, 32 the least
	const [heatMapItemsValue, setHeatMapItemsValue] = useState(undefined);
	const [annnotationPosition, setAnnnotationPosition] = useState(0);
	const [recordedDataDictionary, setRecordedDataDictionary] = useState({})
	const [recordedData, setRecordedData] = useState([]);
	const [refetch, setRefetch] = useState(false);
	const [dateFilterOptions, setDateFilterOptions] = useState([]);
	const [dateToFetch, setDateToFetch] = useState(undefined)
	const [oldestPrediction, setOldestPrediction] = useState(undefined)
	useEffect(() => {
		(async () => {
			setOldestPrediction(await getOldestPredictionDocument(parameter, map))
			if (!heatMapItems) return
			const oldest = await getOldestDocument(parameter, map);
			setDateToFetch(oldest?.date.toDate() ?? new Date())
			if (refetch === false && objectKeyHasValue(recordedDataDictionary, String(category + parameter + map))) {
				setRecordedData(recordedDataDictionary[String(category + parameter + map)].slice(-(8 * heatMapItems.length)))
			} else {
				try {
					const result = sortArrOfObj(
						await readCollection(
							parameter,
							query(collection(firestore, parameter),
								where("date", ">=", Timestamp.fromDate(oldest?.date.toDate() ?? new Date())),
								where("map", "==", map),
								orderBy("date", "desc"),
								// limit(8 * heatMapItems.length)
							)
						),
						"date",
						"desc"
					);
					setRecordedDataDictionary(prev => ({
						...prev,
						[String(category + parameter + map)]: result
					}));
					setRecordedData(result?.slice(-(8 * heatMapItems.length)));
					setRefetch(false)
				} catch (e) {
					setRecordedData([])
					console.error(e)
				}
			}
		})();
	}, [category, parameter, heatMapItems, refetch, map]);
	useEffect(() => {
		const cropGroups = [];
		if (recordedData.length > 0) {
			let temp = []
			for (let i = 0; i < recordedData.length; i++) {
				const item = recordedData[i];
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
		}

		const value = cropGroups

		if (heatMapItems) mapDataToHeatMap(heatMapItems, value, annnotationPosition, parameter, recordedData)
	}, [parameter, heatMapItems, annnotationPosition, recordedData]);

	useEffect(() => {
		if (dateFilterOptions?.length > 0) return;
		setDateFilterOptions(getUniqueMonthsAndYears(recordedDataDictionary[String(category + parameter + map)])?.reverse())
	}, [recordedData])
	const State = {
		screen,
		setScreen,
		map,
		setMap,
		category,
		setCategory,
		parameter,
		setParameter,
		heatMap,
		setHeatMap,
		heatMapItems,
		setHeatMapItems,
		annnotationPosition,
		setAnnnotationPosition,
		recordedData,
		heatMapItemsValue,
		setHeatMapItemsValue,
		refetch,
		setRefetch,
		dateFilterOptions,
		setDateFilterOptions,
		dateToFetch,
		setDateToFetch,
		setRecordedData,
		recordedDataDictionary,
		oldestPrediction
	};
	return <Context.Provider value={State}>{props.children}</Context.Provider>;
};
const mapDataToHeatMap = (heatMapItems, data, annotation, parameter, recordedData) => {
	try {
		for (let i = 0; i < heatMapItems?.length; i++) {
			const item = heatMapItems[i]
			if (recordedData.length === 0) {
				item?.setAttribute("fill", "#D9D9D9")
			} else {
				const color = findAreaColor(parameter, data[i][annotation]?.y);
				item?.setAttribute("fill", color)
			}
		}
	} catch (e) {
		console.error(e)
	}
}
export default ContextProvider;
export const predict = (input, parameter) => {
	return fetch(
		`http://neilalden.pythonanywhere.com/predict/${parameter?.toLowerCase()}`,
		{
			// mode: "no-cors",
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(input),
		}
	)
		.then((response) => response?.json())
		.then((response) => response)
		.catch(e => console.error(e))
};
export const getUniqueMonthsAndYears = (array) => {
	if (!Array.isArray(array)) return;
	const map = new Map();
	for (const item of array) {
		const month = item.date.getMonth()
		const year = item.date.getFullYear()
		const str = `${Months[month]}, ${year}`
		if (item.isPrediction) break;
		if (!map.has(str)) map.set(str, item.date)
	}
	return Array.from(map).map(([key, value]) => ({ key, value }))
}