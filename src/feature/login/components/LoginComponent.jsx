import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { emulateJWT } from "./emulateJWT";

export function FormLogin({ authControl, navigate, isDashboardRoute }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState([]);

  const loginSubmit = async () => {
    const { username, password } = form;

    if (isDashboardRoute) {
      const loginAdmin = async () => {
        const jwt = emulateJWT();

        authControl(jwt);
        navigate("/dashboard/products");
      };

      loginAdmin();
    } else {
      try {
        const resp = await axios.post("https://fakestoreapi.com/auth/login", {
          username,
          password,
        });

        authControl(resp.data.token);
        navigate("/products");
      } catch (error) {
        setError([error.response.data]);

        setTimeout(() => {
          setError([]);
        }, 5000);
      }
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginSubmit();
  };

  return (
    <Card className="p-4">
      {error.length > 0 && (
        <div className="alert alert-danger mb-3" style={{ maxWidth: "240px" }}>
          {error.map((error, index) => (
            <p key={index} className="m-0">
              {error}
            </p>
          ))}
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter your username"
            value={form.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
