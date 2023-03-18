import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Images } from "../common/images";
import { Context } from "../Context";
import { Category, Maps, NutrientsParameter } from "../utils/types";

const Header = () => {
	const {
		map,
		setMap,
		category,
		setCategory,
		parameter,
		setParameter,
		dateFilterOptions,
		setDateFilterOptions,
		recordedDataDictionary,
		setRecordedData,
		heatMapItems
	} = useContext(Context);
	const [dateFilterString, setDateFilterString] = useState("")
	const changeMap = (e) => {
		setMap(e.target.value);
		setDateFilterOptions([]);
	};
	const changeDate = (e) => {
		// setMap(e.target.value);
		const filter = e.target.value
		setDateFilterString(filter);
		const collection = recordedDataDictionary[String(category + parameter + map)]
		const length = 8 * heatMapItems.length
		const array = [];
		let i = 0;
		while (i < collection.length && array.length < length) {
			const data = collection[i]
			const d = new Date(filter)
			if (data.date >= d.setDate(d.getDate() - 7)) {
				array.push(data)
			}
			i++
		}

		setRecordedData(array)

	};
	const changeCategory = (category) => {
		setCategory(category);
		if (category === Category.Nutrients)
			setParameter(NutrientsParameter.Nitrogen);
		else setParameter(undefined);
	};
	const changeParameter = (parameter) => {
		setParameter(parameter);
		setDateFilterOptions([])
	};
	return (
		<div className='flex-row justify-content-between' id="header">
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
				<h1>Salain ng Petsa</h1>
				<select id='dateSelect' onChange={changeDate} value={dateFilterString}>
					{
						dateFilterOptions && dateFilterOptions.map((date, index) => {
							return (<option key={index} value={date.value}>{date.key}</option>)
						})
					}
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
						// onClick={() => changeCategory(Category.Disease)}
						className='nav-image disabled'
					/>
					<img
						alt='icon'
						src={
							category === Category.Pest
								? Images.ic_pest_green_outline
								: Images.ic_pest_gray_fill
						}
						// onClick={() => changeCategory(Category.Pest)}
						className='nav-image disabled'
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
								parameter === NutrientsParameter.Nitrogen
									? Images.ic_nitrogen_green_outline
									: Images.ic_nitrogen_gray_fill
							}
							onClick={() => changeParameter(NutrientsParameter.Nitrogen)}
							className='nav-image'
						/>
						<img
							alt='icon'
							src={
								parameter === NutrientsParameter.Phosphorus
									? Images.ic_phosphorus_green_outline
									: Images.ic_phosphorus_gray_fill
							}
							onClick={() => changeParameter(NutrientsParameter.Phosphorus)}
							className='nav-image'
						/>
						<img
							alt='icon'
							src={
								parameter === NutrientsParameter.Potassium
									? Images.ic_potassium_green_outline
									: Images.ic_potassium_gray_fill
							}
							onClick={() => changeParameter(NutrientsParameter.Potassium)}
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
