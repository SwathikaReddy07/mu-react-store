import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Cart from "./Cart";
import Logout from "./Logout";
import Order from "./Order";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
export const AppContext = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState({});
  const [email, setEmail] = useState();
  return (
    <div>
      <AppContext.Provider
        value={{ users, setUsers, cart, setCart, email, setEmail,orders,setOrders }}
      >
        <BrowserRouter>
          <Header name="mu-react-store" />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/order" element={<Order />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;