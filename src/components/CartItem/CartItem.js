import './CartItem.css';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  const deleteProduct = () => {
    removeItem(item.id);
  };

  return (
    <tr>
      <th scope="row">{item.quantity}</th>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>${item.quantity * item.price}</td>
      <td>
        <Button variant="danger" className="rounded fw-bold" onClick={() => deleteProduct()}>
          x
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
