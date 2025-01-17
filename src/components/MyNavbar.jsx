import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavBar() {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container >
        <Navbar.Brand href="#home">Weather app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Previsioni</Nav.Link>
            <Nav.Link href="#link">Regioni</Nav.Link>
            <Nav.Link href="#link">Notizie</Nav.Link>
            <Nav.Link href="#link">info</Nav.Link>
            <NavDropdown title="Social" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">X</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavBar