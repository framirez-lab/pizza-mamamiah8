import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CardPizza({ name, ingredients, price, img, pizza }) {
  const { addToCart } = useContext(CartContext); // Obtener la función para añadir al carrito

  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Card.Text>INGREDIENTES:</Card.Text>
          <ul>
            {Array.isArray(ingredients)
              ? ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
              : <li>{ingredients}</li>}
          </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Title>PRECIO: ${price}</Card.Title>
          {/* Usar Link para navegar a la ruta de la pizza */}
          <Link to={`/pizza/${pizza.id}`}>
            <Button variant="primary">Ver más 👀</Button>
          </Link>
          <Button variant="dark" onClick={() => addToCart(pizza)}>Añadir 🛒</Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardPizza;

