import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Count from "./Components/Count";
import Features from "./Components/Features";
import Download from "./Components/Download";
import Pricing from "./Components/Pricing";
import Testimonial from "./Components/Testimonial";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const Home = () => (
  <>
    <Navbar />
    <Content />
    <Count />
    <Features />
    <Pricing />
    <Testimonial />
    <Download />
  </>
);

const App = () => {
  return (
      <Routes>
        {/* Home route with Navbar and all components */}
        <Route path="/" element={<Home />} />

        {/* Login route (opens separately) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
  );
};

export default App;
