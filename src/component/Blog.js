import React from "react";

const Blog = ({ blogs }) => {
  if (!blogs.payload) {
    return <h1>Loading...</h1>;
  }
  return blogs.payload.map(blog => {
    return (
      <div key={blog.title}>
        <h2>{blog.title}</h2>
        <div>
          <h4>{blog.author}</h4>
          <p>{blog.date}</p>
        </div>
        <p>{blog.body}</p>
      </div>
    );
  });
};

export default Blog;
