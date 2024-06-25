//individual movies

import React, { useContext, useState} from "react";
import "../cMovie.css";
import { Link } from "react-router-dom";
import movieContext from "../Context/movieContext";

const Cmovie = (props) => {
  const context = useContext(movieContext)
  const {acitveTab, setActiveTab, day, setDay} = context
  const [display1, setDisplay1] = useState(-140);
  const [zoom, setZoom] = useState("1");
  const { type } = props;
  let hello = []
  
  props.time.forEach(element => {
    hello.push(element.split(":"))
  });

  console.log(hello)
  const st1 = {
    fontSize: "12.5px",
    width: "60px",
  };
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  console.log(date.getTime())
  const st2 = {
    fontSize: "12.5px",
    width: "60px",
    cursor: "not-allowed",
    opacity: "0.6",
    pointerEvents: "auto",
    color: "gray",
    border: "1px solid gray",
    backgroundColor: "#182356",
  };

  const [choose, setChoose] = useState("1");
  const clicked1 = () => {
    setZoom("1.1");
    setDisplay1(0);
  };

  const clicked2 = () => {
    setZoom("1");
    setDisplay1(-140);
  };

  let s1 = {
    translate: display1,
  };
  let s2 = { 
    scale: zoom,
  };

  const chooser = (e) => {
    if (hours > parseInt(e)) {
      setChoose("2");
    }
  };

  const constant = () => {
    setChoose("1");
  };

  const fs1 = {
    textDecoration: "none", 
    color: "red"
  }
  const fs2 = {
    textDecoration: "none", 
    color: "white"
  }
const [nice, setNice] = useState(fs1)

const mover = ()=>{
  setNice(fs2)
}

const leaverr = ()=>{
  setNice(fs1)
}

const newer = ()=>{
  setActiveTab("")
}




  return (
    <>
      <div
        className="card"
        style={{ width: "25%", margin: "15px", border: "none" }}
      >
        <div
          onMouseMove={clicked1}
          onMouseOut={clicked2}
          className="type"
          style={{
            position: "relative",
            top: "10px",
            backgroundColor: "red",
            height: "0%",
            textAlign: "right",
            right: "10px",
          }}
        > <Link to="/buy" style={nice}>
          <button className="b1" style={s1} onMouseMove={mover} onMouseLeave={leaverr} onClick={newer}>
           <i class="fa-regular fa-ticket" style={{ margin: "8px"}}></i>Buy
            Tickets
          </button>
          </Link>
          <button className="b2" style={s1}>
            <i class="fa-thin fa-play" style={{ margin: "8px" }}></i>Play
            Trailer
          </button>
          <button className="buttt">{type}</button>
        </div>
        <div className="main" style={{ height: "380px" }}>
          <div
            className="img-div"
            style={s2}
            onMouseMove={clicked1}
            onMouseOut={clicked2}
          >
            <img
              src={props.img}
              className="card-img-top"
              alt="..."
              height={"380px"}
            />
          </div>
        </div>
        <div
          className="card-body"
          style={{ backgroundColor: "#182356", width: "100%" }}
        >
          <h5
            className="card-title"
            style={{ color: "white", fontSize: "21px" }}
          >
            <strong>{props.title}</strong>
          </h5>
          <p
            className="card-text"
            style={{ color: "gray", fontSize: "12px", textAlign: "left" }}
          >
            {props.duration}
          </p>
          <p
            className="card-text"
            style={{
              color: "gray",
              marginTop: "-12px",
              fontSize: "12px",
              textAlign: "left",
            }}
          >
            {props.genre}
          </p>
          {hello.map((element) => {
            const authToken = localStorage.getItem("auth-token");
            return (
              <Link
                to={authToken === null && choose == "1" ? "/login" : "/movieid"}
                key={element}
              >
                <button
                  className="btn-primary"
                  style={hours < parseInt(element[0]) || day === "tomm" ? st1 : (hours == parseInt(element[0]) && min <= parseInt(element[1]) ? st1 : st2)}
                  onMouseMove={() => chooser(element)}
                  onMouseLeave={constant}
                >
                  {element[0]}:{element[1]}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cmovie;
