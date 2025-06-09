import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header({ name }) {
  return (
    <div className="App-Header-Row" style={{ backgroundColor: "pink" }}>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}