/* eslint-disable react/prop-types */
import { formatDate } from "../../api";
import "./style.details-tv-card.css";

const DetailsTvCard = ({ tvSeriesDetails }) => {
  const {
    first_air_date,
    genres,
    last_air_date,
    last_episode_to_air,
    name,
    networks,
    number_of_episodes,
    number_of_seasons,
    overview,
    poster_path,
    production_companies,
    production_countries,
    seasons,
    status,
    tagline,
    vote_average,
    vote_count,
  } = tvSeriesDetails;

  return (
    <div className="trending-container">
      <div className="details-tv-container">
        <div className="details-tv-card">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={name}
          />
          <div>
            <h1 className="movie-heading">{name}</h1>
            <h2 className="movie-heading">{tagline}</h2>
            <p>{overview}</p>

            <div>
              <strong>Genres:</strong>{" "}
              {genres.map((genre) => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </div>

            <div>
              <strong>Networks:</strong>{" "}
              {networks.map((network) => (
                <span key={network.id}>{network.name} </span>
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

            <p>
              <strong>First Air Date:</strong> {formatDate(first_air_date)}
            </p>

            <p>
              <strong>Last Air Date:</strong> {formatDate(last_air_date)}
            </p>

            <p>
              <strong>Number of Seasons:</strong> {number_of_seasons}
            </p>

            <p>
              <strong>Number of Episodes:</strong> {number_of_episodes}
            </p>

            <p>
              <strong>Status:</strong> {status}
            </p>

            <p>
              <strong>Vote Average:</strong> {vote_average} ({vote_count} votes)
            </p>

            {/* First Aired Episode */}
            {seasons.length > 0 && (
              <div>
                <strong>First Aired Episode:</strong>{" "}
                {formatDate(seasons[0].air_date)} - {seasons[0].name}
              </div>
            )}

            {/* Last Aired Episode */}
            {last_episode_to_air && (
              <div>
                <strong>Last Aired Episode:</strong>{" "}
                {formatDate(last_episode_to_air.air_date)} -{" "}
                {last_episode_to_air.name}
              </div>
            )}

            {/* Seasons Information */}
            <hr />
            <div className="seasons-info">
              <strong>Seasons Information:</strong>
              {seasons.map((season) => (
                <div key={season.id} className="season">
                  <p>
                    <strong>Season {season.season_number}:</strong>{" "}
                    {formatDate(season.air_date)} - {season.name} (
                    {season.episode_count} episodes)
                  </p>
                  <p>{season.overview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTvCard;
