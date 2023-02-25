import React, { useContext } from "react";
import { Images } from "../common/images";
import { Context } from "../Context";
import { Category, Maps, NutrientsParameter } from "../utils/types";

const Header = () => {
	const { map, setMap, category, setCategory, parameter, setParameter } =
		useContext(Context);
	const changeMap = (e) => {
		setMap(e.target.value);
	};
	const changeCategory = (category) => {
		setCategory(category);
		if (category === Category.Nutrients)
			setParameter(NutrientsParameter.pH);
		else setParameter(undefined);
	};
	const changeParameter = (parameter) => {
		setParameter(parameter);
	};
	return (
		<div className='flex-row justify-content-between'>
			<div>
				<h1>Baranggay</h1>
				<select id='mapSelect' onChange={changeMap} value={map}>
					<option value={Maps.BukalSur}>{Maps.BukalSur}</option>
					<option value={Maps.MalabananNorte}>{Maps.MalabananNorte}</option>
					<option value={Maps.MalabananSur}>{Maps.MalabananSur}</option>
					<option value={Maps.MangilagNorte}>{Maps.MangilagNorte}</option>
					<option value={Maps.MangilagSur}>{Maps.MangilagSur}</option>
					<option value={Maps.MasalukotI}>{Maps.MasalukotI}</option>
					<option value={Maps.MasalukotII}>{Maps.MasalukotII}</option>
					<option value={Maps.Mayabobo}>{Maps.Mayabobo}</option>
					<option value={Maps.PahingaNorte}>{Maps.PahingaNorte}</option>
					<option value={Maps.SanAndres}>{Maps.SanAndres}</option>
					<option value={Maps.StaCatalinaNorte}>{Maps.StaCatalinaNorte}</option>
				</select>
			</div>
			<div>
				<h1>Kategorya</h1>
				<div className='flex-row'>
					<img
						alt='icon'
						src={
							category === Category.Disease
								? Images.ic_disease_green_outline
								: Images.ic_disease_gray_fill
						}
						onClick={() => changeCategory(Category.Disease)}
						className='nav-image'
					/>
					<img
						alt='icon'
						src={
							category === Category.Pest
								? Images.ic_pest_green_outline
								: Images.ic_pest_gray_fill
						}
						onClick={() => changeCategory(Category.Pest)}
						className='nav-image'
					/>
					<img
						alt='icon'
						src={
							category === Category.Nutrients
								? Images.ic_nutrients_green_outline
								: Images.ic_nutrients_gray_fill
						}
						onClick={() => changeCategory(Category.Nutrients)}
						className='nav-image'
					/>
				</div>
			</div>
			<div>
				<h1>Parameter</h1>
				{category === Category.Nutrients ? (
					<React.Fragment>
						<img
							alt='icon'
							src={
								parameter === NutrientsParameter.Temperature
									? Images.ic_temperature_green_outline
									: Images.ic_temperature_gray_fill
							}
							onClick={() => changeParameter(NutrientsParameter.Temperature)}
							className='nav-image'
						/>
						<img
							alt='icon'
							src={
								parameter === NutrientsParameter.Humidity
									? Images.ic_humidity_green_outline
									: Images.ic_humidity_gray_fill
							}
							onClick={() => changeParameter(NutrientsParameter.Humidity)}
							className='nav-image'
						/>
						<img
							alt='icon'
							src={
								parameter === NutrientsParameter.Rainfall
									? Images.ic_rainfall_green_outline
									: Images.ic_rainfall_gray_fill
							}
							onClick={() => changeParameter(NutrientsParameter.Rainfall)}
							className='nav-image'
						/>
						<img
							alt='icon'
							src={
								parameter === NutrientsParameter.pH
									? Images.ic_ph_green_outline
									: Images.ic_ph_gray_fill
							}
							onClick={() => changeParameter(NutrientsParameter.pH)}
							className='nav-image'
						/>
					</React.Fragment>
				) : undefined}
			</div>
		</div>
	);
};

export default Header;
