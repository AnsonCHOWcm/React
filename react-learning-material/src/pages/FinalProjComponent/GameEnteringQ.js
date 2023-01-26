import React from "react";

const GameEnteringQ = (props) => {
    return (
        <div className="FinalProj--GameEnteringQ">
        <h1>How many Dices you would like to play?</h1>
        <h2>{props.messageShown}</h2>
        <input 
        className="FinalProj--GameEnteringQ--InputBar"
        placeholder="Mumber of Dices"
        />
        </div>

            );
};

export default GameEnteringQ;