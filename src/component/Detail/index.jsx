import React from "react";
import { Info } from "../Info";
import "./style.css";

export const Detail =() => {
    return  <div>
        <span style={{fontSize: "22.4px"}}>Lorem ipsum dolor sit.</span><br/>
        <span style={{fontSize: "16px", color: "#fafafa"}}>Lorem ipsum dolor sit amet consectetur.</span>
        <div className="Rates">
        <Info name="Original Release"/>
        <Info name="Running Time"/>
        <Info name="Box office"/>
        <Info name="Vote Average"/>
        </div>
    </div>
}