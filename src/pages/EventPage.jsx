import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation} from "react-router-dom";
import "./../App.css";
import "./WorkshopSignupPage";

function EventPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState();
    const location = useLocation();

    useEffect(()=> {
        const localUsername = window.localStorage.getItem("username")
        const token = window.localStorage.getItem("token");
        if(token) {
            setIsLoggedIn(true);
            setUsername(localUsername);
        }
    }, [location])

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    //State
    const [eventData, setEventData] = useState();

    //Hooks
    const { id } = useParams();
    


    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}events/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setEventData(data);
            });
    }, []);

    
    //Loading state
    if (!eventData) {
        return <h3>Loading event...</h3>;
    }


    //Normal State
    return (
    
    <div>
        <div className="event-content">
            <div className="info">
              <h3 className="title">{eventData.name}</h3>
              <h3 className="location">{eventData.location}</h3>
              <h3 className="desc">{eventData.description}</h3>
              <h3 className="finaldate">Sign up closes on {new Date(eventData.signup_closes).toDateString()}</h3>
            
              {
                  isLoggedIn ? (
                      <>
                      <Link className="signup" to="/events/id/signup"><button>Sign Up Now!</button></Link>
                      </>
                  )
                  :
                  (
                      <>
                      <Link className="signup" to="/login"><button>Login to Sign up.</button></Link>
                      <h3 className="signup">Dont have an account?</h3>
                      <Link className="signup" to="/createaccount"><button>Create Account</button></Link>
                      </>
                  )
              } 
          </div>
          <img className="image" src={eventData.image} alt="project image"/>
        </div>
    </div>
    
    );
}

export default EventPage;