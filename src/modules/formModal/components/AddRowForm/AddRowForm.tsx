import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {useDispatch} from "react-redux";
import { setOpenAddRowForm, setValueOfRow } from "@store/reducers/AddFormReducer/AddRowReducer"
import { FormInput, FormData, schema } from "./type"
import cancel from './img/cancel.png'

function AddRowForm() {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormInput> = data => {
        dispatch(setOpenAddRowForm(false))
        dispatch(setValueOfRow(data))
    };

    return (
     <div className="bg-gray w-fit rounded-lg absolute left-1/2 top-1/2" style={{transform: "translate(-50%, -50%)"}}>
         <img className="absolute w-5 right-1 top-1 cursor-pointer" src={cancel} alt='cancel' onClick={()=> dispatch(setOpenAddRowForm(false))}/>
        <div className="py-3 px-2">
            <div>

                <form className="flex flex-col p-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <input {...register("thing", { required: true, min: 2 })} placeholder="Thing" className="bg-gray-dark text-greenLight focus:outline-none p-2 rounded-md"/>
                        <p className='text-red600'>{errors.thing?.message}</p>
                    </div>
                    <div className='mb-6'>
                        <input {...register("bath", { required: true, min: 2 })} placeholder="Bath" className="bg-gray-dark text-greenLight focus:outline-none p-2 rounded-md"/>
                        <p className='text-red600'>{errors.bath?.message}</p>
                    </div>
                    <input type="submit" value="Add" className="rounded text-gray-light py-0.5 px-2 bg-greenLight shadow-greenLight pointer-events-auto cursor-pointer"/>
                </form>

            </div>
        </div>
     </div>
    );
}

export default AddRowForm;