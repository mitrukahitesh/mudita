import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Survey from "./pages/Survey";
import Doctor from "./pages/Doctor";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="font-poppins">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Survey" element={<Survey />} />
            <Route path="/Doctor" element={<Doctor />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
