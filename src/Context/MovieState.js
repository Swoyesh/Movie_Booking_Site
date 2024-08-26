import React, { useState, useEffect } from 'react';
import movieContext from './movieContext';

const MovieState = (props) => {
  const i = 1
  const host = "http://localhost:5000";
  const header1 = useState("MY TICKETS"); // Extracting the state value
  const header2 = useState("BOOKING"); // Extracting the state value
  const [user, setUser] = useState("");
  const [dis1, setDis1] = useState("")
  const [b_dis1, setB_dis1] = useState("")
  const [dis2, setDis2] = useState("none")
  const [b_dis2, setB_dis2] = useState("none")
  const [day, setDay] = useState("today")
  const [activeTab, setActiveTab] = useState(null)

  const userFunc = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token")
      }
    });
    const json = await response.json();
    setUser(json);
    if(json.error == "Invalid user authentication"){
      window.localStorage.clear()
    }
  };

  const getMovies = async () => {
    const response = await fetch(`${host}/api/movies/getmovies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    return json
    // setMov(prevMov => [...prevMov, json]);
    // console.log(mov)
  };
  return (
    <movieContext.Provider value={{ header1, header2, userFunc, user, getMovies, dis1, setDis1, b_dis1, setB_dis1, dis2, setDis2, b_dis2, setB_dis2, day, setDay, activeTab, setActiveTab}}>
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieState;