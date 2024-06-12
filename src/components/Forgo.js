import { React, useEffect, useState } from "react";
import Footer from "./Footer";
import "../Forgo.css";
import bg from "../bg.png";
import rell from "../rell.png";
import Layout from "./Layout";

const Forgo = () => {
  let [check, setCheck] = useState("");
  let [ftext, setFtext] = useState("");

  const randomNumber = (min, max) => {
    let num;
    num = Math.floor(Math.random() * (max - min) + min);
    return num;
  };

  const capt = () => {
    let g_text = "";
    for (let i = 0; i < 2; i++) {
      g_text += String.fromCharCode(randomNumber(65, 90));
      g_text += String.fromCharCode(randomNumber(97, 122));
      g_text += String.fromCharCode(randomNumber(48, 57));
    }
    return g_text;
  };

  const generate = () => {
    let start = capt();
    let final = [...start].sort(() => Math.random() - 0.5).join("  ");
    setFtext(final);
  };

  useEffect(() => {
    generate();
  }, []);

  const sub = () => {
    if (check == ftext.replace(/ /g, "")) {
      console.log("accepted");
    } else {
      console.log("not accepted");
    }
  };

  const changer = (e) => {
    setCheck(e.target.value);
  };

  return (
    <>
    {/* <Layout> */}
      <div
        className="container"
        style={{
          width: "35%",
          backgroundColor: "#081243",
          display: "flex",
          justifyContent: "center",
          boxShadow: "0px 0px 30px #fff",
          borderRadius: "6px",
          position: "relative",
          top: "10vh",
          overflow: "hidden",
          border: "1px solid white",
          alignItems: "stretch",
        }}
      >
        <div
          className="n-cont"
          style={{ marginTop: "10px", marginBottom: "40px", width: "100%" }}
        >
          <span
            style={{
              color: "#0e68a0",
              marginBottom: "15px",
              fontWeight: "bold",
              fontSize: "25px",
              display: "block",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Forgot Password
          </span>
          <div className="former">
            <form>
              <input
                type="text"
                style={{
                  position: "relative",
                  borderRadius: "5px",
                  border: "none",
                  padding: "7px",
                  width: "90%",
                  backgroundColor: "#fff",
                  marginLeft: "18px",
                  justifyContent: "flex-start",
                }}
                className="iinp"
              ></input>
              <div style={{ position: "relative" }}>
                <input
                  type="image"
                  src={bg}
                  className="cpt"
                  height="50vh"
                  width="200vw"
                ></input>
                <div className="centered">
                  <i>{ftext}</i>
                </div>
                <button
                  onClick={generate}
                  type="button"
                  style={{
                    height: "0px",
                    border: "none",
                    backgroundColor: "#081243",
                  }}
                >
                  <img
                    src={rell}
                    style={{
                      height: "5vh",
                      top: "2.5vh",
                      position: "relative",
                      left: "-185px",
                      backgroundColor: "yellow",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  ></img>
                </button>
              </div>
              <input
                type="text"
                style={{
                  position: "relative",
                  borderRadius: "5px",
                  border: "none",
                  padding: "7px",
                  width: "90%",
                  backgroundColor: "#fff",
                  top: "3vh",
                  marginLeft: "18px",
                }}
                className="iinp"
                placeholder="Enter Captcha Text"
                onChange={changer}
              ></input>
              <div style={{ width: "80%" }}>
                <button type="button" className="sbtn" onClick={sub}>
                  Submit
                </button>
                <button type="submit" className="cbtn">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom" style={{ top: "19vh" }}>
        <Footer />
      </div>
      {/* </Layout> */}
    </>
  );
};

export default Forgo;
