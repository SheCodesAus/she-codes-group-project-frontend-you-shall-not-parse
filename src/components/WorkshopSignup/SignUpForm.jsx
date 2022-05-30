import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

function SignUpForm() {


    const [eventModuleList, setEventModuleList] = useState([]);
    const [eventModuleRoleList, setEventModuleRoleList] = useState();

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
//          ORIGINAL
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

            //  ORIGINAL
    // Actions and Helpers = getting modules_role
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}filter_event_module_roles/${id}/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setEventModuleRoleList(data);
            });
    }, [id]);
    

    
    return (
        <>
            <h3>Input list of modules for mentor to select</h3>
            {/* <form>
            <div className="form-item">
                <label htmlFor="mentor">Mentor:</label>
                <input
                    type="text"
                    id="title"
                    value={eventModuleRoleList.mentor}
                    onChange={handleChange}
                />
            </div>

            </form> */}
            <div>
                {eventModuleList.map((event_module, key) => 
                {return (
                <h4 key={`event_module-${event_module.id}`} >
                    {event_module.module}: from {new Date(event_module.start_time).toDateString()} to {new Date(event_module.end_time).toDateString()}
                </h4>
                );
            })
            }
            </div>
            {/* <div>
                {eventModuleRoleList.map((event_module_role, key) => 
                {return (
                <h4 key={`event_module_role-${event_module_role.id}`} >
                    {event_module_role.event_module_name} : {event_module_role.role}
                </h4>
                );
            })
            }
            </div> */}
        </>
    )
}

export default SignUpForm;