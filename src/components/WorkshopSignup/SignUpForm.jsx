import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

function SignUpForm() {


    const [eventModuleList, setEventModuleList] = useState([]);




     //Hooks
    const { id } = useParams();
    // const navigate = useNavigate();
    


    //Actions and Helpers
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
            <h3>Input list of modules for mentor to select</h3>
            <div>
                {eventModuleList.map((event_module, key) => 
                {return (
                <h4 key={`event_module-${event_module.id}`} >
                    {event_module.module} 
                </h4>
                );
            })
            }
            </div>
        </>
    )
}

export default SignUpForm;