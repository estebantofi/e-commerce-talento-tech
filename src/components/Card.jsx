import { Card as CardBS } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Card({ title, description, image, id }) {
  const navigate = useNavigate();

  return (
    <CardBS
      style={{ width: "18rem", marginBottom: "20px", cursor: "pointer" }}
      onClick={() => navigate(`/product/${id}`)}
    >
      <CardBS.Img
        variant="top"
        src={image}
        style={{ width: "260px", height: "280px" }}
      />
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
