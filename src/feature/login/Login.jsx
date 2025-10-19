import { Button } from "react-bootstrap";
import { useAuth } from "../../context/auth/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const { auth, authControl } = useAuth();

  const navigate = useNavigate();

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Button
        onClick={() => {
          authControl("alguntoken");
          navigate("/");
        }}
      >
        Login
      </Button>
    </>
  );
};
