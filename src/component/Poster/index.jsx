import React from "react";
import { PosterImg } from "../PosterImg";
import { PosterText } from "../PosterText";
import "./style.css"

export const Poster = (props) => {
    return (
        <div className="Poster">
            <PosterImg img = {props.img}/>
            <PosterText overview = {props.overview} title = {props.title} relDate = {props.relDate} voteAvg = {props.voteAvg} runtime = {props.runtime} revenue={props.revenue} tagline={props.tagline} prod={props.productions} genres={props.genres}/>
        </div>
    )
}