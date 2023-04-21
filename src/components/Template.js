import React from 'react'
import '../stylesheets/template.css'
import { Link } from 'react-router-dom'
const Template = (props) => {
  const name = {
  t:props.title,
  p:props.src
  }
  return (
    <div>
      <button className="badge rounded-pill"> {props.ratings} </button>
      <img src={props.src.substring(props.src.length - 4, props.src.length) === 'null' ? 'https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif' : props.src} className="card-img-top" alt="visuals" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <h6 style={{color:'yellow'}}>{props.tagline?props.tagline:''}</h6>
        <h6>{props.year}</h6>
        <Link to='/details' state={name}  className="link" >Know More</Link>
      </div>
    </div>
  )
}

export default Template
