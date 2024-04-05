import React, { useState } from 'react'
import "../title.css"
import { Link } from 'react-router-dom'
import SCmovie from './SCmovie.js'
import ala from '../ala.jpg'
import mnik from '../mnik.jpg'

//#adb5bd #db322b "Poppins, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"

const Upcoming = () => {
    const first = {
        name: "Aladdin",
        time: "2 hrs", 
        release: "10th April",
        photos: ala
    }
    
    const second = {
        name: "My name is Khan",
        time: "2 hrs 26 mins", 
        release: "5th March", 
        photos: mnik
    }
    
    const sfirst = {
        
    }
let NR = [first, second]
let CS = [sfirst]

    let [active, setActive] = useState("NR")
    let [nactive, setNactive] = useState(NR)

const clicked = (token)=>{
    setActive(token)
}

let counter = -1;
  return (
    <>
    <div className='title'>
        <Link href='#' className={active === "NR"? "act-linker" : "linker"} onClick={()=>clicked("NR")}>Next Release</Link>
        <Link href='#' className={active === "CS"? "act-linker" : "linker"}  onClick={()=>clicked("CS")}>Coming Soon</Link>
    </div>
    <div className= "container"style={{position:"relative", top: "75px"}}>
    {nactive.map((element)=>{
          {counter++}
          return <SCmovie title = {element.name} duration = {element.time} img = {element.photos} type = {element.release}/>
        })}
    </div>
    </>
  )
}

export default Upcoming