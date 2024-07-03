import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../MovieID.css";
import movieContext from "../Context/movieContext";

const MovieID = () => {
  const context = useContext(movieContext)
  const {day} = context
  const location = useLocation()
  const {title, days} = location.state
  const len = days.length
  const currentDate = new Date();

// Get the day of the month (1-31)
const dayss = currentDate.getDate();

// Get the month (0-11)
const monthIndex = currentDate.getMonth();

// Get the full year (e.g., 2024)
const year = currentDate.getFullYear();

// Function to get the month name from the month index
const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const monthName = monthNames[monthIndex];

// Combine the day, month, and year into the desired format
const formattedDate = `${monthName} ${len === 2 && day === "tomm" ? dayss+1: dayss}, ${year}`;
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
              {title}
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
              Big Movies {sign1} Audi 1
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
             {formattedDate}
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
