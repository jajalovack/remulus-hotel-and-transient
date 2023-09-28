import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "./../../libraries/http.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);

  async function createAccount(event) {
    event.preventDefault();

    const form = event.currentTarget;

    setValidated(true);

    if (!form.checkValidity()) {
      event.stopPropagation();
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const response = await http.post("/login", data);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      window.dispatchEvent(new Event("storage"));
      navigate("/");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.log(error);
    }
  }

  return (
    <section id="Login" className="login-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={7} lg={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Login</Card.Title>
                <Form noValidate validated={validated} onSubmit={createAccount}>
                  <Form.Group className="mb-2">
                    <Form.Label>
                      <FontAwesomeIcon icon={faEnvelope} /> Email Address
                    </Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>
                      <FontAwesomeIcon icon={faLock} />
                      Password
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>
                      {" "}
                      <FontAwesomeIcon icon={faLock} />
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  {error && (
                    <Alert variant="danger">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      {error}
                    </Alert>
                  )}
                  <Form.Group className="mb-2 d-flex button-container ">
                    <Button
                      className="btn"
                      as="input"
                      type="submit"
                      value="Sign in"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
