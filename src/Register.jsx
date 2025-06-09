import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Register() {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState();
  const handleClick = () => {
    alert("Hello World");
  };
  const updateCount = () => {
    setCount(count + 1);
  };

  const findSum = () => {
    setResult(Number(a) + Number(b));
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
        {count}
        <br></br>
        <button onClick={updateCount}>Update Count</button>
      </p>
      <hr />
      <p>
        <input type="number" onChange={(e) => setA(e.target.value)} />
      </p>
      <p>
        <input type="number" onChange={(e) => setB(e.target.value)} />
      </p>
      <button onClick={findSum}>Submit</button>
      <p>{result}</p>
    </div>
  );
}