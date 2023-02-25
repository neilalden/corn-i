import React from "react";
import { Images } from "../common/images";
import MalabananNorteSVG from "../svgs/MalabananNorteSVG";

const MalabananNorte = () => {
	return (
		<div className='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_malabanan_norte})`,
					backgroundSize: "100% auto",
				}}>
				<MalabananNorteSVG />
			</div>
		</div>
	);
};

export default MalabananNorte;
