import React from "react";
import { Context } from "../Context";

const MangilagNorteSVG = () => {
	const { setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, setHeatMap, setHeatMapItems]);
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
			<path
				id='Rectangle 1'
				d='M20.5 1086H216.5V1282L101 1277.5L72.5 1268L27.5 1245L0 1231.5L20.5 1086Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 2'
				d='M217.5 1086H413.5V1240L217.5 1282V1086Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 3'
				d='M414.5 1086H610.5V1207.5L414.5 1239V1086Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 4'
				d='M611.5 1086H807.5V1150.5L687.5 1178L644.5 1200.5L611.5 1207V1086Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 5'
				d='M808.5 1086H957.5V1106L955 1121.5L927.5 1140L902 1129L808.5 1150V1086Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 6'
				d='M39.5 889H216.5V1085H21L39.5 889Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 7'
				x='217.5'
				y='889'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 8'
				x='414.5'
				y='889'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 9'
				x='611.5'
				y='889'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 10'
				d='M808.5 889H934L948.5 970L945.5 1030.5L957.5 1085H808.5V889Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 11'
				x='39.5'
				y='692'
				width='177'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 12'
				x='217.5'
				y='692'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 13'
				x='414.5'
				y='692'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 14'
				x='611.5'
				y='692'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 15'
				x='808.5'
				y='692'
				width='126'
				height='196'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 16'
				d='M58.5 495H216.5V691H39L58.5 495Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 17'
				x='217.5'
				y='495'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 18'
				x='414.5'
				y='495'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 19'
				x='611.5'
				y='495'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 20'
				d='M808.5 495H945.5L934.5 691H808.5V495Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 21'
				d='M108 298H216.5V494H58L108 298Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 22'
				x='217.5'
				y='298'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 23'
				x='414.5'
				y='298'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 24'
				x='611.5'
				y='298'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 25'
				d='M808.5 298H955L945.5 494H808.5V298Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 26'
				d='M152.5 166L216.5 155.5V297H110.5L152.5 166Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 27'
				d='M217.5 153L413.5 108.5V297H217.5V153Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 28'
				d='M414.5 108L610.5 62V297H414.5V108Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 29'
				x='611.5'
				y='101'
				width='196'
				height='196'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 30'
				d='M808.5 101H968L955.5 297H808.5V101Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 31'
				d='M611.5 61.5L807.5 20V100H611.5V61.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 32'
				d='M808.5 20L958.5 0L968.5 100H808.5V20Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
};

export default MangilagNorteSVG;
