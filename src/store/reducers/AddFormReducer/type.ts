export interface FormState {
    dataTable: Array<ArrayData>,
    openAddRowForm: boolean
}

export interface ArrayData {
    thing: string,
    bath: string,
    rub: string,
    cad: string,
    usa: string,
}


export interface FormReducer {
    AddRowReducer: FormState
}