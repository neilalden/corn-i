import React from "react";
import { Images } from "../common/images";
import MasalukotIISVG from "../svgs/MasalukotIISVG";

const MasalukotII = () => {
	return (
		<div className='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_masalukot_II})`,
					backgroundSize: "auto 100%",
				}}>
				<MasalukotIISVG />
			</div>
		</div>
	);
};

export default MasalukotII;
