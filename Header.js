const React = require("react")

function Header() {
    return (
    <header>
    <nav className = "nav">
        <img src = "/img/React_Logo.png" className="nav-logo"></img>
        <ul className="nav-items">
            <li>About Us</li>
            <li>Pricing</li>
            <li>Contacts</li>
        </ul>
    </nav>
</header>
    )
}

export default Header