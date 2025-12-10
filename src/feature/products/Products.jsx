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

  const deleteProduct = async (id) => {
    try {
      const resp = await axios.delete(
        `https://691cfd93d58e64bf0d34a237.mockapi.io/products/${id}`
      );

      if (resp) {
        const filterProducts = products.filter((product) => product.id !== id);

        setProducts(filterProducts);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const saveProduct = async (productData) => {
    const BASE_URL = "https://691cfd93d58e64bf0d34a237.mockapi.io/products";

    const isEditing = !!productData.id;

    let apiUrl = BASE_URL;
    let httpMethod = "";

    if (isEditing) {
      apiUrl = `${BASE_URL}/${productData.id}`;
      httpMethod = "PUT";
    } else {
      httpMethod = "POST";
    }

    try {
      const resp = await axios({
        method: httpMethod,
        url: apiUrl,
        data: productData,
      });

      if (resp) {
        if (isEditing) {
          const index = products.findIndex(
            (product) => product.id === productData.id
          );

          if (index === -1) return;

          const productsCopia = [...products];

          const objetoActualizado = {
            ...productsCopia[index],
            ...productData,
          };

          productsCopia[index] = objetoActualizado;

          setProducts(productsCopia);
        } else {
          const { data } = resp;

          setProducts([...products, data]);
        }
        return true;
      }
    } catch (error) {
      console.error(
        `Error al ${isEditing ? "editar" : "crear"} el producto:`,
        error
      );

      return false;
    }
  };

  return (
    <>
      {isAdmin && (
        <>
          <ModalComponent
            isShow={isShow}
            title={"New Product"}
            body={
              <div className="d-flex justify-content-center">
                <CartTemplate saveProduct={saveProduct} setEdit={setIsShow} />
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
      <Container className="row mx-auto gap-3 justify-content-start">
        {products.map(({ description, image, title, id, price }) => (
          <Card
            isAdmin={isAdmin}
            description={description}
            image={
              image?.trim() ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNfRFSIbyb40oYPjza5OgYytSKB5U0019ZQ&s"
            }
            title={title}
            price={price}
            key={id}
            id={id}
            deleteProduct={deleteProduct}
            saveProduct={saveProduct}
          />
        ))}
      </Container>
    </>
  );
}

export default Products;
