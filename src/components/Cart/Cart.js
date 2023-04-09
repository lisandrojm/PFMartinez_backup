import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <div className="container col-8 col-md-3">
          <div className="pt-3">
            <h3>Carrito vacío</h3>
          </div>
          <div className="container">
            <Link to="/ " className="Option text-decoration-none text-white">
              <div className="pt-3 d-grid gap-2">
                <Button variant="warning">Productos</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="pt-3">
        <h3>Carrito</h3>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Cantidad</th>
            <th scope="col">Artículo</th>
            <th scope="col">Precio</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className="container col-8 col-md-3">
        <div className="pt-2">
          <h3>Total: ${total}</h3>
        </div>
        <div></div>
        <div className="pt-3 d-grid gap-2">
          <Button variant="danger" onClick={() => clearCart()} className="Button">
            Limpiar carrito
          </Button>
        </div>
        <Link to="/checkout" className="Option text-decoration-none text-white">
          <div className="pt-3 d-grid gap-2">
            <Button variant="dark">Checkout</Button>
          </div>
        </Link>
        <Link to="/" className="Option text-decoration-none text-white">
          <div className="pt-3 d-grid gap-2">
            <Button variant="warning">Mas productos</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
