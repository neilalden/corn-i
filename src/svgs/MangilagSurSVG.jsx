import React from "react";
import { Context } from "../Context";

const MangilagSurSVG = () => {
	const { setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1632'
			height='1125'
			viewBox='0 0 1632 1125'
			id='mangilag_sur'
			className='mask'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				id='Rectangle 1'
				d='M0 940H180V1119H133L94.5 1100L7.5 1098L23.5 1022.5L7.5 986.5L0 940Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 2'
				d='M181 940H341V1101L327 1114L181 1119V940Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 3'
				d='M342 940H502V1100L496 1108L478 1110L465.5 1122.5H441V1110H420.5L414 1100H342V940Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 4'
				d='M503 940H663V1106L629.5 1117L581.5 1125L559 1102.5L503 1100V940Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 5'
				d='M664 940H824V1042.5L735.5 1054.5L719.5 1100L664 1106.5V940Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 6'
				d='M825 940H985V1100H918.5L891.5 1058.5L825 1043V940Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 7'
				x='986'
				y='940'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 8'
				d='M1147 940H1307V1107.5L1261.5 1111L1147 1100V940Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 9'
				d='M1308 940H1468V1100L1402 1118L1329 1120L1308 1110V940Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 10'
				d='M1469 940H1629L1632 1009.5L1613.5 1060L1559.5 1100L1515 1121.5L1481.5 1118L1469 1100V940Z'
				fill='#D9D9D9'
			/>
			<rect id='Rectangle 11' y='779' width='181' height='160' fill='#D9D9D9' />
			<rect
				id='Rectangle 12'
				x='182'
				y='779'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 13'
				x='343'
				y='779'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 14'
				x='504'
				y='779'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 15'
				x='665'
				y='779'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 16'
				x='826'
				y='779'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 17'
				x='987'
				y='779'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 18'
				x='1148'
				y='779'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 19'
				x='1309'
				y='779'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 20'
				x='1470'
				y='779'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 21'
				d='M12.5 618H181V778H0L12.5 618Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 22'
				x='182'
				y='618'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 23'
				x='343'
				y='618'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 24'
				x='504'
				y='618'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 25'
				x='665'
				y='618'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 26'
				x='826'
				y='618'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 27'
				x='987'
				y='618'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 28'
				x='1148'
				y='618'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 29'
				x='1309'
				y='618'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 30'
				x='1470'
				y='618'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 31'
				d='M48.5 457H182V617H14L48.5 457Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 32'
				x='183'
				y='457'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 33'
				x='344'
				y='457'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 34'
				x='505'
				y='457'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 35'
				x='666'
				y='457'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 36'
				x='827'
				y='457'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 37'
				x='988'
				y='457'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 38'
				x='1149'
				y='457'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 39'
				x='1310'
				y='457'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 40'
				x='1471'
				y='457'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 41'
				d='M83.5 296H182V456H52L83.5 296Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 42'
				x='183'
				y='296'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 43'
				x='344'
				y='296'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 44'
				x='505'
				y='296'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 45'
				x='666'
				y='296'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 46'
				x='827'
				y='296'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 47'
				x='988'
				y='296'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 48'
				x='1149'
				y='296'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 49'
				x='1310'
				y='296'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 50'
				x='1471'
				y='296'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 51'
				d='M59.5 135H182V295H82L59.5 230V174.5V135Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 52'
				x='183'
				y='135'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 53'
				x='344'
				y='135'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 54'
				x='505'
				y='135'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 55'
				x='666'
				y='135'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 56'
				x='827'
				y='135'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 57'
				x='988'
				y='135'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 58'
				x='1149'
				y='135'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 59'
				x='1310'
				y='135'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 60'
				x='1471'
				y='135'
				width='160'
				height='160'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 61'
				d='M60 71L97 32L133 15.5H183V134H60V71Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 62'
				x='184'
				y='15'
				width='160'
				height='119'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 63'
				x='345'
				y='15'
				width='160'
				height='119'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 64'
				x='506'
				y='15'
				width='160'
				height='119'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 65'
				x='667'
				y='15'
				width='160'
				height='119'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 66'
				x='828'
				y='15'
				width='160'
				height='119'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 67'
				x='989'
				y='15'
				width='160'
				height='119'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 68'
				d='M1150 15H1263.5L1278 2L1310 0V134H1150V15Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 69'
				d='M1311 0.5H1351.5L1376.5 11.5L1471 19.5V134H1311V0.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 70'
				d='M1472 21L1535 29L1613 21L1632 134H1472V21Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
};

export default MangilagSurSVG;
