
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; 

const Profile = () => {
  const { logout, email } = useContext(UserContext); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Perfil de Usuario</h2>
      <p>Email: {email || "No disponible"}</p>
      <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
