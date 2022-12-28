import React, { useContext } from "react";
import "../Trending Content/Trending.css";
import JsonData from "../../data.json";

import { SearchContext } from "../State Context/StateContext";

import playButton from "../../assets/icon-play.svg";
import emptyBookmark from "../../assets/icon-bookmark-empty.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TvIcon from "../../assets/icon-category-tv.svg";

const Trending = () => {
  const { isInputEmpty } = useContext(SearchContext);

  const trendingContent = {
    data: JsonData.filter((trending) => trending.isTrending === true),
    header: "Trending",
  };

  const trending = trendingContent.data.map((films) => {
    return (
      <div className="card" key={films.title}>
        <img
          className="card-cover"
          src={films.thumbnail.trending.small}
          alt="tredning film cover"
        />
        <div className="film-overlay"></div>
        <div className="play-icon-container">
          <img
            className="play-icon idle"
            src={playButton}
            alt="empty bookmark"
          />
          <p>Play</p>
        </div>
        <div className="bookmark-icon-container">
          <img
            className="bookmark-icon idle"
            src={emptyBookmark}
            alt="empty bookmark"
          />
        </div>

        <div className="detail-container">
          <p className="detail xxs-fs light-fw">{films.year}</p> •
          <p className=" detail xxs-fs light-fw">
            {films.category === "Movie" ? (
              <img src={MovieIcon} alt="movie logo" />
            ) : (
              <img src={TvIcon} alt="tv logo" />
            )}
            <span className="detail">{films.category}</span>
          </p>{" "}
          •<p className="detail xxs-fs light-fw">{films.rating}</p>
        </div>
        <p className="film-title detail light-fw medium-fs">{films.title}</p>
      </div>
    );
  });

  return (
    <section className={`${isInputEmpty} max-width-container`}>
      <h1 className="header">{trendingContent.header}</h1>
      <div className="trending-container">{trending}</div>
    </section>
  );
};

export default Trending;
