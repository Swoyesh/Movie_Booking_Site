import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../MovieID.css";
import axios from 'axios'
import movieContext from "../Context/movieContext";

const MovieID = () => {
  const navigate = useNavigate();
  const context = useContext(movieContext);
  const { day } = context;
  const location = useLocation();
  const [fPaidSeat, setFPaidSeat] = useState([])
  const { title, time, movieId, days, paidSeat } = location.state;
  
  const len = 2; //have to fix it for days.length
  const currentDate = new Date();
  // Get the day of the month (1-31)
  const dayss = currentDate.getDate();
  const din = currentDate.getDay();

  // Get the month (0-11)
  
  const monthIndex = currentDate.getMonth();
  useEffect(() => {
    retrieve_data()
  }, [])

  useEffect(() => {
    console.log("Updated fPaidSeat:", fPaidSeat.flat().flat());
  }, [fPaidSeat]);
  

  // Get the full year (e.g., 2024)
  const year = currentDate.getFullYear();

  // Function to get the month name from the month index
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[monthIndex];

  // Combine the day, month, and year into the desired format
  const formattedDate = `${monthName} ${
    len === 2 && day === "tomm" ? dayss + 1 : dayss
  }, ${year}`;
  const s_data = {title, formattedDate, time}
  const retrieve_data = async ()=>{await axios.post("http://localhost:5000/api/tickets/getseats", s_data, {headers: {
    "auth-token": localStorage.getItem("auth-token")
   }}).then((response)=>{
    setFPaidSeat(prevFPaidSeat => [...prevFPaidSeat, ...response.data])
    console.log(response.data)
  })}
  const sign1 = ">";

  const [counter, setCounter] = useState(0);

  const [selectedSeat, setSelectedSeat] = useState([0]);
  const [nprice, setNprice] = useState(0);

  const handleSeatClick = (seatId) => {
    setCounter(counter + 1);
    if (selectedSeat[0] === 0) {
      selectedSeat.pop();
    }
    if (selectedSeat.includes(seatId)) {
      const index = selectedSeat.indexOf(seatId);
      selectedSeat.splice(index, 1);
      if (din === 3 || din === 4) {
        setNprice(nprice - 185);
      } else {
        setNprice(nprice - 350);
      }
    } else {
      setSelectedSeat([...selectedSeat, seatId]);
      if (din === 3 || din === 4) {
        setNprice(nprice + 185);
      } else {
        setNprice(nprice + 350);
      }
    }
  };

  const fbuyer = (selectedSeat, nprice) => {
    if (selectedSeat[0] === 0) {
      alert("Please select a ticket!!");
    } else {
      navigate("/fbuy", {
        state: {
          selectedSeat: selectedSeat,
          price: nprice,
          time: time,
          date: formattedDate,
          title: title,
          movieId: movieId,
        },
      });
    }
  };

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
              {time.length === 2 ? `${time[0]}:${time[1]}` : time}
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
              <div
                className="as_table"
                style={{
                  height: "63vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A1")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A1")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A1")}
                      >
                        A1
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A2")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A2")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A2")}
                      >
                        A2
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A3")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A3")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A3")}
                      >
                        A3
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A4")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A4")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A4")}
                      >
                        A4
                      </td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A5")
                            ? "selected"
                            : fPaidSeat.flat().includes("A5")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A5")}
                      >
                        A5
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A6")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A6")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A6")}
                      >
                        A6
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A7")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A7")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A7")}
                      >
                        A7
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A8")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A8")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A8")}
                      >
                        A8
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A9")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A9")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A9")}
                      >
                        A9
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A10")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A10")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A10")}
                      >
                        A10
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A11")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A11")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A11")}
                      >
                        A11
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A12")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A12")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A12")}
                      >
                        A12
                      </td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A13")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A13")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A13")}
                      >
                        A13
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A14")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A14")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A14")}
                      >
                        A14
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A15")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A15")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A15")}
                      >
                        A15
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A16")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A16")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A16")}
                      >
                        A16
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A17")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A17")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A17")}
                      >
                        A17
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A18")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A18")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A18")}
                      >
                        A18
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A19")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A19")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A19")}
                      >
                        A19
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("A20")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("A20")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("A20")}
                      >
                        A20
                      </td>
                    </tr>
                    <tr>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B1")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B1")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B1")}
                      >
                        B1
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B2")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B2")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B2")}
                      >
                        B2
                      </td>
                      <td
                       className={`seat ${
                        selectedSeat.includes("B3")
                          ? "selected"
                          : fPaidSeat.flat().flat().includes("B3")
                          ? "reserved"
                          : ""
                      }`}
                        onClick={() => handleSeatClick("B3")}
                      >
                        B3
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B4")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B4")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B4")}
                      >
                        B4
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B5")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B5")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B5")}
                      >
                        B5
                      </td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B6")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B6")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B6")}
                      >
                        B6
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B7")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B7")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B7")}
                      >
                        B7
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B8")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B8")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B8")}
                      >
                        B8
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B9")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B9")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B9")}
                      >
                        B9
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B10")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B10")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B10")}
                      >
                        B10
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B11")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B11")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B11")}
                      >
                        B11
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B12")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B12")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B12")}
                      >
                        B12
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B13")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B13")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B13")}
                      >
                        B13
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B14")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B14")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B14")}
                      >
                        B14
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B15")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B15")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B15")}
                      >
                        B15
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B16")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B16")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B16")}
                      >
                        B16
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B17")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B17")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B17")}
                      >
                        B17
                      </td>
                      <td className="gap"></td>
                      <td className="gap"></td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B18")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B18")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B18")}
                      >
                        B18
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B19")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B19")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B19")}
                      >
                        B19
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B20")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B20")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B20")}
                      >
                        B20
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B21")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B21")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B21")}
                      >
                        B21
                      </td>
                      <td
                        className={`seat ${
                          selectedSeat.includes("B22")
                            ? "selected"
                            : fPaidSeat.flat().flat().includes("B22")
                            ? "reserved"
                            : ""
                        }`}
                        onClick={() => handleSeatClick("B22")}
                      >
                        B22
                      </td>
                    </tr>
                    {["C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map(
                      (row) => (
                        <tr key={row}>
                          {[...Array(28).keys()].map((col) => {
                            const seatId =
                              col < 6
                                ? `${row}${col + 1}`
                                : col > 6 && col < 21
                                ? `${row}${col}`
                                : col > 21
                                ? `${row}${col - 1}`
                                : null;
                            if (col === 6 || col === 21) {
                              return <td key={col} className="gap"></td>;
                            }
                            return (
                              seatId && (
                                <td
                                  key={seatId}
                                  className={`seat ${
                                    selectedSeat.includes(seatId)
                                      ? "selected"
                                      : fPaidSeat.flat().flat().includes(seatId)
                                      ? "reserved"
                                      : ""
                                  }`}
                                  onClick={() => handleSeatClick(seatId)}
                                >
                                  {seatId}
                                </td>
                              )
                            );
                          })}
                        </tr>
                      )
                    )}
                    {["M", "N"].map((row) => (
                      <tr key={row}>
                        <td className="gap"></td>
                        <td className="gap"></td>
                        <td className="gap"></td>
                        <td className="gap"></td>
                        {[...Array(20).keys()].map((col) => {
                          const seatId =
                            col < 2
                              ? `${row}${col + 1}`
                              : col > 2 && col < 17
                              ? `${row}${col}`
                              : col > 17
                              ? `${row}${col - 1}`
                              : null;
                          if (col === 2 || col === 17) {
                            return (
                              <td key={col} className="gap">
                                {" "}
                              </td>
                            );
                          }
                          return (
                            seatId && (
                              <td
                                key={seatId}
                                className={`seat ${
                                  selectedSeat.includes(seatId)
                                    ? "selected"
                                    : fPaidSeat.flat().flat().includes(seatId)
                                    ? "reserved"
                                    : ""
                                }`}
                                onClick={() => handleSeatClick(seatId)}
                              >
                                {seatId}
                              </td>
                            )
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="screen">Screen</div>
            </div>
          </div>

          <div className="total_process">
            <div className="inner">
              <div className="amount">
                <div className="inner_amount">
                  <h2>Total: &nbsp;</h2>
                  <h2>Rs.&nbsp;</h2>
                  <h2>{nprice.toFixed(2)}</h2>
                </div>
              </div>
              <div className="proceed">
                <div className="inner_proceed">
                  <span
                    className="proceeder floater"
                    onClick={() => fbuyer(selectedSeat, nprice)}
                  >
                    Proceed
                  </span>
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
