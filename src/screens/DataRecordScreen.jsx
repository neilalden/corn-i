import React, { useState, useContext } from "react";
import { sortArrOfObj } from "../common/utils";
import Header from "../components/Header";
import { Context } from "../Context";

const DataRecordScreen = () => {
    const { recordedData, heatMapItems } = useContext(Context);
    const sorted = sortArrOfObj(recordedData, "date");
    const rows = getRows(sorted, heatMapItems?.length);
    return (
        <div>
            <Header />
            <main><table>
                <thead>
                    <tr>
                        <th>Date</th>
                        {
                            heatMapItems && Array.from(heatMapItems)?.map((_, i) => <th key={i}>{`Crop Group ${i + 1}`}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => {
                        return (
                            <tr key={i}>{
                                [row[0], ...row].map((_, i) => {
                                    if (i === 0) return (
                                        <td key={i}>
                                            {
                                                _.date.toLocaleDateString("en-US")
                                            }
                                        </td>)
                                    return (
                                        <td key={i}>
                                            {
                                                _.value
                                            }
                                        </td>)
                                })}</tr>
                        )
                    })}
                </tbody>
            </table></main>
        </div>
    );
};

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
