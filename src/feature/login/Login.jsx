import { Button } from "react-bootstrap";
import { useAuth } from "../../context/auth/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FormLogin } from "./components/LoginComponent";

export const Login = () => {
  const location = useLocation();
  const { auth, authControl } = useAuth();

  const isDashboardRoute = location.pathname === "/dashboard/login";

  const navigate = useNavigate();

  if (auth) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <div
        className="align-items-center d-flex justify-content-around"
        style={
          isDashboardRoute
            ? {
                backgroundImage: `url("https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/10208390/og_image/optimized/0823-DashboardDesign-Dan-Social-e319a5a8a7ceb75b9e5010740700d409.png")`,
                height: "100vh",
                width: "100vw",
              }
            : { height: "100vh", width: "100vw" }
        }
      >
        <FormLogin
          authControl={authControl}
          isDashboardRoute={isDashboardRoute}
          navigate={navigate}
        />
      </div>
    </>
  );
};
