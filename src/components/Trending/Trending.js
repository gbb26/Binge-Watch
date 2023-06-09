import React, { Fragment, useEffect, useState } from "react";
import Loader from "../loader/Loader";
import Template from "../Template";
import "./style.css";
import Scroll from "../Scroll";

function FetchTrending(props) {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(props.page);
  const [type, setType] = useState("all");
  const getData = async () => {
    setLoader(true);
    const d = await fetch(
      `https://api.themoviedb.org/3/trending/${type}/${"day"}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    const da = await d.json();
    setData(da.results);
    setTotalPages(400);
    setLoader(false);
  };
  // METHOD BELOW WILL FETCH DATA FROM NEXT PAGE IF EXIST
  const handleNext = () => {
    setPage(page + 1);
    getData();
  };
  // METHOD BELOW WILL FETCH DATA FROM PREVIOUS PAGE IF EXIST
  const handlePrev = () => {
    setPage(page - 1);
    getData();
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <button
            className="btn toggles"
            onClick={() => {
              setPage(1);
              setType("tv");
            }}
            disabled={type === "tv" ? true : false}
          >
            TV SERIES
          </button>
          <button
            className="btn toggles"
            onClick={() => {
              setPage(1);
              setType("movie");
            }}
            disabled={type === "movie" ? true : false}
          >
            MOVIES
          </button>
          <button
            className="btn toggles"
            onClick={() => {
              setPage(1);
              setType("all");
            }}
            disabled={type === "all" ? true : false}
          >
            All
          </button>
          <div className="container-fluid d-flex flex-wrap justify-content-evenly ">
            {data.map((items, index) => {
              return (
                <div key={(index + 1) * page} className="card ">
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
          <div className="container-pagination">
            <button
              className="btn btn-warning"
              onClick={handlePrev}
              disabled={page === 1 ? true : false}
            >
              {"<< "}PREV
            </button>
            <span className="h4">
              {page} of {totalPages}
            </span>
            <button
              className="btn btn-warning"
              onClick={handleNext}
              disabled={page === totalPages ? true : false}
            >
              NEXT{" >>"}
            </button>
          </div>
          <Scroll />
        </div>
      )}
    </>
  );
}
export default FetchTrending;
