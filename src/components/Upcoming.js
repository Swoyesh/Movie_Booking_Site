import React, { useState } from 'react'
import "../title.css"
import { Link } from 'react-router-dom'
import SCmovie from './SCmovie.js'
import jk from '../jk.jpg'
import goat from '../goat.jpeg'
import srk from '../srk.jpg'

const Upcoming = () => {
    const first = {
        name: "Joker: Folie à Deux",
        time: "2 Hours 18 Mins", 
        release: "October 4",
        photos: jk
    }
    
    const second = {
        name: "The Greatest Of Time",
        time: "2 Hours 59 Mins", 
        release: "September 5", 
        photos: goat
    }
    
    const sfirst = {
        name: "King",
        time: "3 Hours",
        release: "November 1, 2025",
        photos: srk
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
    <div className= "containers"style={{position:"relative", top: "10vh"}}>
    {nactive.map((element)=>{
          {counter++}
          return <SCmovie title = {element.name} duration = {element.time} img = {element.photos} type = {element.release}/>
        })}
    </div>
    </div>
    <div className='last' style={{color: "red", position: "relative", top: "-30vh"}}></div>
    </>
  )
}

export default Upcoming