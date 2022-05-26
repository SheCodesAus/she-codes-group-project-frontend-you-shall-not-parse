import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


//styles
// import "./styles.css"

function UserProfile() {

    //State
    const [userData, setUserData] = useState();


    //Hooks
    const { id } = useParams();  


    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
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
        <img src={userData.image}/>
        <div>
            <h2>{userData.username}</h2>
        </div>
    </div>
    </>
    );
}

export default UserProfile;