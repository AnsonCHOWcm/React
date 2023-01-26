import React from "react";
import "./pagestyle/notestyle.css";
import InputItems from "./img/InputItems.jpg";
import Textarea from "./img/Textarea.jpg";
import Checkbox from "./img/Checkbox.jpg";
import Radiobutton from "./img/Radiobutton.jpg";
import Select from "./img/Select.jpg";
import SubmitButton_1 from "./img/SubmitButton_1.jpg";
import SubmitButton_2 from "./img/SubmitButton_2.jpg";
import SubmitTriggerFunct from "./img/SubmitTriggerFunct.jpg";

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
		<h2>Live Time Update Components : useState</h2>
		<p>
			In JS, we need to keep rendering variable after each user' action to make the website reactng to user action
			<br></br>
			However, React Js provide "UseState" method so that we just need to update the value of the variable , then the website would update accordingly
		</p>
		<h3>Initizalizing useState</h3>
		<p>
			Syntax : const [VAL, setVAL] = React.UseState(INITIAL_VALUE)
			<br></br>
			Note that the method would return an object with two features
			<br></br>
			1. VAL : refering the variable 2. setVAL : a function taking Input value and update VAL accordingly
			<br></br>
			***setVAL can also take in the function, then it would pass the original value and update the value as return value
			<br></br>
			***Spread Operator : "...", it allow developer quickly refer all the features in objects or array
		</p>
		<p>
			Note that useState can be passed into user-defined tag (called children component) as props
			<br></br>
			Whenever you want to update the useState, please pass in the function wrapping/only setVAL function directly as props as well
		</p>
		<h2>Receving Users' Inputs : Forms</h2>
		<h3>General Usage</h3>
		<p>In JS, it takes many steps to obtain users inputs from accessing DOM to its features and the value
			<br></br>
			However, React JS provides Forms which would immediate update the stored value based on users' inputs and we pass them to our own state
			<br></br>
			In particular, Forms itself is another State
		</p>
		<h3>Forms & States : Single Source of Truth</h3>
		<p>As mentioned above, Forms itself is a State and it would pass its received value to our own State
			<br></br>
			Even we can ensure two states refering to the same variable share the same value,
			<br></br>
			We would like to make the React States (own states variable) to control the value shown on Forms
			<br></br>
			To achieve this, 
			<br></br>
			1. we create a function receving the data from Forms which update our own states features accordingly
			<br></br>
			The function takes argument "event" and we can call "event.target" to get the information of the changes like "name" and "value"
			<br></br>
			2. In any items of Forms, we pass in 
			<br></br>
			(1) "onChange" : the function we define
			<br></br>
			(2) "name" : same features name as our states 
			<br></br>
			(3) "value" : equal to our state feature value as features
		</p>
		<h3>Specific Items</h3>
		<p>There are five particular items under Forms
			<ol>
				<li>Inputs</li>
				<p>This is the standard bar that receving user's text input</p>
				<img src = {InputItems}  alt = "" width = "500px"></img>
				<li>Checkedbox</li>
				<p>This is an one line object allow user to kick or not
					<br></br>
					However, it just a special type of Input with type = "checkbox" and "checked" reflect its truth value 
					<br></br>
					For the text context next to it, we define them under "label" tag with features "htmlFor" = ID and including feature "id" under input tag as linkage
				</p>
				<img src = {Checkbox} alt = "" width = "500px"></img>
				<li>Textarea</li>
				<p>This is a generalized Inputs which allow users to type in paragraph of message</p>
				<img src = {Textarea} alt = "" width = "500px"></img>
				<li>Radio Button</li>
				<p>This is a combination of checkboxes, we just need to define several checkbox under the same "fieldset" tag</p>
				<img src = {Radiobutton} alt = "" width = "500px"></img>
				<li>Select & Option</li>
				<p>This is the draw-down list</p>
				<img src = {Select} alt = "" width = "500px"></img>
			</ol>
		</p>
		<h3>Sumitting Forms</h3>
		<p>There are two ways to create the submit button of the forms</p>
		<img src = {SubmitButton_1} alt = "" width = "500px"></img>
		<br></br>
		<img src = {SubmitButton_2} alt = "" width = "500px"></img>
		<p>We can define sth function to be trigger when subit is kicked</p>
		<img src = {SubmitTriggerFunct} alt = "" width = "500px"></img>
		<p>we would add line "event.preventDefault()" in the submit trigger function to prevent refreshing the website after submit</p>
		<h3>Interacting with other systems : useEffect</h3>
		<p>
			In general, we may want to interact with the third-party software via API
			<br></br>
			It may cause duplicated calls when we just define the API calls in the React Components because the component block would be executed after each rendering
			<br></br>
			React provide "useEffect" methods to manage those function calls without making duplicated calls
		</p>
		<p>
			Syntax : "React.useEffect(FUNC ,DEP_ARRAY)"
		</p>
		<p>
			We inccluded all the external communicating functions call within RUNC while DEP_ARRAY would storage a value if that value changes, the FUNC would be executed
		</p>
		<p>
			***If the DEP_ARRAY is empty, then it would only be called once
			<br></br>
			***The FUNC we defined can only return a cleanup function to remove/unwind all the effects
		</p>
	</div>
);
};

export default Notes;
