import { Offcanvas } from "react-bootstrap";

function OffCanvas({ show, handleClose, placement }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement={placement}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvas;
