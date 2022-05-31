import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


//styles
// import "./styles.css"

function UserProfile() {

    //State
    const [userData, setUserData] = useState();


    //Hooks
    const { username } = useParams();  


    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        });
    }, [username]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/event_module_roles/<int:pk>/`)
       
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
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

        <Link to="/users/:id/edit">Edit profile</Link>
        <h4></h4>
        <img id="user-image" src={userData.image}/>
        <div>
            <h1>User Profile of {userData.first_name} {userData.last_name} </h1>
        </div> 
        <div>
            <h4> About </h4>
            <h3>{userData.bio}</h3>

            <h4> Coding Languages </h4>
            <h3>{userData.languages}</h3>

            <h4> Location </h4>
            <h3>{userData.location}</h3>

            <h4> Current Position </h4>
            <h3>{userData.current_position}</h3>

            <h4> Username </h4>
            <h3>{userData.username}</h3>

            <h4> Email address </h4>
            <h3>{userData.email}</h3>

            <h1>Upcoming classes</h1>
            <h4>{userData.event_module}</h4>

            
        </div>
    </div>
    </>
    );
}

export default UserProfile;
