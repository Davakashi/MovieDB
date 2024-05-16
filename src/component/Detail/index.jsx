import React from "react";
import { Info } from "../Info";
import "./style.css";

export const Detail =(props) => {
    return  <div>
        <span style={{fontSize: "22.4px"}}>{props.genres}</span><br/>
        <span style={{fontSize: "16px", color: "#fafafa"}}>{props.prod}</span>
        <div className="Rates">
        <Info name="Original Release" text={props.relDate}/>
        <Info name="Box Office" text={`$${parseInt(props.revenue).toLocaleString()}`}/>
        <Info name="Running Time" text={`${props.runtime} mins`}/>
        <Info name="Vote Average" text={`${props.voteAvg}/10`}/>
        </div>
    </div>
}