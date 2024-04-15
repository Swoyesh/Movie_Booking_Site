import React from 'react'
import '../footer.css'
import { Link } from 'react-router-dom'
import logo from '../logo.jpg'

const Footer = () => {
  return (
    <>
    <div className='foot'>
      <div className='container'>
        <img className="lg" src={logo}></img>
        <p className='now'>QUICKLINKS</p>
      </div>
      <div className='container'>
      <Link to = "https://www.facebook.com/bigmoviesnepal"><i class="fa-brands fa-facebook"></i></Link>
      <Link to = "https://www.instagram.com/bigmovies_official"><i class="fa-brands fa-instagram"></i></Link>
      <Link to = "https://twitter.com/BigmoviesNepal"><i class="fa-brands fa-square-twitter"></i></Link>
      <Link ><i class="fa-brands fa-whatsapp"></i></Link>
      </div>
    </div>
    </>
  )
}

export default Footer