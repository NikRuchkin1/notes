import { createSlice } from '@reduxjs/toolkit'
import {FormState, FormReducer } from './type'

const initialState: FormState = {
    dataTable: [],
    openAddRowForm: false,
}

export const AddRowReducer = createSlice({
    name: 'AddRowSlice',
    initialState,
    reducers: {
        setValueOfRow: (state, action) => {
            state.dataTable = [{
                'thing': action.payload.thing,
                'bath': action.payload.bath,
                'rub': '0',
                'cad': '0',
                'usa': '0',
            }, ...state.dataTable]
        },
        setOpenAddRowForm: (state, action) => {
            state.openAddRowForm = action.payload
        },
        deleteRowDataOfTable: (state, action) => {
            state.dataTable.splice(action.payload, 1)
        },
    },
})

export const { setValueOfRow, setOpenAddRowForm, deleteRowDataOfTable } = AddRowReducer.actions
export const selectFormState = (state:FormReducer)  => state.AddRowReducer
export default AddRowReducer.reducer