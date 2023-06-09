import React, { useState } from "react";
import Template from "../Template";
import "./fetchdata.css";
import Loader from "../loader/Loader";
import Scroll from "../Scroll";
const FetchData = (props) => {
  // STATES
  const [movieName, setMovieName] = useState();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  // METHOD BELOW WILL FETCH DATA FROM API
  const getData = async () => {
    setLoader(true);
    const d = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${movieName}&include_adult=false&language=en-US&page=${1}&api_key=YOUR_API_KEY`
    );
    const da = await d.json();
    setData(da.results);
    setLoader(false);
  };
  // HANDLES FORM'S SUBMISSION
  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };
  return (
    <>
      {/* JSX */}
      <form className="form" onSubmit={handleSubmit} role="search">
        <input
          id="item"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          onChange={(event) => {
            setMovieName(event.target.value);
          }}
        />
      </form>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <div className="container-fluid d-flex flex-wrap justify-content-evenly ">
            {data.map((items) => {
              return (
                <div key={items.id} className="card ">
                  {items.media_type === "movie" ? (
                    <Template
                      title={items.title ? items.title : ""}
                      year={items.release_date}
                      src={
                        !items.poster_path
                          ? "https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif"
                          : `https://image.tmdb.org/t/p/w300${items.poster_path}`
                      }
                      ratings={
                        items.vote_average
                          ? items.vote_average.toFixed(1)
                          : "UnRated"
                      }
                      trailerLink={items.trailer}
                    />
                  ) : (
                    <Template
                      title={items.name ? items.name : ""}
                      year={items.first_air_date}
                      src={
                        !items.poster_path
                          ? "https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif"
                          : `https://image.tmdb.org/t/p/w300${items.poster_path}`
                      }
                      ratings={
                        items.vote_average
                          ? items.vote_average.toFixed(1)
                          : "UnRated"
                      }
                      trailerLink={items.trailer}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <Scroll />
        </div>
      )}
    </>
  );
};

export default FetchData;
