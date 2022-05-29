import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./../App.css"
import SignUpForm from "../components/WorkshopSignup/SignUpForm";

// import Nav from "../components/Nav/Nav.jsx"

function EventPage() {

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
    
    


    
    //Loading state
    if (!eventData) {
        return <h3>Loading event...</h3>;
    }


    //Normal State
    return (
    
    <div>
        <div className="event-content">
            <img className="image" src={eventData.image} alt="project image"/>
            <h3 className="title">{eventData.name}</h3>
            <h3 className="desc">{eventData.description}</h3>
            <h3 className="location">Location: {eventData.location}</h3>
            <h3 className="finaldate">Sign up closes on {new Date(eventData.signup_closes).toDateString()}</h3>
            
            {/* {
                isLoggedIn ? (
                    <>
                    <Link className="signup" to="/events/id/signup"><button>Sign Up Now!</button></Link>
                    </>
                )
                :
                (
                    <Link to="/login"><button>Login to Sign up.</button> </Link>
                )
            } */}
            <SignUpForm/>

        </div>
    </div>
    
    );
}

export default EventPage;