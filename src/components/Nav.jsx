import React, { useContext } from "react";
import { Images } from "../common/images";
import { Context } from "../Context";
import { Screens } from "../utils/types";

function Nav() {
	const { screen, setScreen } = useContext(Context);
	const navigate = (screen) => {
		setScreen(screen);
	};
	return (
		<div className="flex-row justify-content-between" id="nav">
			<nav>
				<h1 className='title'>Corn Analysis</h1>
				<div className='flex-row nav-button-container'>
					<a onClick={() => navigate(Screens.Dashboard)}>
						<h3
							className={`nav-link ${screen === Screens.Dashboard ? "nav-link-active" : ""
								}`}>
							Pag mamapa at Pag tataya
						</h3>
					</a>
					<h3>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</h3>
					<a onClick={() => navigate(Screens.DataRecord)}>
						<h3
							className={`nav-link ${screen === Screens.DataRecord ? "nav-link-active" : ""
								}`}>
							Lingguhang Talaarawan
						</h3>
					</a>
					<h3>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</h3>
					<a onClick={() => navigate(Screens.DataInput)}>
						<h3
							className={`nav-link ${screen === Screens.DataInput ? "nav-link-active" : ""
								}`}>
							Mag-upload Ng Data
						</h3>
					</a>
				</div>
			</nav>
			<div>
				<img src={Images.ic_logo} alt="Corn-i logo" className="logo" />
			</div>
		</div>
	);
}

export default Nav;
