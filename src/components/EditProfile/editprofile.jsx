import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./editprofile.css"

function UserEditForm() {
    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        image: "",
        current_position: "",
        bio: "",
        location: "",
        contact: "",
        languages: ""

    });

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    const token = window.localStorage.getItem("token");

    useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${id}/edit`,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        }   
        })
    .then((results) => {
        console.log("results",results);    
    return results.json();
    })
    
    .then((data) => {
        setCredentials(data);
        console.log("data",data);
    });
    

    }, [id]);

    if (!credentials) {
        return <h3>Loading..</h3>;
    }

    

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.email && credentials.first_name) {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}users/${id}/edit`,
                    {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Token ${token}`,
                        },
                        body: JSON.stringify(credentials),
                    }
                );
                const data = await response.json();
                navigate("/");
            } catch (err) {
                console.log(err);
            }
        }
    };




    return (
        <div className="login-background">
        <form className="login">
                <div >
                    <h3 className="glowup">Update Your Details </h3>
                </div>
  
                <div>
                    <label htmlFor="first_name">First Name:</label>
                    <input
                        type="first_name"
                        id="first_name"
                        value={credentials.first_name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        type="last_name"
                        id="last_name"
                        value={credentials.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="username"
                        id="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={credentials.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password2">Password2:</label>
                    <input
                        type="password2"
                        id="password2"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                        type="url"
                        id="image"
                        value={credentials.image}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="current_position">Current Position:</label>
                    <input
                        type="current_position"
                        id="current_position"
                        value={credentials.current_position}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <input
                        type="bio"
                        id="bio"
                        value={credentials.bio}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="location"
                        id="location"
                        value={credentials.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="contact">Contact:</label>
                    <input
                        type="contact"
                        id="contact"
                        value={credentials.contact}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="languages">Languages:</label>
                    <input
                        type="languages"
                        id="languages"
                        value={credentials.languages}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleSubmit} className="all-btn">
                    Update Your Profile
                </button>
        </form>
        </div>
        
    );
}

export default UserEditForm;


