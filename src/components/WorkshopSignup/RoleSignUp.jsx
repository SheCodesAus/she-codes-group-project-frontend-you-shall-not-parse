import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"

import "./WorkshopSignup.css"



function SignUpRoleForm({eventModuleData}) {
    console.log(eventModuleData)
    const localUsername = window.localStorage.getItem("username")

    const [eventModuleRoleList, setEventModuleRoleList] = useState({ 
        "id": eventModuleData[0]?.id,
        "mentor": localUsername,
	    "gift_back": false,
    });
    const [selectedRole, setSelectedRole] = useState({
        id: null,
        name: "",
    })

    //Hooks
    const { id } = useParams();
    
    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEventModuleRoleList((prevEventModuleRoleList) => ({
            ...prevEventModuleRoleList,
            [id]: value,
        }));
    };

    const handleSelect = (event) => {
        const {value, selectedIndex} = event.target;
        const roleName = event.nativeEvent.target[selectedIndex].text
        setSelectedRole({
            id:value,
            name:roleName,
        });
    }
    
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(eventModuleRoleList)
        const token = window.localStorage.getItem("token");
        if (!token)return;
        try {
            const response = await fetch
            (`${process.env.REACT_APP_API_URL}filter_event_module_roles/${eventModuleRoleList.id}/${selectedRole.id}`, {
            method:"put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ 
                id: eventModuleRoleList.id,
                event: eventModuleRoleList.event,
                event_module_name: eventModuleRoleList.event_module_name,
                role: selectedRole.name,
                mentor: eventModuleRoleList.mentor,
                gift_back: eventModuleRoleList.gift_back,
            }),
        });
        const data = await response.json()
        console.log(data);

        navigate(`/`);               
    }catch(err) {
        console.log(err);
    }
}



    //Loading state
    if (!eventModuleRoleList) {
        return <h3>Loading event...</h3>;
    }

    //Normal State
    return (
        <form>
        <div className="sign-up">
        <h2>Please select the role that you would like to sign up for:</h2>    
                <label htmlFor="roles">Roles:</label>
                <select name="roles" id="roles" defaultValue={eventModuleRoleList.id} onChange={handleSelect}>
                    {eventModuleData.map((eventmodule, key) =>  {
                        return(
                        <option key={`${key}-${eventmodule.id}`} value={eventmodule.id}>{eventmodule.role}</option>
                        )
                    })}
                </select>
            </div>
            <div className="sign-up">
                <label htmlFor="gift_back">Give Back Program:</label>
                <input
                    type="checkbox"
                    id="gift_back"
                    value={eventModuleRoleList.gift_back}
                    onChange={handleChange}
                />
            </div>
            <div className="sign-up">
            <button type="submit" onClick={handleSubmit}>
                    Sign up for this role
            </button>
            </div>

        </form>
        
        );
}
    
export default SignUpRoleForm;
