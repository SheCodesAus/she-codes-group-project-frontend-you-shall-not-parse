import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav class="nav">
            <Link to="/">HomePage</Link>
            <Link to="/login">Login</Link>
            <Link to="/createAccount">CreateAccount</Link>
            
        </nav>
    )
}

export default Nav;