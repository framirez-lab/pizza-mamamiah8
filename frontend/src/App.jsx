import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbars from "./assets/components/Navbars";
import Home from "./assets/pages/Home";
import Footer from "./assets/components/Footer";
import Pizza from "./assets/pages/Pizza";
import Cart from "./assets/pages/Cart";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import Profile from "./assets/components/Profile";
import NotFound from "./assets/components/NotFound";
import Header from "./assets/components/Header";
import { UserProvider } from "./assets/context/UserContext"; 
import { CartProvider } from "./assets/context/CartContext";

function App() {
  return (
    <UserProvider> 
      <CartProvider>
        <Router>
          <>
            <Navbars />
            <Header
              title={'¡Pizzería Mamma Mia!'}
              subtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <Footer />
          </>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;





