// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";


// //components
// import EventCard from "../components/EventCard/EventCard";


// function AllEvents() {

//     //State
//     const [eventList, setEventList] = useState([]);

//     //Action and Helpers
//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}events`)
//         .then((results) => {
//             return results.json();
//         })
//             .then((data) => {
//                 setEventList(data);
//             });
//     }, []);
    

    
//     return (
//     <div>
//         <div>
//             <h1> CURRENT EVENTS</h1>
//             <div id="event-list">
//                 {eventList.map((eventData) => {
//                     return (
//                         <EventCard 
//                         key={`event-${eventData.id}`} 
//                     eventData={eventData}/>
//                     );
//                 })}
//             </div>
//         </div>
//     </div>
//     );
// }

// export default AllEvents;