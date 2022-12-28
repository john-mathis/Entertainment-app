import React, { useContext } from "react";
import CardDetails from "../Card Details/CardDetails";
import JsonData from "../../data.json";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Trending from "../Trending Content/Trending";

import { SearchContext } from "../State Context/StateContext";

const Home = () => {
  const { searchValue } = useContext(SearchContext);

  const pageData = JsonData.slice(5);

  const recommendedData = {
    data: searchValue
      ? pageData.filter((film) => film.title.includes(searchValue))
      : pageData,
    header: "Recommended for you",
    placeholder: "Search for movies or TV series",
  };

  return (
    <>
      <Navbar />
      <Search relevantData={recommendedData} />
      <Trending />
      <CardDetails relevantData={recommendedData} />
    </>
  );
};

export default Home;
