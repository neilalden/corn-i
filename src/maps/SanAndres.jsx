import React from "react";
import { Images } from "../common/images";
import SanAndresSVG from "../svgs/SanAndresSVG";

const SanAndres = () => {
	return (
		<div className='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_san_andres})`,
					backgroundSize: "auto 100%",
				}}>
				<SanAndresSVG />
			</div>
		</div>
	);
};

export default SanAndres;
