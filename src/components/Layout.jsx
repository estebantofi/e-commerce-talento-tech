import { Navigate, Outlet } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { useAuth } from "../context/auth/AuthContext";

function Layout() {
  const { isAdmin } = useAuth();

  return (
    <>
      <header style={{ height: "55px" }}>
        <NavBar />
      </header>
      <main
        style={{
          height: isAdmin ? "94vh" : "90vh",
          overflowY: "auto",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <Outlet />
      </main>
      {!isAdmin && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
}

export default Layout;
