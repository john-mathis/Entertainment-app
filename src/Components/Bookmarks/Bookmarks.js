import React, { useContext } from "react";
import CardDetails from "../Card Details/CardDetails";
import JsonData from "../../data.json";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import { SearchContext } from "../State Context/StateContext";

const Bookmarks = () => {
  const { searchValue } = useContext(SearchContext);

  const pageData = JsonData.filter(
    (bookmarked) => bookmarked.isBookmarked === true
  );

  const bookmarkedData = {
    data: searchValue
      ? JsonData.filter((bookmarked) => bookmarked.title.includes(searchValue))
      : pageData,
    header: "Bookmarked",
    placeholder: "Search for bookmarked shows",
  };

  return (
    <>
      <Navbar />
      <Search relevantData={bookmarkedData} />
      <CardDetails relevantData={bookmarkedData} />
    </>
  );
};

export default Bookmarks;
