import './ItemCount.css';
import { useState } from 'react';
/* bootstrap_react */
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="Counter">
      <div className="Controls d-flex justify-content-center align-items-center pb-2">
        <Button variant="danger" className="rounded fw-bold custom" onClick={decrement}>
          -
        </Button>
        <h4 className="Number p-3">{quantity}</h4>
        <Button variant="warning" className="rounded fw-bold custom" onClick={increment}>
          +
        </Button>
      </div>
      <div className="d-grid gap-2">
        <Button variant="dark" className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
