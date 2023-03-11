import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { updateDocument } from "../service/firebase/firestore";

const TableCell = ({ data }) => {
    const { parameter, setRefetch } = useContext(Context)
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(data.value);
    const handleChange = (event) => {
        event.preventDefault();
        if (isNumber(event.target.value)) {
            alert("please enter a valid number");
            return;
        }
        setValue(event.target.value)
    }
    const handleSave = async () => {
        const result = await updateDocument(parameter, data.documentId, { value: Number(value) });
        if (result === undefined) {
            setRefetch(true)
            setEditMode(false)
        }
    }
    return (
        <td onDoubleClick={() => setEditMode(true)}>
            {
                editMode ?
                    <div>
                        <button style={buttonStyles} onClick={handleSave}><i className="bi bi-check-circle-fill" style={{ color: "forestgreen", }}></i></button>
                        <input type="number" value={value} style={textInputStyles} onChange={handleChange} />
                        <button style={buttonStyles} onClick={() => setEditMode(false)}><i className="bi bi-x-circle-fill" style={{ color: "crimson", }}></i></button>
                    </div> :
                    value
            }
        </td>
    )
}

const textInputStyles = {
    width: 70,
    textAlign: "center"
};
const buttonStyles = {
    background: "transparent",
    margin: "auto",
    width: 25,
    height: 25,
}

export const isNumber = (value) => {
    if (typeof value != "string" | typeof value != "number") return false
    return !isNaN(value) && !isNaN(parseFloat(value))
}

export default TableCell;