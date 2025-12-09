import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

const ProtectedRouteIsAdmin = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/products" replace />;
  }

  return <Outlet />;
};

export default ProtectedRouteIsAdmin;
