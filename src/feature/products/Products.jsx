import { Container } from "react-bootstrap";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center mx-auto">
        <div>loading..</div>
      </Container>
    );
  }

  return (
    <Container className="row mx-auto justify-content-between">
      {products.map(({ description, image, title, id, price }) => (
        <Card
          description={description}
          image={image}
          title={title}
          price={price}
          key={id}
          id={id}
        />
      ))}
    </Container>
  );
}

export default Products;
