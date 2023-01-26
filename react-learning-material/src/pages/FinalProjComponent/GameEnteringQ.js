import React from "react";

const GameEnteringQ = (props) => {

    const handleChange = (event) => {
        props.changeDiceMethod(event.target.value)
    };

    return (
        <div className="FinalProj--GameEnteringQ">
        <h1>{props.numberDice.messageShown}</h1>
        <input 
        className="FinalProj--GameEnteringQ--InputBar"
        placeholder="Number of Dices"
        value = {props.numberDice.number}
        onChange = {handleChange}
        />
        </div>

            );
};

export default GameEnteringQ;