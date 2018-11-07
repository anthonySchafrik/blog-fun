import React from "react";

const Blog = ({ blogs }) => {
  console.log(blogs)
  return (
    blogs.map((blog) => {
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