import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./../App.css"
import SignUpForm from "../components/WorkshopSignup/SignUpForm";

function SignUpPage () {
    return <SignUpForm/>
}

export default SignUpPage;