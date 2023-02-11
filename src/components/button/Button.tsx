import React from 'react'
import { IButton } from "./types";

function Button({children}:IButton) {
    return <button>{children}</button>
}

export default Button