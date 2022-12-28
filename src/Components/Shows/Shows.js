import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";

import JsonData from "../../data.json";
import CardDetails from "../Card Details/CardDetails";
import Search from "../Search/Search";
import { SearchContext } from "../State Context/StateContext";

const Shows = () => {
  const { searchValue } = useContext(SearchContext);

  const pageData = JsonData.filter((show) => show.category === "TV Series");

  const showData = {
    data: searchValue
      ? JsonData.filter((show) => show.title.includes(searchValue))
      : pageData,
    header: "TV Series",
    placeholder: "Search for TV series",
  };

  return (
    <>
      <Navbar />
      <Search relevantData={showData} />
      <CardDetails relevantData={showData} />
    </>
  );
};

export default Shows;
