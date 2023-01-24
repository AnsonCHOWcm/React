import React from "react";
import "./FirstProjMain_style.css"

const Main = () => {
    return (
        <main className = "FirstProjMain">
            <h1 className="main--title">Fun Facts about React</h1>
            <ul className="main--facts">
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