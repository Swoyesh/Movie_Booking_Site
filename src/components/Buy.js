import React from "react";
import Layout from "./Layout";
import "../Buy.css";

const Buy = () => {
  return (
    <Layout>
      <div className="ancs">
        <div className="container" style={{ height: "750px", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "100%" }}>
            <div className="firsts" style={{ width: "100%", position: "relative" }}>
              <img 
                src="https://variety.com/wp-content/uploads/2023/08/ONEPIECE_Unit_10613RC.jpg" 
                alt="One Piece" 
                style={{ width: "100%", height: "450px", position: "absolute", top: 0, left: 0, zIndex: 0 }}
              />
              <div className="lasts" style={{ width: "100%", position: "relative", top: "350px" }}></div>
            </div>
          </div>
          <div style={{ position: "relative", margin: "10px", width:"100%", top: "-110px"}}>
            <div style={{position: "relative", zIndex:"3"}}>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfOO_2CUNrBbD6ZqpzaczOc69ZiUc9lmGb-HDMYOCCamtFesr2mt66xYkOa7gj7rML3zHArPoJiRdm1uUX6qGQF6wDhw56bjCzWRrAPf4rOtoVXKzcTXNuph6N5IuG4iP035pbohFGrTQyhtKXDEL30d.jpg?r=409" height="340px" width="275px" style={{borderRadius: "10px"}}></img>
              <div className="info" style={{color: "white", display: "flex",left: "320px", position:"absolute", flexDirection: "column", top: "10px"}}>
                <h1 style={{fontWeight: "600", fontSize: "36px", lineHeight: "1.2"}}>One Piece</h1>
                <div style={{display: "flex", position: "relative"}}>
                  <hr width="25vw" style={{border: "1.35px solid red", opacity: "1"}} />
                  <h4 style={{fontWeight: "400", fontSize: "13px", margin: "7px", lineHeight: "1.5"}}>Action, Adventure</h4>
                </div>
                <p className="movie-info 2my" style={{fontSize: "15px", fontWeight: "300", lineHeight: "3"}}>
                  The greatest story of all time!!
                </p>
                <div className="justified-list" style={{lineHeight: "1.5"}}>
                  <div className="item"><span style={{color: '#db322b'}}>Director : &nbsp;</span> Eiichiro Oda</div>
                  <div className="item"><span style={{color: '#db322b'}}>Cast : &nbsp;</span> Luffy, Zoro, Nami</div>
                  <div className="item"><span style={{color: '#db322b'}}>Release On : &nbsp;</span> June 5, 2024</div>
                  <div className="item"><span style={{color: '#db322b'}}>Director : &nbsp;</span> Infinity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Buy;