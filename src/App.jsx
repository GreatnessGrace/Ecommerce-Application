import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Order from "./pages/Order/Order";
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from "./context/data/myState";
function App() {
  return (
  <MyState>
  <Router>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/order" element={<Order/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/*" element={<NoPage/>}></Route>
  </Routes>
</Router>
</MyState>)

}


export default App;