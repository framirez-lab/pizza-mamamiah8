import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import CardPizza from '../components/CardPizza';
import { CartContext } from '../context/CartContext';

function Home() {
  const { pizzas, loading, error } = useContext(CartContext); // Obtener datos de pizzas desde el contexto

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='Home'>
      <div className="card-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            img={pizza.img}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            pizza={pizza} // Pasa el objeto completo de pizza
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

