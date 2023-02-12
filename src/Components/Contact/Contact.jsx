import React from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
   
<div className="contact my-5">
<div className="container">
  <p>
  <Link to="home">Home</Link> / Contact
  </p>
 
 
  <h2>Contact us <span>Feel free to contact us</span></h2>
  <div className="row">
    <div className="col-md-8">
      <div className="contact-form">
           <label htmlFor="">Name</label>
        <input type="text" className='form-control w-100' placeholder='Name' />
        <label htmlFor="">Organization Name</label>
        <input type="text" className='form-control w-100' placeholder='Organization Name' />
        <label htmlFor="">email</label>
        <input type="email" className='form-control' placeholder='email' />
        <label htmlFor="">How did you hear about us</label>
        <select  className='form-control' name="" id="">
          <option value="email">Email</option>
          <option value="social media">Social Media</option>
          <option value="recommind another organization">Recommind another organization</option>
        </select>
        <label htmlFor="">Phone</label>
        <input type="number" className='form-control' placeholder='phone' />
        <label htmlFor="">Type f query</label>
        <select  className='form-control' name="" id="">
          <option value="general">General</option>
          <option value="product">Product</option>
        </select>
        <textarea name="" id="" cols="30" rows="10" className='form-control'>Message</textarea>
      </div>
  </div>
  <div className="col-md-4">
    <div className="contact-text">
      <h4 className='py-3'>Our office</h4>
      <h6>Address</h6>
      <p>12 Ibrahim EL-Attar St,Zezenia ,Beside Yahiya Mosque Alexandria, Egypt</p>
      <h6>Phone</h6>
      <p>(+2)03-5766095</p>
      <h6>Mobil</h6>
      <p>00201026656339 -00201272238777</p>
      <h6>Email</h6>
      <p>info@codezone-eg.com</p>
      <button className='btn btn-primary text-center px-5 py-2'>Become A Success Partner</button>
    </div>
  </div>
  </div>
</div>
      </div>
   
  )
}
