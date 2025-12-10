import { Button, Card as CardBS } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartTemplate } from "../../../components/CartTemplate";

function Card({
  title,
  description,
  image,
  id,
  price,
  isAdmin,
  deleteProduct,
  saveProduct,
}) {
  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();

  return edit ? (
    <CartTemplate
      title={title}
      description={description}
      image={image}
      id={id}
      price={price}
      setEdit={setEdit}
      saveProduct={saveProduct}
    />
  ) : (
    <CardBS
      style={{ width: "18rem", marginBottom: "20px", cursor: "pointer" }}
      onClick={() => {
        if (!isAdmin) {
          navigate(`/product/${id}`);
        }
      }}
    >
      {isAdmin && (
        <div className="d-flex mt-1">
          <Button
            className="col-2 ms-auto"
            variant="danger d-flex align-items-center justify-content-center"
            onClick={() => {
              deleteProduct(id);
            }}
          >
            <span className="material-symbols-outlined">delete</span>
          </Button>
          <Button
            className="col-2 ms-1 "
            variant="primary d-flex align-items-center justify-content-center"
            onClick={() => setEdit(true)}
          >
            <span className="material-symbols-outlined">edit</span>
          </Button>
        </div>
      )}
      <CardBS.Img
        className="mt-3 border-bottom"
        variant="top"
        src={image}
        style={{ width: "260px", height: "280px" }}
      />
      <p className="ms-auto mt-3 fs-4">$ {price}</p>
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
        <CardBS.Text style={{ height: "200px", overflow: "auto" }}>
          {description}
        </CardBS.Text>
      </CardBS.Body>
    </CardBS>
  );
}

export default Card;
