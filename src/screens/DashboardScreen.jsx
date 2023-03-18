import React from "react";
import Header from "../components/Header";
import Map from "../maps/Map";
import Graph from "../components/Graph";
import Chart from "../components/Chart";
import { BarScale } from "../utils/types";
import { Context } from "../Context";

const DashboardScreen = () => {
	const { parameter } = React.useContext(Context)
	return (
		<React.Fragment>
			<Header />
			<div id="dashboard">
				<div className="graph" style={{ color: "black" }}>
					<h3><span>Kilograms per hectar</span></h3>
					<div className="bar-scale-container">
						<div className='flex-row justify-content-between'>
							<span >{BarScale[parameter].low}</span>
							<span >{BarScale[parameter].medium}</span>
							<span >{BarScale[parameter].high}</span>
						</div>
						<div className="bar-scale">
						</div>
					</div>
				</div>
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
