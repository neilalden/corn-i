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
        4: "90",
        3: "60",
        2: "30",
        1: "0",
    },
    Phosphorus: {
        4: "30",
        3: "25",
        2: "20",
        1: "0"
    },
    Potassium: {
        4: "30",
        3: "20",
        2: "10",
        1: "0"
    },
    pH: {
        4: "9",
        3: "6",
        2: "3",
        1: "0"
    },
};
