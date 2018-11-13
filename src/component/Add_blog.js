import React, { Component } from "react";
import { addBlog } from "../actions";
class AddBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      date: "",
      body: ""
    };

    this.handleAddBlog = this.handleAddBlog.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  handleAddBlog() {
    console.log("does this work");
    debugger;
    addBlog(this.state);
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { handleAddBlog, handleTitle } = this;
    return (
      <div>
        <h1>Add New Blog</h1>
        <div>
          <div>
            <label>Blog Title:</label>
            <input placeholder="Title" onChange={handleTitle} />
          </div>
        </div>
        <button onClick={handleAddBlog}>Click</button>
      </div>
    );
  }
}

export default AddBlog;
