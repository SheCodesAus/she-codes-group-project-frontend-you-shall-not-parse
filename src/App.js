import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Nav from "./components/Nav/Nav"

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";


import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/createaccount" element={<CreateAccountPage />} />
          </Routes>
      </div>
    </Router>
  )

}

export default App;