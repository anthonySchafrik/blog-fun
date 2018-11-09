import React, { Component } from "react";
import "../style.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header-bar">
        <p className="header-items">BlogFun</p>
        <p className="header-items">Show All Blogs</p>
        <p className="header-items">Post Blog</p>
      </div>
    );
  }
}
