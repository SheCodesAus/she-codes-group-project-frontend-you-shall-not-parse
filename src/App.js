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


import "./App.css";

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
          </Routes>
      </div>
    </Router>
  );

}

export default App;