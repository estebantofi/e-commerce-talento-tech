import { Container } from "react-bootstrap";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container className="row mx-auto justify-content-between">
      {products.length ? (
        products.map(({ description, image, title, id, price }) => (
          <Card
            description={description}
            image={image}
            title={title}
            price={price}
            key={id}
            id={id}
          />
        ))
      ) : (
        <div className="d-flex justify-content-center">
          <p>without Productos</p>
        </div>
      )}
    </Container>
  );
}

export default Products;
