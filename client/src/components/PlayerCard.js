import React from "react";

const PlayerCard = (props) => {
    return (
        <div>
            <div>
                <h3>Name: {props.name}</h3>
                <p>Country: {props.country}</p>
                <p>Searches: {props.searches}</p>
            </div>
        </div>
    )
}
export default PlayerCard;