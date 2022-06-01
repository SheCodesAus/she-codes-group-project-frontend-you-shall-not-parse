import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./../App.css"

import SignUpRoleForm from "../components/WorkshopSignup/RoleSignUp";



function EventModulePage() {

    return (
    
    <div>
        <SignUpRoleForm/>
    </div>

    );
}

export default EventModulePage;