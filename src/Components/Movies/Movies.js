import React, { useContext } from "react";
import CardDetails from "../Card Details/CardDetails";
import JsonData from "../../data.json";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import { SearchContext } from "../State Context/StateContext";

const Movies = () => {
  const { searchValue } = useContext(SearchContext);
  const pageData = JsonData.filter((movie) => movie.category === "Movie");

  const movieData = {
    data: searchValue
      ? JsonData.filter((movie) => movie.title.includes(searchValue))
      : pageData,
    header: "Movies",
    placeholder: "Search for movies",
  };

  return (
    <>
      <Navbar />
      <Search relevantData={movieData} />
      <CardDetails relevantData={movieData} />
    </>
  );
};

export default Movies;
