import React from "react";
import { Context } from "../Context";

export default function MasalukotISVG() {
	const { map, setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, map, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1531'
			height='1284'
			viewBox='0 0 1531 1284'
			id='masalukot_II'
			className='mask'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path id="Rectangle 3" d="M109.444 585L54.6978 807H54.4887L0.244344 1029H0V1252H667V808H776V585H109.444Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 3</textPath></text>
			</path>
			<path id="Rectangle 4" d="M775 585V807H666V1252H888.377L984.812 1285.65H1110V1286.15H1332V1286.28H1532.78V1029H1532.13L1478.39 807H1475.52L1441.87 585H775Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 4</textPath></text>
			</path >
			<path id="Rectangle 1" d="M204.667 0L152 55.1989V364.249H152.645L110 586H777V363H775V141H774.579V0H204.667Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 1</textPath></text>
			</path >
			<path id="Rectangle 2" d="M773 0V141.633H774V364H776V586H1443V363H1441V141H1440.58V71.3226L1218.58 0.503565V0H773Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 2</textPath></text>
			</path >

		</svg >
	);
}
