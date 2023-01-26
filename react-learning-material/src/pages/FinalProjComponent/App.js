import React from "react";
import Dice from "./Dice";
import Button from "./Button";

const App = () => {
    return (
        <div className = "FinalProj--App">
            <h1 className = "FinalProj--App--Title">Tenzies</h1>
            <p className = "FinalProj--App--Rules">Roll until all dice are the same.
                <br></br>
                Click each dice to freeze it at its current value between rolls.
            </p>
        </div>
    );
};

export default App;