import React, { useState, createContext, useEffect } from "react";
import { COLOR } from "./common/colors";
import { Category, Maps, NutrientsParameter, Screens } from "./utils/types";
import {
	RECORDED_DATA,
	PREDICTED_DATA,
	NitrogenValues,
} from "../src/service/api";
import {
	createData,
	readCollection,
	readCollectionQuery,
	readDocument,
} from "./service/firebase/firestore";
import { findAreaColor, getDaysAgo, objectKeyHasValue, predictParam } from "./common/utils";
import { collection, limit, orderBy, query, Timestamp, where } from "firebase/firestore";
import { firestore } from "./service/firebase/config";

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
	const [predictedData, setPredictedData] = useState(PREDICTED_DATA);
	const [refetch, setRefetch] = useState(false)
	useEffect(() => {
		(async () => {
			if (!heatMapItems) return
			if (refetch === false && objectKeyHasValue(recordedDataDictionary, String(parameter + map))) {
				setRecordedData(recordedDataDictionary[String(parameter + map)])
			} else {
				const result = (
					await readCollection(
						parameter,
						query(collection(firestore, parameter), where("date", ">", Timestamp.fromDate(new Date())), where("map", "==", map), orderBy("date"), limit(8 * heatMapItems.length))
					)
				);
				setRecordedDataDictionary(prev => ({
					...prev,
					[parameter]: result
				}));
				setRecordedData(result);
				setRefetch(false)
			}
		})();
	}, [parameter, heatMapItems, refetch, map]);

	useEffect(() => {
		if (heatMapItems && heatMapItemsValue?.length > 0) (mapDataToHeatMap(heatMapItems, heatMapItemsValue, annnotationPosition, parameter))
	}, [parameter, heatMapItems, heatMapItemsValue, annnotationPosition])


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
		predictedData,
		heatMapItemsValue,
		setHeatMapItemsValue, refetch, setRefetch
	};
	return <Context.Provider value={State}>{props.children}</Context.Provider>;
};
const mapDataToHeatMap = (heatMapItems, data, annotation, parameter) => {
	try {
		for (let i = 0; i < heatMapItems?.length; i++) {
			const item = heatMapItems[i]
			item?.setAttribute("fill", findAreaColor(parameter, data[i][annotation]?.y))
		}
	} catch (e) {
		console.error(e)
	}
}
export default ContextProvider;
export const predict = (input) => {
	return fetch(
		"http://neilalden.pythonanywhere.com/predict",
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
