import React, { Component } from "react";
import Blog from "./Blog";

const blogs = [
  {
    id: 0,
    title: "Sample Title",
    author: "Author Name",
    date: "time stamp",
    body: "This is the body of the blog were all the stuff you type in goes"
  },
  {
    id: 1,
    title: "Test Title One",
    author: "Test Author Name",
    date: "Test time stamp",
    body: "Test This is the body of the blog were all the stuff you type in goes"
  }
]


export default class Blogs extends Component {

  //for when redux is hooked up
  // componentDidMount() {
  //   this.props.blogs.fetchBlogs()
  // }

  render() {
    return ( 
      <div>
        <h1>Blogs</h1>
        <Blog blogs={blogs} />
      </div>
    );
  }
}