import './ItemDetail.css';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity);
  };

  return (
    <Card style={{ width: '18rem' }} className="m-5">
      <Card.Body>
        <Card.Img variant="top" src={img} className="ps-3 pe-3 pt-3" />
        <div className="d-flex flex-column justify-content-center align-items-start pt-3 pb-2 text-start">
          <div>
            <Card.Title>{name}</Card.Title>
          </div>
          <div>
            <Card.Text>
              <b>Categoría</b> = {category}
            </Card.Text>
          </div>
          <div>
            <Card.Text>
              <b>Descripción</b> = {description}
            </Card.Text>
          </div>
          <div>
            <Card.Text>
              <b>Precio</b> = ${price}
            </Card.Text>
          </div>
        </div>
        <div>
          {quantityAdded > 0 ? (
            <div className="d-flex flex-column gap-3">
              <Link to="/cart" className="Option text-decoration-none text-white">
                <div className="d-grid gap-2">
                  <Button variant="dark">Terminar compra</Button>
                </div>
              </Link>
              <Link to="/" className="Option text-decoration-none text-white">
                <div className="d-grid gap-2">
                  <Button variant="warning">Más productos</Button>
                </div>
              </Link>
            </div>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
