import React from "react";
import { SearchBox } from "../SearchBox";
import "./style.css"
import Logo from "../../tmdb.svg"

export const Header = () => {
    return (
        <div className="Header">
            <img src={Logo} alt="logo" />
            <SearchBox/>
        </div>
    )
}