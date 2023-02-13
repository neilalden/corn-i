import React, { useState, createContext } from "react";
import { Category, Maps, NutrientsParameter, Screens } from "./utils/types";

export const Context = createContext("Default Value");
const ContextProvider = (props) => {
	const [screen, setScreen] = useState(Screens.Dashboard);
	const [map, setMap] = useState(Maps.MangilagSur);
	const [category, setCategory] = useState(Category.Nutrients);
	const [parameter, setParameter] = useState(NutrientsParameter.Nitrogen);
	const [heatMap, setHeatMap] = useState(undefined);
	const [heatMapItems, setHeatMapItems] = useState(undefined);
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
	};
	return <Context.Provider value={State}>{props.children}</Context.Provider>;
};

export default ContextProvider;
