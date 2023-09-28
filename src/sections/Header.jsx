import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scoped.css";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState(window.location.pathname);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthenticationStatus();
    window.addEventListener("storage", checkAuthenticationStatus);
    return () => {
      window.removeEventListener("storage", checkAuthenticationStatus);
    };
  }, []);

  function checkAuthenticationStatus() {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }

  function logout() {
    localStorage.clear();
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <Navbar expand="lg" className="navbarBG" data-bs-theme="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to={`/`}>
          <ReactSVG
            src="../assets/logoNavbar.svg"
            beforeInjection={(svg) => {
              svg.setAttribute("style", "height: 50px; margin: 5px 20px;");
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={active} onSelect={(selected)=>setActive(selected)}>
            <Nav.Link as={Link} to={`/`} eventKey={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={`/About`} eventKey={"/About"}>About</Nav.Link>
            <Nav.Link as={Link} to={`/rooms`} eventKey={"/rooms"}>Book Rooms</Nav.Link>
          </Nav>
          <Nav className="logReg">
            {isAuthenticated ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
