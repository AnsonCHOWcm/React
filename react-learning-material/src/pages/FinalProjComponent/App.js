import React from "react";
import Dice from "./Dice";
import Button from "./Button";
import GameEnteringQ from "./GameEnteringQ";

const App = () => {

    const [numberDice, setnumberDice] = React.useState({
        "number" : "0",
        "messageShown" : "Please enter the number of Dices",
        "confirmDicenumber" : false
    })

    const changeDiceNumber = (inputvalue) => {
        setnumberDice((prevnumberDice) => {
            return(
                {
                    ...prevnumberDice,
                    "number" : inputvalue
                }
            );
        })
    }

    const confirmDiceMethod = (isValidnumber) => {
        setnumberDice((prevnumberDice) => {
            return(
                {
                    ...prevnumberDice,
                    "confirmDicenumber" : isValidnumber,
                    "messageShown" : isValidnumber ? "Please enter the number of Dices" : "Invlid Input! Please try again"
                }
            );
        })
    }

    const mode = numberDice.confirmDicenumber

    return (
        <div className = "FinalProj--App">
            <h1 className = "FinalProj--App--Title">Tenzies</h1>
            <p className = "FinalProj--App--Rules">Roll until all dice are the same.
                <br></br>
                Click each dice to freeze it at its current value between rolls.
            </p>
            {mode ? <Dice numberDice = {numberDice}/> : <GameEnteringQ numberDice = {numberDice} changeDiceMethod = {changeDiceNumber}/>}
            <Button numberDice = {numberDice} confirmDiceMethod = {confirmDiceMethod}/>
        </div>
    );
};

export default App;