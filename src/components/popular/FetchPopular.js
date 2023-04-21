import React, { useEffect, useState } from 'react'
import Template from '../Template'
import Loader from '../loader/Loader'
import Scroll from '../Scroll'
const FetchPopular = (props) => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setLoader(true)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '267604c5d4mshbb0f82c9db7bf45p157ea4jsnc27e9ce7152e',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };
    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        setData(response)
        setLoader(false)
      })
      .catch(err => console.error(err));
  }, [])
  return (
    <div>
      <center><h1>{props.heading}</h1></center>
      {loader === false ?
      <div>
       <div className='container-fluid d-flex flex-wrap justify-content-evenly '>
        {
          data.map((items) => {
            return <div key={items.id} className="card " >
              <Template
                title={items.title ? items.title.slice(0,30)+'...' : ''}
                year={items.year}
                src={!items.image ? 'https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif' : items.image}
                summary={items.description ? items.description.slice(0, 70) : ''}
                ratings={items.rating ? items.rating : 'UnRated'}
                trailerLink={items.trailer}
              />
            </div>
          })
        }
      </div>
      <Scroll x={0} y={0} />
      </div>
      : <Loader />}
    </div>
  )
}

export default FetchPopular
