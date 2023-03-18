import { WhereFilterOp } from "firebase/firestore";

export type whereQueryType = {
    arg1: string;
    arg2: WhereFilterOp;
    arg3: string | number | boolean;
}

export const Screens = {
    Dashboard: "Dashboard",
    DataInput: "DataInput",
    DataRecord: "DataRecord",
};
export const Maps = {
    BukalSur: "Bukal Sur",
    MalabananNorte: "Malabanan Norte",
    MalabananSur: "Malabanan Sur",
    MangilagNorte: "Mangilag Norte",
    MangilagSur: "Mangilag Sur",
    MasalukotI: "Masalukot I",
    MasalukotII: "Masalukot II",
    Mayabobo: "Mayabobo",
    PahingaNorte: "Pahinga Norte",
    SanAndres: "San Andres",
    StaCatalinaNorte: "Sta. Catalina Norte",
};

export const Category = {
    Disease: "Disease",
    Pest: "Pest",
    Nutrients: "Nutrients",
};

export const NutrientsParameter = {
    Nitrogen: "Nitrogen",
    Phosphorus: "Phosphorus",
    Potassium: "Potassium",
    pH: "pH",
    Temperature: "Temperature",
    Humidity: "Humidity",
    Rainfall: "Rainfall",
};
export const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];




export const BarScale = {
    Nitrogen: {
        high: "60-90",
        medium: "30-60",
        low: "0-30",
    },
    Phosphorus: {
        high: "25-30",
        medium: "20-25",
        low: "0-20",
    },
    Potassium: {
        high: "20-30",
        medium: "10-20",
        low: "0-10",
    },
    pH: {
        low: "0-3",
        medium: "3-6",
        high: "6-9",
    },
};
