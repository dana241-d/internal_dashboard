import { AuthContext } from "@/contexts/AuthContext";
import Login from "@/pages/Login";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <div> {children} </div> : <Navigate to="/login" />;
}

export default PrivateRoute;
