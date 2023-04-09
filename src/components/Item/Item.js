import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }} className="m-4">
        <Card.Body>
          <Card.Img variant="top" src={img} className="ps-3 pe-3 pt-3" />
          <div className="d-flex flex-column justify-content-center align-items-start pt-3 pb-2 text-start">
            <div>
              <Card.Title>{name}</Card.Title>
            </div>
            <div>
              <Card.Text>
                <b>Precio</b> = ${price}
              </Card.Text>
            </div>
            <Card.Text>
              <b>Stock</b> = {stock}
            </Card.Text>
          </div>
          <Link to={`/item/${id}`} className="Option text-decoration-none text-white">
            <div className="pt-2 d-grid gap-2">
              <Button variant="dark">Ver detalle</Button>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
