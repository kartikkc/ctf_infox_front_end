import React from 'react'
import "./Assets/homepage.css"
// import "./Assets/images/bg-image.png"
import Background from "./Assets/images/bg-image.png"

const Homepage = () => {
  return (
    <>
      <div className='wrap' style={{
        backgroundImage: `url(${Background})`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='hero-text'>
          {/* <h1 className='over-lap'>Capture The Flag</h1>
          <h1>Capture The Flag</h1>
          <h2>The choosen one</h2> */}
          <button href="register.html" class='reg-btn btn-1'>Register</button>
        </div>
      </div>
    </>
  )
}


export default Homepage