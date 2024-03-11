import React from 'react'
import Cmovie from './Cmovie'
import p1 from "../p1.jpg"
import m1 from "../m1.jpg"
import q1 from "../q1.jpg"
import n1 from "../n1.jpg"
import "../MC.css"

const Moviecollec = () => {
  let sign1 = "<"
  let sign2 = ">"
  return (
    <div className='container'>
      <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button className = 'goody' style={{height: "25px", textAlign: "center", borderRadius: "100%", width: "25px", border: "none", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", position:"relative", left: "10px", color: "#000B4B"}}><strong ><span style={{textAlign: "center", fontSize: "25px"}}>{sign1}</span></strong></button>
      </div>
      <div className='container' style={{position: "relative", padding: "0px"}}>
        <Cmovie title = {"Crakk - Jeetega Toh Jiyegaa"} duration = {"2 Hours 30 Mins"} genre = {"ACTION, SURVIVAL THRILLER"} img = {p1} type = {"PG"}/>
        <Cmovie title = {"Teri Baaton Mein Aisa Uljha Jiya"} duration = {"2 Hours"} genre = {"DRAMA, ROMANCE"} img = {m1} type = {"PG"}/>
        <Cmovie title = {"Gurkha Warrior"} duration = {"2 Hours 5 Mins"} genre = {"WAR"} img = {q1} type = {"PG"}/>
        <Cmovie title = {"DayaRani"} duration = {"2 Hours"} genre = {"LOVE STORY"} img = {n1} type = {"PG"}/>
        <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button className='goody' style={{height: "25px", textAlign: "center", borderRadius: "100%", width: "25px", border: "none", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", position:"relative", left: "-10px", color: "#000B4B"}}><strong ><span style={{textAlign: "center", fontSize: "25px"}}>{sign2}</span></strong></button>
      </div>
        </div>
    </div>
  )
}

export default Moviecollec