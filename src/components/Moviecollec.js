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
  let movie = ["Crakk - Jeetega Toh Jiyegaa", "Teri Baaton Mein Aisa Uljha Jiya", "Gurkha Warrior", "DayaRani", "hi", 'hello']
  let total = movie.length
  let newL = total%4;
  let mo1 = []
  mo1 = movie.slice(0, 4)
  let mo2 = []
  mo2 = movie.slice(4, 5+newL)
  let mo3 = []
  mo3 = movie.slice(8, 9+newL)
  let i
  let [movies, setMovies] = useState(mo1)
  const check = ()=>{
     if(total <= 4){
      i = 1;
      setMovies(mo1)
     }else if(total <=8 && total > 4){
      i = 2
      setMovies(mo1)
     }else{
      i = 3;
      setMovies(mo1)
     }
  }
  let time = ["2 Hours 30 Mins", "2 Hours", "2 Hours 5 Mins", "2 Hours"]
  let types = ["ACTION, SURVIVAL THRILLER", "DRAMA, ROMANCE", "WAR", "LOVE STORY"]
  let photos = [p1, m1, q1, n1]
  let counter = -1
  let [vi, setVi] = useState("hidden")
  useEffect(() => {
    check()
    if(i>= 2){
      setVi("visible")
    }else{
      setVi("hidden")
    }
  }, [i]);
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

  const prev = ()=>{
    setMovies(mo1)
  }

  const next = ()=>{
    setMovies(mo2)
  }
  return (
    <div className='container'>
      <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button className = 'goody' style={ss1} onClick={prev}><strong ><span style={{textAlign: "center", fontSize: "25px"}}><a>{sign1}</a></span></strong></button>
      </div>
      <div className='container' style={{position: "relative", padding: "0px"}}>
        {movies.map((element)=>{
          {counter++}
          return <Cmovie title = {element} duration = {time[counter]} genre = {types[counter]} img = {photos[counter]} type = {"PG"}/>
        })}
        <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button className='goody' style={ss2} onClick={next}><strong ><span style={{textAlign: "center", fontSize: "25px"}}><a>{sign2}</a></span></strong></button>
      </div>
        </div>
    </div>
  )
}

export default Moviecollec