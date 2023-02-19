import React from "react";
import { IButton } from "./types";
import {useSelector} from "react-redux";
import {selectFormState} from "@store/reducers/AddFormReducer/AddRowReducer";

function ButtonGreen({children, style, click}:IButton) {
  const modalState = useSelector(selectFormState)
  return <button className={`${style} ${modalState.openAddRowForm? 'bg-gray' : 'bg-greenLight'} shadow-greenLight`} onClick={click}>
    {children}
  </button>;
}

export default ButtonGreen;