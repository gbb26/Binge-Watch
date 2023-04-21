import React from 'react'
import './App.css'
import Navigator from './components/Navigator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FetchDetails from './components/Details/FetchDetails';
import FetchData from './components/search/FetchData';
import FetchPopular from './components/popular/FetchPopular';
import Trending from './components/Trending/Trending';
// import { FaLongArrowAltUp } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route exact path='/' element={<FetchPopular heading='TOP 100 MOVIES OF ALL TIME' />} />
          <Route exact path='/trending' element={<Trending />} />
          <Route exact path='/search' element={<FetchData />} />
          <Route exact path='/details' element={<FetchDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;