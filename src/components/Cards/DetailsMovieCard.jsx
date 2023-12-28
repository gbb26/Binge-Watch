/* eslint-disable react/prop-types */
import { formatDate } from "../../api";
import "./style.details-movie-card.css"; // Import the CSS file for styling

const DetailsMovieCard = ({ movieDetails }) => {
  const {
    genres,
    overview,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    title,
    vote_average,
    vote_count,
  } = movieDetails;

  return (
    <div className="trending-container">
      <div className="details-card">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
        <div>
          <h1 className="movie-heading">{title}</h1>
          <h2 className="movie-heading">{tagline}</h2>
          <p>{overview}</p>

          <div>
            <strong>Genres:</strong>{" "}
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </div>

          <div>
            <strong>Production Companies:</strong>{" "}
            {production_companies.map((company) => (
              <span key={company.id}>{company.name} </span>
            ))}
          </div>

          <div>
            <strong>Production Countries:</strong>{" "}
            {production_countries.map((country) => (
              <span key={country.iso_3166_1}>{country.name} </span>
            ))}
          </div>

          <div>
            <strong>Spoken Languages:</strong>{" "}
            {spoken_languages.map((language) => (
              <span key={language.iso_639_1}>{language.name} </span>
            ))}
          </div>

          <p>
            <strong>Release Date:</strong> {formatDate(release_date)}
          </p>

          <p>
            <strong>Runtime:</strong> {runtime} minutes
          </p>

          <p>
            <strong>Vote Average:</strong> {vote_average} ({vote_count} votes)
          </p>

          <p>
            <strong>Revenue:</strong> ${revenue.toLocaleString()}
          </p>

          <p>
            <strong>Status:</strong> {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsMovieCard;
