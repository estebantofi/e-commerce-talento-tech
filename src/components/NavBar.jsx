import { useState } from "react";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import OffCanvas from "./OffCanvas";

export const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
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
        <Button variant="primary" onClick={handleShow}>
          Shopping Cart <Badge bg="secondary">9</Badge>
        </Button>
        <OffCanvas show={show} handleClose={handleClose} placement={"end"} />
      </Nav>
    </Navbar>
  );
};
