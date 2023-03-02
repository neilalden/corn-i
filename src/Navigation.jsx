import React, { useContext } from "react";
import { Context } from "./Context";
import DashboardScreen from "./screens/DashboardScreen";
import DataInputScreen from "./screens/DataInputScreen";
import DataRecordScreen from "./screens/DataRecordScreen";
import { Screens } from "./utils/types";

const Navigation = () => {
	const { screen } = useContext(Context);
	if (screen === Screens.Dashboard) return <DashboardScreen />;
	if (screen === Screens.DataInput) return <DataInputScreen />;
	if (screen === Screens.DataRecord) return <DataRecordScreen />;
};

export default Navigation;
