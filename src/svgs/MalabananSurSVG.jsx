import React from "react";
import { Context } from "../Context";

const MalabananSurSVG = () => {
	const { setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1910'
			height='1175'
			viewBox='0 0 1910 1175'
			id='malabanan_sur'
			className='mask'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<rect id='Rectangle 1' y='1029' width='146' height='146' fill='#D9D9D9' />
			<rect
				id='Rectangle 2'
				x='147'
				y='1029'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 3'
				x='294'
				y='1029'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 4'
				x='441'
				y='1029'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 5'
				d='M588 1029H734V1135.5H693L671 1175H588V1029Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 6'
				x='735'
				y='1029'
				width='146'
				height='107'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 7'
				d='M882 1029H1028V1135.5H998.5L976 1098L932.5 1083.5L899 1108.5L882 1135.5V1029Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 8'
				d='M1029 1029H1175V1143.5L1029 1136V1029Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 9'
				d='M1176 1029H1322V1151.5L1205 1168L1197.5 1157.5L1176 1146V1029Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 10'
				d='M1323 1029H1469V1143L1323 1151.5V1029Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 11'
				d='M1470 1029H1616V1104L1470 1140V1029Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 12'
				x='1617'
				y='1029'
				width='146'
				height='75'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 13'
				d='M1764 1029H1890.5L1910 1104H1764V1029Z'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 14' d='M9 882H146V1028H0L9 882Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 15'
				x='147'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 16'
				x='294'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 17'
				x='441'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 18'
				x='588'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 19'
				x='735'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 20'
				x='882'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 21'
				x='1029'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 22'
				x='1176'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 23'
				x='1323'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 24'
				x='1470'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 25'
				x='1617'
				y='882'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 26'
				d='M1764 882H1862L1888 1028H1764V882Z'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 27' d='M19 735H146V881H7L19 735Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 28'
				x='147'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 29'
				x='294'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 30'
				x='441'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 31'
				x='588'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 32'
				x='735'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 33'
				x='882'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 34'
				x='1029'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 35'
				x='1176'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 36'
				x='1323'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 37'
				x='1470'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 38'
				x='1617'
				y='735'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 39'
				d='M1764 735H1828.5L1860 881H1764V735Z'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 40' d='M57 588H146V734H18.5L57 588Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 41'
				x='147'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 42'
				x='294'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 43'
				x='441'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 44'
				x='588'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 45'
				x='735'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 46'
				x='882'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 47'
				x='1029'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 48'
				x='1176'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 49'
				x='1323'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 50'
				x='1470'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 51'
				x='1617'
				y='588'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 52'
				d='M1764 588H1795L1828 734H1764V588Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 53'
				d='M97.5 441H220V587H60.5L97.5 441Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 54'
				x='221'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 55'
				x='368'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 56'
				x='515'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 57'
				x='662'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 58'
				x='809'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 59'
				x='956'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 60'
				x='1103'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 61'
				x='1250'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 62'
				x='1397'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 63'
				x='1544'
				y='441'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 64'
				d='M1691 441H1762.5L1793 587H1691V441Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 65'
				x='97'
				y='294'
				width='123'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 66'
				x='221'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 67'
				x='368'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 68'
				x='515'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 69'
				x='662'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 70'
				x='809'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 71'
				x='956'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 72'
				x='1103'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 73'
				x='1250'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 74'
				x='1397'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 75'
				x='1544'
				y='294'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 76'
				d='M1691 294H1733L1760 440H1691V294Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 77'
				d='M114 147H247V293H98.5L114 147Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 78'
				x='248'
				y='147'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 79'
				x='395'
				y='147'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 80'
				x='542'
				y='147'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 81'
				x='689'
				y='147'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 82'
				x='836'
				y='147'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 83'
				x='983'
				y='147'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 84'
				x='1130'
				y='147'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 85'
				x='1277'
				y='147'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 86'
				x='1424'
				y='147'
				width='146'
				height='146'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 87'
				d='M1571 147H1702.5L1730 293H1571V147Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 88'
				d='M127.5 0H247V146H116L127.5 0Z'
				fill='#D9D9D9'
			/>
			<rect id='Rectangle 89' x='248' width='146' height='146' fill='#D9D9D9' />
			<rect id='Rectangle 90' x='395' width='146' height='146' fill='#D9D9D9' />
			<rect id='Rectangle 91' x='542' width='146' height='146' fill='#D9D9D9' />
			<path id='Rectangle 92' d='M689 0L835 6.5V146H689V0Z' fill='#D9D9D9' />
			<path id='Rectangle 93' d='M836 6L982 11V146H836V6Z' fill='#D9D9D9' />
			<path
				id='Rectangle 94'
				d='M983 11.5L1129 18V146H983V11.5Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 95'
				d='M1130 20L1276 34V146H1130V20Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 96'
				d='M1277 34L1423 45V146H1277V34Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 97'
				x='1424'
				y='45'
				width='146'
				height='101'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 98'
				d='M1571 45L1687 49L1700 146H1571V45Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
};

export default MalabananSurSVG;
