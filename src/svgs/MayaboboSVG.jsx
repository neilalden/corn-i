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
			<path id="Rectangle 1" d="M25.9508 924H263.5V1187.5H0V1055.75L9.98106 989.875L25.9508 924Z" fill="#D9D9D9" />
			<path id="Rectangle 2" d="M264 924H527.5V1187.5H264V924Z" fill="#D9D9D9" />
			<path id="Rectangle 3" d="M528 924H791.5V1187.5H528V924Z" fill="#D9D9D9" />
			<path id="Rectangle 4" d="M792 924H1055.5V1187.5H792V924Z" fill="#D9D9D9" />
			<path id="Rectangle 5" d="M1056 924H1319.5V1187.5H1056V924Z" fill="#D9D9D9" />
			<path id="Rectangle 6" d="M1320 924H1583.5V1187.5H1320V924Z" fill="#D9D9D9" />
			<path id="Rectangle 7" d="M1715.75 924H1584V1187.5H1715.75V924Z" fill="#D9D9D9" />
			<path id="Rectangle 8" d="M263.767 660H131.866L74.9091 791.75L27 923.5H263.551V791.75H263.767V660Z" fill="#D9D9D9" />
			<path id="Rectangle 9" d="M264 660H527.5V923.5H264V660Z" fill="#D9D9D9" />
			<path id="Rectangle 10" d="M528 660H791.5V923.5H528V660Z" fill="#D9D9D9" />
			<path id="Rectangle 11" d="M792 660H1055.5V923.5H792V660Z" fill="#D9D9D9" />
			<path id="Rectangle 12" d="M1056 660H1319.5V923.5H1056V660Z" fill="#D9D9D9" />
			<path id="Rectangle 13" d="M1320 660H1583.5V923.5H1320V660Z" fill="#D9D9D9" />
			<path id="Rectangle 14" d="M1715.75 660H1584V923.5H1715.75V660Z" fill="#D9D9D9" />
			<path id="Rectangle 15" d="M154.457 396H395.5V659.5H132L154.457 527.75V396Z" fill="#D9D9D9" />
			<path id="Rectangle 16" d="M396 396H659.5V659.5H396V396Z" fill="#D9D9D9" />
			<path id="Rectangle 17" d="M660 396H923.5V659.5H660V396Z" fill="#D9D9D9" />
			<path id="Rectangle 18" d="M924 396H1187.5V659.5H924V396Z" fill="#D9D9D9" />
			<path id="Rectangle 19" d="M1188 396H1451.5V659.5H1188V396Z" fill="#D9D9D9" />
			<path id="Rectangle 20" d="M1452 396H1715.5V659.5H1452V396Z" fill="#D9D9D9" />
			<path id="Rectangle 21" d="M213.819 132H395.544V395.5H155L174.448 263.75H174.962L213.819 132Z" fill="#D9D9D9" />
			<path id="Rectangle 22" d="M396 132H659.5V395.5H396V132Z" fill="#D9D9D9" />
			<path id="Rectangle 23" d="M660 132H923.5V395.5H660V132Z" fill="#D9D9D9" />
			<path id="Rectangle 24" d="M924 132H1187.5V395.5H924V132Z" fill="#D9D9D9" />
			<path id="Rectangle 25" d="M1188 132H1451.5V395.5H1188V132Z" fill="#D9D9D9" />
			<path id="Rectangle 26" d="M1452 132H1715.5V395.5H1452V132Z" fill="#D9D9D9" />
			<path id="Rectangle 27" d="M301.765 0H395.509V131.5H214.5L253.895 58.7765L301.765 0Z" fill="#D9D9D9" />
			<path id="Rectangle 28" d="M396 0V131.5H659V0H396Z" fill="#D9D9D9" />
			<path id="Rectangle 29" d="M660 0V131.5H923V0H660Z" fill="#D9D9D9" />
			<path id="Rectangle 30" d="M924 0V131.5H1187V0H924Z" fill="#D9D9D9" />
			<path id="Rectangle 31" d="M1188 0V131.5H1451V0H1188Z" fill="#D9D9D9" />
			<path id="Rectangle 32" d="M1452 0V131.5H1715V0H1452Z" fill="#D9D9D9" />
		</svg>
	);
};

export default MayaboboSVG;
