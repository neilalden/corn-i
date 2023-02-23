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
			width='582'
			height='1376'
			viewBox='0 0 582 1376'
			fill='none'
			id='masalukot_I'
			className='mask'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				id='crop 1'
				d='M259.833 0H339L323.167 81H244L259.833 0Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 2'
				d='M340.833 0H420L404.167 81H325L340.833 0Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 3'
				d='M421.833 0H501L485.167 81H406L421.833 0Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 4'
				d='M502.833 0H582L566.167 81H487L502.833 0Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 5'
				d='M243.833 82H323L307.167 163H228L243.833 82Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 6'
				d='M324.833 82H404L388.167 163H309L324.833 82Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 7'
				d='M405.833 82H485L469.167 163H390L405.833 82Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 8'
				d='M486.833 82H566L550.167 163H471L486.833 82Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 9'
				d='M228.833 165H308L292.167 246H213L228.833 165Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 10'
				d='M309.833 165H389L373.167 246H294L309.833 165Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 11'
				d='M390.833 165H470L454.167 246H375L390.833 165Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 12'
				d='M471.833 165H551L535.167 246H456L471.833 165Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 13'
				d='M212.833 248H292L276.167 329H197L212.833 248Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 14'
				d='M293.833 248H373L357.167 329H278L293.833 248Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 15'
				d='M374.833 248H454L438.167 329H359L374.833 248Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 16'
				d='M455.833 248H535L519.167 329H440L455.833 248Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 17'
				d='M197.5 331H283L267.167 412H188L197.5 331Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 18'
				d='M284.833 331H364L348.167 412H269L284.833 331Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 19'
				d='M365.833 331H445L429.167 412H350L365.833 331Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 20'
				d='M446.833 331H520L510.167 412H431L446.833 331Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 21'
				d='M188.833 414H268L252.167 495H173L188.833 414Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 22'
				d='M269.833 414H349L333.167 495H254L269.833 414Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 23'
				d='M350.833 414H430L414.167 495H335L350.833 414Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 24'
				d='M431.833 414H511L495.167 495H416L431.833 414Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 25'
				d='M172.833 497H252L236.167 578H157L172.833 497Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 26'
				d='M253.833 497H333L317.167 578H238L253.833 497Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 27'
				d='M334.833 497H414L398.167 578H319L334.833 497Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 28'
				d='M415.833 497H495L479.167 578H400L415.833 497Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 29'
				d='M156.833 580H236L220.167 661H141L156.833 580Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 30'
				d='M237.833 580H317L301.167 661H222L237.833 580Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 31'
				d='M318.833 580H398L382.167 661H303L318.833 580Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 32'
				d='M399.833 580H479L463.167 661H384L399.833 580Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 33'
				d='M139.833 663H219L203.167 744H124L139.833 663Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 34'
				d='M220.833 663H300L284.167 744H205L220.833 663Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 35'
				d='M301.833 663H381L365.167 744H286L301.833 663Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 36'
				d='M382.833 663H462L446.167 744H367L382.833 663Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 37'
				d='M122.833 746H202L186.167 827H107L122.833 746Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 38'
				d='M203.833 746H283L267.167 827H188L203.833 746Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 39'
				d='M284.833 746H364L348.167 827H269L284.833 746Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 40'
				d='M365.833 746H445L429.167 827H350L365.833 746Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 41'
				d='M104.833 829H184L168.167 910H89L104.833 829Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 42'
				d='M185.833 829H265L249.167 910H170L185.833 829Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 43'
				d='M267.833 829H347L331.167 910H252L267.833 829Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 44'
				d='M348.833 829H428L412.167 910H333L348.833 829Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 45'
				d='M85.8333 912H165L149.167 993H70L85.8333 912Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 46'
				d='M166.833 912H246L230.167 993H151L166.833 912Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 47'
				d='M248.833 912H328L312.167 993H233L248.833 912Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 48'
				d='M329.833 912H409L393.167 993H314L329.833 912Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 49'
				d='M68.8333 995H148L132.167 1076H53L68.8333 995Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 50'
				d='M149.833 995H229L213.167 1076H134L149.833 995Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 51'
				d='M231.833 995H311L295.167 1076H216L231.833 995Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 52'
				d='M312.833 995H392L376.167 1076H297L312.833 995Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 53'
				d='M52.8333 1078H132L116.167 1159H37L52.8333 1078Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 54'
				d='M133.833 1078H213L197.167 1159H118L133.833 1078Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 55'
				d='M215.833 1078H295L279.167 1159H200L215.833 1078Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 56'
				d='M296.833 1078H376L360.167 1159H281L296.833 1078Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 57'
				d='M33.8333 1161H113L97.1667 1242H18L33.8333 1161Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 58'
				d='M114.833 1161H194L178.167 1242H99L114.833 1161Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 59'
				d='M196.833 1161H276L260.167 1242H181L196.833 1161Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 60'
				d='M277.833 1161H357L341.167 1242H262L277.833 1161Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 61'
				d='M15.8333 1244H95L68 1376L20.5 1367.5L0 1325L15.8333 1244Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 62'
				d='M96.8333 1244H176L157 1335L116.5 1355L70 1374.5L96.8333 1244Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 63'
				d='M178.833 1244H258L242.167 1325L159.5 1333.5L178.833 1244Z'
				fill='#D9D9D9'
			/>
			<path
				id='crop 64'
				d='M259.833 1244H339L319.5 1290.5L274 1314.5L244 1325L259.833 1244Z'
				fill='#D9D9D9'
			/>
		</svg>
	);
}