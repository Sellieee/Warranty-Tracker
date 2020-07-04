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
        {/* Overview of existing Warranties */}
        <Route path="/electronics" exact component={WarrantyElectronics} />
        {/* Overview of existing Warranties */}
        <Route path="/car" exact component={WarrantyCar} />
        {/* Overview of existing Warranties */}
        <Route path="/homeappliances" exact component={WarrantyHomeAppliances} />
      </Router>
    );
  }
}

export default App;
