import React, { useContext, useEffect, useState } from 'react'
import Cmovie from './Cmovie'
import "../MC.css"
import movieContext from '../Context/movieContext'

const Moviecollec = () => {
  let context = useContext(movieContext)
  const {getMovies, dis1, dis2} = context

  let sign1 = "<"
  let sign2 = ">"

  let [i, setI] = useState(0)
  let [movies, setMovies] = useState([])
  let [vi, setVi] = useState("hidden")
  let [mov, setMov] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await getMovies()
      setMov(fetchedMovies)
    }

    fetchData()
  }, [getMovies])

  useEffect(() => {
    let total = mov.length

    const mo1 = mov.slice(0, 4)

    if (total <= 4) {
      setI(1)
      setMovies(mo1)
    } else if (total <= 8 && total >= 4) {
      setI(2)
      setMovies(mo1)
    } else {
      setI(3)
      setMovies(mo1)
    }

    if (i >= 2) {
      setVi("visible")
    } else {
      setVi("hidden")
    }
  }, [mov, i])

  const ss1 = {
    height: "25px", 
    textAlign: "center", 
    borderRadius: "100%", 
    width: "25px", 
    border: "none", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    position:"relative", 
    left: "10px", 
    color: "#000B4B", 
    visibility: vi
  }

  const ss2 = {
    height: "25px", 
    textAlign: "center", 
    borderRadius: "100%", 
    width: "25px", 
    border: "none", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    position:"relative", 
    left: "-10px", 
    color: "#000B4B",
    visibility: vi
  }

  const prev = () => {
    let total = mov.length
    let newL = total % 4

    const mo1 = mov.slice(0, 4)
    const mo2 = total >= 8 ? mov.slice(4, 8) : mov.slice(4, 5 + newL)
    const mo3 = mov.slice(8, 9 + newL)

    if (i === 2) {
      setMovies(mo1)
    } else if (i === 3) {
      if (movies[0] === mo2[0]) {
        setMovies(mo1)
      } else if (movies[0] === mo3[0]) {
        setMovies(mo2)
      }
    }
  }

  const next = () => {
    let total = mov.length
    let newL = total % 4

    const mo1 = mov.slice(0, 4)
    const mo2 = total >= 8 ? mov.slice(4, 8) : mov.slice(4, 5 + newL)
    const mo3 = mov.slice(8, 9 + newL)

    if (i === 2) {
      setMovies(mo2)
    } else if (i === 3) {
      if (movies[0] === mo2[0]) {
        setMovies(mo3)
      } else if (movies[0] === mo1[0]) {
        setMovies(mo2)
      }
    }
  }

  return (
    <div className='container'>
      <div className='container' style={{position: "relative", padding: "0px", justifyContent: "center", display: "flex", display: dis1}}>
        <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
          <button className='goody' style={ss1} onClick={prev}><strong><span style={{textAlign: "center", fontSize: "25px"}}>{sign1}</span></strong></button>
        </div>
        {movies.map((element, index) => (
          <Cmovie
            key={index}
            title={element.name}
            duration={element.duration}
            genre={element.genre}
            img={element.img}
            type={element.rating}
          />
        ))}
        <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <button className='goody' style={ss2} onClick={next}><strong><span style={{textAlign: "center", fontSize: "25px"}}>{sign2}</span></strong></button>
        </div>
      </div>
      <div className='container' style={{height: "116px", backgroundColor: "#182356", borderRadius: "12px", alignItems: "center", justifyContent: "center", fontWeight: "bolder", fontSize: "18px", display: dis2}}>
        <div style={{color: "#5aafe2", padding: "0px 20px"}}>
          No Shows Available
        </div>
      </div>
    </div>
  )
}

export default Moviecollec