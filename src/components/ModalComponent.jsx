import Modal from "react-bootstrap/Modal";

export const ModalComponent = ({ isShow, title, body }) => {
  return (
    <Modal show={isShow} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};
