import React, { useState } from "react";
import search from "../styles/search.module.scss";

const Search = ({ ipHandler }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    ipHandler(searchField);
    setSearchField("");
  };

  return (
    <div className={search.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchfield">
          <input
            type="text"
            value={searchField}
            placeholder="enter your ip"
            name="searchfield"
            id="searchfield"
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Search;
