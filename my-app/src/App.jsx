import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Addition from "./components/Addition";
import Subtraction from "./components/Subtraction";
import Multiplication from "./components/Multiplication";
import Division from "./components/Division";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Calculator</h1>
        <nav>
          <Link to="/">Addition</Link>
          <Link to="/subtraction">Subtraction</Link>
          <Link to="/multiplication">Multiplication</Link>
          <Link to="/division">Division</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Addition />} />
          <Route path="/addition" element={<Addition />} />
          <Route path="/subtraction" element={<Subtraction />} />
          <Route path="/multiplication" element={<Multiplication />} />
          <Route path="/division" element={<Division />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
