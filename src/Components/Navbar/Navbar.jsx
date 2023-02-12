import React from 'react'
import  {Link}  from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-white fixed-top">
  <div className="container">
    <a className="navbar-brand text-primary" href="#">
     {/* <img src={imgLogo} alt="" className='w-50' /> */}
     Medinova
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="price">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="testimonial">Testimonial</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact us</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
