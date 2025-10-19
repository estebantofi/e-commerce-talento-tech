import { Outlet } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

function Layout() {
  return (
    <>
      <header style={{ height: "55px" }}>
        <NavBar />
      </header>
      <main
        style={{
          height: "90vh",
          overflowY: "auto",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
