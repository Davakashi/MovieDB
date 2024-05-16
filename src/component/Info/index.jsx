import React from "react"
import "./style.css"

export const Info = (props) => {
    return <div className="Info">
        {props.name}:<br/>
        <span>{props.text}</span>
    </div>
}