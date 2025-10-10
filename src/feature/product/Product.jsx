import { useParams } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Button } from "react-bootstrap";

export default function Product() {
  const { addProductCart } = useShoppingCart();

  const { id } = useParams();
  return (
    <div>
      Product :{id}
      <Button
        variant="primary d-flex align-items-center"
        onClick={() => addProductCart({ id })}
      >
        Add
      </Button>
    </div>
  );
}
