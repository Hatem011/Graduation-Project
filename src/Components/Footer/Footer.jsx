import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
  
    <div className="footer pt-5 mt-5">
    <div className="container">
<div className="row gy-5">
  <div className="col-md-3">
    <div className="footer-item">
      <h4>Get in Touch</h4>
      <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
      <div className='d-flex'>
        <i className='fas fa-location-dot mt-2 pe-2'></i>
        <p>123 Street, New York, USA</p>
      </div>
      <div className='d-flex align-items-center'>
        <i className='fa-solid fa-message pe-2'></i>
        <p>info@codezone-eg.com</p>
      </div>
      <div className='d-flex'>
        <i className='fas fa-phone mt-2 pe-2'></i>
        <p>+012 345 67890</p>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="footer-item">
      <h4>Quick links</h4>
      <div>
      <i className='fas fa-angle-right'></i>
      <a href=''>Home</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>About us</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>our services</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>meet the team</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>latest blog</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>contact us</a>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="footer-item">
      <h4>Popular links</h4>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>Home</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>About us</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>our services</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>meet the team</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>latest blog</a>
      </div>
      <div>
     <i className='fas fa-angle-right'></i>
      <a href=''>contact us</a>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="footer-item">
      <h4>NewsLetter</h4>
      <input type="email" placeholder='your mail address'className=''/> 
      <button className='btn-footer btn btn-primary py-2'>Sign up</button>
      <h6 className='my-3'>Follow us</h6>
      <div className="icons">
      <div className="footer-icon">
      <i className='fab fa-facebook'></i>
      </div>
      <div className="footer-icon">
      <i className='fab fa-twitter'></i>
      </div>
      <div className="footer-icon">
      <i className='fab fa-instagram'></i>
      </div>
      <div className="footer-icon">
      <i className='fab fa-linkedin'></i>
      </div>
      </div>
  
    </div>
  </div>
</div>
<hr />
<div className="footer-end text-white d-flex justify-content-between">
<div className="end-text">
        <p>All Right Reserved © 2023</p>
      </div>
      <div className="end-authors">
        <p>Designed by <a href=''>Our Team</a> </p>
      </div>
</div>
      </div>
    </div>
  )
}
