import React, { useContext } from "react";
import "../Search/Search.css";
import SearchIcon from "../../assets/icon-search.svg";

import { SearchContext } from "../State Context/StateContext";

const Search = ({ relevantData }) => {
  const { searchValue, handleSearch, handleOnKeyUp } =
    useContext(SearchContext);

  return (
    <>
      <div className="max-width-container">
        <section className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder={relevantData.placeholder}
            value={searchValue}
            onChange={handleSearch}
            onKeyUp={handleOnKeyUp}
          />
          <img className="search-logo" src={SearchIcon} alt="search logo" />
        </section>
      </div>
    </>
  );
};

export default Search;
