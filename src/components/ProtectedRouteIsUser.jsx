import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

const ProtectedRouteIsUser = () => {
  const { isAdmin } = useAuth();

  if (isAdmin) {
    return <Navigate to="/dashboard/products" replace />;
  }

  return <Outlet />;
};

export default ProtectedRouteIsUser;
