/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MovieCard from "../Cards/MovieCard";
import { fetchTopRated } from "../../api";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loaders/Loader";
import { Link } from "react-router-dom";

function TopRated() {
  const [topRatedMovies, setTopRatedMovie] = useState({
    results: [],
    total_results: 0,
    total_pages: 0,
  });
  const [page, setPage] = useState(1);
  const [type, setType] = useState("movie");
  useEffect(() => {
    setTopRatedMovie({ results: [], total_results: 0, total_pages: 0 });
  }, [type]);
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await fetchTopRated(type, page);
      setTopRatedMovie((prevMovies) => ({
        results: [...prevMovies.results, ...response.results],
        total_results: response.total_results,
        total_pages: response.total_pages,
      }));
    };
    fetchTopRatedMovies();
  }, [type, page]);

  const fetchMoreData = () => {
    // Fetch more data when the 20th item is in focus
    const threshold = 20;
    const itemsInView = document.querySelectorAll(".card").length;
    const isAtThreshold = itemsInView >= threshold;

    if (isAtThreshold) {
      setTimeout(() => {
        setPage((prevPage) => prevPage + 1);
      }, 2000);
    }
  };

  return (
    <div className="trending-container">
      <div className="toggle-buttons-container">
        <button
          disabled={type === "movie" ? true : false}
          onClick={() => {
            setType("movie");
            setPage(1);
          }}
          className="movies toggles"
        >
          MOVIES
        </button>
        <button
          disabled={type === "tv" ? true : false}
          onClick={() => {
            setType("tv");
            setPage(1);
          }}
          className="tv-series toggles"
        >
          TV SERIES
        </button>
      </div>
      <InfiniteScroll
        dataLength={topRatedMovies.results.length}
        next={fetchMoreData}
        hasMore={page < topRatedMovies.total_pages} // Set to true if there's more data to fetch
        loader={<Loader />}
      >
        {/* ---------------- */}
        <div className="category-cards">
          {topRatedMovies.results &&
            topRatedMovies.results.map((items, index) => {
              return (
                <div key={(index + 1) * page} className="card ">
                  {type === "movie" ? (
                    <Link
                      to="/movie-details"
                      state={items.id}
                      style={{ textDecoration: "none" }}
                    >
                      <MovieCard
                        movieName={items.title ? items.title : ""}
                        releaseYear={items.release_date}
                        posterUrl={
                          !items.poster_path
                            ? ""
                            : `https://image.tmdb.org/t/p/w300${items.poster_path}`
                        }
                        imdbRating={
                          items.vote_average
                            ? items.vote_average.toFixed(1)
                            : "UnRated"
                        }
                        homepageCard={false}
                      />
                    </Link>
                  ) : (
                    <Link
                      to="/tv-details"
                      state={items.id}
                      style={{ textDecoration: "none" }}
                    >
                      <MovieCard
                        movieName={items.name ? items.name : ""}
                        releaseYear={items.first_air_date}
                        posterUrl={
                          !items.poster_path
                            ? "https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif"
                            : `https://image.tmdb.org/t/p/w300${items.poster_path}`
                        }
                        imdbRating={
                          items.vote_average
                            ? items.vote_average.toFixed(1)
                            : "UnRated"
                        }
                        homepageCard={false}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
        </div>
        {/* --------------------- */}
      </InfiniteScroll>
    </div>
  );
}

export default TopRated;
