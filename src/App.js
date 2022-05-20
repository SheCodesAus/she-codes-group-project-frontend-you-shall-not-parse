import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./components/Nav/Nav";


import RegistrationPage from "./pages/RegistrationPage";






function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Routes>

            <Route path="users/register/" element={<RegistrationPage />} />

            
          </Routes>
      </div>
    </Router>
  );
}
export default App;


















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
