import React from "react";
import { Context } from "../Context";

const PahingaNorteSVG = () => {
	const { map, setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, map, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1191'
			height='1099'
			viewBox='0 0 1191 1099'
			id='pahinga_norte'
			className='mask'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path id="Rectangle 2" d="M606 870.318L605 870.391V1050.07L404 1066.92V1066.98L202 1084V1083.72L1 1101V540.682L203 526V526.682L405 512V512.464L606 498V870.318Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 2</textPath></text>
			</path>
			<path id="Rectangle 3" d="M1193 452L1007 464.689V466.078L806 481.732V482.073L605 496.754V869.995L604 870.065V1050L633.795 1043.7L639.35 980.645L806 967.065V958.952L1007 949.38V948.946L1192 939.029V834.466L1193 834.425V452Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 3</textPath></text>
			</path >
			<path id="Rectangle 1" d="M606 28L403 35.9223V36.0838L202 44.5038V46.044L0 54.9398V169L1 168.93V540L203 525.391V526L406 511.318V509.855L607 495.318V121L606 121.072V28Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 1</textPath></text>
			</path >
			<path id="Rectangle 4" fill-rule="evenodd" clip-rule="evenodd" d="M1192 77.0679L1193 77V452.884L1008 464.438V467.37L807 480.435V481.318L605 496V123.927L604 124V24.7769L805 17.0385V15.7291L1007 8V8.63704L1192 3V77.0679ZM818.369 292.696L807 293.435V293.577L818.369 292.696Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 4</textPath></text>
			</path >
		</svg >
	);
};

export default PahingaNorteSVG;
