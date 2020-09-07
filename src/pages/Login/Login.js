import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/Actions/Auth";

const checkCredentials = (username, password) => {
  return username.toLowerCase() === "admin" && password === "12345";
};

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSuccess = () => {
    setName("");
    setPassword("");
    setError("");
    dispatch(logIn({ username: name }));
    history.push("/profile");
  };

  const onFail = () => {
    setError("Invalid login or password");
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (checkCredentials(name, password)) {
      onSuccess();
    } else {
      onFail();
    }
  };

  const onUsersChange = (event) => {
    setName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <Form className="login_form">
        <Form.Label>
          <h1>Log In</h1>
        </Form.Label>
        <Form.Group>
          <Form.Control
            type="name"
            placeholder="Name"
            onChange={onUsersChange}
            value={name}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
            value={password}
          />
        </Form.Group>
        {/* <Form.Text className="text-danger">{error}</Form.Text> */}
        <p className="error">{error}</p>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
