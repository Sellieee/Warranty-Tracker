import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MERN-Stack Warranty Tracker</h2>
        </div>

        {/* These routes are for separate web pages. 
        <Route path="/" exact component={WarrantySummary} />
        <Route path="/edit/:id" exact component={EditWarranties} />
        <Route path="/create" exact component={CreateWarranties} />
        */}
        {/* Overview of existing Warranties */}
        <Route path="/" exact component={WarrantySummary} />
        {/* Car and related Warranties */}
        <Route path="/car" exact component={WarrantyCar} />
        {/* Electronics and related Warranties */}
        <Route path="/electronics" exact component={WarrantyElectronics} />
        {/* Furniture and related Warranties */}
        <Route path="/furniture" exact component={WarrantyFurniture} />
        {/* Home Appliances and related Warranties */}
        <Route path="/homeappliances" exact component={WarrantyHomeAppliances} />
        {/* Miscellaneous/Uncategorised Warranties */}
        <Route path="/miscellaneous" exact component={WarrantyMiscellaneous} />
      </Router>
    );
  }
}

export default App;
