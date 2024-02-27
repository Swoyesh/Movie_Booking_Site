import React from 'react'
import Cmovie from './Cmovie'
import p1 from "../p1.jpg"
import m1 from "../m1.jpg"
import q1 from "../q1.jpg"
import n1 from "../n1.jpg"

const Moviecollec = () => {
  return (
    <div className='container'>
        <Cmovie title = {"Crakk - Jeetega Toh Jiyegaa"} duration = {"2 Hours 30 Mins"} genre = {"ACTION, SURVIVAL THRILLER"} img = {p1} type = {"PG"}/>
        <Cmovie title = {"Teri Baaton Mein Aisa Uljha Jiya"} duration = {"2 Hours"} genre = {"DRAMA, ROMANCE"} img = {m1} type = {"PG"}/>
        <Cmovie title = {"Gurkha Warrior"} duration = {"2 Hours 5 Mins"} genre = {"WAR"} img = {q1} type = {"PG"}/>
        <Cmovie title = {"DayaRani"} duration = {"2 Hours"} genre = {"LOVE STORY"} img = {n1} type = {"PG"}/>
    </div>
  )
}

export default Moviecollec