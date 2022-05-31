import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components
import Nav from "./components/Nav/Nav"


//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import UserProfile from "./pages/UserProfile";
import EventPage from "./pages/EventPage";
import SignUpPage from "./pages/WorkshopSignupPage";
import EditProfilePage from "./pages/EditProfilePage";


import "./App.css";
import SignUpForm from "./components/WorkshopSignup/SignUpForm";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/createaccount" element={<CreateAccountPage />} />
            <Route path="/users/:id" element={<UserProfile/>} />
            <Route path="/events/:id" element={<EventPage/>} />
            <Route path="/events/id/signup" element={<SignUpPage/>} />
            <Route path="/users/:id/edit" element={<EditProfilePage/>} />
        
          </Routes>
      </div>
    </Router>
  );

}

export default App;