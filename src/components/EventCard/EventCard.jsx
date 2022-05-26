import React from "react";
import { Link } from "react-router-dom";

//styles
import "./EventCard.css";

function EventCard({ eventData }) {

    
    return (
    <div className="event-card">
        <Link to={`/events/${eventData.id}`}>
            <img src={eventData.image} alt="project image"/>
        </Link>
        <h3>{eventData.name}</h3>    
    </div>
    );
}

export default EventCard;