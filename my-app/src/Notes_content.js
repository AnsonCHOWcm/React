export default function NotesContent(){
    return(
        <div>
        <h1>React Js</h1>
        <a href="Homepage.html">HomePage</a>
        <a href="notes.html">Notes</a>
        <a href="proj_1.html">Project 1</a>
        <h2>Getting Access to React Library</h2>
        <p>We have to insert script in head and make the js reference in body with type = "text/babel"</p>
        <img src="/img/Introducing_React.jpg" alt="Example"></img>
        <h2>Using React-DOM to edit html</h2>
        <p>Syntax : ReactDOM.render(HTML CODE, POSITION (Selected by Document etc))</p>
        <p>Note that one powerful features of React : we can create a function that retuen some HTML DOM</p>
        <p>we can call in by tag its name under HTML CODE of the render</p>
        <p>***The function shd be start with capital letter</p>
        <p>We can also make the DOM as a variable (JSX make it as JS Object) and recall it under HTML CODE</p>
        </div>
    );
}
