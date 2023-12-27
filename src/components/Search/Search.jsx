import { useEffect, useState } from "react";
import { searchMovie } from "../../api";
import MovieCard from "../Cards/MovieCard";
import Loader from "../Loaders/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = () => {
  const [searchedResults, setSearchedResults] = useState({
    results: [],
    total_results: 0,
    total_pages: 0,
  });
  const [movieName, setMovieName] = useState("");
  const [page, setPage] = useState(1);
  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };
  const search = async () => {
    const response = await searchMovie(movieName, page);
    setSearchedResults(() => ({
      results: response.results,
      total_results: response.total_results,
      total_pages: response.total_pages,
    }));
  };
  useEffect(() => {
    const searchMovieData = async () => {
      const response = await searchMovie(movieName, page);
      console.log(response);
      if (page !== 1) {
        setSearchedResults((prevMovies) => ({
          results: [...prevMovies.results, ...response.results],
          total_results: response.total_results,
          total_pages: response.total_pages,
        }));
      }
    };
    searchMovieData();
  }, [page]);

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
      <form onSubmit={handleSubmit} id="container-input">
        <input
          type="text"
          placeholder="e.g. Iron man "
          id="input"
          value={movieName}
          onChange={(event) => {
            setMovieName(event.target.value);
          }}
        />
      </form>
      <InfiniteScroll
        dataLength={searchedResults.results.length}
        next={fetchMoreData}
        hasMore={page < searchedResults.total_pages} // Set to true if there's more data to fetch
        loader={<Loader />}
      >
        <div className="category-cards">
          {searchedResults.results &&
            searchedResults.results.map((items, index) => {
              return (
                <div key={(index + 1) * page} className="card ">
                  {items.media_type === "movie" ? (
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
                  ) : (
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
                  )}
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Search;
