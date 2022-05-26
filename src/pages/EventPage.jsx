import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";



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
    }, [id]);
    
    


    
    //Loading state
    if (!eventData) {
        return <h3>Loading event...</h3>;
    }


    //Normal State
    return (
    
    <div className="project-container">
        <div className="image-container">
            <h2>{eventData.name}</h2>
            <h4>Sign up by {new Date(eventData.signup_closes).toDateString()}</h4>
            <p>{eventData.description}</p>
        </div>
    </div>
    
    );
}

export default EventPage;