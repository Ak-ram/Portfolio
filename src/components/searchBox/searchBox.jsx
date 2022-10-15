import React from "react";
import { FiSearch } from "../../exporter";
import "./searchBox.scss";
const SearchBox = () => {
  return (
    <div className="search-box">
      <input
        className="search-input"
        type={"search"}
        placeholder="Search Blogs"
      />
      <button>
        <FiSearch size={16} />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
