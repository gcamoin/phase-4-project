import React from "react"
import {Link} from "react-router-dom"

    function NavBar() {
        return (
            <nav className="nav" >
                <Link to="/about">About</Link><br />
                <Link to="/contact">Contact</Link><br />
                <Link to="/">Home</Link><br />
                <Link to="/me">My Restaurants</Link>
                
            
            </nav>
        )
    }




export default NavBar;