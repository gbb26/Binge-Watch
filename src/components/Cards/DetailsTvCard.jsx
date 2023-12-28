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
    <div className=" details-movie-container">
      <div className="details-tv-container">
        <div className="details-tv-card">
          <img
            loading="lazy"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : ""
            }
            alt={name}
          />
          <div>
            <h1 className="movie-heading">{name ? name : ""}</h1>
            <h2 className="movie-heading">{tagline?.tagline}</h2>
            <p>{overview?.overview}</p>

            <div>
              <strong className="strong-text">Genres:</strong>{" "}
              {genres &&
                genres.map((genre) => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
            </div>

            <div>
              <strong className="strong-text">Networks:</strong>{" "}
              {networks &&
                networks.map((network) => (
                  <span key={network.id}>{network.name} </span>
                ))}
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

            <p>
              <strong className="strong-text">First Air Date:</strong>{" "}
              {first_air_date && formatDate(first_air_date)}
            </p>

            <p>
              <strong className="strong-text">Last Air Date:</strong>{" "}
              {last_air_date && formatDate(last_air_date)}
            </p>

            <p>
              <strong className="strong-text">Number of Seasons:</strong>{" "}
              {number_of_seasons}
            </p>

            <p>
              <strong className="strong-text">Number of Episodes:</strong>{" "}
              {number_of_episodes}
            </p>

            <p>
              <strong className="strong-text">Status:</strong> {status}
            </p>

            <p>
              <strong className="strong-text">Vote Average:</strong>{" "}
              {vote_average} ({vote_count} votes)
            </p>

            {/* First Aired Episode */}
            {seasons && seasons.length > 0 && (
              <div>
                <strong className="strong-text">First Aired Episode:</strong>{" "}
                {seasons[0].air_date && formatDate(seasons[0].air_date)} -{" "}
                {seasons[0].name}
              </div>
            )}

            {/* Last Aired Episode */}
            {last_episode_to_air && (
              <div>
                <strong className="strong-text">Last Aired Episode:</strong>{" "}
                {last_episode_to_air.air_date &&
                  formatDate(last_episode_to_air.air_date)}{" "}
                - {last_episode_to_air.name}
              </div>
            )}

            {/* Seasons Information */}
            <hr />
            <div className="seasons-info">
              <strong className="strong-text">Seasons Information:</strong>
              {seasons &&
                seasons.map((season) => (
                  <div key={season.id} className="season">
                    <p>
                      <strong className="strong-text">
                        Season {season.season_number}:
                      </strong>{" "}
                      {season.air_date && formatDate(season.air_date)} -{" "}
                      {season.name} ({season.episode_count} episodes)
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
