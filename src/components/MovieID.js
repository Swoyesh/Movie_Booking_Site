import React from "react";
import { Link } from "react-router-dom";
import "../MovieID.css";

const MovieID = () => {
  const sign1 = ">";
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="contss"
          style={{
            position: "fixed",
            margin: "15px 0px 0px 20px",
            display: "flex",
            justifyContent: "space-between",
            width: "96%",
          }}
        >
          <div>
            <h3
              style={{
                float: "left",
                fontSize: "24px",
                width: "100%",
                fontWeight: "600",
                color: "white",
              }}
            >
              Title
            </h3>
            <span
              style={{
                float: "left",
                color: "#e9ecef",
                opacity: "0.75",
                fontSize: "13px",
                marginRight: "15px",
              }}
            >
              Big Movies {sign1} Audi
            </span>
            <span
              style={{
                float: "left",
                color: "#e9ecef",
                opacity: "0.75",
                fontSize: "13px",
                marginRight: "15px",
              }}
            >
              date
            </span>
            <span
              style={{
                float: "left",
                color: "#e9ecef",
                opacity: "0.75",
                fontSize: "13px",
                marginRight: "15px",
              }}
            >
              time
            </span>
          </div>
          <div>
            <Link to="/home">
              <i
                className="fa-solid fa-circle-xmark"
                style={{
                  color: "#28346c",
                  fontSize: "30px",
                  position: "absolute",
                }}
              ></i>
            </Link>
          </div>
        </div>
        <div className="con">
          <div>
            <div
              className="seatsStatus"
              style={{
                backgroundColor: "#182356",
                display: "flex",
                marginTop: "80px",
                paddingLeft: "10px",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  padding: "0",
                  listStyle: "none",
                }}
              >
                <li style={{ marginRight: "0px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      background: "#323645",
                      display: "inline-block",
                    }}
                  ></span>
                  AVAILABLE
                </li>
                <li style={{ marginRight: "0px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      background: "#081548",
                      display: "inline-block",
                    }}
                  ></span>
                  SOCIAL DISTANCING
                </li>
                <li style={{ marginRight: "0px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      background: "#f2f2f2",
                      display: "inline-block",
                    }}
                  ></span>
                  SELECTED
                </li>
                <li style={{ marginRight: "0px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      background: "#ffc107",
                      display: "inline-block",
                    }}
                  ></span>
                  BOOKED
                </li>
                <li style={{ marginRight: "15px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      background: "#e11e26",
                      display: "inline-block",
                      cursor: "not-allowed",
                    }}
                  ></span>
                  SOLD
                </li>
              </ul>
            </div>
            <div className="all_seats">

            </div>
            <div className="screen">Screen</div>
          </div>
          <div className="total_process">
            <div className="inner">
              <div className="amount">
                <div className="inner_amount">
                  <h2>Total: &nbsp;</h2>
                  <h2>Rs.&nbsp;</h2>
                  <h2>0.00</h2>
                </div>
              </div>
              <div className="proceed">
                <div className="inner_proceed">
                  <span className="proceeder floater">Proceed</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MovieID;
