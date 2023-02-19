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
                'rub': action.payload.rub,
                'cad': action.payload.cad,
                'usa': action.payload.usa,
            }, ...state.dataTable]
        },
        setOpenAddRowForm: (state, action) => {
            state.openAddRowForm = action.payload
        },
    },
})

export const { setValueOfRow, setOpenAddRowForm } = AddRowReducer.actions
export const selectFormState = (state:FormReducer)  => state.AddRowReducer
export default AddRowReducer.reducer