import React, { useContext, useEffect, useState } from "react";
import "../cMovie.css";
import { Link, useNavigate } from "react-router-dom";
import movieContext from "../Context/movieContext";

const Cmovie = (props) => {
  const context = useContext(movieContext);
  const { acitveTab, setActiveTab, day, setDay } = context;
  const [display1, setDisplay1] = useState(-140);
  const [zoom, setZoom] = useState("1");
  const { type } = props;
  let hello = [];
  const navigate = useNavigate();

  const nbuyer = (ele, stl) => {
    if ((localStorage.getItem("auth-token") === null) & (stl == st1)) {
      navigate("/login");
    } else if (stl == st1) {
      navigate(`/movieid/${props.title}/${props.movieId}`, {
        state: {
          title: props.title,
          days: props.days,
          time: ele,
        },
      });
    }
  };

  const handleBuyTickets = () => {
    setActiveTab("");
    navigate(`/buy/${props.title}/${props.id}`, {
      state: {
        movieId: props.id,
        title: props.title,
        duration: props.duration,
        genre: props.genre,
        v_img: props.v_img,
        h_img: props.h_img,
        type: props.type,
        time: props.time,
        cast: props.cast,
        release: props.release,
        director: props.director,
        synopsis: props.synopsis,
        days: props.days,
      },
    });
  };

  props.time.forEach((element) => {
    hello.push(element.split(":"));
  });

  const st1 = {
    fontSize: "12.5px",
    width: "60px",
  };

  const st2 = {
    fontSize: "12.5px",
    width: "60px",
    cursor: "not-allowed",
    opacity: "0.6",
    pointerEvents: "auto",
    color: "gray",
    border: "1px solid gray",
    backgroundColor: "#182356",
    animation: "none",
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
    color: "red",
  };

  const fs2 = {
    textDecoration: "none",
    color: "white",
  };

  const [nice, setNice] = useState(fs1);

  const mover = () => {
    setNice(fs2);
  };

  const leaverr = () => {
    setNice(fs1);
  };

  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();

  useEffect(() => {
    setDay("today");
  }, []);

  return (
    <>
      <div
        className="card"
        style={{ width: "22%", margin: "15px", border: "none" }}
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
        >
          <button
            className="b1"
            style={s1}
            onMouseMove={mover}
            onMouseLeave={leaverr}
            onClick={handleBuyTickets}
          >
            <i className="fa-regular fa-ticket" style={{ margin: "8px" }}></i>
            Buy Tickets
          </button>
          <button className="b2" style={s1}>
            <i className="fa-thin fa-play" style={{ margin: "8px" }}></i>Play
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
              src={props.v_img}
              className="card-img-top"
              alt="..."
              height={"380px"}
            />
          </div>
        </div>
        <div
          className="card-body"
          style={{ backgroundColor: "#182356", width: "110%" }}
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
          {hello.map((element, index) => {
            const isPastTime =
              hours > parseInt(element[0]) ||
              (hours === parseInt(element[0]) && min > parseInt(element[1]));
            const style = !isPastTime || day == "tomm" ? st1 : st2;
            return (
              <button
                key={index}
                className="btn-primary"
                style={style}
                onClick={() => nbuyer(element, style)}
                onMouseMove={() => chooser(element)}
                onMouseLeave={constant}
              >
                {element[0]}:{element[1]}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cmovie;
