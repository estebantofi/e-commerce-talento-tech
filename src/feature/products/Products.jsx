import { Button, Container } from "react-bootstrap";

import { useEffect, useState } from "react";
import axios from "axios";

import { useAuth } from "../../context/auth/AuthContext";

import Card from "./components/Card";
import { ModalComponent } from "../../components/ModalComponent";
import { CartTemplate } from "../../components/CartTemplate";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);

  const { isAdmin } = useAuth();

  useEffect(() => {
    axios
      .get("https://691cfd93d58e64bf0d34a237.mockapi.io/products")
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
    <>
      {isAdmin && (
        <>
          <ModalComponent
            isShow={isShow}
            title={"New Product"}
            body={
              <div className="d-flex justify-content-center">
                <CartTemplate setEdit={setIsShow} />
              </div>
            }
          />
          <div
            className="d-flex"
            style={{
              top: "60px",
              right: "32px",
              position: "fixed",
              zIndex: "1",
            }}
          >
            <Button className="ms-auto" onClick={() => setIsShow(true)}>
              New Product
            </Button>
          </div>
        </>
      )}
      <Container className="row mx-auto justify-content-between">
        {products.map(({ description, image, title, id, price }) => (
          <Card
            isAdmin={isAdmin}
            description={description}
            image={image}
            title={title}
            price={price}
            key={id}
            id={id}
          />
        ))}
      </Container>
    </>
  );
}

export default Products;
