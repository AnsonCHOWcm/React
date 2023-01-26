import React from "react";

const Button = (props) => {

    const confirmedDicenumber = props.confirmDicenumber

    const confirmedGamewin = false

    const handleClick = () => {
        const GameMode = false
        let isValidnumber = false
        const currentinput = Number(props.numberDice.number)

        if (!GameMode){
            isValidnumber = (currentinput  > 0)

            props.confirmDiceMethod(isValidnumber)

        }
    };

    let ButtonContent
    if (confirmedDicenumber && confirmedGamewin) {
        ButtonContent = "Restart the Game"
    }else if (confirmedDicenumber){
        ButtonContent = "Roll"
    }else{
        ButtonContent = "Submit"
    }


    return (
        <div>
            <button className="FinalProj--Button"
                onClick={handleClick}>
                {ButtonContent}
        </button>
        </div>

    );
};

export default Button;