import React from "react";
import { Context } from "../Context";

const MayaboboSVG = () => {
	const { setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1716'
			height='1188'
			viewBox='0 0 1716 1188'
			fill='none'
			id='mayabobo'
			className='mask'
			xmlns='http://www.w3.org/2000/svg'>
			<path id='Rectangle 1' d='M0 1056H131.5V1187.5H0V1056Z' fill='#D9D9D9' />
			<path
				id='Rectangle 2'
				d='M132 1056H263.5V1187.5H132V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 3'
				d='M264 1056H395.5V1187.5H264V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 4'
				d='M396 1056H527.5V1187.5H396V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 5'
				d='M528 1056H659.5V1187.5H528V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 6'
				d='M660 1056H791.5V1187.5H660V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 7'
				d='M792 1056H923.5V1187.5H792V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 8'
				d='M924 1056H1055.5V1187.5H924V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 9'
				d='M1056 1056H1187.5V1187.5H1056V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 10'
				d='M1188 1056H1319.5V1187.5H1188V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 11'
				d='M1320 1056H1451.5V1187.5H1320V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 12'
				d='M1452 1056H1583.5V1187.5H1452V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 13'
				d='M1584 1056H1715.5V1187.5H1584V1056Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 14'
				d='M25.9015 924H131.5V1055.5H0L9.96212 989.75L25.9015 924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 15'
				d='M132 924H263.5V1055.5H132V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 16'
				d='M264 924H395.5V1055.5H264V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 17'
				d='M396 924H527.5V1055.5H396V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 18'
				d='M528 924H659.5V1055.5H528V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 19'
				d='M660 924H791.5V1055.5H660V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 20'
				d='M792 924H923.5V1055.5H792V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 21'
				d='M924 924H1055.5V1055.5H924V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 22'
				d='M1056 924H1187.5V1055.5H1056V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 23'
				d='M1188 924H1319.5V1055.5H1188V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 24'
				d='M1320 924H1451.5V1055.5H1320V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 25'
				d='M1452 924H1583.5V1055.5H1452V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 26'
				d='M1584 924H1715.5V1055.5H1584V924Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 27'
				d='M69.2948 792H131.5V923.5H26L69.2948 792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 28'
				d='M132 792H263.5V923.5H132V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 29'
				d='M264 792H395.5V923.5H264V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 30'
				d='M396 792H527.5V923.5H396V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 31'
				d='M528 792H659.5V923.5H528V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 32'
				d='M660 792H791.5V923.5H660V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 33'
				d='M792 792H923.5V923.5H792V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 34'
				d='M924 792H1055.5V923.5H924V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 35'
				d='M1056 792H1187.5V923.5H1056V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 36'
				d='M1188 792H1319.5V923.5H1188V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 37'
				d='M1320 792H1451.5V923.5H1320V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 38'
				d='M1452 792H1583.5V923.5H1452V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 39'
				d='M1584 792H1715.5V923.5H1584V792Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 40'
				d='M131.849 660H263.5V791.5H75L131.849 660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 41'
				d='M264 660H395.5V791.5H264V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 42'
				d='M396 660H527.5V791.5H396V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 43'
				d='M528 660H659.5V791.5H528V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 44'
				d='M660 660H791.5V791.5H660V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 45'
				d='M792 660H923.5V791.5H792V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 46'
				d='M924 660H1055.5V791.5H924V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 47'
				d='M1056 660H1187.5V791.5H1056V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 48'
				d='M1188 660H1319.5V791.5H1188V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 49'
				d='M1320 660H1451.5V791.5H1320V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 50'
				d='M1452 660H1583.5V791.5H1452V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 51'
				d='M1584 660H1715.5V791.5H1584V660Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 52'
				d='M152.422 528H263.5V659.5H132L152.422 528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 53'
				d='M264 528H395.5V659.5H264V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 54'
				d='M396 528H527.5V659.5H396V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 55'
				d='M528 528H659.5V659.5H528V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 56'
				d='M660 528H791.5V659.5H660V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 57'
				d='M792 528H923.5V659.5H792V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 58'
				d='M924 528H1055.5V659.5H924V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 59'
				d='M1056 528H1187.5V659.5H1056V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 60'
				d='M1188 528H1319.5V659.5H1188V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 61'
				d='M1320 528H1451.5V659.5H1320V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 62'
				d='M1452 528H1583.5V659.5H1452V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 63'
				d='M1584 528H1715.5V659.5H1584V528Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 64'
				d='M153.5 396H263.5V527.5H153.5V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 65'
				d='M264 396H395.5V527.5H264V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 66'
				d='M396 396H527.5V527.5H396V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 67'
				d='M528 396H659.5V527.5H528V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 68'
				d='M660 396H791.5V527.5H660V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 69'
				d='M792 396H923.5V527.5H792V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 70'
				d='M924 396H1055.5V527.5H924V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 71'
				d='M1056 396H1187.5V527.5H1056V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 72'
				d='M1188 396H1319.5V527.5H1188V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 73'
				d='M1320 396H1451.5V527.5H1320V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 74'
				d='M1452 396H1583.5V527.5H1452V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 75'
				d='M1584 396H1715.5V527.5H1584V396Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 76'
				d='M173.411 264H263.5V395.5H154L173.411 264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 77'
				d='M264 264H395.5V395.5H264V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 78'
				d='M396 264H527.5V395.5H396V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 79'
				d='M528 264H659.5V395.5H528V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 80'
				d='M660 264H791.5V395.5H660V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 81'
				d='M792 264H923.5V395.5H792V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 82'
				d='M924 264H1055.5V395.5H924V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 83'
				d='M1056 264H1187.5V395.5H1056V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 84'
				d='M1188 264H1319.5V395.5H1188V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 85'
				d='M1320 264H1451.5V395.5H1320V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 86'
				d='M1452 264H1583.5V395.5H1452V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 87'
				d='M1584 264H1715.5V395.5H1584V264Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 88'
				d='M212.783 132H263.5V263.5H174L212.783 132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 89'
				d='M264 132H395.5V263.5H264V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 90'
				d='M396 132H527.5V263.5H396V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 91'
				d='M528 132H659.5V263.5H528V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 92'
				d='M660 132H791.5V263.5H660V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 93'
				d='M792 132H923.5V263.5H792V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 94'
				d='M924 132H1055.5V263.5H924V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 95'
				d='M1056 132H1187.5V263.5H1056V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 96'
				d='M1188 132H1319.5V263.5H1188V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 97'
				d='M1320 132H1451.5V263.5H1320V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 98'
				d='M1452 132H1583.5V263.5H1452V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 99'
				d='M1584 132H1715.5V263.5H1584V132Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 100'
				d='M301.755 0H395.5V131.5H212L253.886 58.7765L301.755 0Z'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 101' d='M396 0H527.5V131.5H396V0Z' fill='#D9D9D9' />
			<path id='Rectangle 102' d='M528 0H659.5V131.5H528V0Z' fill='#D9D9D9' />
			<path id='Rectangle 103' d='M660 0H791.5V131.5H660V0Z' fill='#D9D9D9' />
			<path id='Rectangle 104' d='M792 0H923.5V131.5H792V0Z' fill='#D9D9D9' />
			<path id='Rectangle 105' d='M924 0H1055.5V131.5H924V0Z' fill='#D9D9D9' />
			<path
				id='Rectangle 106'
				d='M1056 0H1187.5V131.5H1056V0Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 107'
				d='M1188 0H1319.5V131.5H1188V0Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 108'
				d='M1320 0H1451.5V131.5H1320V0Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 109'
				d='M1452 0H1583.5V131.5H1452V0Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 110'
				d='M1584 0H1715.5V131.5H1584V0Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
};

export default MayaboboSVG;
