import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";
import logo from "./SheCodesLogo.jpg"

function Nav() {
    return (



        <div className="header">
        <Link to="/"><img className="imag-nav" src={logo} alt="SheCodeslogo" /></Link>

        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/createAccount">Become a mentor</Link>           
        </nav>
        </div>

    )
}

export default Nav;