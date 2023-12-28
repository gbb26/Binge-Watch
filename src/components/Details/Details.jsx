/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../api";
import DetailsMovieCard from "../Cards/DetailsMovieCard";
import DetailsTvCard from "../Cards/DetailsTvCard";

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
    <div>
      {type === "movie" ? (
        <DetailsMovieCard movieDetails={data} />
      ) : (
        <DetailsTvCard tvSeriesDetails={data} />
      )}
    </div>
  );
};
Details.defaultProps = {
  type: "tv",
};
export default Details;
