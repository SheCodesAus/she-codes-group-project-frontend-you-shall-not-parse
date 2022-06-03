import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

function SignUpModuleForm() {


    const [eventModuleList, setEventModuleList] = useState([]);

     //Hooks
    const { id } = useParams();
    


    //Actions and Helpers = getting modules
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}filter_event_modules/${id}/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setEventModuleList(data);
            });
    }, [id]);



    
    return (
        <>
            <h3 className="loggedin">To sign up for one of the available roles, please click on the module that interests you</h3>       
            <div className="txt">
                {eventModuleList.map((event_module, key) => 
                {return (
                <Link to={`/events/module/${event_module.id}`}>   
                <h3 className="module" key={`event_module-${event_module.id}`} >
                    {event_module.module} <br></br>
                    <h5> from {new Date(event_module.start_time).toDateString()} to {new Date(event_module.end_time).toDateString()}</h5>
                </h3>
                </Link> 
                );
            })
            }
            </div>
        </>
    )
}

export default SignUpModuleForm;