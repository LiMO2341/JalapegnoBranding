import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
