import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccountForm.css"

function CreateAccountForm()
{
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
      if (credentials.first_name && credentials.last_name && credentials.username && credentials.email && credentials.password && credentials.password2 && credentials.image && credentials.current_position && credentials.bio && credentials.location && credentials.contact && credentials.languages) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}register/`,
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                first_name: credentials.first_name,
                last_name: credentials.last_name,
                username: credentials.username,
                email: credentials.email,
                password: credentials.password,
                password2: credentials.password2,
                image: credentials.image,
                current_position: credentials.current_position,
                bio: credentials.bio,
                location: credentials.location,
                contact: credentials.contact,
                languages: credentials.languages
              }),
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


const formFields = [
  {
    id: "first_name",
    label: "Firstname",
    placeholder: "Firstname",
    type: "text",
  },
  {
    id: "last_name",
    label: "Lastname",
    placeholder: "Lastname",
    type: "text",
  },
  {
    id: "username",
    label: "Username",
    placeholder: "Enter Username",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Email",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter password",
    type: "password",
  },
  {
    id: "password2",
    label: "Confirm Password",
    placeholder: "Re-enter password",
    type: "password",
  },
  {
    id: "image",
    label: "Image",
    placeholder: "Enter a profile picture",
    type: "url",
  },
  {
    id: "current_position",
    label: "Occupation",
    placeholder: "Occupation",
    type: "text"
  },
  {
    id: "bio",
    label: "Bio",
    placeholder: "Bio",
    type: "text",
  },
  {
    id: "location",
    label: "Location",
    placeholder: "Location",
    type: "text",
  },
  {
    id: "contact",
    label: "Contact",
    placeholder: "Contact",
    type: "text",
  },
  {
    id: "languages",
    label: "Languages",
    placeholder: "Languages",
    type: "text",
  }
]


return (
  <div className="login-background">
  
    <form>
    <div className="login">
    <h1 className="glowup">Create Account</h1>
      {formFields.map((field, key) => {
        return (
          <div key={`${key}-${field.id}`}>
            <label htmlFor={field.id}>{field.label}</label>
            <input type={field.type} id={field.id} placeholder={field.placeholder} onChange={handleChange}/>
          </div>
        )
      })}
      <div>
        <button type="submit" onClick={handleSubmit}>Create Account</button>
      </div>
      </div>
    </form>
  </div>
  
  )

}
    
export default CreateAccountForm;
    

