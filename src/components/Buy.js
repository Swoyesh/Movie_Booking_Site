import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from "./Layout";
import "../Buy.css";
import movieContext from '../Context/movieContext'

const Buy = () => {
  const context = useContext(movieContext)
  const time = ['10:00 AM', "14:00 PM"]
  const { setDay } = context
  const d = new Date();
  const ld = new Date(d.getFullYear(), d.getMonth()+1, 0)
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let arr = [];
  let newArr = [];
  for (let index = 0; index < 8; index++) {
    if(index === 0){
      if(d.getDate() + 2>ld.getDate()){
        arr[index] = 1;
      }else{
        arr[index] = d.getDate() + 2
      }
    }else{
      if(arr[index-1] === ld.getDate()){
        arr[index] = 1
      }else{
        arr[index] = arr[index-1] + 1;
      }    
    } 
  }

  const cm = (index)=>{
    if(arr[index]<=ld.getDate() && arr[index]>=ld.getDate()-8){
      return d.getMonth()
    }else{
      return d. getMonth()+1
    }
  }

  for (let index = 0; index < 8; index++) {
    newArr[index] = arr[index].toString();
  }
  let [activeTab, setActiveTab] = useState("Today")
    let style = {
        color: "white",
        fontSize: "30px"
    }
    let clicked11 = (state)=>{
      setActiveTab(state)
      setDay("today")
    }
    let clicked12 = (state)=>{
      setActiveTab(state)
      setDay("tomm")
    }
    let clicked2 = (state)=>{
      setActiveTab(state)
    }
  return (
    <Layout>
      <div className="ancs">
        <div
          className="container"
          style={{ height: "750px", display: "flex", flexDirection: "column" }}
        >
          <div style={{ width: "100%" }}>
            <div
              className="firsts"
              style={{ width: "100%", position: "relative" }}
            >
              <img
                src="https://variety.com/wp-content/uploads/2023/08/ONEPIECE_Unit_10613RC.jpg"
                alt="One Piece"
                style={{
                  width: "100%",
                  height: "450px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />
              <div
                className="lasts"
                style={{ width: "100%", position: "relative", top: "350px" }}
              ></div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              margin: "10px",
              width: "100%",
              top: "-95px",
            }}
          >
            <div style={{ position: "relative", zIndex: "3" }}>
              <img
                src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfOO_2CUNrBbD6ZqpzaczOc69ZiUc9lmGb-HDMYOCCamtFesr2mt66xYkOa7gj7rML3zHArPoJiRdm1uUX6qGQF6wDhw56bjCzWRrAPf4rOtoVXKzcTXNuph6N5IuG4iP035pbohFGrTQyhtKXDEL30d.jpg?r=409"
                height="340px"
                width="275px"
                style={{ borderRadius: "10px" }}
              ></img>
              <div
                className="info"
                style={{
                  color: "white",
                  display: "flex",
                  left: "320px",
                  position: "absolute",
                  flexDirection: "column",
                  top: "10px",
                }}
              >
                <h1
                  style={{
                    fontWeight: "600",
                    fontSize: "36px",
                    lineHeight: "1.2",
                  }}
                >
                  One Piece
                </h1>
                <div style={{ display: "flex", position: "relative", top: "-10px"}}>
                  <hr
                    width="25vw"
                    style={{ border: "1.35px solid red", opacity: "1" }}
                  />
                  <h4
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      margin: "7px",
                      lineHeight: "1.5",
                    }}
                  >
                    Action, Adventure
                  </h4>
                </div>
                <p
                  className="movie-info 2my"
                  style={{
                    fontSize: "15px",
                    fontWeight: "300",
                    lineHeight: "3", /* Adjusted line height */
                  }}
                >
                  The greatest story of all time!!
                </p>
                <div className="justified-list" style={{ lineHeight: "1.5" }}>
                  <div className="item">
                    <span style={{ color: "#db322b" }}>Director : &nbsp;</span>{" "}
                    Eiichiro Oda
                  </div>
                  <div className="item">
                    <span style={{ color: "#db322b" }}>Cast : &nbsp;</span>{" "}
                    Luffy, Zoro, Nami
                  </div>
                  <div className="item">
                    <span style={{ color: "#db322b" }}>
                      Release On : &nbsp;
                    </span>{" "}
                    June 5, 2024
                  </div>
                  <div className="item">
                    <span style={{ color: "#db322b" }}>Director : &nbsp;</span>{" "}
                    Infinity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ flexDirection: "column", width: "88%"}}>
        <h3 style={{ fontWeight: "bold", color: "white" }}>
          Viewing Times{" "}
          <span
            style={{
              backgroundColor: "red",
              height: "5px",
              width: "5px",
              display: "inline-block",
              borderRadius: "50%",
            }}
          ></span>
        </h3>
        <div style={{alignSelf: "flex-end", height: "0px", alignContent: "center", position: "absolute"}}>
      <Link className={activeTab==="Today"?'actors':'dices'} onClick={()=>clicked11("Today")}>Today</Link>
          <Link className={activeTab==="Tomm"?'actors':'dices'} onClick={()=>clicked12("Tomm")}>Tomm</Link>
          <Link className={activeTab==="1"?'actors':'dices'} onClick={()=>clicked2("1")}>{newArr[0].concat(" ", month[cm(0)])}</Link>
          <Link className={activeTab==="2"?'actors':'dices'} onClick={()=>clicked2("2")}>{newArr[1].concat(" ", month[cm(1)])}</Link>
          <Link className={activeTab==="3"?'actors':'dices'} onClick={()=>clicked2("3")}>{newArr[2].concat(" ", month[cm(2)])}</Link>
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
      <div className='ances' style={{margin: "20px", marginBottom: "60px"}}>
        <div className='container' style={{height: "110px", borderRadius: "10px", width: "90%"}}>
          <div style={{backgroundColor: "#db322b", width: "14%", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", borderRadius: "10px 0px 0px 10px", position: "relative", left: "-12px"}}>
            <span style={{color: "white", fontWeight: "bold", margin: "5px", marginTop: "10px", marginLeft: "16px", display: "inline-block", fontSize: "22px", fontFamily: "Arial Black", position: "absolute"}}>Audi 1</span>
          </div>
          <div >
            {time.map((element)=>{
              return <a className='timerr' style={{width: "82px"}}>{element}</a>
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Buy;