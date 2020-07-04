import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Car from "./Components/car";
import Electronics from "./Components/electronics";
import Furniture from "./Components/furniture";
import HomeAppliances from "./Components/homeappliances";
import Miscellaneous from "./Components/miscellaneous";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
              Warranty Tracker
              {/* <img src={logo} width="30" height="30" alt="logo" */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon white-text">
                <i classname="fas fa-bars"></i>
              </span>
            </button>
            {/* <Link to="/" className="navbar-brand">
              Summary
            </Link> */}
          </nav>

          {/* These routes are for separate web pages. 
  <Route path="/" exact component={WarrantySummary} />
  <Route path="/edit/:id" exact component={EditWarranties} />
  <Route path="/create" exact component={CreateWarranties} />
*/}
          {/* Overview of existing Warranties */}
          {/* <Route path="/" exact component={Summary} /> */}
          {/* Car and related Warranties */}
          <Route path="/car" exact component={Car} />
          {/* Electronics and related Warranties */}
          <Route path="/electronics" exact component={Electronics} />
          {/* Furniture and related Warranties */}
          <Route path="/furniture" exact component={Furniture} />
          {/* Home Appliances and related Warranties */}
          <Route path="/homeappliances" exact component={HomeAppliances} />
          {/* Miscellaneous/Uncategorised Warranties */}
          <Route path="/miscellaneous" exact component={Miscellaneous} />
        </div>
      </Router>
    );
  }
}

export default App;
