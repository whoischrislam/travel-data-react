import React from "react"

export default function Row(props) {
    const inlineStyle = {
        backgroundImage: `url("${props.imageUrl}")`,
    }
    
    return (
        <>
            <div className="row">
                <div className="media" style={inlineStyle}></div>
                <div className="content">
                    <div className="location">
                        <img src="../pin.png" />
                        <p>{props.location}</p>
                        <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            {
                props.id !== props.length-1 && <hr />
            }
        </>
    )
}