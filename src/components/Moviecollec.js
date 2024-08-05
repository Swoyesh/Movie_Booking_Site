import React, { useContext, useEffect, useState } from 'react';
import Cmovie from './Cmovie';
import "../MC.css";
import movieContext from '../Context/movieContext';
import { Link } from "react-router-dom";

const Moviecollec = () => {
  let context = useContext(movieContext);
  const { getMovies, dis1, dis2, day} = context;

  let sign1 = "<";
  let sign2 = ">";

  let [i, setI] = useState(0);
  let [movies, setMovies] = useState([]);
  let [vi, setVi] = useState("hidden");
  let [mov, setMov] = useState([]);
  let [nmov, setNmov] = useState([]);
  let [decider, setDecider] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await getMovies();
      let tempMov = [];
      let tempNmov = [];
      for (let i = 0; i < fetchedMovies.length; i++) {
        const movie = fetchedMovies[i];
        if (movie.day.length === 2) {
          tempMov.push(movie);
          tempNmov.push(movie);
        } else if (movie.day.length === 1 && movie.day[0] == 0) {
          tempMov.push(movie);
        } else if (movie.day.length === 1 && movie.day[0] == 1) {
          tempNmov.push(movie);
        }
      }
      setMov(tempMov);
      setNmov(tempNmov);
    };
    fetchData();
    if (day === "tomm") {
      setDecider(nmov);
    } else if (day === "today") {
      setDecider(mov);
    }
  }, [getMovies]);

  useEffect(() => {
    if (day === "tomm") {
      setDecider(nmov);
    } else if (day === "today") {
      setDecider(mov);
    }
  }, [day, mov, nmov]);
  

  useEffect(() => {
    let total = decider.length;
    const mo1 = decider.slice(0, 4);

    if (total <= 4) {
      setI(1);
      setMovies(mo1);
    } else if (total <= 8 && total > 4) {
      setI(2);
      setMovies(mo1);
    } else {
      setI(3);
      setMovies(mo1);
    }

    if (i >= 2) {
      setVi("visible");
    } else {
      setVi("hidden");
    }
  }, [decider]);

  const ss1 = {
    height: "25px",
    textAlign: "center",
    borderRadius: "100%",
    width: "25px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: "10px",
    color: "#000B4B",
    visibility: vi
  };

  const ss2 = {
    height: "25px",
    textAlign: "center",
    borderRadius: "100%",
    width: "25px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: "-10px",
    color: "#000B4B",
    visibility: vi
  };

  const prev = () => {
    let total = decider.length;
    let newL = total % 4;

    const mo1 = decider.slice(0, 4);
    const mo2 = total >= 8 ? decider.slice(4, 8) : decider.slice(4, 5 + newL);
    const mo3 = decider.slice(8, 9 + newL);

    if (i === 2) {
      setMovies(mo1);
    } else if (i === 3) {
      if (movies[0] === mo2[0]) {
        setMovies(mo1);
      } else if (movies[0] === mo3[0]) {
        setMovies(mo2);
      }
    }
  };

  const next = () => {
    let total = decider.length;
    let newL = total % 4;

    const mo1 = decider.slice(0, 4);
    const mo2 = total >= 8 ? decider.slice(4, 8) : decider.slice(4, 5 + newL);
    const mo3 = decider.slice(8, 9 + newL);

    if (i === 2) {
      setMovies(mo2);
    } else if (i === 3) {
      if (movies[0] === mo2[0]) {
        setMovies(mo3);
      } else if (movies[0] === mo1[0]) {
        setMovies(mo2);
      }
    }
  };

  return (
    <div className='container'>
      <div className='container' style={{ position: "relative", padding: "0px", justifyContent: "center", display: "flex", display: dis1 }}>
        <div className='noice' style={{ margin: "0px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <button className='goody' style={ss1} onClick={prev}><strong><span style={{ textAlign: "center", fontSize: "25px" }}>{sign1}</span></strong></button>
        </div>
        {movies.map((element, index) => (
          <Cmovie
            key={index}
            id={element._id}
            title={element.name}
            duration={element.duration}
            genre={element.genre}
            v_img={element.v_img}
            h_img={element.h_img}
            type={element.rating}
            time = {element.time}
            cast = {element.cast}
            release = {element.release}
            director = {element.director}
            synopsis = {element.synopsis}
            days = {element.day}
          />
        ))}
        <div className='noice' style={{ margin: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button className='goody' style={ss2} onClick={next}><strong><span style={{ textAlign: "center", fontSize: "25px" }}>{sign2}</span></strong></button>
        </div>
      </div>
      <div className='container' style={{ height: "116px", backgroundColor: "#182356", borderRadius: "12px", alignItems: "center", justifyContent: "center", fontWeight: "bolder", fontSize: "18px", display: dis2 }}>
        <div style={{ color: "#5aafe2", padding: "0px 20px" }}>
          No Shows Available
        </div>
      </div>
    </div>
  );
};

export default Moviecollec;