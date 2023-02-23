import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../Context";

const MalabananNorteSVG = () => {
	const { setHeatMap, setHeatMapItems } = useContext(Context);
	const ref = useRef(null);
	useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1152'
			height='1324'
			viewBox='0 0 1152 1324'
			id='malabanan_norte'
			className='mask'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				id='Rectangle 1'
				d='M123.5 38.5L144 16.5L177 7L248 0V152H96V93.5L123.5 38.5Z'
				fill='#D9D9D9'
			/>
			<rect id='Rectangle 2' x='249' width='152' height='152' fill='#D9D9D9' />
			<rect id='Rectangle 3' x='402' width='152' height='152' fill='#D9D9D9' />
			<rect id='Rectangle 4' x='555' width='152' height='152' fill='#D9D9D9' />
			<path
				id='Rectangle 5'
				d='M708 0L766.5 17.5H860V152H708V0Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 6'
				x='861'
				y='18'
				width='152'
				height='134'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 7'
				d='M1014 14L1091.14 20L1142 71.5V152H1014V14Z'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 8' d='M94 153H246V305H88.5L94 153Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 9'
				x='247'
				y='153'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 10'
				x='400'
				y='153'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 11'
				x='553'
				y='153'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 12'
				x='706'
				y='153'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 13'
				x='859'
				y='153'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 14'
				x='1012'
				y='153'
				width='130'
				height='152'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 15' d='M86 306H234V458H64L86 306Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 16'
				x='235'
				y='306'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 17'
				x='388'
				y='306'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 18'
				x='541'
				y='306'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 19'
				x='694'
				y='306'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 20'
				x='847'
				y='306'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 21'
				d='M1000 306H1141L1152 458H1000V306Z'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 22' d='M62 459H232V611H38.5L62 459Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 23'
				x='233'
				y='459'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 24'
				x='386'
				y='459'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 25'
				x='539'
				y='459'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 26'
				x='692'
				y='459'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 27'
				x='845'
				y='459'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 28'
				x='998'
				y='459'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 29' d='M37 612H79V764H1L37 612Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 30'
				x='80'
				y='612'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 31'
				x='233'
				y='612'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 32'
				x='386'
				y='612'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 33'
				x='539'
				y='612'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 34'
				x='692'
				y='612'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 35'
				x='845'
				y='612'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 36'
				x='998'
				y='612'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 37'
				x='1'
				y='765'
				width='80'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 38'
				x='82'
				y='765'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 39'
				x='235'
				y='765'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 40'
				x='388'
				y='765'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 41'
				x='541'
				y='765'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 42'
				x='694'
				y='765'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 43'
				x='847'
				y='765'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 44'
				x='1000'
				y='765'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 45'
				d='M0.5 918H81V1070H19L5.5 1037.5L0.5 918Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 46'
				x='82'
				y='918'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 47'
				x='235'
				y='918'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 48'
				x='388'
				y='918'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 49'
				x='541'
				y='918'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 50'
				x='694'
				y='918'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 51'
				x='847'
				y='918'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 52'
				d='M1000 918H1152V953.5L1119 1005.5V1070H1000V918Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 53'
				d='M20 1072H234V1224H82L20 1072Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 54'
				x='235'
				y='1072'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 55'
				x='388'
				y='1072'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 56'
				x='541'
				y='1072'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 57'
				x='694'
				y='1072'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 58'
				x='847'
				y='1072'
				width='152'
				height='152'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 59'
				d='M1000 1072H1119L1152 1149.5V1224H1000V1072Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 60'
				d='M82 1225H234V1324H164.5L82 1225Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 61'
				x='235'
				y='1225'
				width='152'
				height='99'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 62'
				d='M388 1225H540V1270L445 1291.5V1324H388V1225Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 63'
				d='M541 1225H693V1294.5L595 1288.5V1266L557.5 1251L541 1266V1225Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 64'
				x='694'
				y='1225'
				width='152'
				height='73'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 65'
				x='847'
				y='1225'
				width='152'
				height='73'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 66'
				d='M1000 1225H1152V1271.5L1060.5 1298H1000V1225Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
};

export default MalabananNorteSVG;