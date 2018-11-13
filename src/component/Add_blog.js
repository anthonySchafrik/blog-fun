import React, { Component } from "react";
import { addBlog } from "../actions";
import { Link } from "react-router-dom";

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
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleBlogText = this.handleBlogText.bind(this);
  }

  handleAddBlog() {
    addBlog(this.state);
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleAuthor(event) {
    this.setState({ author: event.target.value });
  }

  handleBlogText(event) {
    this.setState({ body: event.target.value });
  }

  render() {
    const { handleAddBlog, handleTitle, handleAuthor, handleBlogText } = this;
    return (
      <div>
        <h1>Add New Blog</h1>
        <label>Blog Title: </label>
        <div />
        <input placeholder="Title" onChange={handleTitle} />
        <div />
        <label>Author: </label>
        <div />
        <input placeholder="Author" onChange={handleAuthor} />
        <div />
        <label>Blog Text: </label>
        <div />
        <textarea placeholder="Blog Body" onChange={handleBlogText} />
        <div />
        <Link to="/">
          <button onClick={handleAddBlog}>Click</button>
        </Link>
      </div>
    );
  }
}

export default AddBlog;
