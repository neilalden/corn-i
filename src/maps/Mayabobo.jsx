import React from "react";
import { Images } from "../common/images";
import MayaboboSVG from "../svgs/MayaboboSVG";

const Mayabobo = () => {
	return (
		<div className='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_mayabobo})`,
					backgroundSize: "auto 100%",
				}}>
				<MayaboboSVG />
			</div>
		</div>
	);
};

export default Mayabobo;
