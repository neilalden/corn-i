import React from "react";
import { Context } from "../Context";

const MangilagNorteSVG = () => {
	const { map, setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, map, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='969'
			height='1282'
			viewBox='0 0 969 1282'
			id='mangilag_norte'
			className='mask'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path id="Rectangle 1" d="M39.6419 889H414.5V1240.79L217.5 1283L101.467 1278.48L72.8349 1268.93L27.627 1245.81L0 1232.24L20.5947 1086H21L39.6419 889Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 1</textPath></text>
			</path>
			<path id="Rectangle 2" d="M414.5 889H808.5V1151.03L687.888 1178.76L644.668 1201.45L611.5 1208V1208.29L414.5 1240V889Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 2</textPath></text>
			</path >
			<path id="Rectangle 3" d="M934 889H808.5V1151L902 1129.67L927.5 1140.84L955 1122.05L957.5 1106.31V1086L945.5 1031.22L948.5 970.413L934 889Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 3</textPath></text>
			</path >
			<path id="Rectangle 4" d="M58.6099 495H414.5V889H39.5V692H39L58.6099 495Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 4</textPath></text>
			</path >
			<path id="Rectangle 5" d="M414.5 495H808.5V889H414.5V495Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 5</textPath></text>
			</path >
			<path id="Rectangle 6" d="M945.5 495H808.5V889H934.5V692L945.5 495Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 6</textPath></text>
			</path >
			<path id="Rectangle 7" d="M414.5 108.5L217.5 153.236V155.5L152.896 166.074L110.5 298H108.315L58 495H414.5V108.5Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 7</textPath></text>
			</path >
			<path id="Rectangle 8" d="M808.5 20L611.5 62.0188V62L414.5 108.196V495H808.5V20Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 8</textPath></text>
			</path >
			<path id="Rectangle 9" d="M958.5 0L808.5 20.2V495H945.5L955 298H955.5L968 101H968.5L958.5 0Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 9</textPath></text>
			</path >
		</svg >
	);
};

export default MangilagNorteSVG;
