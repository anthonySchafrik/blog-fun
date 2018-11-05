import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./style.css";
import Header from "./component/Header";

class App extends Component{
  render(){
    return(
      <div>
        <Header />
      </div>
    );
  }
}

export default hot(module)(App);