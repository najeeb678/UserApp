import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  let token = localStorage.getItem("token");

  if (!token) {
    return <Outlet />;
  } else if (token) {
    return <Navigate to="/home" />;
  } else {
    return <Navigate to="/" />;
  }
};
export default PrivateRoutes;

