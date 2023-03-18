import { Maps } from "../utils/types";
import BukalSur from "./BukalSur";
import Mayabobo from "./Mayabobo";
import MasalukotI from "./MasalukotI";
import MasalukotII from "./MasalukotII";
import MalabananNorte from "./MalabananNorte";
import MalabananSur from "./MalabananSur";
import MangilagNorte from "./MangilagNorte";
import MangilagSur from "./MangilagSur";
import PahingaNorte from "./PahingaNorte";
import SanAndres from "./SanAndres";
import StaCatalinaNorte from "./StaCatalinaNorte";
import { useContext } from "react";
import { Context } from "../Context";

const Map = () => {
	const { map } = useContext(Context);
	return (
		<div>
			<span>Crop Heat Map</span>
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
	);
};

export default Map;
