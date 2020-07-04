import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {Sidebar} from "./sidebar";

import Car from "./Components/car";
import Electronics from "./Components/electronics";
import Furniture from "./Components/furniture";
import HomeAppliances from "./Components/homeappliances";
import Miscellaneous from "./Components/miscellaneous";

class App extends Component {
  showSettings(event){
    event.preventDefault();
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Warranty Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Sidebar pageWrapId={"page-wrap"} outerContainerId="App" />
            </Navbar.Collapse>
          </Navbar>

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
