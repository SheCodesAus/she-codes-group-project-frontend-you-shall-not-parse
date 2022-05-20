import React from "react";
import { Link } from "react-router-dom";
// import "./Nav.css";


function Nav() {
    return (
        <nav >
        <div className="header">

        <Link to="/"></Link>
        </div>
        <div className="navs">

        <Link id="registernav" to="/users/register/">Register</Link>

        </div>
        </nav>
    );
}
export default Nav;