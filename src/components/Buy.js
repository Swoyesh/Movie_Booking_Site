import React from "react";
import Layout from "./Layout";
import "../Buy.css";

const Buy = () => {
  return (
    <Layout>
      <div className="ancs">
        <div className="container" style={{ height: "800px", display: "flex"}}>
          <div className="first" style={{width: "100%", position: "relative"}}><img src="https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX500_CR0,213,500,281_.jpg" width="100%" height="500px" style={{zIndex: "0"}}></img></div>
          
          {/* <div className="last" style={{width: "100%"}}></div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Buy;
