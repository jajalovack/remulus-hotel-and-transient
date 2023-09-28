import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "./../../libraries/http.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCircle,
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  // Initial form data and validation state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [validated, setValidated] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const createAccount = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    // Enable form validation
    setValidated(true);

    // Check if the form is valid
    if (!form.checkValidity()) {
      event.stopPropagation();
      console.log("Error in form");
      return;
    }

    // Check if password and confirmed password match
    if (formData.password !== formData.confirmPassword) {
      console.log("Password and confirmed password do not match");
      return;
    }

    try {
      const response = await http.post("/register", formData);

      // Store user data and token in localStorage
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Trigger an event to notify other parts of the application (if needed)
      window.dispatchEvent(new Event("storage"));

      // Redirect to the home page
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="register" className="register-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={7} lg={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Register</Card.Title>
                <Form noValidate validated={validated} onSubmit={createAccount}>
                  {/* First Name */}
                  <Form.Group className="mb-2">
                    <Form.Label>
                      <FontAwesomeIcon icon={faUserCircle} /> First Name
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* Last Name */}
                  <Form.Group className="mb-2">
                    <Form.Label>
                      <FontAwesomeIcon icon={faUserCircle} /> Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* Username */}
                  <Form.Group className="mb-2">
                    <Form.Label>
                      <FontAwesomeIcon icon={faUser} /> Username
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* Password */}
                  <Form.Group className="mb-2">
                    <Form.Label>
                      <FontAwesomeIcon icon={faLock} /> Password
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* Confirmed Password */}
                  <Form.Group className="mb-2">
                    <Form.Label>
                      <FontAwesomeIcon icon={faLock} /> Confirm Password
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* Email Address */}
                  <Form.Group className="mb-2">
                    <Form.Label>
                      <FontAwesomeIcon icon={faEnvelope} /> Email Address
                    </Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* Submit Button */}
                  <Form.Group className="mb-2 d-flex justify-content-center">
                    <Button as="input" type="submit" value="Create Account" />
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
