import { pHParameter } from "../assets/objects/pH";
import { TemperatureParameter } from "../assets/objects/Temperature";
import { NutrientsParameter } from "../utils/types";
import { COLOR } from "./colors";

export const getDaysAgo = (days) => {
	const date = new Date();
	date.setDate(date.getDate() - days);
	return date;
};
export const getDaysAfter = (days) => {
	const date = new Date();
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

export const objectKeyHasValue = (obj, key) =>{
	if(obj[key] !== undefined) return true
	return false
}

export const sortArrOfObj = (arr, value)=>{
return arr.sort((a, b)=> {
  return a[value] - b[value]
});
}


export const findAreaColor = (
	parameter,
	value, 
  ) => {
	  let parameterObj;
	if(parameter === NutrientsParameter.Temperature){
		parameterObj = TemperatureParameter
	}else if(parameter === NutrientsParameter.pH){
		parameterObj = pHParameter
	}else{
		parameterObj = pHParameter

	}
	let color = ""
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
	return(color);
  };

export const predictParam = async (input) => {
	const data = await fetch(
		"http://neilalden.pythonanywhere.com/forecast/ph",
		{
			mode: "no-cors",
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(input),
		},
	);
	return await data?.json();
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
// console.log(arr)