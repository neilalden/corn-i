import React from "react";
import { Images } from "../common/images";
import MangilagNorteSVG from "../svgs/MangilagNorteSVG";

const MangilagNorte = () => {
	return (
		<div className='border-box'>
			<div
				id='maskContainer'
				style={{
					backgroundImage: `url(${Images.map_mangilag_norte})`,
					backgroundSize: "auto 100%",
				}}>
				<MangilagNorteSVG />
			</div>
		</div>
	);
};

export default MangilagNorte;
