import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      const tokenExists = !!localStorage.getItem("token");

      if (auth !== tokenExists) {
        setAuth(tokenExists);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [auth]);

  const authControl = (token) => {
    localStorage.setItem("token", token);
    setAuth(true);
  };

  const clearToken = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, authControl, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};
