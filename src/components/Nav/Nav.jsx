import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import "./Nav.css";
import logo from "./SheCodesLogo.jpg"

function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState();
    const [userId, setUserId] = useState();
    const location = useLocation();



    useEffect(()=> {
        const localUsername = window.localStorage.getItem("username")
        const token = window.localStorage.getItem("token");
        const userid = window.localStorage.getItem("id");
        if(token) {
            setIsLoggedIn(true);
            setUsername(localUsername);
            setUserId(userid);
        }
    }, [location])

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }



    

    return (
        <div className="header">
        <Link to="/"><img className="imag-nav" src={logo} alt="SheCodeslogo" /></Link>
        <nav className="nav">
            <Link to="/">Home</Link>
            {
                isLoggedIn ? (
                    <>
                    <Link className="logoutbutton" to="/" onClick={handleLogout}>Logout</Link>
                    <Link to={`/users/${userId}`}>{username}</Link>
                    </>
                    )
                :
                (
                    <>
                    <Link to="/login">Login</Link>
                    <Link to="/createAccount">Mentor</Link>           
                    </>
                )
            }
        </nav>
        </div>
    )
}

export default Nav;