import React from 'react'
import "./Home.css"
export default function Home() {
  return (
    <div className='home'>
      <div className="home-layer">
        <div className="home-heading">
          <h4>Welcome to Medinova</h4>
          <h1>Best Healthcare <br /> Solution In Your City</h1>
          <button className='btn1'>Find Doctor</button>
          <button className='btn2'>Appointment</button>
        </div>
      </div>
    </div>
  )
}
