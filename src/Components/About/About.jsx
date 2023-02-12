import React from 'react'
import "./About.css"
import about_img from "../../imgs/about.jpg"
export default function About() {
  return (
    <div className='about py-5 my-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="about-img">
                  <img src={about_img} alt="" className='w-100' />
            </div>
          </div>
          <div className="col-md-8">
            <div className="about-txt ps-5">
                <h3>About us</h3>
                <h2>Best Medical Care For Yourself and Your Family</h2>
                <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna
                </p>
                <div className="icons d-flex text-center">
                  <div>
                  <div className="item-icon">
<i class="fa-solid fa-user-doctor fa-2x"></i>
  <h5>Qualified</h5>
<h6>Doctors</h6>
</div>
                  </div>
<div>
<div className="item-icon">
<i class="fa-solid fa-hospital fa-2x"></i>
  <h5>Accurate</h5>
<h6>Services</h6>
</div>
</div>
<div>
<div className="item-icon">
<i class="fa-solid fa-microscope fa-2x"></i>
  <h5>Accurate</h5>
<h6>Testing</h6>
</div>
</div>
<div>
<div className="item-icon">
<i class="fa-solid fa-truck-medical fa-2x"></i>
  <h5>Free</h5>
<h6>Ambulance</h6>
</div>
</div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
