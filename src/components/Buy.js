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
          <div style={{ position: "relative", margin: "10px"}}>
            <div style={{position: "relative", top: "-150px", zIndex:"3"}}>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfOO_2CUNrBbD6ZqpzaczOc69ZiUc9lmGb-HDMYOCCamtFesr2mt66xYkOa7gj7rML3zHArPoJiRdm1uUX6qGQF6wDhw56bjCzWRrAPf4rOtoVXKzcTXNuph6N5IuG4iP035pbohFGrTQyhtKXDEL30d.jpg?r=409" height="340px" width="275px" style={{borderRadius: "10px"}}></img>
              <div className="info" style={{color: "white", display: "flex", flexDirection: "row"}}>
                <p>One Piece</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Buy;