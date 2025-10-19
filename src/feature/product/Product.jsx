import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button, Container } from "react-bootstrap";
import axios from "axios";

import { useShoppingCart } from "../../context/shoppingCart/ShoppingCartContext";

export default function Product() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { addProductCart, subtractProductCart, products } = useShoppingCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center mx-auto">
        <div>loading..</div>
      </Container>
    );
  }

  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      <div className="d-flex">
        <div className="d-flex align-items-center flex-column">
          <img src={product.image} alt={product.title} className="img-fluid" />
          <div className="d-flex align-item-center">
            <Button
              variant="danger d-flex align-items-center"
              onClick={() => subtractProductCart(product)}
            >
              <span className="material-symbols-outlined">
                remove_shopping_cart
              </span>
            </Button>
            <p className="mx-3 my-auto text-center">
              {products?.find((product) => String(product.id) === id)
                ?.quantity || 0}
            </p>
            <Button
              variant="primary d-flex align-items-center"
              onClick={() => addProductCart(product)}
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
