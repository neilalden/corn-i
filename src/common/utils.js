import { NitrogenParameter } from "../assets/objects/Nitrogen";
import { pHParameter } from "../assets/objects/pH";
import { PhosphorusParameter } from "../assets/objects/Phosphorus";
import { PotassiumParameter } from "../assets/objects/Potassium";
import { TemperatureParameter } from "../assets/objects/Temperature";
import { NutrientsParameter } from "../utils/types";
import { COLOR } from "./colors";

export const getDaysAgo = (days, d) => {
	const date = d ? new Date(d) : new Date();
	date.setDate(date.getDate() - days);
	return date;
};
export const getDaysAfter = (days, d) => {
	const date = d ? new Date(d) : new Date();
	date.setDate(date.getDate() + days);
	return date;
};
export const isDateGreater = (current, comapring) => {
	try {
		let date1 = new Date(current).getTime();
		let date2 = new Date(comapring).getTime();

		if (date1 > date2) {
			return true;
		}
		return false;
	} catch (e) {
		console.error(e);
	}
};

export const isDateLesser = (current, comapring) => {
	let date1 = new Date(current).getTime();
	let date2 = new Date(comapring).getTime();

	if (date1 < date2) {
		return true;
	}
	return false;
};

export const isString = (string) => {
	if (typeof string === "string" || string instanceof String) return true;
	return false;
};

export const objectKeyHasValue = (obj, key) => {
	if (obj[key] !== undefined) return true;
	return false;
};

export const sortArrOfObj = (arr, value, order = "desc") => {
	if (value === "date" || value === "Date") {
		return arr.sort((a, b) => {
			return order === "desc"
				? new Date(a[value]) - new Date(b[value])
				: new Date(b[value]) - new Date(a[value]);
		});
	}
	return arr.sort((a, b) => {
		return order === "desc" ? a[value] - b[value] : b[value] - a[value];
	});
};

export const findAreaColor = (parameter, value) => {
	let parameterObj;
	if (parameter === NutrientsParameter.Temperature) {
		parameterObj = TemperatureParameter;
	} else if (parameter === NutrientsParameter.pH) {
		parameterObj = pHParameter;
	} else if (parameter === NutrientsParameter.Nitrogen) {
		parameterObj = NitrogenParameter;
	} else if (parameter === NutrientsParameter.Phosphorus) {
		parameterObj = PhosphorusParameter;
	} else {
		parameterObj = PotassiumParameter;
	}
	let color = "";
	for (
		let i = 0, j = 0;
		i <= parameterObj.maxValue;
		i = parseFloat((i + parameterObj.interval).toFixed(3)), j += 1
	) {
		// this logic is up for debate, i may be confused
		if (i >= parameterObj.maxValue) j -= 1;
		// if (i <= parameterObj.lowValue) j = 0;
		if (i <= value) {
			color = COLOR[j];
		}
	}
	return color;
};

export const predictParam = async (input) => {
	const data = await fetch("http://neilalden.pythonanywhere.com/forecast/ph", {
		mode: "no-cors",
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(input),
	});
	return await data?.json();
};

export const csvJSON = (csv) => {
	var lines = csv.split("\n");

	var result = [];

	var headers = lines[0].split(",");

	for (var i = 1; i < lines.length; i++) {
		var obj = {};
		var currentline = lines[i].split(",");

		for (var j = 0; j < headers.length; j++) {
			obj[headers[j]] = currentline[j];
		}

		result.push(obj);
	}

	//return result; //JavaScript object
	return JSON.stringify(result); //JSON
};
export const isCSV = (file) => {
	const filename = file.name;
	const stringArray = filename.split(".");
	if (stringArray.length === 0) return null;
	const fileType = stringArray[stringArray?.length - 1];
	return fileType === "csv";
};
// add data manually
// const x = [
// ]
// let l = 3;
// let g = 1;
// const arr = x.map(i => {
// 	const data = {
// 		value: i,
// 		date: Timestamp.fromDate(getDaysAgo(l * 7)),
// 		cropGroup: g
// 	};
// 	if (l == 0) {
// 		l = 3
// 		g += 1
// 	} else {
// 		l--
// 	}
// 	createData(parameter, data)
// })
