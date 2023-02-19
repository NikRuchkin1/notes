import React from "react";
import ButtonGreen from "@components/ButtonGreen";
import {useDispatch} from "react-redux";
import { setOpenAddRowForm } from "@store/reducers/AddRowReducer"

function Header() {
  const dispatch = useDispatch()
  const setForm = () => {
    dispatch(setOpenAddRowForm(true))
  }
  const style = "rounded text-gray-light py-2 px-2"
  return <div className="max-w-7xl flex justify-between">
    <div className="text-greenLight text-base font-bold">Ebat you slil babla...</div>
    <ButtonGreen style={style} click={setForm}>+new</ButtonGreen>
  </div>;
}

export default Header;