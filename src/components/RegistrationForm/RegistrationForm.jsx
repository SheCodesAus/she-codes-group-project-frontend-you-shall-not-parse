import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  // State
  const [user, setUser] = useState({
  "username": "",
	"password": "",
	"password2": "",
	"email": "",
	"first_name": "",
	"last_name": ""
  });

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (user.username && user.password && user.password2 && user.email && user.first_name && user.last_name) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}users/register/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: user.username, 
              password: user.password,
              password2: user.password2,
              email: user.email,
              first_name: user.first_name,
              last_name: user.last_name
            }),
          }
        );
        const data = await response.json();
        console.log(data)
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const formFields = [
    {
       id: "username",
       label: "Username",
       placeholder: "Enter your Username",
       type: "text",
    },
    {
        id: "password",
        label: "Password",
        placeholder: "Enter password",
        type: "password",
    },
    {
        id: "password2",
        label: "Password",
        placeholder: "Re-enter password",
        type: "password",
    },
    {
        id: "email",
        label: "Email",
        placeholder: "Enter your Email Address",
        type: "email",
    },
        {
       id: "first_name",
       label: "First Name",
       placeholder: "Enter your First Name",
       type: "text",
    },
    {
        id: "last_name",
        label: "Last Name",
        placeholder: "Enter your Last Name",
        type: "text",
    },
]

    return ( 
        <form>
            {formFields.map((field, key) => {
                return (
                <div key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                </div>
                )
            })}
            <button type="submit" onClick={handleSubmit}>
                Create Account
            </button>
        </form>
    )
}

export default RegistrationForm;