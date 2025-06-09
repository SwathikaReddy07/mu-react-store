import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="App-Header-Row">
      <div>
        <h1>Mu-React-Store</h1>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}