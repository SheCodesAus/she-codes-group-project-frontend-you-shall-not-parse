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
        <h2>{eventData.name}</h2>
        <h3>{eventData.location}</h3>
        <h5>Sign up closes: {new Date(eventData.signup_closes).toDateString()}</h5>
    </div>
    );
}

export default EventCard;