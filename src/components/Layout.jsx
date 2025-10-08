// src/components/Layout.jsx
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

function Layout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main> {children} </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
