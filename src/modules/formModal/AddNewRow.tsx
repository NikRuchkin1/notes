import React from "react";
import {useSelector} from "react-redux";
import { selectFormState } from "@store/reducers/AddRowReducer";
import AddRowForm from "./components/AddRowForm";

function AddNewForm() {
    const isOpenAddRowForm = useSelector(selectFormState)

    return (
        <div>
        {isOpenAddRowForm.openAddRowForm && <AddRowForm/>}
        </div>
    );
}

export default AddNewForm;