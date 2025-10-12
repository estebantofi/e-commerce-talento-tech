import { Offcanvas, Table } from "react-bootstrap";

import { useShoppingCart } from "../context/ShoppingCartContext";

function OffCanvas({ show, handleClose, placement }) {
  const { products } = useShoppingCart();

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
          <p>Your shopping cart is empty</p>
        ) : (
          <div
            style={{
              height: "50vh",
              overflowY: "auto",
              border: "solid 1px red",
            }}
          >
            <Table striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.price * product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvas;
