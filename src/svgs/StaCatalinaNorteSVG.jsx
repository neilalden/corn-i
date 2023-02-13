import React from "react";
import { Context } from "../Context";

const StaCatalinaNorteSVG = () => {
	const { setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1787'
			height='832'
			viewBox='0 0 1787 832'
			id='sta_catalina_norte'
			className='mask'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				id='Rectangle 1'
				d='M17 64.5L54.5 50H148V186H0V108L17 64.5Z'
				fill='#D9D9D9'
			/>
			<rect id='Rectangle 2' y='187' width='148' height='128' fill='#D9D9D9' />
			<rect id='Rectangle 3' y='316' width='148' height='128' fill='#D9D9D9' />
			<rect id='Rectangle 4' y='445' width='148' height='128' fill='#D9D9D9' />
			<rect id='Rectangle 5' y='574' width='148' height='128' fill='#D9D9D9' />
			<rect id='Rectangle 6' y='703' width='148' height='128' fill='#D9D9D9' />
			<rect
				id='Rectangle 7'
				x='149'
				y='50'
				width='148'
				height='136'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 8'
				x='149'
				y='187'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 9'
				x='149'
				y='316'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 10'
				x='149'
				y='445'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 11'
				x='149'
				y='574'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 12'
				x='149'
				y='703'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 13'
				x='298'
				y='50'
				width='148'
				height='135'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 14'
				x='298'
				y='186'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 15'
				x='298'
				y='315'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 16'
				x='298'
				y='444'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 17'
				x='298'
				y='573'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 18'
				d='M298 702H446V792.5L371 814L298 830V702Z'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 19' d='M447 50L595 39.5V185H447V50Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 20'
				x='447'
				y='186'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 21'
				x='447'
				y='315'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 22'
				x='447'
				y='444'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 23'
				x='447'
				y='573'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 24'
				d='M447 702H595V763.5L525 777L447 792.5V702Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 25'
				d='M596 38.5L744 22V140H596V38.5Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 26'
				x='596'
				y='141'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 27'
				x='596'
				y='270'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 28'
				x='596'
				y='399'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 29'
				x='596'
				y='528'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 30'
				d='M596 657H744V742.5L596 763.5V657Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 31'
				d='M745 22.5L893 12V140H745V22.5Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 32'
				x='745'
				y='141'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 33'
				x='745'
				y='270'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 34'
				x='745'
				y='399'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 35'
				x='745'
				y='528'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 36'
				d='M745 657H893V730L745 741V657Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 37'
				x='894'
				y='11'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 38'
				x='894'
				y='140'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 39'
				x='894'
				y='269'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 40'
				x='894'
				y='398'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 41'
				x='894'
				y='527'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 42'
				d='M894 656H1042V722L894 728V656Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 43'
				d='M1043 11L1191 4.5V139H1043V11Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 44'
				x='1043'
				y='140'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 45'
				x='1043'
				y='269'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 46'
				x='1043'
				y='398'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 47'
				x='1043'
				y='527'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 48'
				x='1043'
				y='656'
				width='148'
				height='65'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 49'
				d='M1192 6.5L1340 1V129H1192V6.5Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 50'
				x='1192'
				y='130'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 51'
				x='1192'
				y='259'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 52'
				x='1192'
				y='388'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 53'
				x='1192'
				y='517'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 54'
				x='1192'
				y='646'
				width='148'
				height='65'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 55' d='M1341 1H1489V129H1341V1Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 56'
				x='1341'
				y='130'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 57'
				x='1341'
				y='259'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 58'
				x='1341'
				y='388'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 59'
				x='1341'
				y='517'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 60'
				x='1341'
				y='646'
				width='148'
				height='65'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 61' d='M1490 0H1638V128H1490V0Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 62'
				x='1490'
				y='129'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 63'
				x='1490'
				y='258'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 64'
				x='1490'
				y='387'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 65'
				x='1490'
				y='516'
				width='148'
				height='128'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 66'
				x='1490'
				y='645'
				width='148'
				height='65'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 67'
				d='M1639 0L1709.5 4L1718 128H1639V0Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 68'
				d='M1639 129H1717L1729 257H1639V129Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 69'
				d='M1639 258H1732.5L1754 386H1639V258Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 70'
				d='M1639 387H1753L1769 515H1639V387Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 71'
				d='M1639 516H1772L1787 644H1639V516Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 72'
				d='M1639 645H1787L1754 680.5L1708 703L1639 710V645Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
};

export default StaCatalinaNorteSVG;
