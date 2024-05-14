import React from "react";
import { PosterImg } from "../PosterImg";
import { PosterText } from "../PosterText";
import "./style.css"

export const Poster = () => {
    return (
        <div className="Poster">
            <PosterImg/>
            <PosterText/>
        </div>
    )
}