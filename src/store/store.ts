import { configureStore } from '@reduxjs/toolkit'
import AddRowReducer from "./reducers/AddRowReducer";

export const store = configureStore({
    reducer: {
        AddRowReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch