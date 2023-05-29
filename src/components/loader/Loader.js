import React from "react";
import { HashLoader } from "react-spinners";
import "./style.css";
const Loader = () => {
  return (
    <div className="sweet-loading">
      <HashLoader color="#EFCC00" size={150} />
    </div>
  );
};

export default Loader;
