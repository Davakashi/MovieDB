import React from "react";
import { Detail } from "../Detail";
import "./style.css"

export const PosterText = (props) => {
    return <div className="Text">
        <h1>{props.title}</h1>
        <span>{props.tagline}</span>        
        <p>{props.overview}</p>
        <Detail relDate={props.relDate} voteAvg= {props.voteAvg} runtime = {props.runtime} revenue={props.revenue} prod={props.prod} genres={props.genres} />
    </div>
}