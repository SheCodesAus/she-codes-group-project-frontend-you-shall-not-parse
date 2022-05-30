import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import "./../App.css"
import SignUpModuleForm from "../components/WorkshopSignup/ModuleSignUpForm";

// import Nav from "../components/Nav/Nav.jsx"

function EventPage() {

    //State
    const [eventData, setEventData] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState();
    const location = useLocation();


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
            <img className="image" src={eventData.image} alt="project image"/>
            <h3 className="title">{eventData.name}</h3>
            <h3 className="desc">{eventData.description}</h3>
            <h3 className="location">Location: {eventData.location}</h3>
            <h3 className="finaldate">Sign up closes on {new Date(eventData.signup_closes).toDateString()}</h3>
            
            {
                isLoggedIn ? (
                    <>
                    <SignUpModuleForm/>
                    </>
                )
                :
                (
                    <div> 
                        <h3>Please Login or Create a mentor account to sign up to an event</h3>
                        <Link to="/login"><button>Login</button> </Link>
                        <Link to="/createaccount"><button>Become a mentor</button> </Link>
                    </div>
                )
            }
        </div>
    
    );
}

export default EventPage;