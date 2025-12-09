import { Button, Offcanvas, Table } from "react-bootstrap";

import { useShoppingCart } from "../context/shoppingCart/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

function OffCanvas({ show, handleClose, placement }) {
  const { products, cleanShoppingCart } = useShoppingCart();

  const navigate = useNavigate();

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={placement}
      style={{ width: "50%" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {products.length === 0 ? (
          <>
            <p>Your shopping cart is empty</p>
            <Button
              className="col-auto"
              variant="primary d-flex align-items-center"
              onClick={() => {
                navigate("/products");
                handleClose();
              }}
            >
              <span>Show Products</span>
            </Button>
          </>
        ) : (
          <>
            <div
              style={{
                height: "50vh",
                overflowY: "auto",
              }}
            >
              <Table striped hover>
                <thead style={{ position: "sticky", top: "0" }}>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                      <td>{product.price * product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot style={{ position: "sticky", bottom: "0" }}>
                  <tr>
                    <td colSpan="2"></td>
                    <td>Total</td>
                    <td>
                      {products.reduce(
                        (acc, actual) => acc + actual.price * actual.quantity,
                        0
                      )}
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </div>
            <div className="mt-3 row justify-content-evenly">
              <Button
                className="col-auto"
                variant="danger d-flex align-items-center"
                onClick={cleanShoppingCart}
              >
                <span className="material-symbols-outlined">
                  shopping_cart_off
                </span>
                <span>Clear Cart</span>
              </Button>
              <Button
                className="col-auto"
                variant="primary d-flex align-items-center"
                onClick={() => {
                  navigate("/buy");
                  handleClose();
                }}
              >
                <span className="material-symbols-outlined">credit_card</span>
                <span>Buy</span>
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvas;
