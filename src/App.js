//using PrivateRoutes

import Home from "./pages/home";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import PrivateRoutes from "./route/privateRoute";

function App() {
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





//using PrivateRoutes2

// import Home from "./pages/home";
// import LoginForm from "./pages/LoginForm";
// import SignUp from "./pages/signUp";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./pages/NavBar";
// import PrivateRoutes2 from "../src/route/PrivateRoutes2"; // Note: Using PrivateRoutes2 here

// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route element={<PrivateRoutes2/>}> 
//           <Route path="/" element={<LoginForm />} />
//           <Route path="/signUp" element={<SignUp />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
