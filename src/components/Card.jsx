import { Card as CardBS } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Card({ title, description, image, id, price }) {
  const navigate = useNavigate();

  return (
    <CardBS
      style={{ width: "18rem", marginBottom: "20px", cursor: "pointer" }}
      onClick={() => navigate(`/product/${id}`)}
    >
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
