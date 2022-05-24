import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";
import logo from "./SheCodesLogo.jpg"

function Nav() {
    return (



        <div className="header">
        <img className="imag-nav" src={logo} alt="SheCodeslogo" />

        <nav class="nav">
            <Link to="/">Home Page</Link>
            <Link to="/login">Login</Link>
            <Link to="/createAccount">Create Account</Link>           
        </nav>
        </div>

    )
}

export default Nav;