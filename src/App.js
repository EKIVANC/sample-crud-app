import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OrdersList from "./components/orders-list.component";
import EditOrder from "./components/edit-order.component";
import CreateOrder from "./components/create-order.component";
import logo from "./logo.svg";

function App() {
  return (
      <Router>
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="/">
                      <img src={logo} width="30" height="30" alt="logo" />
                  </a>
                  <Link to="/" className="navbar-brand">MERN-Stack Order App</Link>
                  <div className="collpase navbar-collapse">
                      <ul className="navbar-nav mr-auto">
                          <li className="navbar-item">
                              <Link to="/" className="nav-link">Orders</Link>
                          </li>
                          <li className="navbar-item">
                              <Link to="/create" className="nav-link">Create Order</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
              <br/>
              <Route path="/" exact component={OrdersList} />
              <Route path="/edit/:id" component={EditOrder} />
              <Route path="/create" component={CreateOrder} />
          </div>
      </Router>
  );
}

export default App;
