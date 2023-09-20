import {Container,Nav,Navbar} from 'react-bootstrap';
import "./Header.scoped.css";
import {ReactSVG} from "react-svg";

const Header=(()=> {
  return (
    <Navbar expand="lg" className="navbarBG" data-bs-theme="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand href={`/`}><ReactSVG src="../assets/logoNavbar.svg" beforeInjection={(svg)=>{svg.setAttribute("style","height: 50px; margin: 5px 20px;")}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={`/`} className='active'>Home</Nav.Link>
            <Nav.Link href={`/About`}>About</Nav.Link>
            <Nav.Link href={`/Services`}>Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
})

export default Header