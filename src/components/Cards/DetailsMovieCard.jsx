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
  } = movieDetails ? movieDetails : "";
  return (
    <div className="details-movie-container">
      <div className="details-card">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
        <div>
          <h1 className="movie-heading">{title}</h1>
          <h2 className="movie-heading">{tagline}</h2>
          <p>{overview}</p>

          <div>
            <strong className="strong-text">Genres:</strong>{" "}
            {genres &&
              genres.map((genre) => <span key={genre.id}>{genre.name} </span>)}
          </div>

          <div>
            <strong className="strong-text">Production Companies:</strong>{" "}
            {production_companies &&
              production_companies.map((company) => (
                <span key={company.id}>{company.name} </span>
              ))}
          </div>

          <div>
            <strong className="strong-text">Production Countries:</strong>{" "}
            {production_countries &&
              production_countries.map((country) => (
                <span key={country.iso_3166_1}>{country.name} </span>
              ))}
          </div>

          <div>
            <strong className="strong-text">Spoken Languages:</strong>{" "}
            {spoken_languages &&
              spoken_languages.map((language) => (
                <span key={language.iso_639_1}>{language.name} </span>
              ))}
          </div>

          <p>
            <strong className="strong-text">Release Date:</strong>{" "}
            {release_date && formatDate(release_date)}
          </p>

          <p>
            <strong className="strong-text">Runtime:</strong> {runtime} minutes
          </p>

          <p>
            <strong className="strong-text">Vote Average:</strong>{" "}
            {vote_average} ({vote_count} votes)
          </p>

          <p>
            <strong className="strong-text">Revenue:</strong> $
            {revenue && revenue.toLocaleString()}
          </p>

          <p>
            <strong className="strong-text">Status:</strong> {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsMovieCard;
