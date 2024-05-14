import React from "react";
import Poster from "../../leon2.jpg"
import "./style.css"

export const PosterImg = () => {
    return (
        <div>
            <img className="PosterImg" src={Poster} alt="poster" />
        </div>
    )
}