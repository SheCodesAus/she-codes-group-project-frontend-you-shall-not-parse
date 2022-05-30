import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

function SignUpModuleForm() {


    const [eventModuleList, setEventModuleList] = useState([]);

     //Hooks
    const { id } = useParams();
    

    // const handleChange = (event) => {
    //     const { id, value } = event.target;
    //     setEventModuleRoleList((prevEventModuleRoleList) => ({
    //         ...prevEventModuleRoleList,
    //         [id]: value,
    //     }));
    // };


    // const handleSubmit = async(event) => {
    //     event.preventDefault();
    //     const token = window.localStorage.getItem("token");
    //     if (!token)return;
    //             const signupEvent = {}
    //             if (workshop.mentor !== eventModuleRoleList.mentor) signupEvent.mentor = eventModuleRoleList.mentor
    //             if (workshop.gift_back !== eventModuleRoleList.gift_back) signupEvent.gift_back = eventModuleRoleList.gift_back

    //             if (Object.keys(signupEvent).length > 0) {
    //                 try {
    //                     const res = await 
    //                     fetch(`${process.env.REACT_APP_API_URL}filter_event_module_roles/${id}/`, {
    //                         method:"put",
    //                         headers: {
    //                             "Content-Type": "application/json",
    //                             Authorization: `Token ${token}`,
    //                         },
    //                         body: JSON.stringify({...signupEvent}),
    //                     });
    //                     const data = await res.json()
    //                     console.log(data);
    //                     // navigate(`/event/${workshop.id}`);               
    //                 }catch(err) {
    //                     console.log(err);
    //                 }
    //             }
    //         }



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
            <h3>Please find below the available modules for this workshop</h3>
            <h3>To sign up for one of the available roles, please click on the module that interests you</h3>       
            <div>
                {eventModuleList.map((event_module, key) => 
                {return (
                <Link to={`/events/module/${event_module.id}`}>   
                <h4 key={`event_module-${event_module.id}`} >
                    {event_module.module}: from {new Date(event_module.start_time).toDateString()} to {new Date(event_module.end_time).toDateString()}
                </h4>
                </Link> 
                );
            })
            }
            </div>
        </>
    )
}

export default SignUpModuleForm;