import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import "./Nav2.css";


function Nav2() {
    return (
        <div className="header2">
            <nav className="nav2">
            <a href="https://shecodes.com.au/about/" target="_blank" rel="noopener noreferrer">About SheCodes</a>
            <Link to="/ourprograms" target="_blank">Our Programs</Link>
            <Link to="/events_all" target="_blank">Events</Link>
            <a href="https://shecodes.com.au/frequently-asked-questions/" target="_blank" rel="noopener noreferrer">FAQ's</a>
            <a href="https://shecodes.com.au/contact/" target="_blank" rel="noopener noreferrer">Contact</a>
            <a href="https://shecodesaus.slack.com/archives/C9REWQFV2" target="_blank" rel="noopener noreferrer">Slack</a>
            </nav>
            {/* <div className="test">
                <h1>
                    <em>S</em>
                    <em>H</em>
                    <em class="planet left">E</em>
                    <em>C</em>
                    <em>O</em>
                    <em>D</em>
                    <em class="planet right">E</em>
                    <em>S</em>
                </h1>
            </div> */}
        </div>

    )
}

export default Nav2;