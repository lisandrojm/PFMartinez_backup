import cart from './assets/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="d-flex align-items-center justify-content-center ">
      <Link to="/cart" className="CartWidget text-black fw-bold text-decoration-none" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
        <div className="d-flex">
          <img src={cart} alt="cart-widget" className="img-fluid pe-3" />
          <span className="ps-1 pe-1 rounded bg-warning">{totalQuantity}</span>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
