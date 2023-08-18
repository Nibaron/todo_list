import * as React from "react";
import img_todo from "../assets/todo.png";


export default function Appbar() {
    return (
        <header>
        <div className="logo">
        <img src={img_todo} alt="todo"/>
        <span>To Do List</span>
        </div>

        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark activeTheme"></span>
            <span className="gradientOne"></span>
            <span className="gradientTwo"></span>
            <span className="gradientThree"></span>
        </div>
        </header>
    );
}
