import React from 'react'
import blogImg1 from "../../imgs/blog-1.jpg"
import blogImg2 from "../../imgs/blog-2.jpg"
import blogImg3 from "../../imgs/blog-3.jpg"
import userImg from "../../imgs/user.jpg"
import "./Blog.css"
export default function Blog() {
  return (
    <div className='blog'>
<div className="container">
<h4 className='text-center'>Blog Post</h4>
<h1 className='text-center'>Our Latest Medical <br /> Blog Posts</h1>
  <div className="row gy-4 mt-4">
    <div className="col-md-4">
      <div className="blog-item">
        <img src={blogImg1} alt="" className='w-100 pb-3' />
        <div className="container">
        <a href=''className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing adipisicing.</a>
        <p className='py-2'>
        Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo
        </p>
      <hr/>
      <div className="d-flex align-items-center justify-content-between pt-2 pb-4">
        <div className='user-img'>
          <img src={userImg} alt="" className='rounded-circle'/>
          <span className='ms-2'>john Doe</span>
        </div>
        <div className="user-info">
          <span className='me-3'><i className='pe-1 fa-solid fa-eye'></i>12345</span>
          <span><i className='pe-1 fa-sharp fa-regular fa-comment'></i>123</span>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="blog-item">
        <img src={blogImg2} alt="" className='w-100 pb-3' />
        <div className="container">
        <a href=''className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing adipisicing.</a>
        <p className='py-2'>
        Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo
        </p>
      <hr />
      <div className="d-flex align-items-center justify-content-between pt-2 pb-4">
        <div className='user-img'>
          <img src={userImg} alt="" className='rounded-circle'/>
          <span className='ms-2'>john Doe</span>
        </div>
        <div className="user-info">
        <span className='me-3'><i className='pe-1 fa-solid fa-eye'></i>12345</span>
          <span><i className='pe-1 fa-sharp fa-regular fa-comment'></i>123</span>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="blog-item">
        <img src={blogImg3} alt="" className='w-100 pb-3' />
        <div className="container">
        <a href=''className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing adipisicing.</a>
        <p className='py-2'>
        Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo
        </p>
      <hr />
      <div className="d-flex align-items-center justify-content-between pt-2 pb-4">
        <div className='user-img'>
          <img src={userImg} alt="" className='rounded-circle'/>
          <span className='ms-2'>john Doe</span>
        </div>
        <div className="user-info">
        <span className='me-3'><i className='pe-1 fa-solid fa-eye'></i>12345</span>
          <span><i className='pe-1 fa-sharp fa-regular fa-comment'></i>123</span>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="blog-item">
        <img src={blogImg2} alt="" className='w-100 pb-3' />
        <div className="container">
        <a href=''className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing adipisicing.</a>
        <p className='py-2'>
        Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo
        </p>
      <hr />
      <div className="d-flex align-items-center justify-content-between pt-2 pb-4">
        <div className='user-img'>
          <img src={userImg} alt="" className='rounded-circle'/>
          <span className='ms-2'>john Doe</span>
        </div>
        <div className="user-info">
        <span className='me-3'><i className='pe-1 fa-solid fa-eye'></i>12345</span>
          <span><i className='pe-1 fa-sharp fa-regular fa-comment'></i>123</span>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="blog-item">
        <img src={blogImg3} alt="" className='w-100 pb-3' />
        <div className="container">
        <a href=''className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing adipisicing.</a>
        <p className='py-2'>
        Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo
        </p>
      <hr />
      <div className="d-flex align-items-center justify-content-between pt-2 pb-4">
        <div className='user-img'>
          <img src={userImg} alt="" className='rounded-circle'/>
          <span className='ms-2'>john Doe</span>
        </div>
        <div className="user-info">
        <span className='me-3'><i className='pe-1 fa-solid fa-eye'></i>12345</span>
          <span><i className='pe-1 fa-sharp fa-regular fa-comment'></i>123</span>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="blog-item">
        <img src={blogImg1} alt="" className='w-100 pb-3' />
        <div className="container">
        <a href=''className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing adipisicing.</a>
        <p className='py-2'>
        Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo
        </p>
      <hr />
      <div className="d-flex align-items-center justify-content-between pt-2 pb-4">
        <div className='user-img'>
          <img src={userImg} alt="" className='rounded-circle'/>
          <span className='ms-2'>john Doe</span>
        </div>
        <div className="user-info">
        <span className='me-3'><i className='pe-1 fa-solid fa-eye'></i>12345</span>
          <span><i className='pe-1 fa-sharp fa-regular fa-comment'></i>123</span>
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
