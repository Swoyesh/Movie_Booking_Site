import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from "./Layout";
import "../Buy.css";
import movieContext from '../Context/movieContext';

const Buy = (props) => {
  const { movie } = props; // Get movie details from props
  const context = useContext(movieContext);
  const audis = ["Audi 1", "Audi 2", "Audi 3"];
  const time = ['10:00 AM', "14:00 PM"];
  const { setDay } = context;
  const d = new Date();
  const ld = new Date(d.getFullYear(), d.getMonth() + 1, 0);
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let arr = [];
  let newArr = [];
  for (let index = 0; index < 8; index++) {
    if (index === 0) {
      if (d.getDate() + 2 > ld.getDate()) {
        arr[index] = 1;
      } else {
        arr[index] = d.getDate() + 2;
      }
    } else {
      if (arr[index - 1] === ld.getDate()) {
        arr[index] = 1;
      } else {
        arr[index] = arr[index - 1] + 1;
      }
    }
  }

  const cm = (index) => {
    if (arr[index] <= ld.getDate() && arr[index] >= ld.getDate() - 8) {
      return d.getMonth();
    } else {
      return d.getMonth() + 1;
    }
  }

  for (let index = 0; index < 8; index++) {
    newArr[index] = arr[index].toString();
  }
  let [activeTab, setActiveTab] = useState("Today");
  let style = {
    color: "white",
    fontSize: "30px"
  };
  let clicked11 = (state) => {
    setActiveTab(state);
    setDay("today");
  }
  let clicked12 = (state) => {
    setActiveTab(state);
    setDay("tomm");
  }
  let clicked2 = (state) => {
    setActiveTab(state);
  }

  return (
    <Layout>
      <div className="ancs">
        <div className="container" style={{ height: "750px", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "100%" }}>
            <div className="firsts" style={{ width: "100%", position: "relative" }}>
              <img
                src={movie.img} // Use movie poster
                alt={movie.name} // Use movie title
                style={{
                  width: "100%",
                  height: "450px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />
              <div className="lasts" style={{ width: "100%", position: "relative", top: "350px" }}></div>
            </div>
          </div>
          <div style={{ position: "relative", margin: "10px", width: "100%", top: "-95px" }}>
            <div style={{ position: "relative", zIndex: "3" }}>
              <img
                src={movie.img} // Use movie thumbnail
                height="340px"
                width="275px"
                style={{ borderRadius: "10px" }}
              ></img>
              <div className="info" style={{ color: "white", display: "flex", left: "320px", position: "absolute", flexDirection: "column", top: "10px" }}>
                <h1 style={{ fontWeight: "600", fontSize: "36px", lineHeight: "1.2" }}>
                  {movie.name} {/* Use movie title */}
                </h1>
                <div style={{ display: "flex", position: "relative", top: "-10px" }}>
                  <hr width="25vw" style={{ border: "1.35px solid red", opacity: "1" }} />
                  <h4 style={{ fontWeight: "400", fontSize: "13px", margin: "7px", lineHeight: "1.5" }}>
                    {movie.genre.join(', ')} {/* Use movie genres */}
                  </h4>
                </div>
                <p className="movie-info 2my" style={{ fontSize: "15px", fontWeight: "300", lineHeight: "3" }}>
                  {movie.synopsis} {/* Use movie description */}
                </p>
                <div className="justified-list" style={{ lineHeight: "1.5", display: "flex", width: "100%", flexDirection: "row" }}>
                  <div style={{ position: 'absolute', flex: "1" }}>
                    <div className="item">
                      <span style={{ color: "#db322b" }}>Director : &nbsp;</span>
                      {movie.name} {/* Use movie director */}
                    </div>
                    <div className="item">
                      <span style={{ color: "#db322b" }}>Cast : &nbsp;</span>
                      {movie.name.join(', ')} {/* Use movie cast */}
                    </div>
                    <div className="item">
                      <span style={{ color: "#db322b" }}>Release On : &nbsp;</span>
                      {movie.duration} {/* Use movie release date */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ flexDirection: "column", width: "88%" }}>
        <h3 style={{ fontWeight: "bold", color: "white" }}>
          Viewing Times{" "}
          <span style={{ backgroundColor: "red", height: "5px", width: "5px", display: "inline-block", borderRadius: "50%" }}></span>
        </h3>
        <div style={{ alignSelf: "flex-end", height: "0px", alignContent: "center", position: "absolute" }}>
          <Link className={activeTab === "Today" ? 'actors' : 'dices'} onClick={() => clicked11("Today")}>Today</Link>
          <Link className={activeTab === "Tomm" ? 'actors' : 'dices'} onClick={() => clicked12("Tomm")}>Tomm</Link>
          {newArr.map((date, index) => (
            <Link key={index} className={activeTab === index.toString() ? 'actors' : 'dices'} onClick={() => clicked2(index.toString())}>{date.concat(" ", month[cm(index)])}</Link>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <span className="redr">o</span>
            <span className="niceee">SOLD</span>
          </div>
          <div>
            <span className="yellowy">o</span>
            <span className="nicee1">BOOKED</span>
          </div>
          <div>
            <span className="greeng">o</span>
            <span className="nicee2">AVAILABLE</span>
          </div>
        </div>
      </div>
      <div className='ances' style={{ margin: "20px", marginBottom: "60px" }}>
        {audis.map((element) => (
          <div key={element} className='container' style={{ height: "110px", borderRadius: "10px", width: "90%", marginBottom: "20px", display: "flex", flexDirection: "row" }}>
            <div style={{ backgroundColor: "#db322b", width: "14%", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", borderRadius: "10px 0px 0px 10px", position: "relative", left: "-12px" }}>
              <span style={{ color: "white", fontWeight: "bold", margin: "5px", marginTop: "10px", marginLeft: "16px", display: "inline-block", fontSize: "22px", fontFamily: "Arial Black", position: "absolute" }}>{element}</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              {time.map((elements) => (
                <a key={elements} className='timerr' style={{ width: "82px" }}>{elements}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Buy;