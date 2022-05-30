import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./../App.css"



function EventModulePage() {

    //State
    const [eventModuleRoleList, setEventModuleRoleList] = useState();

    //Hooks
    const { id } = useParams();
    


    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}filter_event_module_roles/${id}/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setEventModuleRoleList(data);
            });
    }, [id]);
    

    


    
    //Loading state
    if (!eventModuleRoleList) {
        return <h3>Loading event...</h3>;
    }


    //Normal State
    return (
    
    <div>
            
        <div>
            {eventModuleRoleList.map((event_module_role, key) => 
            {return (
            <h4 key={`event_module_role-${event_module_role.id}`} >
                {event_module_role.event_module_name} : {event_module_role.role}
            </h4>
            );
        })
        }
        </div>

    </div>
    
    );
}

export default EventModulePage;