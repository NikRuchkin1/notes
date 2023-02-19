import {MouseEventHandler} from "react";

export interface IButton {
    children: string;
    style: string;
    click: MouseEventHandler<HTMLButtonElement>;
}