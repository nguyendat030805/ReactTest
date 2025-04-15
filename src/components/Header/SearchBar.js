import React from "react";

const SearchBar = () => {
  return (
    <div className="col-lg-7 col-md-7">
      <div className="advanced-search">
        <button type="button" className="category-btn">
          All Categories
        </button>
        <form action="#" className="input-group">
          <input type="text" placeholder="What do you need?" />
          <button type="button">
            <i className="ti-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
