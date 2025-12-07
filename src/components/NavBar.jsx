import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; 

function NavBar() {
  
  // Volvemos a usar un estado local para simular el inicio de sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  const total = 25000;

  return (
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> ¡Pizzería Mamma Mia!</Navbar.Brand>          
          <Nav className="me-auto">
            
            <Button variant="outline-light" className="ms-2">🍕Home</Button>

            {isLoggedIn ? (
              <>
                <Button variant="outline-light" className="ms-2">🔓 Profile</Button> 
                
                <Button variant="outline-light" className="ms-2" onClick={() => setIsLoggedIn(false)}>🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-light" className="ms-2" onClick={() => setIsLoggedIn(true)}>🔐 Login</Button>
                <Button variant="outline-light" className="ms-2">🔐 Register</Button>
              </>
            )}
          </Nav>
          <Nav>
            <Button variant="outline-info">🛒 Total: ${total.toLocaleString('es-CL')}</Button>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;