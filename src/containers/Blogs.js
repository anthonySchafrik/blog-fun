import { connect } from "react-redux";
import React, { Component } from "react";
import Blog from "../component/Blog";
import { fetchBlogs } from "../actions";

class Blogs extends Component {
  render() {
    return (
      <div id="blogs">
        <h1>Blogs</h1>
        <Blog blogs={this.props.blogs} />
      </div>
    );
  }
}

const mapStateToProps = () => ({
  blogs: fetchBlogs()
});

export default connect(mapStateToProps)(Blogs);
