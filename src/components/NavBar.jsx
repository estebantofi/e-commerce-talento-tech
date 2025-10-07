import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Link className="navbar-brand" to={"/products"}>
        Navbar
      </Link>
      <Nav className="me-auto">
        <Link className="nav-link" to={"/products"}>
          Products
        </Link>
        <Link className="nav-link" to={"/superdeals"}>
          SuperDeals
        </Link>
      </Nav>
      <Nav>
        <Link className="nav-link" to={"/cart"}>
          cart
        </Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
