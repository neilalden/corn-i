import React from "react";
import { Images } from "../common/images";
import BukalSurSVG from "../svgs/BukalSurSVG";

const MasalukotI = () => {
	return (
		<div id='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_bukal_sur})`,
					backgroundSize: "100% auto",
				}}>
				<BukalSurSVG />
			</div>
		</div>
	);
};

export default MasalukotI;
