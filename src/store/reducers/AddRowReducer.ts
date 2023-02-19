import { createSlice } from '@reduxjs/toolkit'

export interface FormState {
    thing: string,
    value: number,
    openAddRowForm: boolean
}

interface FormReducer {
    AddRowReducer: FormState
}

const initialState: FormState = {
    thing: "",
    value: 0,
    openAddRowForm: false,
}

export const AddRowReducer = createSlice({
    name: 'AddRowSlice',
    initialState,
    reducers: {
        setValueOfRow: (state, action) => {
            state.thing = action.payload.thing
            state.value = action.payload.value
        },
        setOpenAddRowForm: (state, action) => {
            state.openAddRowForm = action.payload
        },
    },
})

export const { setValueOfRow, setOpenAddRowForm } = AddRowReducer.actions
export const selectFormState = (state:FormReducer)  => state.AddRowReducer
export default AddRowReducer.reducer