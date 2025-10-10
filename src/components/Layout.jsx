import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

function Layout({ children }) {
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
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
