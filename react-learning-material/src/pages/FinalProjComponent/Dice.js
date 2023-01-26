import React from "react";
import "./FinalProj_style.css";

const Dice = (props) => {

    let DiceElements = props.DiceStatus.map((item) => {

        let color = item.locked ? "green" : "white"

        return(
            <button className = "FinalProj--ParticularDice"
                    key = {item.id}
                    id = {item.id}
                    onClick = {props.toggleDiceLock}
                    style = {{backgroundColor : color}}
                    >
                        {item.number}
            </button>
        )
    })

    return (
        <div className = "FinalProj--Dice">
            {DiceElements}
        </div>
    );
};

export default Dice;