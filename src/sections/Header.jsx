import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scoped.css";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import navBarLogo from "../assets/logoNavbar.svg";

const Header = () => {
  const [active, setActive] = useState(window.location.pathname);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate=useNavigate();

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
    navigate("/");
  }

  const user=JSON.parse(localStorage.getItem("user"))

  return (
    <Navbar expand="lg" className="navbarBG" data-bs-theme="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to={`/`}>
          <object data={navBarLogo} className="navBarLogo"></object>
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
              <Nav.Link onClick={logout}>Logout ({user.firstName} {user.lastName})</Nav.Link>
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
