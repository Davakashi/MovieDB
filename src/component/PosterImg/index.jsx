import React from "react";
import "./style.css"

export const PosterImg = (props) => {
    return (
        <div>
            <img className="PosterImg" src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="poster" />
        </div>
        
    )
}