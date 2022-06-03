import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


//styles
import "../App.css"

function UserProfile() {

    //State
    const [userData, setUserData] = useState();
    const [roleData, setRoleData] = useState([]);
    


    //Hooks
    const { id } = useParams();  


    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log(data);
            setUserData(data);
        });
        fetch(`${process.env.REACT_APP_API_URL}filter_event_module_roles_user/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log("role", data);
            setRoleData(data);
            console.log("role data:", roleData)
            
        });
    }, [id]);



    //Loading state
    if (!userData) {
        return <h3>Loading profile...</h3>;
    }

    //Normal State
    return (
    <>
    <div>
        <img id="user-image" src={userData.image}/>
        
        <div className="user-info">
            <div>
                <h1>Welcome {userData.first_name} {userData.last_name} !</h1>
            </div> 
            <div className="user-txt">
                            
                <h4 className="user-info-titles"> About me:</h4>
                <h3>{userData.bio}</h3>

                <h4 className="user-info-titles"> My unique skills: </h4>
                <h3>{userData.languages}</h3>

                <h4 className="user-info-titles"> Where you can find me: </h4>
                <h3>{userData.location}</h3>

                <h4 className="user-info-titles"> What do I do: </h4>
                <h3>{userData.current_position}</h3>

                <h4 className="user-info-titles"> Email address </h4>
                <h3>{userData.email}</h3>
            </div>
            <div className="user-info">         
                <button><Link className="editlink" to="/users/:id/edit">Edit profile</Link></button>
            </div>
            <div className="user-timetable">
                <h2> Upcoming Classes </h2>
                <div>
                    {roleData.map((role, key) => 
                    (
                    <h4 className="user_role" key={`role-${role.id}`} >
                        <h3> Course: {role.event} | {role.event_module_name} as <strong>{role.role}</strong></h3>
                        <button>Generate invoice</button>
                    </h4>
                    )
                    )}
                </div> 
            </div>
        </div>    
    </div>
    </>
    );
}

export default UserProfile;
