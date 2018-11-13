import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header-bar">
        <Link to="/">
          <button>All Blogs</button>
        </Link>
        <Link to="/add/blog">
          <button>Add Blog</button>
        </Link>
      </div>
    );
  }
}
