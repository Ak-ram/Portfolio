import React from "react";
import { FiSearch } from "react-icons/fi";
import "./blog.scss";
const Blog = () => {
  return (
    <div className="blog-page">
      <h2>Blogs</h2>
      <div className="search-box">
        <input
          className="search-input"
          type={"search"}
          placeholder="search blog..."
        />
        <button>
          <FiSearch />
          Search
        </button>
      </div>
    </div>
  );
};

export default Blog;
