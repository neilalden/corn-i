import { Timestamp } from "firebase/firestore";
import { getDaysAfter, getDaysAgo } from "../common/utils";
import { NutrientsParameter } from "../utils/types";
const sample = {
	last3WeeksValue: 90,
	last2WeeksValue: 85,
	last1WeeksValue: 60,
	currentValue: 74,
};
const value = {
	date: Timestamp.fromDate(new Date()),
	value: 90,
	cropGroup: 1,
};

export const NitrogenValues = [
	90, 85, 60, 74, 78, 69, 69, 94, 89, 68, 91, 90, 78, 93, 94, 60, 85, 91, 77,
	88, 89, 76, 67, 83, 98, 66, 97, 97, 60, 84, 73, 92, 85, 98, 88, 95, 99, 95,
	60, 63, 62, 64, 83, 82, 85, 91, 76, 74, 79, 88, 60, 76, 93, 65, 95, 75, 74,
	91, 71, 99, 72, 83, 93, 70, 76, 99, 99, 86, 69, 91, 61, 67, 79, 78, 75, 97,
	67, 73, 77, 81, 68, 72, 61, 67, 67, 66, 82, 84, 81, 91, 93, 90, 81, 78, 60,
	88, 93, 60, 78, 65,
];

export const RECORDED_DATA = [
	{
		value: 90,
		parameter: NutrientsParameter.Nitrogen,
		date: getDaysAgo(3 * 7),
	},
	{
		value: 85,
		parameter: NutrientsParameter.Nitrogen,
		date: getDaysAgo(2 * 7),
	},
	{
		value: 60,
		parameter: NutrientsParameter.Nitrogen,
		date: getDaysAgo(1 * 7),
	},
	{
		value: 74,
		parameter: NutrientsParameter.Nitrogen,
		date: getDaysAgo(0 * 7),
	},
	{
		value: 42,
		parameter: NutrientsParameter.Phosporus,
		date: getDaysAgo(3 * 7),
	},
	{
		value: 58,
		parameter: NutrientsParameter.Phosporus,
		date: getDaysAgo(2 * 7),
	},
	{
		value: 55,
		parameter: NutrientsParameter.Phosporus,
		date: getDaysAgo(1 * 7),
	},
	{
		value: 35,
		parameter: NutrientsParameter.Phosporus,
		date: getDaysAgo(0 * 7),
	},
	{
		value: 43,
		parameter: NutrientsParameter.Potassium,
		date: getDaysAgo(3 * 7),
	},
	{
		value: 41,
		parameter: NutrientsParameter.Potassium,
		date: getDaysAgo(2 * 7),
	},
	{
		value: 44,
		parameter: NutrientsParameter.Potassium,
		date: getDaysAgo(1 * 7),
	},
	{
		value: 40,
		parameter: NutrientsParameter.Potassium,
		date: getDaysAgo(0 * 7),
	},
	{
		value: 20.879744,
		parameter: NutrientsParameter.Temperature,
		date: getDaysAgo(3 * 7),
	},
	{
		value: 21.770462,
		parameter: NutrientsParameter.Temperature,
		date: getDaysAgo(2 * 7),
	},
	{
		value: 23.004459,
		parameter: NutrientsParameter.Temperature,
		date: getDaysAgo(1 * 7),
	},
	{
		value: 26.491096,
		parameter: NutrientsParameter.Temperature,
		date: getDaysAgo(0 * 7),
	},
	{
		value: 6.502985,
		parameter: NutrientsParameter.pH,
		date: getDaysAgo(3 * 7),
	},
	{
		value: 7.038096,
		parameter: NutrientsParameter.pH,
		date: getDaysAgo(2 * 7),
	},
	{
		value: 7.840207,
		parameter: NutrientsParameter.pH,
		date: getDaysAgo(1 * 7),
	},
	{
		value: 6.980401,
		parameter: NutrientsParameter.pH,
		date: getDaysAgo(0 * 7),
	},
	{
		value: 202.935536,
		parameter: NutrientsParameter.Rainfall,
		date: getDaysAgo(3 * 7),
	},
	{
		value: 226.655537,
		parameter: NutrientsParameter.Rainfall,
		date: getDaysAgo(2 * 7),
	},
	{
		value: 263.964248,
		parameter: NutrientsParameter.Rainfall,
		date: getDaysAgo(1 * 7),
	},
	{
		value: 242.864034,
		parameter: NutrientsParameter.Rainfall,
		date: getDaysAgo(0 * 7),
	},
];
export const PREDICTED_DATA = [
	{
		value: 78,
		parameter: NutrientsParameter.Nitrogen,
		date: getDaysAfter(1 * 7),
	},
	{
		value: 69,
		parameter: NutrientsParameter.Nitrogen,
		date: getDaysAfter(2 * 7),
	},
	{
		value: 69,
		parameter: NutrientsParameter.Nitrogen,
		date: getDaysAfter(3 * 7),
	},
	{
		value: 94,
		parameter: NutrientsParameter.Nitrogen,
		date: getDaysAfter(4 * 7),
	},
	{
		value: 42,
		parameter: NutrientsParameter.Phosporus,
		date: getDaysAfter(1 * 7),
	},
	{
		value: 37,
		parameter: NutrientsParameter.Phosporus,
		date: getDaysAfter(2 * 7),
	},
	{
		value: 55,
		parameter: NutrientsParameter.Phosporus,
		date: getDaysAfter(3 * 7),
	},
	{
		value: 53,
		parameter: NutrientsParameter.Phosporus,
		date: getDaysAfter(4 * 7),
	},
	{
		value: 42,
		parameter: NutrientsParameter.Potassium,
		date: getDaysAfter(1 * 7),
	},
	{
		value: 42,
		parameter: NutrientsParameter.Potassium,
		date: getDaysAfter(2 * 7),
	},
	{
		value: 38,
		parameter: NutrientsParameter.Potassium,
		date: getDaysAfter(3 * 7),
	},
	{
		value: 40,
		parameter: NutrientsParameter.Potassium,
		date: getDaysAfter(4 * 7),
	},
	{
		value: 20.130175,
		parameter: NutrientsParameter.Temperature,
		date: getDaysAfter(1 * 7),
	},
	{
		value: 23.058049,
		parameter: NutrientsParameter.Temperature,
		date: getDaysAfter(2 * 7),
	},
	{
		value: 22.708838,
		parameter: NutrientsParameter.Temperature,
		date: getDaysAfter(3 * 7),
	},
	{
		value: 20.277744,
		parameter: NutrientsParameter.Temperature,
		date: getDaysAfter(4 * 7),
	},
	{
		value: 7.628473,
		parameter: NutrientsParameter.pH,
		date: getDaysAfter(1 * 7),
	},
	{
		value: 7.073454,
		parameter: NutrientsParameter.pH,
		date: getDaysAfter(2 * 7),
	},
	{
		value: 5.700806,
		parameter: NutrientsParameter.pH,
		date: getDaysAfter(3 * 7),
	},
	{
		value: 5.718627,
		parameter: NutrientsParameter.pH,
		date: getDaysAfter(4 * 7),
	},
	{
		value: 262.71734,
		parameter: NutrientsParameter.Rainfall,
		date: getDaysAfter(1 * 7),
	},
	{
		value: 251.055,
		parameter: NutrientsParameter.Rainfall,
		date: getDaysAfter(2 * 7),
	},
	{
		value: 271.32486,
		parameter: NutrientsParameter.Rainfall,
		date: getDaysAfter(3 * 7),
	},
	{
		value: 241.974195,
		parameter: NutrientsParameter.Rainfall,
		date: getDaysAfter(4 * 7),
	},
];
