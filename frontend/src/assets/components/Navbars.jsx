import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Navbars() {
  const { cart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  const totalPrice = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);

  return (
    <Navbar bg="dark" expand="md" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="me-2">
              <Button variant="outline-warning" className="text-white">
                🍕 Home
              </Button>
            </Link>
            {token ? (
              <>
                <Link to="/profile" className="me-2">
                  <Button variant="outline-warning" className="text-white">
                    👤 Profile
                  </Button>
                </Link>
                <Button variant="outline-danger" className="me-2" onClick={logout}>
                  🚪 Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/register" className="me-2">
                  <Button variant="outline-warning" className="text-white">
                    📝 Register
                  </Button>
                </Link>
                <Link to="/login" className="me-2">
                  <Button variant="outline-warning" className="text-white">
                    🔑 Login
                  </Button>
                </Link>
              </>
            )}
            <Link to="/cart" className="me-2">
              <Button variant="outline-warning" className="text-white">
                🛒 Cart
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex me-4">
          <Link to="/cart">
            <Button variant="outline-primary">
              🛒 Total: ${totalPrice.toLocaleString()}
            </Button>
          </Link>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navbars;



