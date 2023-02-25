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
			<path id="Rectangle 1" fillRule="evenodd" clipRule="evenodd" d="M0 779H343V940H341.947V1101.95L327.864 1115.03L181 1120.06V1120H133.741L95.0265 1100.89L7.54178 1098.88L23.6309 1022.96L7.54178 986.759L0.0705339 939.942H0V779ZM182 940V939.942H159.999L181 940H182Z" fill="#D9D9D9" />
			<path id="Rectangle 2" d="M343 779H665V940H663.932V1106.97L630.237 1118.03L581.957 1126.08L559.326 1103.45L503 1100.93V940H502.938V1100.94L496.903 1108.99L478.798 1111L466.224 1123.57H441.581V1111H420.96L414.422 1100.94H342V940H343V779Z" fill="#D9D9D9" />
			<path id="Rectangle 3" d="M665 779H987V940H986V1101H919.084L891.916 1059.24L825 1043.64V940H824.98V1043.13L735.938 1055.2L719.84 1100.98L664 1107.52V940H665V779Z" fill="#D9D9D9" />
			<path id="Rectangle 4" d="M987 779H1309V940H1307.97V1108.51L1262.19 1112.03L1147 1100.97V1101H986V940H987V779Z" fill="#D9D9D9" />
			<path id="Rectangle 5" d="M1309 779H1631V940H1629.93L1632.95 1009.9L1614.34 1060.7L1560.03 1100.93L1515.27 1122.56L1481.57 1119.04L1469 1100.93V940H1468.94V1100.94L1402.55 1119.05L1329.12 1121.06L1308 1111V940H1309V779Z" fill="#D9D9D9" />
			<path id="Rectangle 6" d="M48.7105 457H344V618H343V779H182V778.942H0L12.5736 618H183V617.976H14L48.7105 457Z" fill="#D9D9D9" />
			<path id="Rectangle 7" d="M344 457H666V618H665V779H343V618H344V457Z" fill="#D9D9D9" />
			<path id="Rectangle 8" d="M666 457H988V618H987V779H665V618H666V457Z" fill="#D9D9D9" />
			<path id="Rectangle 9" d="M988 457H1310V618H1309V779H987V618H988V457Z" fill="#D9D9D9" />
			<path id="Rectangle 10" d="M1310 457H1632V618H1631V779H1309V618H1310V457Z" fill="#D9D9D9" />
			<path id="Rectangle 11" d="M59.5 135H344V457H183.406V457.731H52L83.682 296.806H82.254L59.5 231.072V135Z" fill="#D9D9D9" />
			<path id="Rectangle 12" d="M344 135H666V457H344V135Z" fill="#D9D9D9" />
			<path id="Rectangle 13" d="M666 135H988V457H666V135Z" fill="#D9D9D9" />
			<path id="Rectangle 14" d="M988 135H1310V457H988V135Z" fill="#D9D9D9" />
			<path id="Rectangle 15" d="M1310 135H1632V457H1310V135Z" fill="#D9D9D9" />
			<path id="Rectangle 16" d="M345.845 15H184V15.5H133.605L97.3065 32.1367L60 71.4598V134.982H184V135.372H345.845V15Z" fill="#D9D9D9" />
			<path id="Rectangle 17" d="M345 15V135.372H667.845V15H345Z" fill="#D9D9D9" />
			<path id="Rectangle 18" d="M667 15V135.372H989.845V15H667Z" fill="#D9D9D9" />
			<path id="Rectangle 19" d="M1150.84 134.919V135.372H989V15H1150.84V15.1028H1264.28L1278.88 2.01371L1311.1 0V134.919H1150.84Z" fill="#D9D9D9" />
			<path id="Rectangle 20" d="M1351.78 0.5H1311V134.917H1472V135.353H1633.92L1614.69 21L1535.75 29.0958L1472.1 21.0126V19.6305L1376.95 11.5756L1351.78 0.5Z" fill="#D9D9D9" />

		</svg>
	);
};

export default MangilagSurSVG;
