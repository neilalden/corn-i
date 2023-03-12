import React from "react";
import Header from "../components/Header";
import Map from "../maps/Map";
import Graph from "../components/Graph";
import Chart from "../components/Chart";

const DashboardScreen = () => {
	return (
		<React.Fragment>
			<Header />
			<div id="dashboard">

				<div className='flex-row justify-content-between'>
					<Map />
					&nbsp;&nbsp;&nbsp;&nbsp;
					<Graph />
				</div>
				<Chart />
			</div>
		</React.Fragment>
	);
};

export default DashboardScreen;
