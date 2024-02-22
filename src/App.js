import React from "react";
import Home from "./pages/home";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import { useSelector } from "react-redux";

function App() {
  const {isAuthenticated}=useSelector((state)=>state.userDetails)
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={isAuthenticated?<Home/>:<LoginForm />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
