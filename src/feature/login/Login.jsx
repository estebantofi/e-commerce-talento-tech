import { Button } from "react-bootstrap";
import { useAuth } from "../../context/auth/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { FormLogin } from "./components/LoginComponent";

export const Login = () => {
  const { auth, authControl } = useAuth();

  const navigate = useNavigate();

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div
        className="align-items-center d-flex justify-content-around"
        style={{ height: "100vh", width: "100vw" }}
      >
        <FormLogin authControl={authControl} navigate={navigate} />
      </div>
    </>
  );
};
