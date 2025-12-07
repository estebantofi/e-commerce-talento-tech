import { useState } from "react";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import OffCanvas from "./OffCanvas";
import { useShoppingCart } from "../context/shoppingCart/ShoppingCartContext";
import { useAuth } from "../context/auth/AuthContext";

import { decodeToken } from "react-jwt";
import axios from "axios";

export const NavBar = () => {
  const [show, setShow] = useState(false);

  const { getCountProducts, setProducts, setCartId, cartId } =
    useShoppingCart();
  const { auth, clearToken } = useAuth();

  const navigate = useNavigate();

  let userName = {};

  if (auth) {
    const token = localStorage.getItem("token");

    if (token) {
      const { sub: userId, user } = decodeToken(token);
      userName = { user };

      const existProducts = getCountProducts();

      if (!existProducts && cartId === null) {
        const url = "https://691cfd93d58e64bf0d34a237.mockapi.io/carts";

        axios
          .get(url, {
            params: {
              userId,
              completed: false,
            },
            headers: {
              "content-type": "application/json",
            },
          })
          .then((cart) => {
            const cardId = cart.data[0].id;

            const personCart = cart.data.flatMap((d) => {
              const { products } = d;

              if (products?.length) {
                return products;
              } else {
                return [];
              }
            });

            setCartId(cardId);
            setProducts(personCart);
          })
          .catch(() => {
            axios
              .post(url, {
                userId,
                completed: false,
                products: [],
              })
              .then((resp) => {
                const cardId = resp.data.id;

                setCartId(cardId);
                setProducts([]);
              });
          });
      }
    }
  }

  const handleLogout = () => {
    clearToken();
    setCartId(null);
    setProducts([]);

    userName = {};
  };

  const handleLogin = () => {
    navigate("/login");
  };

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
      </Nav>
      {userName?.user && (
        <Nav className="me-2">
          <p className="m-0 text-light fs-4">Hola, {userName.user}</p>
        </Nav>
      )}
      <Nav>
        <Button
          variant="primary d-flex align-items-center"
          onClick={handleShow}
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          <Badge bg="secondary">{getCountProducts()}</Badge>
        </Button>
        <OffCanvas
          show={show}
          handleClose={handleClose}
          placement={"end"}
          setShow={setShow}
        />
      </Nav>
      <Nav>
        <Button
          variant="dark d-flex align-items-center"
          onClick={auth ? handleLogout : handleLogin}
          title={auth ? "logout" : "login"}
        >
          {auth ? (
            <span className="material-symbols-outlined">logout</span>
          ) : (
            <span className="material-symbols-outlined">login</span>
          )}
        </Button>
      </Nav>
    </Navbar>
  );
};
