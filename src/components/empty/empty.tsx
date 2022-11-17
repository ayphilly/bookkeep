import * as React from "react"
import "./empty.scss"
import empty from "../../assets/empty.svg"
export const Empty =(props:{title:string, subtitle:string}) => {

    return (
        <div className="empty-container">
            <div className="empty-inner">
                <img src={empty} alt="Empty SVG"/>
                <p>{props.title}</p>
                <p>
                    {props.subtitle}
                </p>
            </div>
        </div>
    )
}