import React from "react";
import { Context } from "../Context";

const MalabananSurSVG = () => {
	const { map, setHeatMap, setHeatMapItems } = React.useContext(Context);
	const ref = React.useRef(null);
	React.useEffect(() => {
		setHeatMap(ref.current);
		setHeatMapItems(ref.current.children);
	}, [ref, map, setHeatMap, setHeatMapItems]);
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
			<path id="Rectangle 1" d="M57.302 588H588V1176H0V1029L9.06164 882H7L19.0863 735H18.5L57.302 588Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 1</textPath></text>
			</path>
			<path id="Rectangle 2" d="M588 588H1176V1144.5L1029 1136.93V1136.5H999.298L976.644 1098.65L932.846 1084.01L899.116 1109.25L882 1136.5V1137H735V1136.23H693.719L671.568 1176H588V588Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 2</textPath></text>
			</path >
			<path id="Rectangle 3" d="M1176 588V1146.84L1197.65 1158.42L1205.2 1169L1323 1152.38V1152.5L1470 1143.93V1141L1617 1104.68V1105H1911L1891.37 1029H1889L1862.79 882H1861L1829.17 735H1829L1795.48 588H1176Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 3</textPath></text>
			</path >
			<path id="Rectangle 4" d="M127.588 0H689V294H662V588H60.5L97.732 441H97V294H98.5L114.104 147H116L127.588 0Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 4</textPath></text>
			</path >
			<path id="Rectangle 5" d="M689 0L836 6.54452V6L983 11.0357V11.5L1130 18.0483V20L1277 34.1111V294H1250V588H662V294H689V0Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 5</textPath></text>
			</path >
			<path id="Rectangle 6" d="M1424 45.0982L1277 34V294H1250V588H1794L1763.2 441H1761L1733.61 294H1731L1703.33 147L1701 147L1687.9 49.0396L1571 45H1424V45.0982Z" fill="#D9D9D9">
				<text><textPath className="tooltiptext">Crop Group 6</textPath></text>
			</path >

		</svg >
	);
};

export default MalabananSurSVG;
