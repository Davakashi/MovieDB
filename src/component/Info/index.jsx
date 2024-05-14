import React from "react"
import "./style.css"

export const Info = (props) => {
    return <div className="Info">
        {props.name}:<br/>
        <span>2014-12-1</span>
    </div>
}