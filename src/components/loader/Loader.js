import React from 'react'
import { HashLoader } from 'react-spinners';
import './style.css';
const Loader = () => {
    return (
        <div className="sweet-loading">
          {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
          <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}
          <HashLoader
          color="#EFCC00"
          size={150}
          />
        </div>
      );
}

export default Loader
