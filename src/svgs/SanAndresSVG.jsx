import React from "react";
import { Context } from "../Context";

const SanAndresSVG = () => {
	const { map, setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, map, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='879'
			height='1318'
			viewBox='0 0 879 1318'
			id='san_andres'
			className='mask'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path id="Rectangle 5" d="M165 946H413V1194H221.5L206.5 1129L165 1070V946Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 5</textPath></text>
			</path>
			<path id="Rectangle 6" d="M413 946V1318H762L779 1278L788 1238L785 1194V946H413Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 6</textPath></text>
			</path >
			<path id="Rectangle 3" d="M122.5 450L135 574H137L165 698V946H537V574H507V450H122.5Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 3</textPath></text>
			</path >
			<path id="Rectangle 4" d="M507 450V574H537V946H785L791 882L808 822H808.5L816.5 800.5L837 756.5L857 698H858.5L874.5 574H874L879 450H507Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 4</textPath></text>
			</path >
			<path id="Rectangle 1" d="M0 0H507V450H121L84 326H85L37.5 202H39.5L0 78V0Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 1</textPath></text>
			</path >
			<path id="Rectangle 2" d="M507 0V450H879V0H507Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 2</textPath></text>
			</path >
		</svg >
	);
};

export default SanAndresSVG;
