import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "../Navbar/Navbar.css";

import Logo from "../../assets/logo.svg";
import Home from "../../assets/icon-nav-home.svg";
import Movies from "../../assets/icon-nav-movies.svg";
import TVSeries from "../../assets/icon-nav-tv-series.svg";
import Bookmark from "../../assets/icon-nav-bookmark.svg";
import User from "../../assets/image-avatar.png";
import { SearchContext } from "../State Context/StateContext";

const Navbar = () => {
  const { handleSearchReset } = useContext(SearchContext);

  return (
    <nav className="navbar-container">
      <img className="nav-logo" src={Logo} alt="logo" />
      <ul className="nav-links">
        <NavLink to="/">
          <li onClick={handleSearchReset}>
            <img className="nav-logo" src={Home} alt="home logo" />
          </li>
        </NavLink>
        <NavLink to="/movies">
          <li onClick={handleSearchReset}>
            <img className="nav-logo" src={Movies} alt="movies logo" />
          </li>
        </NavLink>
        <NavLink to="/shows">
          <li onClick={handleSearchReset}>
            <img className="nav-logo" src={TVSeries} alt="tv series logo" />
          </li>
        </NavLink>
        <NavLink to="/bookmarks">
          <li onClick={handleSearchReset}>
            <img className="nav-logo" src={Bookmark} alt="bookmark logo" />
          </li>
        </NavLink>
      </ul>
      <img className="user-img" src={User} alt="user" />
    </nav>
  );
};

export default Navbar;
