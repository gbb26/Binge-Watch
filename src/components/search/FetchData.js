import React, {  useEffect,useState } from 'react'
import Template from '../Template'
import './fetchdata.css'
import Loader from '../loader/Loader'
const FetchData = () => {
  // STATES
  const [movieName, setMovieName] = useState('tom and jerry')
  const [data, setData] = useState([])
  const [loader,setLoader] = useState(false)
  // METHOD BELOW WILL FETCH DATA FROM API
  const getData = () => {
  setLoader(true)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '267604c5d4mshbb0f82c9db7bf45p157ea4jsnc27e9ce7152e',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  
  fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${movieName}&country=us&show_type=all&output_language=en`, options)
    .then(response => response.json())
    .then((response) => {
      // console.log(response)
      setData(response.result)
      setLoader(false)
    })
    .catch(err => console.error(err));
  }
  // // useEffect
  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // HANDLES FORM'S SUBMISSION
  const handleSubmit = (event) => {
    event.preventDefault()
    getData()
  }
  return (
    <>
      {/* JSX */}
      <form
        className="form"
        onSubmit={handleSubmit}
        role="search">
        <input 
         id='item' type="search"
          placeholder="Search..."
          value={movieName}
          aria-label="Search"
          onChange={(event) => {
            setMovieName(event.target.value)
          }}
        />
      </form>
{
      !loader?
      
      <div className='container-fluid d-flex flex-wrap justify-content-evenly ' >
        {
          data.map((items) => {
            return <div key={items.tmdbId} className="card " >
              <Template
              src= {!items.posterURLs.original ? 'https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif' : items.posterURLs.original}
              year={items.year}
              tagline={items.tagline?items.tagline:items.overview.slice(0,70)}
              title={items.title ? items.title : ''}
                ratings={items.imdbRating ? items.imdbRating/10 : 'UnRated'} />
            </div>
          })
        }
      </div>:<Loader/>
}    
</>
  )
}

export default FetchData;