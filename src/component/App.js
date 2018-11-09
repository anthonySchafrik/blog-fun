import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../style.css";
import AddBlog from "./Add_blog";
import Blogs from "../containers/Blogs";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/add/blog" component={AddBlog} />
            <Route path="/" component={Blogs} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
