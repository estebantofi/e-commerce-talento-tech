import { useState } from "react";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import OffCanvas from "./OffCanvas";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const NavBar = () => {
  const [show, setShow] = useState(false);

  const { getCountProducts } = useShoppingCart();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" className="px-3">
      <Link className="navbar-brand d-flex align-items-center" to={"/products"}>
        <span className="material-symbols-outlined">home</span> Navbar
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
        <Button
          variant="primary d-flex align-items-center"
          onClick={handleShow}
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          <Badge bg="secondary">{getCountProducts()}</Badge>
        </Button>
        <OffCanvas show={show} handleClose={handleClose} placement={"end"} />
      </Nav>
    </Navbar>
  );
};
