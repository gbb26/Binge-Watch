import { Link } from "react-router-dom";
import MovieCard from "../Cards/MovieCard";
import { useEffect, useState } from "react";
import { fetchTopRated, fetchTrending } from "../../api";

const Homepage = () => {
  const [topRated, setTopRated] = useState([]);
  const [trendingDay, setTrendingDay] = useState([]);
  const [trendingWeek, setTrendingWeek] = useState([]);
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await fetchTopRated("movie", 1);
      setTopRated(response.results);
    };
    const fetchTrendingMovies = async (timeLine) => {
      const response = await fetchTrending("movie", timeLine, 1);
      timeLine === "day"
        ? setTrendingDay(response.results)
        : setTrendingWeek(response.results);
    };
    fetchTrendingMovies("day");
    fetchTrendingMovies("week");
    fetchTopRatedMovies();
  }, []);
  return (
    <div className="homepage">
      {/* TRENDING TODAY */}
      <section className="homepage-section">
        <div className="heading">
          <h2 className="category-name">trending today</h2>
          <Link to="/trending-today" className="see-all">
            see all
          </Link>
        </div>
        <div className="category-cards">
          {trendingDay &&
            trendingDay.slice(0, 5).map((movie, index) => {
              return (
                <span key={index}>
                  <Link
                    to="/movie-details"
                    state={movie.id}
                    className="movie-details-link"
                    style={{ textDecoration: "none" }}
                  >
                    <MovieCard
                      posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      movieName={
                        movie.title ? movie.title : movie.original_title
                      }
                      releaseYear={movie.release_date}
                      imdbRating={
                        movie.vote_average
                          ? movie.vote_average.toFixed(1)
                          : "UnRated"
                      }
                      homepageCard={true}
                    />
                  </Link>
                </span>
              );
            })}
        </div>
      </section>
      {/* TRENDING THIS WEEK */}
      <section className="homepage-section">
        <div className="heading">
          <h2 className="category-name">trending this week</h2>
          <Link to="/trending-this-week" className="see-all">
            see all
          </Link>
        </div>
        <div className="category-cards">
          {trendingWeek.slice(0, 5).map((movie, index) => {
            return (
              <span key={index}>
                <Link
                  to="/movie-details"
                  state={movie.id}
                  className="movie-details-link"
                  style={{ textDecoration: "none" }}
                >
                  <MovieCard
                    posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    movieName={movie.title ? movie.title : movie.original_title}
                    releaseYear={movie.release_date}
                    imdbRating={
                      movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : "UnRated"
                    }
                    homepageCard={true}
                  />
                </Link>
              </span>
            );
          })}
        </div>
      </section>
      {/* TOP RATED */}
      <section className="homepage-section">
        <div className="heading">
          <h2 className="category-name">Best of all times</h2>
          <Link to="/top-rated" className="see-all">
            see all
          </Link>
        </div>
        <div className="category-cards">
          {topRated.slice(0, 5).map((movie, index) => {
            return (
              <span key={index}>
                <Link
                  to="/movie-details"
                  state={movie.id}
                  className="movie-details-link"
                  style={{ textDecoration: "none" }}
                >
                  <MovieCard
                    posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    movieName={movie.title ? movie.title : movie.original_title}
                    releaseYear={movie.release_date}
                    imdbRating={
                      movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : "UnRated"
                    }
                    homepageCard={true}
                  />
                </Link>
              </span>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
