import React, { useState, useContext } from "react";
import { sortArrOfObj } from "../common/utils";
import Header from "../components/Header";
import TableCell from "../components/TableCell";
import { Context } from "../Context";
import { deleteMultiple } from "../service/firebase/firestore";

const DataRecordScreen = () => {
    const [asc, setAsc] = useState(false)
    const { parameter, recordedData, heatMapItems, setRefetch } = useContext(Context);
    const sorted = sortArrOfObj(recordedData, "date", asc ? "asc" : "desc");
    const rows = getRows(sorted, heatMapItems?.length);
    const handleDeleteRow = async (event, str) => {
        event.preventDefault();
        const condition = { arg1: "dateString", arg2: "==", arg3: str }
        const value = await deleteMultiple(parameter, condition);
        if (value === undefined) setRefetch(true);
    }
    return (
        <div>
            <Header />
            <main><table>
                <thead>
                    <tr>
                        <th style={{
                            cursor: "pointer"
                        }} onClick={() => setAsc(prev => !prev)}>Date {asc ? "▲" : "▼"}</th>
                        {
                            heatMapItems && Array.from([...heatMapItems, "Delete"])?.map((_, i) => i === heatMapItems.length ? <th key={i}>{`Delete`}</th> : <th key={i}>{`Crop Group ${i + 1}`}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => {
                        return (
                            <tr key={idx} className={row[0].isPrediction ? "predicted-row" : ""}>{
                                [row[0], ...row, 1].map((data, i) => {
                                    if (i === 0) {
                                        return (<td key={i} >{data.dateString}</td>)
                                    }
                                    else if (i === rows[idx].length + 1
                                        // && !!!rows[idx][0].isPrediction
                                    ) {
                                        return (
                                            <td key={i} >
                                                <button style={buttonStyles} onClick={(event) => handleDeleteRow(event, row[0].dateString)}><i className="bi bi-trash-fill" style={{ color: "crimson" }}></i></button>
                                            </td>)
                                    } else {
                                        return (<TableCell data={data} key={i} />)
                                    }
                                })}</tr>
                        )
                    })}
                </tbody>
            </table></main>
        </div>
    );
};
const buttonStyles = {
    background: "transparent",
    margin: "auto",
    width: 25,
    height: 25,
}
const getUniqueDates = (array) => {
    const result = []
    const set = new Set();
    for (const item of array) {
        if (!set.has(item.date)) { set.add(item.date); result.push(item.date) }
    }
    return result;
}

const getRows = (array, columns) => {
    const result = [];
    let temp = [];
    for (let i = 0; i < array?.length; i++) {
        if (temp.length < columns - 1) temp.push(array[i])
        else {
            temp.push(array[i])
            result.push(sortArrOfObj(temp, "cropGroup"))
            temp = []
        }
    }
    return result;
}

export default DataRecordScreen;
