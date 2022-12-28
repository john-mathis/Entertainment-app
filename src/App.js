import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Movies from "./Components/Movies/Movies";
import Shows from "./Components/Shows/Shows";
import SignUp from "./Components/SignUp/SignUp";

import { SearchContext } from "./Components/State Context/StateContext";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState("show");

  const handleSearch = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleOnKeyUp = () => {
    searchValue ? setIsInputEmpty("hide") : setIsInputEmpty("show");
  };

  const handleSearchReset = () => {
    setSearchValue("");
  };
  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        isInputEmpty,
        setIsInputEmpty,
        handleSearch,
        handleOnKeyUp,
        handleSearchReset,
      }}
    >
      <Routes>
        <Route exact path="/Entertainment-app" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
