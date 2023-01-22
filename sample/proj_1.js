const page = (
    <div>
        <img src = "/img/React_Logo.png" width = "100px"></img>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally creared by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

function Header() {
    return (
<header>
    <nav className = "nav">
        <img src = "/img/React_Logo.png" className="nav-logo"></img>
        <ul className = "nav-items">
            <li>About Us</li>
            <li>Pricing</li>
            <li>Contacts</li>
        </ul>
    </nav>
</header>
    )
}

function Content() {
    return (
        <div>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally creared by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer><small>@ 2023 Chow development. All rights reserved</small></footer>
    )
}

function Page() {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
    </div>  
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))