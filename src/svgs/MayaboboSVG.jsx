import React from "react";
import { Context } from "../Context";

const MayaboboSVG = () => {
	const { map, setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, map, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1716'
			height='1188'
			viewBox='0 0 1716 1188'
			fill='none'
			id='mayabobo'
			className='mask'
			xmlns='http://www.w3.org/2000/svg'>
			<path id="Rectangle 2" d="M660 660H1188.5V1188.5H660V660Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 2</textPath></text>
			</path>
			<path id="Rectangle 3" d="M1188 660H1716.5V1188.5H1188V660Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 3</textPath></text>
			</path >
			<path id="Rectangle 1" d="M132.309 660L75.1114 792.306L27.2229 924H26.0492L10.0189 990.125L0 1056.25V1188.5H528V1189.5H660.75V660H132.309Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 1</textPath></text>
			</path >
			<path id="Rectangle 6" d="M302.247 0H660V132H660.5V660.5H132L154.543 528.25V396H155.088L174.529 264.298H175.045L214.064 132H214.623L254.113 59.1012L302.247 0Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 6</textPath></text>
			</path >
			<path id="Rectangle 5" d="M660 0V660.5H1188.5V132H1188V0H660Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 5</textPath></text>
			</path >
			<path id="Rectangle 4" d="M1188 0V660.5H1716.5V132H1716V0H1188Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 4</textPath></text>
			</path >
		</svg >
	);
};

export default MayaboboSVG;
