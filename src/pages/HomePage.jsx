import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//styles
// import "./styles.css"


//components
import EventCard from "../components/EventCard/EventCard";
// import AssociationCard from "../components/AssociationCard/AssociationCard";
// import HeaderImage from "../components/HeaderImage/HeaderImage";

function HomePage() {

    //State
    const [eventList, setEventList] = useState([]);

    //Action and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}events`)
        .then((results) => {
            return results.json();
        })
            .then((data) => {
                setEventList(data);
            });
    }, []);
    

    
    return (
    <div>
        <div>
            <h1> CURRENT EVENTS</h1>
            <div id="event-list">
                {eventList.map((eventData) => {
                    return (
                        <EventCard 
                        key={`event-${eventData.id}`} 
                    eventData={eventData}/>
                    );
                })}
            </div>
        </div>
    </div>
    );
}

export default HomePage;