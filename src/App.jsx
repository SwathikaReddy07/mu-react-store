import { useState, createContext } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Product from "./Product";
import Cart from "./Cart";
import Logout from "./Logout";
import Order from "./Order";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState();
  const [orders, setOrders] = useState([]);

  return (
    <div className="App-Container">
      <AppContext.Provider value={{ users, setUsers, cart, setCart, email, setEmail, orders, setOrders }}>
        <BrowserRouter>
          <Header name="Mu-React-Store" />
          <main className="App-Wrapper">
            <Routes>
              <Route index element={<Product />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/order" element={<Order />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;