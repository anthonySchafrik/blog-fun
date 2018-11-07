import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route } from 'react-router-dom'

import "./style.css";
import Blogs from "./component/Blogs";
import Header from "./component/Header";


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" component={Blogs} />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);