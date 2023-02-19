import React from "react";
import { IButton } from "./types";

function ButtonGreen({children, style, click}:IButton) {
  return <button className={`${style} bg-greenLight shadow-greenLight`} onClick={click}>
    {children}
  </button>;
}

export default ButtonGreen;