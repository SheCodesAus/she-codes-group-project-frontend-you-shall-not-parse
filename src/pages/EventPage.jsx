import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import "./../App.css"
import SignUpModuleForm from "../components/WorkshopSignup/ModuleSignUpForm";



function EventPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState();
    const location = useLocation();

    useEffect(()=> {
        const localUsername = window.localStorage.getItem("username")
        const token = window.localStorage.getItem("token");
        if(token) {
            setIsLoggedIn(true);
            setUsername(localUsername);
        }
    }, [location])

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    //State
    const [eventData, setEventData] = useState();


    //Hooks
    const { id } = useParams();
    


    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}events/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setEventData(data);
            });
    }, []);

    
    
    useEffect(()=> {
        const localUsername = window.localStorage.getItem("username")
        const token = window.localStorage.getItem("token");
        if(token) {
            setIsLoggedIn(true);
            setUsername(localUsername);
        }
    }, [location])


    
    //Loading state
    if (!eventData) {
        return <h3>Loading event...</h3>;
    }


    //Normal State
    return (
        <div className="event-content">
            <div className="info">
            <h1 className="title">{eventData.name}</h1>
            <h2 className="location">{eventData.location}</h2>
            <h3 className="desc">{eventData.description}</h3>
            {
                isLoggedIn ? (
                    <>
                    <SignUpModuleForm/>
                    </>
                )
                :
                (
                    <div className="loggedin"> 
                        <h3><strong>Please Login or Create an account to mentor this event</strong></h3>
                        <Link to="/login"><button>Login</button> </Link>
                        <Link to="/createaccount"><button>Become a mentor</button> </Link>
                    </div>
                )
            }
            <h4 className="finaldate">Sign up closes on {new Date(eventData.signup_closes).toDateString()}</h4>
            </div>
            <img className="image" src={eventData.image} alt="project image"/>
        </div>
    
    );
}

export default EventPage;