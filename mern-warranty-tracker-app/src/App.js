import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

{
  /* Adding components */
}
import Car from "./Components/car";
import Electronics from "./Components/electronics";
import Furniture from "./Components/furniture";
import HomeAppliances from "./Components/homeappliances";
import Miscellaneous from "./Components/miscellaneous";
import Summary from "./Components/summary";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand=lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#" target="_blank">
              {" "}
              Test
              {/* <img src={logo} width="30" height="30" alt="logo" */}
            </a>
            <Link to="/" className="navbar-brand">
              Warranty Tracker
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
               <li className="navbar-item">
                 <Link to="/" className="nav-link">
                   Summary
                 </Link>
               </li>
              </ul>
            </div>
          </nav>

          {/* These routes are for separate web pages. 
  <Route path="/" exact component={WarrantySummary} />
  <Route path="/edit/:id" exact component={EditWarranties} />
  <Route path="/create" exact component={CreateWarranties} />
*/}
          {/* Overview of existing Warranties */}
          <Route path="/" exact component={Summary} />
          {/* Car and related Warranties */}
          <Route path="/car" exact component={Car} />
          {/* Electronics and related Warranties */}
          <Route path="/electronics" exact component={Electronics} />
          {/* Furniture and related Warranties */}
          <Route path="/furniture" exact component={Furniture} />
          {/* Home Appliances and related Warranties */}
          <Route
            path="/homeappliances"
            exact
            component={HomeAppliances}
          />
          {/* Miscellaneous/Uncategorised Warranties */}
          <Route
            path="/miscellaneous"
            exact
            component={Miscellaneous}
          />
        </div>
      </Router>
    );
  }
}

export default App;
