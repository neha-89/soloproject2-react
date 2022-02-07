import React from "react";

export default function Card(props) {
    return(
        
        <div className="card">
        <img src={props.imageUrl} />
        <span> {props.location}</span>
        <span>{props.googleMapsUrl}</span>
        <h1>{props.title}</h1>
        <p> {props.startDate}{props.endDate}</p>
        <p>{props.description}</p>
        </div>
        

    )
}