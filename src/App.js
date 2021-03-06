import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components
import Nav from "./components/Nav/Nav"
import Nav2 from "./components/Nav2/Nav2"
import HeaderImage from "./components/HeaderImage/Header";
import Footer from "./components/Footer/Footer";


//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import UserProfile from "./pages/UserProfile";
import EventPage from "./pages/EventPage";
import EventModulePage from "./pages/EventModulePage";
import EditProfilePage from "./pages/EditProfilePage";
import AllEvents from "./pages/AllEventsPage";
import Programs from "./pages/ProgramInfoPage";
// Jordan changes to see invoice page
import InvoicePage from "./pages/InvoicePage";



// styles
import "./App.css";


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
              <Route path="/ourprograms" element={<Programs/>}/>
              <Route path="/users/:id/edit" element={<EditProfilePage/>} />
              <Route path="/events/module/:id" element={<EventModulePage/>} />
              <Route path="/users/:id/edit" element={<EditProfilePage/>} />
              <Route path="/events/module/:id" element={<EventModulePage/>} />
              {/* Jordan edit to see invoice page */}
              <Route path="/users/:id/invoice" element={<InvoicePage/>} />
            </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  );

}

export default App;