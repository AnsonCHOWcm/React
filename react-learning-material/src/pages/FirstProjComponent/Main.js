import React from "react";
import "./FirstProjMain_style.css"

const Main = (props) => {

    const mode = props.lightMode

    return (
        <main className = {mode ? "FirstProjMain--Light" : "FirstProjMain--Dark"}>
            <h1 className="main--title" style = {{color : mode ? "#21222A" : "white"}}>Fun Facts about React</h1>
            <ul className="main--facts" style = {{color : mode ? "#21222A" : "white"}}>
                <li>Was first released in 2013</li>
                <li>Was originally creared by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
};

export default Main;