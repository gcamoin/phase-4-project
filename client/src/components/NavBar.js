import React from "react"
import {Link} from "react-router-dom"

    function NavBar() {
        return (
            <nav className="nav" >
                <Link to="/about">About</Link><br />
                <Link to="/addrestaurant">Add Restaurant</Link><br />
                
            
            </nav>
        )
    }




export default NavBar;