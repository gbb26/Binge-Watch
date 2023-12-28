/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../api";
import DetailsMovieCard from "../Cards/DetailsMovieCard";
import DetailsTvCard from "../Cards/DetailsTvCard";
import Recommended from "../Recommended/Recommended";

const Details = ({ type }) => {
  const id = useLocation();
  const movieID = id.state ? id.state : "91363";
  const [data, setData] = useState({});
  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await getDetails(type, movieID);
      setData(movieData);
    };
    getMovieDetails();
  }, [type, movieID]);
  return (
    <div className="trending-container">
      {type === "movie" ? (
        <DetailsMovieCard movieDetails={data} />
      ) : (
        <DetailsTvCard tvSeriesDetails={data} />
      )}
      <Recommended ID={movieID} type={type} />
    </div>
  );
};
Details.defaultProps = {
  type: "tv",
};
export default Details;
