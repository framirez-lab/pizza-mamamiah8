import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>{
    return(
        <div className="text-center ">
    <div className="not-found-container">
      <h1>404</h1>
      <p>¡Oops! La página que buscas no existe.</p>
      <Link to="/" className="home-link">Volver al Inicio</Link>
    </div>
        </div>
    )
}

export default NotFound;