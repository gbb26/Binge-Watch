import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailsTemplate from "./DetailsTemplate";
import Loader from "../loader/Loader";
const FetchDetails = (props) => {
  const location = useLocation();
  const state = location.state;
  const [details, setDetails] = useState({
    title: "",
    type: "",
    ratings: "",
    country: "",
    language: "",
    genres: "",
    awards: "",
    dir: "",
    writer: "",
    actors: "",
    releasedOn: "",
    summary: "",
    poster: "",
  });
  const [loader, setLoader] = useState(true);
  const getData = async () => {
    setLoader(true);
    const d = await fetch(
      `https://www.omdbapi.com/?t=${state.t}&plot=full&apikey=${"6364a5ae"}`
    );
    const data = await d.json();
    // console.log(data)
    setDetails({
      title: data.Title,
      type: data.Type,
      ratings: data.imdbRating,
      country: data.Country,
      language: data.Language,
      genres: data.Genre,
      awards: data.Awards,
      dir: data.Director,
      writer: data.Writer,
      actors: data.Actors,
      releasedOn: data.Released,
      summary: data.Plot,
      poster: data.Poster,
    });
    setLoader(false);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <div>{!loader ? <DetailsTemplate movieData={details} /> : <Loader />}</div>
  );
};
export default FetchDetails;
