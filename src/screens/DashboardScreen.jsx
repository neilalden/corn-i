import React, { useContext } from "react";
import { Context } from "../Context";
import { Maps } from "../utils/types";
import Header from "../components/Header";
import BukalSur from "../maps/BukalSur";
import Mayabobo from "../maps/Mayabobo";
import MasalukotI from "../maps/MasalukotI";
import MasalukotII from "../maps/MasalukotII";
import MalabananNorte from "../maps/MalabananNorte";
import MalabananSur from "../maps/MalabananSur";
import MangilagNorte from "../maps/MangilagNorte";
import MangilagSur from "../maps/MangilagSur";
import PahingaNorte from "../maps/PahingaNorte";
import SanAndres from "../maps/SanAndres";
import StaCatalinaNorte from "../maps/StaCatalinaNorte";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const DashboardScreen = () => {
	const { map } = useContext(Context);
	ChartJS.register(ArcElement, Tooltip, Legend);

	return (
		<React.Fragment>
			<Header />
			<div className='flex-row justify-content-between' id='graphsContainer'>
				{map === Maps.BukalSur ? <BukalSur /> : undefined}
				{map === Maps.MalabananNorte ? <MalabananNorte /> : undefined}
				{map === Maps.MalabananSur ? <MalabananSur /> : undefined}
				{map === Maps.MangilagNorte ? <MangilagNorte /> : undefined}
				{map === Maps.MangilagSur ? <MangilagSur /> : undefined}
				{map === Maps.MasalukotI ? <MasalukotI /> : undefined}
				{map === Maps.MasalukotII ? <MasalukotII /> : undefined}
				{map === Maps.Mayabobo ? <Mayabobo /> : undefined}
				{map === Maps.PahingaNorte ? <PahingaNorte /> : undefined}
				{map === Maps.SanAndres ? <SanAndres /> : undefined}
				{map === Maps.StaCatalinaNorte ? <StaCatalinaNorte /> : undefined}
			</div>
		</React.Fragment>
	);
};

export default DashboardScreen;
