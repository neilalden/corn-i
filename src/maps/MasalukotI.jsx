import React from "react";
import { Images } from "../common/images";
import MasalukotISVG from "../svgs/MasalukotISVG";

const MasalukotI = () => {
	return (
		<div className='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_masalukot_I})`,
					backgroundSize: "auto 100%",
				}}>
				<MasalukotISVG />
			</div>
		</div>
	);
};

export default MasalukotI;
