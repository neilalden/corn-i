import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../Context";

const BukalSurSVG = () => {
	const { setHeatMap, setHeatMapItems } = useContext(Context);
	const ref = useRef(null);
	useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1909'
			height='579'
			viewBox='0 0 1909 579'
			fill='none'
			id='bukal_sur'
			className='mask'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				id='Rectangle 1'
				d='M31 55L101.5 37H134V157H8L14 92L31 55Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 2'
				d='M8 158H134V278H8L0.5 242L8 158Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 3'
				d='M9.5 279H134V378L108 360L75.5 333L23 298L9.5 279Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 4'
				x='135'
				y='37'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 5'
				x='135'
				y='158'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 6'
				d='M135 279H255V449L214.5 440.5L165.5 422L135 381.5V279Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 7'
				x='256'
				y='37'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 8'
				x='256'
				y='158'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 9'
				x='256'
				y='279'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 10'
				d='M256 400H376V487.5L358 480.5L325.5 470.5L256 452V400Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 11'
				x='377'
				y='37'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 12'
				x='377'
				y='158'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 13'
				x='377'
				y='279'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 14'
				d='M377 400H497V514L377 489V400Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 15'
				x='498'
				y='36'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 16'
				x='498'
				y='157'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 17'
				x='498'
				y='278'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 18'
				d='M498 399H618V539.5L498 513V399Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 19'
				x='619'
				y='36'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 20'
				x='619'
				y='157'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 21'
				x='619'
				y='278'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 22'
				d='M619 399H739V563.5L619 538.5V399Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 23'
				d='M740 35H831.5L860 22.5V155H740V35Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 24'
				x='740'
				y='156'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 25'
				x='740'
				y='277'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 26'
				x='740'
				y='398'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 27'
				d='M740 520H860V565L771 579L740 565V520Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 28'
				d='M861 20.5L876.5 4L981 0V120H861V20.5Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 29'
				x='861'
				y='121'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 30'
				x='861'
				y='242'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 31'
				x='861'
				y='363'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 32'
				d='M861 485H981V550.5L861 564V485Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 33'
				d='M982 1.5L1102 10V120H982V1.5Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 34'
				x='982'
				y='121'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 35'
				x='982'
				y='242'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 36'
				x='982'
				y='363'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 37'
				d='M982 484H1102V543L982 553V484Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 38'
				x='1103'
				y='10'
				width='120'
				height='109'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 39'
				x='1103'
				y='120'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 40'
				x='1103'
				y='241'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 41'
				x='1103'
				y='362'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 42'
				x='1103'
				y='484'
				width='120'
				height='58'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 43'
				x='1224'
				y='10'
				width='120'
				height='109'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 44'
				x='1224'
				y='120'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 45'
				x='1224'
				y='241'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 46'
				x='1224'
				y='362'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 47'
				x='1224'
				y='484'
				width='120'
				height='57'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 48'
				x='1345'
				y='18'
				width='120'
				height='102'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 49'
				x='1345'
				y='121'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 50'
				x='1345'
				y='242'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 51'
				x='1345'
				y='363'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 52'
				d='M1345 484H1465V528H1389L1376.5 538H1345V484Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 53'
				x='1466'
				y='18'
				width='120'
				height='100'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 54'
				x='1466'
				y='119'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 55'
				x='1466'
				y='240'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 56'
				x='1466'
				y='361'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 57' d='M1466 483H1586V528H1466V483Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 58'
				x='1587'
				y='18'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 59'
				x='1587'
				y='139'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 60'
				x='1587'
				y='260'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 61'
				d='M1587 381H1707V519L1587 526V381Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 62'
				d='M1708 17H1757L1794.5 52.5L1828 137H1708V17Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 63'
				x='1708'
				y='138'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 64'
				x='1708'
				y='259'
				width='120'
				height='120'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 65'
				d='M1708 380H1828V506.5H1758.5L1739 519H1708V380Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 66'
				d='M1829 262.5L1874.5 386L1909 506H1829V262.5Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
};

export default BukalSurSVG;
