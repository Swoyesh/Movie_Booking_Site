import React, { useState, useEffect } from 'react';
import movieContext from './movieContext';

const MovieState = (props) => {
  const i = 1
  const host = "http://localhost:5000";
  const header1 = useState("MY TICKETS"); // Extracting the state value
  const header2 = useState("BOOKING"); // Extracting the state value
  const [user, setUser] = useState("");
  const [mov, setMov] = useState([]);
  let [dis1, setDis1] = useState("")
  let [dis2, setDis2] = useState("none")

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
    <movieContext.Provider value={{ header1, header2, userFunc, user, mov, getMovies, setMov, dis1, setDis1, dis2, setDis2}}>
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieState;