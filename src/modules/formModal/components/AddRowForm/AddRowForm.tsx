import React from "react";
import {useDispatch} from "react-redux";
import { setOpenAddRowForm } from "@store/reducers/AddRowReducer"
import ButtonGreen from "@components/ButtonGreen";

function AddRowForm() {
    const dispatch = useDispatch()
    const setForm = () => {
        dispatch(setOpenAddRowForm(false))
    }
    const style = "rounded text-gray-light py-2 px-2"
    return <div className="max-w-7xl flex justify-between">
        <ButtonGreen style={style} click={setForm}>Add</ButtonGreen>
    </div>;
}

export default AddRowForm;