import React from "react";
import { IButton } from "./types";

function ButtonGreen({children, style}:IButton) {
  return <button className={`${style} bg-greenLight shadow-greenLight`}>
    {children}
  </button>;
}

export default ButtonGreen;