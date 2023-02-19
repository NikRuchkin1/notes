import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {useDispatch} from "react-redux";
import { setOpenAddRowForm } from "@store/reducers/AddRowReducer"
import { FormInput } from "./type"

function AddRowForm() {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = data => {
        console.log(data)
        dispatch(setOpenAddRowForm(false))
    };

    const style = "rounded text-gray-light py-0.5 px-2"
    return (
     <div className="bg-gray w-fit">
        <div className="py-3 px-2">
            <div>

                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("thing")} placeholder="Thing" className="bg-transparent text-greenLight focus:outline-none"/>
                    <input {...register("value")} placeholder="Value" className="bg-transparent text-greenLight focus:outline-none"/>
                    <input type="submit" value="Add" className="rounded text-gray-light py-0.5 px-2 bg-greenLight shadow-greenLight pointer-events-auto"/>
                </form>

            </div>
        </div>
     </div>
    );
}

export default AddRowForm;