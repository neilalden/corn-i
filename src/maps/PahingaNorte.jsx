import React from "react";
import { Images } from "../common/images";
import PahingaNorteSVG from "../svgs/PahingaNorteSVG";
const PahingaNorte = () => {
	return (
		<div id='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_pahinga_norte})`,
					backgroundSize: "auto 100%",
				}}>
				<PahingaNorteSVG />
			</div>
		</div>
	);
};

export default PahingaNorte;
