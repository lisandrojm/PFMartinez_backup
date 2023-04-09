import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      toast.error('El producto ya fue agregado', {
        autoClose: 1500,
      });
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  const totalQuantity = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  return <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>{children}</CartContext.Provider>;
};

export default CartProvider;
