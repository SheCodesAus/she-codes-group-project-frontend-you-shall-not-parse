import React from "react";
import { Link } from "react-router-dom";

//styles
import "./EventCard.css";

function EventCard({eventData}) {
    
    
    return (
    <div className="event-card">
        <Link to={`/events/${eventData.id}`}>
            <img src={eventData.image} alt="project image"/>
        </Link>
        <h3>{eventData.name}</h3>    
        <h4>Sign up opens: {eventData.signup_opens}</h4>
        <h4>Sign up closes: {eventData.signup_closes}</h4>
    </div>
    );
}

export default EventCard;