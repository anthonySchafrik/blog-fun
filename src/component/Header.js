import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header-bar">
        <p className="header-items">BlogFun</p>
        {/* <p className="header-items">Show All Blogs</p> */}
        <Link to="/">Show All Blogs</Link>
        <Link to="/add/blog">Add Blog</Link>
        {/* <p className="header-items">Post Blog</p> */}
      </div>
    );
  }
}
