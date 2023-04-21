import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
const Scroll = (props) => {
  return (
    <div>
              <button 
        className='btn'
        style={{float:'right',
      bottom:'0px',
      right:'0',
      zIndex:'1',
      backgroundColor:'rgba(235, 235, 12, 0.813)',
      width:'100'
      }}
        onClick={()=>{
          window.scrollTo(props.x,props.y)
        }}
        ><FaLongArrowAltUp
        size={60}
        /></button>
    </div>
  )
}

export default Scroll
