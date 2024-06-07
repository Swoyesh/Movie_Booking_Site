import React from 'react'
import '../footer.css'
import { Link } from 'react-router-dom'
import logo from '../logo.jpg'
import e_s from '../e_s.png'
import ki from '../ki.jpg'
import fp from '../fp.png'

const Footer = () => {
  return (
    <>
    <div className='foot'>
      <div className='container'>
        <img className="lg" src={logo}></img>
        <p className='now'>QUICKLINKS</p>
        <ol >
        <Link to="#home" className='list'>Home</Link>
        <Link to="#about" className='list'>About Us</Link>
        <Link to="#moments" className='list'>Moments</Link>
        <Link to="#ticket" className='list'>Ticket Rate</Link>
        <Link to="#contact" className='list'>Contact</Link>
        <Link to="#career" className='list'>Career</Link>
        </ol>
        <p className='wow'>PAYMENT PARTNER</p>
        <div className='conter'>
          <img src={e_s} className='imgg1'></img>
          <img src={ki} className='imgg2'></img>
          <img src={fp} className='imgg3'></img>
        </div>
      </div>
      <div className='container'>
      <Link to = "https://www.facebook.com/bigmoviesnepal"><i class="fa-brands fa-facebook"></i></Link>
      <Link to = "https://www.instagram.com/bigmovies_official"><i class="fa-brands fa-instagram"></i></Link>
      <Link to = "https://twitter.com/BigmoviesNepal"><i class="fa-brands fa-square-twitter"></i></Link>
      <Link ><i class="fa-brands fa-whatsapp"></i></Link>
      </div>
      <div className='para'>
        <p><strong style={{fontSize: '25px'}}>For Booking</strong><br></br></p><p>For Marketing and enquires:<br></br>Email : hr@bigmovies.com.np<br></br></p><p>For Complains & Support<br></br>Email: pralesh@bigmovies.com.np</p>
        
      </div>
      <div>
      <p className='poo'>Copyright © 2017 Bigmovies | 4th Floor NLIC City Center Mall, 33, Kamalpokhari, Kathmandu, Nepal | <span className='spp'>Terms & Conditions</span></p>
      </div>
    </div>
    </>
  )
}

export default Footer