import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./App";
export default function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const Navigate = useNavigate();
  const { users,setEmail } = useContext(AppContext);
  const handleSubmit = () => {
    const found = users.find(
      (elem) => elem.email === user.email && elem.pass === user.pass
    );
    if (!found) {
      setError("Access Denied");
    } else {
      setEmail(user.email)
      Navigate("/");
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      {error}
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Login</button>
      </p>
      <hr />
      <p>
        <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}