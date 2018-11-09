import React, { Component } from "react";
import { addBlog } from "../actions";
class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Test Title"
    };

    this.handleAddBlog = this.handleAddBlog.bind(this);
  }
  handleAddBlog() {
    addBlog(this.state);
  }

  render() {
    const { handleAddBlog } = this;
    return (
      <div>
        <h1>Add Blog Rendered</h1>
        <button onClick={handleAddBlog}>Click</button>
      </div>
    );
  }
}

export default AddBlog;
