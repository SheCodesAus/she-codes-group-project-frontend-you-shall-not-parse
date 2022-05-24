import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccountForm.css"

class MyHeader extends React.Component {}
function CreateAccountForm()
{
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    // Actions and Helpers
    const handleChange = (event) => {
      const { id, value } = event.target;
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (credentials.username && credentials.password) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}api-token-auth/`,
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            }
          );
          const data = await response.json();
          console.log("data", data);
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("username", credentials.username);
          navigate("/");
        } catch (err) {
          console.log(err);
        }
      }
    };


return (
    <div className="login-background">
    <form>
      
      <div className="login">
        <h1 className="glowup">Create Account</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div className="login">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placehodler="User@email.com" onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      
      </div>
    </form>
    </div>
  );
}
    
export default CreateAccountForm;
    

