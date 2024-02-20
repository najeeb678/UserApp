import React from "react";
import Home from "./pages/home";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
