import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from "../Home/Home"
import About from "../About/About"
import Footer from "../Footer/Footer"
import Contact from "../Contact/Contact"
import Services from "../Services/Services"
import Blog from "../Blog/Blog"
import Testimonial from "../Testimonial/Testimonial"
import Pricing from "../Pricing/Pricing"
import './App.css';
function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Home/>
     <About/>
     <Blog/>
     {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='testimonial' element={<Testimonial/>}/>
      <Route path='price' element={<Pricing/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes> */}
     <Footer/>
    </div>
  );
}
export default App;
