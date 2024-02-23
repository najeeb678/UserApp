import Home from "./pages/home";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import PrivateRoutes from "./route/privateRoute";

function App() {
  //const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
