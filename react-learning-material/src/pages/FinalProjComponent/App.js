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

    const [DiceStatus, setDiceStatus] = React.useState([])

    const [GameMode, setGameMode] = React.useState(false)

    const [GameWin, setGameWin] = React.useState(false)

    const [ButtonContent, setButtonContent] = React.useState("Submit")

    const changeDiceNumber = (inputvalue) => {
        setnumberDice((prevnumberDice) => {
            return(
                {
                    ...prevnumberDice,
                    "number" : inputvalue
                }
            );
        })
    };

    React.useEffect(() => {

        const alllocked = DiceStatus.every(item => item.locked)
        let alleq
        if (DiceStatus.length ==0) {
            alleq = false
        }else {
            const firstnum = DiceStatus[0].number
            alleq = DiceStatus.every(item => item.number == firstnum )
        }

        if (alllocked && alleq) {
            setGameWin(true)
        }



    },[DiceStatus])

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
    };

    const changeGameMode = () => {
        setGameMode(prevGameMode => !prevGameMode)
    };

    const setupDiceStatus = (numberofdices) => {

        let newDiceStatus = []

        for (let i=0; i< numberofdices; i++){
            let currentDice = {
                id : i,
                number : Math.floor(Math.random() * 6 + 1),
                locked : false
            }
            newDiceStatus.push(currentDice)
        }



        setDiceStatus(newDiceStatus)
    };

    const drawDice = () => {

        let newDiceStatus = []

        for (let i=0; i< DiceStatus.length; i++){
            let currentDice = 
            !DiceStatus[i].locked ? {...DiceStatus[i], number : Math.floor(Math.random() * 6 + 1)} : DiceStatus[i]
            newDiceStatus.push(currentDice)
        }

        setDiceStatus(newDiceStatus)
    };

    const toggleDiceLock = (event) => {

        const id = event.target.id

        let newDiceStatus = []

        for (let i=0; i< DiceStatus.length; i++){
            let currentDice = 
            DiceStatus[i].id == id ? {...DiceStatus[i], locked : !DiceStatus[i].locked} : DiceStatus[i]
            newDiceStatus.push(currentDice)
        }

        setDiceStatus(newDiceStatus)
    };

    const confirmGameWin = () => {
        setGameWin(true)
    }

    const RestartnumberDice = () => {
        setnumberDice({
            "number" : "0",
            "messageShown" : "Please enter the number of Dices",
            "confirmDicenumber" : false
        })
    }

    const RestartDiceStatus = () => {
        setDiceStatus([])
    }

    const RestartGameMode = () => {
        setGameMode(false)
    }
    const RestartGameWin = () => {
        setGameWin(false)
    }
    const RestartButtonContent = () => {
        setButtonContent("Submit")
    }

    const mode = numberDice.confirmDicenumber

    return (
        <div className = "FinalProj--App">
            <h1 className = "FinalProj--App--Title">Tenzies</h1>
            <p className = "FinalProj--App--Rules">Roll until all dice are the same.
                <br></br>
                Click each dice to freeze it at its current value between rolls.
            </p>
            {mode ? 
            <Dice numberDice = {numberDice} 
            DiceStatus = {DiceStatus}
            toggleDiceLock = {toggleDiceLock}
            /> : 
            <GameEnteringQ numberDice = {numberDice} 
            changeDiceMethod = {changeDiceNumber}
            />}
            <Button 
            numberDice = {numberDice}
            DiceStatus = {DiceStatus} 
            GameWin = {GameWin}
            GameMode = {GameMode} 
            ButtonContent = {ButtonContent}
            confirmDiceMethod = {confirmDiceMethod} 
            setButtonContent = {setButtonContent}
            changeGameMode = {changeGameMode} 
            setupDiceStatus = {setupDiceStatus}
            drawDice = {drawDice}
            confirmGameWin = {confirmGameWin}
            RestartnumberDice = {RestartnumberDice}
            RestartDiceStatus = {RestartDiceStatus}
            RestartGameMode = {RestartGameMode}
            RestartGameWin = {RestartGameWin}
            RestartButtonContent = {RestartButtonContent}
            />
        </div>
    );
};

export default App;