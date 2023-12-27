/* eslint-disable react/prop-types */
import { formatDate } from "../../api";
import "./style.cards.css";
const MovieCard = ({
  movieName,
  releaseYear,
  posterUrl,
  imdbRating,
  homepageCard,
}) => {
  return (
    <div className={`movie-card ${homepageCard ? "homepage-movie-card" : ""}`}>
      <img
        src={posterUrl ? posterUrl : ""}
        alt="poster"
        className="movie-poster"
      />
      <div className="movie-details">
        <h2 className="movie-name">
          {movieName ? movieName.slice(0, 31) : ""}...
        </h2>
        <div className="movie-info-container">
          <p className="release-year">
            {releaseYear ? formatDate(releaseYear) : ""}
          </p>
          <p className="imdb-rating">{imdbRating ? imdbRating : "UnRated"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
