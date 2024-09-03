import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import "./App.css";

// Import your page components
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import Verification from "./Pages/Verification";
import Monitization from "./Pages/Monitization";
import Compaign from "./Pages/Compaign";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content-area">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/location" element={<Location />} />
              <Route path="/monetization" element={<Monitization />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/campaign" element={<Compaign />} />
              {/* Add more routes for other pages here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
