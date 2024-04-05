import React, { useEffect, useState } from 'react'
import Cmovie from './Cmovie'
import p1 from "../p1.jpg"
import m1 from "../m1.jpg"
import q1 from "../q1.jpg"
import n1 from "../n1.jpg"
import "../MC.css"

const Moviecollec = () => {
  let sign1 = "<"
  let sign2 = ">"
  let movies = ["Crakk - Jeetega Toh Jiyegaa", "Teri Baaton Mein Aisa Uljha Jiya", "Gurkha Warrior", "DayaRani"]
  let time = ["2 Hours 30 Mins", "2 Hours", "2 Hours 5 Mins", "2 Hours"]
  let types = ["ACTION, SURVIVAL THRILLER", "DRAMA, ROMANCE", "WAR", "LOVE STORY"]
  let photos = [p1, m1, q1, n1]
  let counter = -1
  let [vi, setVi] = useState("hidden")
  useEffect(() => {
    if(counter>3){
      setVi("visible")
    }
    if(counter<=3){
      setVi("hidden")
    }
    console.log(counter)
  }, [counter]);
  let ss1 = {
    height: "25px", 
    textAlign: "center", 
    borderRadius: "100%", 
    width: "25px", 
    border: "none", 
    textAlign: "center", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    position:"relative", 
    left: "10px", 
    color: "#000B4B", 
    visibility: vi
  }
  let ss2 = {
    height: "25px", 
    textAlign: "center", 
    borderRadius: "100%", 
    width: "25px", 
    border: "none", 
    textAlign: "center", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    position:"relative", 
    left: "-10px", 
    color: "#000B4B",
    visibility: vi
  }
  return (
    <div className='container'>
      <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button className = 'goody' style={ss1}><strong ><span style={{textAlign: "center", fontSize: "25px"}}><a>{sign1}</a></span></strong></button>
      </div>
      <div className='container' style={{position: "relative", padding: "0px"}}>
        {movies.map((element)=>{
          {counter++}
          return <Cmovie title = {element} duration = {time[counter]} genre = {types[counter]} img = {photos[counter]} type = {"PG"}/>
        })}
        <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button className='goody' style={ss2}><strong ><span style={{textAlign: "center", fontSize: "25px"}}><a>{sign2}</a></span></strong></button>
      </div>
        </div>
    </div>
  )
}

export default Moviecollec