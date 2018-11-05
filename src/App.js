import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./style.css";
import Container from "./component/Container";

class App extends Component{
  render(){
    return(
      <div>
        <Container />
      </div>
    );
  }
}

export default hot(module)(App);