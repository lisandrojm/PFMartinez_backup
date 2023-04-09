import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  const productsGrouped = [];
  const groupSize = 3;

  for (let i = 0; i < products.length; i += groupSize) {
    productsGrouped.push(products.slice(i, i + groupSize));
  }

  return (
    <div className="ListGroup">
      <div className="container">
        {productsGrouped.map((group, index) => (
          <div key={index} className="row row-cols-1 row-cols-md-3 g-4 ">
            {group.map((prod) => (
              <div key={prod.id} className="col d-flex justify-content-center">
                <Item {...prod} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
