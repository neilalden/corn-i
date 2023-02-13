import React from "react";
import { Context } from "../Context";

const PahingaNorteSVG = () => {
	const { setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, setHeatMap, setHeatMapItems]);
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
			<path
				id='Rectangle 1'
				d='M1 913.5L201 899V1081.81L1 1099V913.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 2'
				d='M202 900.21L402 886V1065.15L202 1082V900.21Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 3'
				d='M403 884.138L603 870V1048.24L403 1065V884.138Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 4'
				d='M604 869.92L804 856V965.92L639 979.36L633.5 1041.76L604 1048V869.92Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 5'
				d='M805 854.975L1005 842V947.544L805 957V854.975Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 6'
				d='M1006 841.265L1190 833V937.201L1006 947V841.265Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 7'
				d='M1 727.536L201 713V898.464L1 913V727.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 8'
				d='M203 713.536L403 699V884.464L203 899V713.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 9'
				d='M404 697.536L604 683V868.464L404 883V697.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 10'
				d='M605 683.536L805 669V854.464L605 869V683.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 11'
				d='M806 668.5L1006 653V840.5L806 853.5V668.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 12'
				d='M1007 651.5L1191 639V832.5L1007 840V651.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 13'
				d='M1 539.536L201 525V710.464L1 725V539.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 14'
				d='M203 525.536L403 511V696.464L203 711V525.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 15'
				d='M404 509.536L604 495V680.464L404 695V509.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 16'
				d='M605 495.536L805 481V666.464L605 681V495.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 17'
				d='M806 480.5L1006 465V652.5L806 665.5V480.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 18'
				d='M1007 463.5L1191 451V638L1007 649.5V463.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 19'
				d='M1 352.536L201 338V523.464L1 538V352.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 20'
				d='M203 338.536L403 324V509.464L203 524V338.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 21'
				d='M404 322.536L604 308V493.464L404 508V322.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 22'
				d='M605 308.536L805 294V479.464L605 494V308.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 23'
				d='M806 293.5L1006 278V465.5L806 478.5V293.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 24'
				d='M1007 276.5L1191 264V451L1007 462.5V276.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 25'
				d='M1 165.536L201 151V336.464L1 351V165.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 26'
				d='M203 151.536L403 137V322.464L203 337V151.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 27'
				d='M404 135.536L604 121V306.464L404 321V135.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 28'
				d='M605 121.536L805 107V292.464L605 307V121.536Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 29'
				d='M806 106.5L1006 91V278.5L806 291.5V106.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 30'
				d='M1007 89.5L1191 77V264L1007 275.5V89.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 31'
				d='M0 50.7945L200 42V149L0 163V50.7945Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 32'
				d='M202 40.5038L402 32V134.5L202 149V40.5038Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 33'
				d='M403 31.9223L603 24V119.5L403 133V31.9223Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 34'
				d='M604 21.6316L804 14V104.5L604 119V21.6316Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 35'
				d='M805 12.5761L1005 5V89.5L904.5 96.6459L805 104V12.5761Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 36'
				d='M1006 5.54156L1190 0V82.9018L1006 88V5.54156Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
};

export default PahingaNorteSVG;
