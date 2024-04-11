import React, { useState } from 'react'
import "../title.css"
import { Link } from 'react-router-dom'
import SCmovie from './SCmovie.js'
import ala from '../ala.jpg'
import mnik from '../mnik.jpg'
import tf from '../12f.jpeg'

//#adb5bd #db322b "Poppins, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"

const Upcoming = () => {
    const first = {
        name: "Aladdin",
        time: "2 Hours", 
        release: "April 10",
        photos: ala
    }
    
    const second = {
        name: "My name is Khan",
        time: "2 Hours 26 Mins", 
        release: "March 5", 
        photos: mnik
    }
    
    const sfirst = {
        name: "12th fail",
        time: "2 Hours 26 Mins",
        release: "October 27",
        photos: tf
    }

let NR = [first, second]
let CS = [sfirst]

    let [active, setActive] = useState("NR")
    let [nactive, setNactive] = useState(NR)

const clicked = (token, ntoken)=>{
    setActive(token)
    setNactive(ntoken)
}

let counter = -1;
  return (
    <>
    
    <div className='nice' style={{position: "sticky", margin: "0px", left: "0px"}}></div>
    <div className='first' style={{color: "red", position: "relative", top: "-600px"}}></div>
    <div className='nicer' style={{position: "relative", margin: "0px", left: "0px"}}>
        
    <div className='title'>
        <Link href='#' className={active === "NR"? "act-linker" : "linker"} onClick={()=>clicked("NR", NR)}>Next Release</Link>
        <Link href='#' className={active === "CS"? "act-linker" : "linker"}  onClick={()=>clicked("CS", CS)}>Coming Soon</Link>
    </div>
    <div className= "containers"style={{position:"relative", top: "75px"}}>
    {nactive.map((element)=>{
          {counter++}
          return <SCmovie title = {element.name} duration = {element.time} img = {element.photos} type = {element.release}/>
        })}
    </div>
    </div>
    <div className='last' style={{color: "red", position: "relative", bottom: "200px"}}></div>
    </>
  )
}

export default Upcoming