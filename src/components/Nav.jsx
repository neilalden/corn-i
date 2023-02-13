import React, { useContext } from "react";
import { Context } from "../Context";
import { Screens } from "../utils/types";

function Nav() {
	const { screen, setScreen } = useContext(Context);
	const navigate = (screen) => {
		setScreen(screen);
	};
	return (
		<nav>
			<h1 className='title'>Corn Analysis</h1>
			<div className='flex-row nav-button-container'>
				<a onClick={() => navigate(Screens.Dashboard)}>
					<h3
						className={`nav-link ${
							screen === Screens.Dashboard ? "nav-link-active" : ""
						}`}>
						Pag mamapa at Pag tataya
					</h3>
				</a>
				<h3>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</h3>
				<a onClick={() => navigate(Screens.DataInput)}>
					<h3
						className={`nav-link ${
							screen === Screens.DataInput ? "nav-link-active" : ""
						}`}>
						Lingguhang Talaarawan
					</h3>
				</a>
			</div>
		</nav>
	);
}

export default Nav;
