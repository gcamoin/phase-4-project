import React from "react"
import {Link} from "react-router-dom"

function NavBar() {
    return (
    <nav className="nav">
        <Link to="/">Restaurants</Link><br/>
        <Link to="about">About</Link>

    </nav>
    )

}

export default NavBar;