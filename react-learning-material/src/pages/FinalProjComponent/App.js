import React from "react";
import Dice from "./Dice";
import Button from "./Button";
import GameEnteringQ from "./GameEnteringQ";

const App = () => {

    const [numberDice, setnumberDice] = React.useState({
        "number" : 0,
        "messageShown" : "Please enter the number of Dices"
    })

    const mode = numberDice.number

    return (
        <div className = "FinalProj--App">
            <h1 className = "FinalProj--App--Title">Tenzies</h1>
            <p className = "FinalProj--App--Rules">Roll until all dice are the same.
                <br></br>
                Click each dice to freeze it at its current value between rolls.
            </p>
            {mode ? <Dice numberDice = {numberDice}/> : <GameEnteringQ numberDice = {numberDice}/>}
            <Button numberDice = {numberDice}/>
        </div>
    );
};

export default App;