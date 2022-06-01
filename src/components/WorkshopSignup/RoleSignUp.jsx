import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"


function SignUpRoleForm() {

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
            <h2>Please select the role that you would like to sign up for:</h2>    
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
    
export default SignUpRoleForm;
