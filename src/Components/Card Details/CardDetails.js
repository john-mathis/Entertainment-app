import React from "react";
import "../Card Details/CardDetails.css";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TvIcon from "../../assets/icon-category-tv.svg";

import playButton from "../../assets/icon-play.svg";
import emptyBookmark from "../../assets/icon-bookmark-empty.svg";

// Card Image
const CardDetails = ({ relevantData }) => {
  const recommendedImages = relevantData.data.map((film) => {
    return (
      // Entire Container
      <div className="card" key={film.title}>
        <div className="img-container">
          <img
            className="card-cover"
            src={film.thumbnail.regular.small}
            alt="film cover"
          />
          <div className="film-overlay"></div>
          {/* Overlay Container Start */}
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
        </div>
        {/* Overlay Container End */}

        {/* Detail Container */}
        <div className="detail-container">
          <p className="detail xxs-fs light-fw">{film.year}</p> •
          <p className=" detail xxs-fs light-fw">
            {film.category === "Movie" ? (
              <img src={MovieIcon} alt="movie logo" />
            ) : (
              <img src={TvIcon} alt="tv logo" />
            )}
            <span className="detail">{film.category}</span>
          </p>{" "}
          •<p className="detail xxs-fs light-fw">{film.rating}</p>
        </div>
        <p className="detail light-fw xs-fs">{film.title}</p>
      </div>
    );
  });
  return (
    <>
      <div className="max-width-container">
        <h1 className="header">{relevantData.header}</h1>
        <div className="card-container">{recommendedImages}</div>
      </div>
    </>
  );
};

export default CardDetails;
