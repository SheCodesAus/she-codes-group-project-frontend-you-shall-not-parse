import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"



function LoginForm() {
  // State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Hooks
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
        console.log("id", data.id);
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("username", credentials.username);
        window.localStorage.setItem("id", data.id);
        navigate("/");
        
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="logincard">
    <div className="login-background">
    <form>
      <div className="login">
        <h1 className="glowup">Login</h1>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div className="login">
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>

      </div>
    </form>
    </div>
    </div>
  );
}

export default LoginForm;