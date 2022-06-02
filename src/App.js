import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components
import Nav from "./components/Nav/Nav"
import Nav2 from "./components/Nav2/Nav2"


//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import UserProfile from "./pages/UserProfile";
import EventPage from "./pages/EventPage";
import EventModulePage from "./pages/EventModulePage";
// import SignUpPage from "./pages/WorkshopSignupPage";
import EditProfilePage from "./pages/EditProfilePage";
import AllEvents from "./pages/AllEventsPage";
import Programs from "./pages/ProgramInfoPage";


// styles
import "./App.css";

// form
import SignUpForm from "./components/WorkshopSignup/SignUpForm";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Nav2>
            <Routes>
              <Route path="/events_all" element={<AllEvents/>}/>
              <Route path="/ourprograms" element={<Programs/>}/>
            </Routes>
          </Nav2>
        </div>
        <div>
          <Nav/>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/createaccount" element={<CreateAccountPage />} />
              <Route path="/users/:id" element={<UserProfile/>} />
              <Route path="/filter_event_module_roles_user/:username" element={<UserProfile/>} />
              <Route path="/events/:id" element={<EventPage/>} />
              {/* <Route path="/events/id/signup" element={<SignUpPage/>} /> */}
              <Route path="/ourprograms" element={<Programs/>}/>
               <Route path="/users/:id/edit" element={<EditProfilePage/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );

}

export default App;