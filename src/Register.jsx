import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Register() {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert("Hello World");
  };
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email Address"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          placeholder="New Password"
        />
      </p>
      <p>
        <button>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Aready a member? Login Here...</Link>
      </p>
      <hr />
      <button onClick={handleClick}>Click</button>
      <hr />
      <p>
        {count}<br></br>
        <button onClick={updateCount}>Update Count</button>
      </p>
    </div>
  );
}