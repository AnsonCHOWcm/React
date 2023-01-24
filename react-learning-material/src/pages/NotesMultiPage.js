import React from "react";
import step_1 from "./pagestyle/img/step1.jpg";
import step2_1_Navbar from "./pagestyle/img/step2_1_Navbar.jpg";
import step2_2_NavbarElements from "./pagestyle/img/step2_2_NavbarElements.jpg";
import step3_11_AppImports from "./pagestyle/img/step3_11_AppImports.jpg";
import step3_12_AppFunct from "./pagestyle/img/step3_12_AppFunct.jpg";
import step3_2_Rendering from "./pagestyle/img/step3_2_Rendering.jpg";

const NotesMultiPages = () => {
    return (
        <div>
            <h1 className = "PageHeader">React Js</h1>
            <h2>Step 1 - Making Project Dependency with React Router on cml</h2>
            <img src = {step_1} alt = "" width = "500px"></img>
            <h2>Step 2 - Creating relevant folders</h2>
            <p>All folders create under src</p>
            <h3>Step 2.1 - Navbar Folder</h3>
            <p>We create a foler "./components/Navbar"</p>
            <h4>Navbar - Navbar.js</h4>
            <p>This Js set up the header of the pages and allow user jump between the pages
                <br></br>
                Note that one pages corresponds to one tag-NavLink
                <br></br>
                Inside tag, 1. it reference a relative path 2. The item content shown on the website
                <br></br>
                Finally, we export the Navbar function as default for gathering
                <br></br>
                <img src = {step2_1_Navbar} alt = "" width = "500px"></img>
            </p>
            <h4>Navbar - NavbarElements.js</h4>
            <p>I guess the file setting up backend for supporting multi pages</p>
            <img src = {step2_2_NavbarElements} alt = "" width = "500px"></img>
            <h3>Step 2.2 - Pages Folder</h3>
            <p>We create a folder "./pages"</p>
            <p>We create JS files for each pages
                <br></br>
                The format is similar to a single page porject
                <br></br>
                We create a function that return relevant HTML code for the pages and export it
            </p>
            <h2>Step 3 - Gathering all pages and Rendering it to index.html</h2>
            <h3>Step 3.1 - Gathering all pages to one JS file called App.js</h3>
            <p>In App.js, we have to import 1. Navbar 2. pages
                <br></br>
                <img src = {step3_11_AppImports} alt = "" width = "500px"></img>
                <br></br>
                Create function App to gather all the pages by including Navbar for linkage information and indicating different route for different pages
                <br></br>
                path : define actual raltive path & element : refer the corresponds page
                <br></br>
                <img src = {step3_12_AppFunct} alt = "" width = "500px" ></img>
            </p>
            <h3>Step 3.2 - Rendering to html.index</h3>
            <img src = {step3_2_Rendering} alt = "" width = "500px"></img>
            <footer>The above contents are based on GeeksforGreeks - "How to create a multi-page website using React.Js?"</footer>
        </div>
    );
};

export default NotesMultiPages;