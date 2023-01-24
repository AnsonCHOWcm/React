import React from "react";
import "./pagestyle/notestyle.css";

const Notes = () => {
return (
	<div>
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
		<h2>Reusable Components : Props & Array Map</h2>
		<h3>Props</h3>
		<p>
			Previous said, React-DOM is a powerful features allow developers to create function return DOM and call it as a tag under html
			<br></br>
			Like official tags, they have different attributes. We can pass in different value with features names to the user-defined tag/DOM
			<br></br>
		</p>
		<h4>Step 1 : Define the DOM-returning function to take in arguments "props" and recalling those feautes in the DOM within bracket</h4>
		<h4>Step 2 : When we call the function as tag, we pass in the value with featues name</h4>
		<p>*** Step 2 naming defines features name in Step 1 </p>
		<h3>Array Map</h3>
		<p>In general, array map is a method of an array allow users to pass in the function, then it would return array with function vale of each elements
			<br></br>
			We may incorporate Array map to expand the power of props
		</p>
		<h4>Step 0 : Collect the data as an array</h4>
		<h4>Step 1 : Obtain Array map object with the function defined to create target DOM tag on each of the data as fillin</h4>
		<h4>Step 2 : Insert the array map in the position of the HTML within bracket</h4>
		<p>***For step 1, there are two methods of filling in the data
			<br></br>
			1. Fill in the tag explicitly by defining the features name and the reference features of the array item
			<br></br>
			2. Fill in the tag by just calling item reference with bracket once, then we have to use "props.item.FEATURE" in the DOM-returning function to refer the features value
		</p>
	</div>
);
};

export default Notes;
