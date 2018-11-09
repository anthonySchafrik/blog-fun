import { connect } from 'react-redux'
import React, { Component } from "react";
import Blog from "../component/Blog";
import { fetchBlogs } from "../actions";

class Blogs extends Component {

  render() {
    return ( 
      <div>
        <h1>Blogs</h1>
        <Blog blogs={this.props.blogs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: fetchBlogs()
})

export default connect(
  mapStateToProps,
)(Blogs)