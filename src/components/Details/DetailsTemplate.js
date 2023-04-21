import React from 'react'
import './style.css'
function DetailsTemplate(props) {
  return (
    <div className='container-fluid main ' style={{ display: props.movieData.title ? '' : 'none' }} >
      <div className='image' >
        <img src={!props.movieData.poster ? 'https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif' : props.movieData.poster} alt='/' />
      </div>
      <div className='details' >
        <h1 className='titles'>{props.movieData.title}</h1>
        <h4 className='titles'>{props.movieData.type}</h4>
        <li><span className='points'>IMDB ratings:</span><p className="data">{props.movieData.ratings} </p></li>
        <li><span className='points'>Language:</span><p className="data">{props.movieData.language}</p></li>
        <li><span className='points'>Country:</span><p className="data">{props.movieData.country}</p></li>
        <li><span className='points'>Genres:</span><p className="data">{props.movieData.genres}</p></li>
        <li><span className='points'>Release Date:</span><p className="data">{props.movieData.releasedOn}</p></li>
        <li><span className='points'>Director:</span><p className="data">{props.movieData.dir}</p></li>
        <li><span className='points'>Actors:</span><p className="data">{props.movieData.actors}</p></li>
        <li><span className='points'>Writers:</span><p className="data">{props.movieData.writer}</p></li>
      </div>
      <li><p className="data">{props.movieData.summary}</p></li>
    </div>
  )
}

export default DetailsTemplate;
