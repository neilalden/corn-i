import React from "react";
import { Images } from "../common/images";
import StaCatalinaNorteSVG from "../svgs/StaCatalinaNorteSVG";

const StaCatalinaNorte = () => {
	return (
		<div className='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_sta_catalina_norte})`,
					backgroundSize: "100%",
				}}>
				<StaCatalinaNorteSVG />
			</div>
		</div>
	);
};

export default StaCatalinaNorte;
