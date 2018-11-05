import React, { Component } from "react";

const blogs = [
  {
    title: "Sample Title",
    author: "Author Name",
    date: "time stamp",
    body: "This is the body of the blog were all the stuff you type in goes"
  },
  {
    title: "Test Title One",
    author: "Test Author Name",
    date: "Test time stamp",
    body: "Test This is the body of the blog were all the stuff you type in goes"
  }
]


export default class Blogs extends Component {
  render() {
    return ( 
      <div>
        <h1>Blogs</h1>
        {blogs.map((blog) => {
          return (
            <div key={blog.title}>
              <h3>{blog.title}</h3>
              <div>
                <p>{blog.author}</p>
                <p>{blog.date}</p>
              </div>
              <p>{blog.body}</p>
            </div>
          )
        })}
      </div>
    );
  }
}