import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../styles.css";
import backgroundImage from "../imgData/pexels-cottonbro-studio-4123711.jpg";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignUp() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "30px", // Adjust padding as needed
    height: "calc(100vh - 50px)", // Adjust height as needed
  };
  const [formData, setFormData] = useState({
    accountType: "",
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let apiUrl;
      console.log(formData);
      if (formData.accountType === "artist") {
        apiUrl = "http://localhost:3001/api/artists";
      } else {
        apiUrl = "http://localhost:3001/api/users";
      }
      const response = await axios.post(apiUrl, formData);
      console.log(response);
      console.log("Sign-Up Successfull");
      setSubmitted(true);

      setFormData({
        accountType: "",
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
      });
    } catch (error) {
      console.log("Sign-up error:", error);
    }
  };
  return (
    <div style={divStyle}>
      <div className="sign-up-box">
        {submitted ? (
          <div>
            <h2>Thanks for Registering!</h2>
            <p>You can now proceed to login.</p>
            <Link to="/login">
              <Button variant="dark">Login</Button>
            </Link>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="accountType">
                <Form.Label>Account Type</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    name="accountType"
                    id="artist"
                    label="Artist"
                    value="artist"
                    checked={formData.accountType === "artist"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    name="accountType"
                    id="user"
                    label="User"
                    value="user"
                    checked={formData.accountType === "user"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Street"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                type="text"
                name="address2"
                placeholder="Apartment, studio, or floor"
                value={formData.address2}
                onChange={handleChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
}
