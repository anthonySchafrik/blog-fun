export const FETCH_BLOGS = "fetch_blogs";

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
    body:
      "Test This is the body of the blog were all the stuff you type in goes"
  }
];

export function fetchBlogs() {
  return {
    type: FETCH_BLOGS,
    payload: blogs
  };
}

export function addBlog(blogPost) {
  blogs.push(blogPost);
}
