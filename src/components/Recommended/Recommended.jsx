/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getRecommended } from "../../api";
import { Link } from "react-router-dom";
import MovieCard from "../Cards/MovieCard";

const Recommended = ({ ID, type }) => {
  const [recommended, setRecommended] = useState({
    results: [],
    total_results: 0,
    total_pages: 0,
  });
  useEffect(() => {
    const fetchRecommended = async () => {
      const response = await getRecommended(type, ID);
      console.log(response);
      setRecommended({
        results: [...response.results],
        total_results: response.total_results,
        total_pages: response.total_pages,
      });
    };
    fetchRecommended();
  }, [type, ID]);
  return (
    <div style={{ marginTop: "30px" }} className="recommended-movies-container">
      <h2>Recommended/Related</h2>
      <div className="category-cards">
        {recommended.results &&
          recommended.results.map((items, index) => {
            return (
              <div key={index + 1} className="card ">
                {type === "movie" ? (
                  <Link
                    to="/movie-details"
                    state={items.id}
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({
                          top: 20,
                          behavior: "smooth",
                        });
                      }, 950);
                    }}
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
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({
                          top: 20,
                          behavior: "smooth",
                        });
                      }, 950);
                    }}
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
    </div>
  );
};

export default Recommended;
