import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./../App.css"

import SignUpRoleForm from "../components/WorkshopSignup/RoleSignUp";



function EventModulePage() {


    const [eventModuleData, setEventModuleData] = useState();
    



    //Hooks
    const { id } = useParams();



    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}filter_event_module_roles/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setEventModuleData(data);
            });
        }, []);

    if (!eventModuleData) {
        return <h3>Loading event module...</h3>;
    }
    console.log(eventModuleData)

    return (
    
    <div>
        <SignUpRoleForm eventModuleData={eventModuleData}/>
    </div>

    );
}

export default EventModulePage;