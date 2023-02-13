import React from "react";
import { Context } from "../Context";

export default function MasalukotISVG() {
	const { setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, setHeatMap, setHeatMapItems]);
	return (
		<svg
			ref={ref}
			width='1531'
			height='1284'
			viewBox='0 0 1531 1284'
			id='masalukot_II'
			className='mask'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<rect id='Rectangle 1' y='1029' width='221' height='221' fill='#D9D9D9' />
			<rect
				id='Rectangle 2'
				x='222'
				y='1029'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 3'
				x='444'
				y='1029'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 4'
				x='666'
				y='1029'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 5'
				d='M888 1029H1109V1283.5H984L888 1250V1029Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 6'
				x='1110'
				y='1029'
				width='221'
				height='255'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 7'
				x='1332'
				y='1029'
				width='199'
				height='255'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 8' d='M54 807H221V1028H0L54 807Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 9'
				x='222'
				y='807'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 10'
				x='444'
				y='807'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 11'
				x='666'
				y='807'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 12'
				x='888'
				y='807'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 13'
				x='1110'
				y='807'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 14'
				d='M1332 807H1477L1530.5 1028H1332V807Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 15'
				d='M109 585H330V806H54.5L109 585Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 16'
				x='331'
				y='585'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 17'
				x='553'
				y='585'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 18'
				x='775'
				y='585'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 19'
				x='997'
				y='585'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 20'
				d='M1219 585H1440L1473.5 806H1219V585Z'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 21'
				d='M152.5 363H331V584H110L152.5 363Z'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 22'
				x='332'
				y='363'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 23'
				x='554'
				y='363'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 24'
				x='776'
				y='363'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 25'
				x='998'
				y='363'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 26'
				x='1220'
				y='363'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<path id='Rectangle 27' d='M152 141H329V362H152V141Z' fill='#D9D9D9' />
			<rect
				id='Rectangle 28'
				x='330'
				y='141'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 29'
				x='552'
				y='141'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 30'
				x='774'
				y='141'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 31'
				x='996'
				y='141'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<rect
				id='Rectangle 32'
				x='1218'
				y='141'
				width='221'
				height='221'
				fill='#D9D9D9'
			/>
			<path
				id='Rectangle 33'
				d='M204 0H328V140H152V54.5L204 0Z'
				fill='#D9D9D9'
			/>
			<rect id='Rectangle 34' x='329' width='221' height='140' fill='#D9D9D9' />
			<rect id='Rectangle 35' x='551' width='221' height='140' fill='#D9D9D9' />
			<rect id='Rectangle 36' x='773' width='221' height='140' fill='#D9D9D9' />
			<rect id='Rectangle 37' x='995' width='221' height='140' fill='#D9D9D9' />
			<path
				id='Rectangle 38'
				d='M1217 0L1438 70.5V140H1217V0Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
}
