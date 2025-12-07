import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button, Container } from "react-bootstrap";
import axios from "axios";

import { useShoppingCart } from "../../context/shoppingCart/ShoppingCartContext";
import { useAuth } from "../../context/auth/AuthContext";

export default function Product() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const { addProductCart, subtractProductCart, products } = useShoppingCart();
  const { auth } = useAuth();

  useEffect(() => {
    axios
      .get(`https://691cfd93d58e64bf0d34a237.mockapi.io/products/`, {
        params: { id },
      })
      .then((response) => {
        const data = response.data.filter((d) => d.id === id);

        setProduct(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
      });
  }, [id]);

  if (error) {
    return (
      <Container className="d-flex justify-content-center mx-auto">
        <div>Product is not available...</div>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container className="d-flex justify-content-center mx-auto">
        <div>loading..</div>
      </Container>
    );
  }

  const handleSubtractProduct = () => {
    if (auth) {
      subtractProductCart(product);
    }
  };

  const handleAddProduct = () => {
    if (auth) {
      addProductCart(product);
    }
  };

  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      <div className="d-flex">
        <div className="d-flex align-items-center flex-column">
          <img src={product.image} alt={product.title} className="img-fluid" />
          <div className="d-flex align-item-center">
            <Button
              variant="danger d-flex align-items-center"
              title={auth ? "" : "Login firts"}
              onClick={handleSubtractProduct}
            >
              <span className="material-symbols-outlined">
                remove_shopping_cart
              </span>
            </Button>
            <p className="mx-3 my-auto text-center">
              {products?.find((product) => product.id === id)?.quantity || 0}
            </p>
            <Button
              variant="primary d-flex align-items-center"
              title={auth ? "" : "Login firts"}
              onClick={handleAddProduct}
            >
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
            </Button>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center ms-3">
          <h1>{product.title}</h1>
          <hr />
          <div className="mb-5 d-flex justify-content-between">
            <p>
              <strong className="me-5">{product.category}</strong>
            </p>
            <p>{`$${product.price}`}</p>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
