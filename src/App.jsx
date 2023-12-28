/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavigationBar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Trending from "./components/Trending/Trending";
import TopRated from "./components/TopRated/TopRated";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="main" style={{ display: "flex" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/trending-today"
          element={<Trending timeLine="day" />}
        />
        <Route
          exact
          path="/trending-this-week"
          element={<Trending timeLine="week" />}
        />
        <Route exact path="/top-rated" element={<TopRated />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/movie-details" element={<Details type="movie" />} />
        <Route exact path="/tv-details" element={<Details type="tv" />} />
      </Routes>
    </div>
  );
}

export default App;
