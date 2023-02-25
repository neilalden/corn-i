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
import { collection, Timestamp } from "firebase/firestore";
import { firestore } from "./service/firebase/config";

export const Context = createContext("Default Value");
const ContextProvider = (props) => {
	const [screen, setScreen] = useState(Screens.Dashboard);
	const [map, setMap] = useState(Maps.MangilagSur);
	const [category, setCategory] = useState(Category.Nutrients);
	const [parameter, setParameter] = useState(NutrientsParameter.pH);
	const [heatMap, setHeatMap] = useState(undefined);
	const [heatMapItems, setHeatMapItems] = useState(undefined); // 110 the most, 32 the least
	const [heatMapItemsValue, setHeatMapItemsValue] = useState(undefined);
	const [annnotationPosition, setAnnnotationPosition] = useState(0);
	const [recordedDataDictionary, setRecordedDataDictionary] = useState({})
	const [predictedDataDictionary, setPredictedDataDictionary] = useState({})
	const [recordedData, setRecordedData] = useState([]);
	const [predictedData, setPredictedData] = useState(PREDICTED_DATA);
	useEffect(() => {
		(async () => {
			if (objectKeyHasValue(recordedDataDictionary, parameter)) {
				setRecordedData(recordedDataDictionary[parameter])
			} else {
				const result = (
					await readCollection(
						parameter,
						readCollectionQuery(
							collection(firestore, parameter),
							{ arg1: "date", arg2: ">", arg3: getDaysAgo(4 * 7) } //1 month ago
							,
							"date", 100
						),
					)
				);
				setRecordedDataDictionary(prev => ({
					...prev,
					[parameter]: result
				}));
				setRecordedData(result)
			}
		})();
	}, [parameter]);
	useEffect(() => {
		if (heatMapItems && heatMapItemsValue?.length > 0) (mapDataToHeatMap(heatMapItems, heatMapItemsValue, annnotationPosition, parameter))
	}, [heatMapItems, heatMapItemsValue, annnotationPosition])


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
		predictedData, heatMapItemsValue, setHeatMapItemsValue
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
