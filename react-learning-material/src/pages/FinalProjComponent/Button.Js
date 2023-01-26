import React from "react";

const Button = (props) => {

    const confirmedDicenumber = props.numberDice.confirmDicenumber

    let confirmedGamewin = props.GameWin

    const GameMode = props.GameMode

    const handleClick = () => {
        
        let isValidnumber = false
        const currentinput = Number(props.numberDice.number)

        if (!GameMode){
            isValidnumber = (currentinput  > 0)

            props.confirmDiceMethod(isValidnumber)

            if (isValidnumber) {
                props.changeGameMode()
                props.setupDiceStatus(currentinput)
                props.setButtonContent("Roll")
            }

        }else if (!confirmedGamewin){
            props.drawDice()

        }else{
            props.RestartnumberDice()
            props.RestartDiceStatus()
            props.RestartGameMode()
            props.RestartGameWin()
            props.RestartButtonContent()
        }

    };


    return (
        <div>
            <button className="FinalProj--Button"
                onClick={handleClick}>
                {props.GameWin ? "New Game" : props.ButtonContent}
            </button>
        </div>

    );
};

export default Button;