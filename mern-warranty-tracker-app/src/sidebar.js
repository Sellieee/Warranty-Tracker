import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

export class Sidebar extends Component {
  render() {
    return (
      <Menu>
        <a id="car" className="menu-item" href="/car">
          Car
        </a>
        <a id="electronics" className="menu-item" href="/electronics">
          Electronics
        </a>
        <a id="furniture" className="menu-item" href="/furniture">
          Furniture
        </a>
        <a id="homeappliances" className="menu-item" href="/homeappliances">
          Home Appliances
        </a>
        <a id="miscellaneous" className="menu-item" href="/miscellaneous">
          Miscellaneous
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="#">
          Categories
        </a>
      </Menu>
    );
  }
}
