import React from "react";
import { Images } from "../common/images";
import MangilagSurSVG from "../svgs/MangilagSurSVG";

const MangilagSur = () => {
	return (
		<div className='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_mangilag_sur})`,
					backgroundSize: "auto 100%",
				}}>
				<MangilagSurSVG />
			</div>
		</div>
	);
};

export default MangilagSur;
