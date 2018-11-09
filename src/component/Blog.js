import React from "react";

const Blog = ({ blogs }) => {
  console.log(blogs.payload)
  if (!blogs.payload) {
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    blogs.payload.map((blog) => {
      return (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <div>
            <p>{blog.author}</p>
            <p>{blog.date}</p>
          </div>
          <p>{blog.body}</p>
        </div>
      )
    })
  );
}

export default Blog;