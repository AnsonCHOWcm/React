import React from "react";
import "./pagestyle/notestyle.css";

const Notes = () => {
return (
	<div>
        <h1 className="PageHeader">React Js</h1>
		<h2>Creating a React Project locally by Create React App</h2>
		<p>Using cml to access the target path and use Syntax : "npx create-react-app FOLDER_NAME"</p>
		<h2>Opening the Project locally</h2>
		<p>Using cml to proj path and use Syntax "npm start"</p>
        <h2>Getting Access to React Library</h2>
        <p>In general, we use the syntax : "import React from "react" to indicate the Js script to use React
			<br></br>
			Besides, we use the syntax : "import ReactDOM" from "react-dom" to allow the script access HTML DOM via ReactDOM
		</p>
        <h2>Using React-DOM to edit html</h2>
        <p>Syntax : ReactDOM.render(HTML CODE, POSITION (Selected by Document etc))</p>
        <p>Note that one powerful features of React : we can create a function that return some HTML DOM
            <br></br>
            we can call in by tag its name under HTML CODE of the render
            <br></br>
            ***The function shd be start with capital letter
        </p>
        <p>We can also make the DOM as a variable (JSX make it as JS Object) and recall it under HTML CODE</p>
		<h2>Styling via CSS in React</h2>
		<p>We just need to create the css file as normal 
			<br></br>
			However, we don't need to link it in the HTML CODE but import the css file by Syntax : import "PATH.css"
			<br></br>
			***Remarks : React would bundle all css files into one css file, so styling in particular css file would have global effect
			<br></br>
			To restrict the styling, we have to direct the style via css class or css obj/id and include the classname / id to the tag of DOM 
			<br></br>
			***Remarks: define class in tag of DOM in React us className instead of class

		</p>
	</div>
);
};

export default Notes;
