import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 25%;
    margin: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 0.2rem;
    background-color: #F7EED9;
    color: black;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover {
        bottom: .5rem;
        background-color:  rgba(247, 238, 217);
        color: black;
    }
`;

const PlayerCard = (props) => {
    return (
        <Card>
            <div>
                <h3>{props.name}</h3>
                <p><b>Country:</b> {props.country}</p>
                <p><b>Searches:</b> {props.searches}</p>
            </div>
        </Card>
    )
}
export default PlayerCard;