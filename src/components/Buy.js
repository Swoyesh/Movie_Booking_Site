import React from "react";
import Layout from "./Layout";
import "../Buy.css";

const Buy = () => {
  return (
    <Layout>
      <div className="ancs">
        <div className="container" style={{ height: "800px", display: "flex", flexDirection: "column" }}>
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
          <div style={{ position: "relative"}}>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Buy;