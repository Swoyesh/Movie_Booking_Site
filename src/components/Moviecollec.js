import React from 'react'
import Cmovie from './Cmovie'
import p1 from "../p1.jpg"
import m1 from "../m1.jpg"

const Moviecollec = () => {
  return (
    <div className='container'>
        <Cmovie title = {"Crakk - Jeetega Toh Jiyegaa"} duration = {"2 Hours 30 Mins"} genre = {"ACTION, SURVIVAL THRILLER"} img = {p1}/>
        <Cmovie title = {"Teri Baaton Mein Aisa Uljha Jiya"} duration = {"2 Hours"} genre = {"DRAMA, ROMANCE"} img = {m1}/>
        <Cmovie/>
        <Cmovie/>
    </div>
  )
}

export default Moviecollec