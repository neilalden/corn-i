import React from "react";
import { Images } from "../common/images";
import MalabananSurSVG from "../svgs/MalabananSurSVG";

const MalabananSur = () => {
	return (
		<div id='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_malabanan_sur})`,
					backgroundSize: "100% auto",
				}}>
				<MalabananSurSVG />
			</div>
		</div>
	);
};

export default MalabananSur;
