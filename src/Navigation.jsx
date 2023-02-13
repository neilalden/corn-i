import React, { useContext } from "react";
import { Context } from "./Context";
import DashboardScreen from "./screens/DashboardScreen";
import DataInputScreen from "./screens/DataInputScreen";
import { Screens } from "./utils/types";

const Navigation = () => {
	const { screen } = useContext(Context);
	if (screen === Screens.Dashboard) return <DashboardScreen />;
	if (screen === Screens.DataInput) return <DataInputScreen />;
};

export default Navigation;
