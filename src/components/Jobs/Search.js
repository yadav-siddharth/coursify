import React from "react";
import "./job.css";

const Search = () => {
  return (
    <div className="search">
      <div className="input-container">
        <input required="" placeholder="Search Job" type="text" />
        <button className="invite-btn" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
