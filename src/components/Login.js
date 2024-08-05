import React, { useContext, useEffect, useRef, useState } from "react";
import gg from "../gg.png";
import nns from "../nns.jpg";
import Footer from "./Footer";
import "../lg.css";
// eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import movieContext from "../Context/movieContext";
import Layout from "./Layout"

const Login = () => {
  let location = useLocation()
  let context = useContext(movieContext);
  let { userFunc, user, activeTab, setActiveTab, setEmail } = context;

  let inputRefs = useRef([]);
  useEffect(() => {
    if(location.pathname !== '/'){
      setActiveTab(null)
    }
  }, [])
  
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const [credentials1, setCredentials1] = useState({
    email: "",
    password: "",
  });
  const [credentials, setCredentials] = useState({
    f_name: "",
    l_name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const [col, setCol] = useState("gray");
  const [strength, setStrength] = useState("Too Short");
  const [widthh, setWidthh] = useState("1.5vw");
  const [diss, setDiss] = useState("none");

  function checker(input_string) {
    const n = input_string.length;
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let specialChar = false;
    const normalChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";

    for (let i = 0; i < n; i++) {
      if (input_string[i] >= "a" && input_string[i] <= "z") {
        hasLower = true;
      }
      if (input_string[i] >= "A" && input_string[i] <= "Z") {
        hasUpper = true;
      }
      if (input_string[i] >= "0" && input_string[i] <= "9") {
        hasDigit = true;
      }
      if (!normalChars.includes(input_string[i])) {
        specialChar = true;
      }
    }
    if (hasLower && hasUpper && hasDigit && specialChar && n >= 8) {
      setStrength("Strong");
      setCol("green");
      setWidthh("24vw");
    } else if ((hasLower || hasUpper) && specialChar && n >= 6) {
      setStrength("Moderate");
      setCol("orange");
      setWidthh("14vw");
    } else if (n >= 4) {
      setStrength("Weak");
      setCol("red");
      setWidthh("7vw");
    } else if (n < 4) {
      setStrength("Too Short");
      setCol("gray");
      setWidthh("1.5vw");
    }
  }

  let [dis1, setDis1] = useState("");
  let [dis2, setDis2] = useState("none");
  let [fdis, setFdis] = useState("none");
  let [active, setActive] = useState("Sign In");
  const changer1 = (elem) => {
    setActive(elem);
    setDis1("");
    setDis2("none");
  };
  const changer2 = (elem) => {
    setActive(elem);
    setDis1("none");
    setDis2("");
  };
  const handleChange2 = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleChange2s = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    checker(e.target.value);
    setDiss("");
  };
  const su_h_submit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        f_name: credentials.f_name,
        l_name: credentials.l_name,
        email: credentials.email,
        mobile: credentials.mobile,
        password: credentials.password,
        cpassword: credentials.cpassword,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("auth-token", json.authToken);
      navigate("/home");
    } else {
      inputRefs.current.forEach((inputRef) => {
        inputRef.style.color = "black";
        if (inputRef.value === json.errors[0].value) {
          inputRef.style.color = "red";
        }
      });
    }
  };

  const si_s_h = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials1.email,
        password: credentials1.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      navigate("/home");
      localStorage.setItem("auth-token", json.authToken);
      userFunc();
    } else {
      setFdis("");
    }
    if (localStorage.getItem("auth-token")) {
      window.location.reload();
    }
  };

  const handleChange1 = (e) => {
    setCredentials1({ ...credentials1, [e.target.name]: e.target.value });
  };

  localStorage.setItem("name", user.f_name);

  useEffect(() => {
    setFdis("none");
  }, []);

  return (
    <>
    {/* <Layout> */}
      <div
        className="container"
        style={{
          backgroundColor: "#182356",
          top: "10vh",
          position: "relative",
        }}
      >
        <img src={nns} height="520vh" width="350vh" alt="loading"></img>
        <div className="l-cont" style={{ width: "100%" }}>
          <Link to="" style={{ textDecoration: "none" }}>
            <span
              className={active === "Sign In" ? "a-spans" : "spans"}
              onClick={() => changer1("Sign In")}
            >
              Sign In
            </span>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <span
              className={active === "Sign Up" ? "a-spans" : "spans"}
              onClick={() => changer2("Sign Up")}
            >
              Sign Up
            </span>
          </Link>
          <hr
            style={{
              borderTop: "1px solid #A9A9A9",
              width: "46%",
              position: "relative",
              left: "2vw",
              top: "3vh",
            }}
          />

          <div className="first-visible" style={{ display: dis1 }}>
            <div style={{ height: "60px", display: fdis }}>
              <p style={{ color: "red", position: "absolute", margin: "40px" }}>
                Invalid Username or Password
              </p>
            </div>
            <form onSubmit={si_s_h}>
              <input
                className="ipt1"
                onChange={handleChange1}
                name="email"
                id="email"
                type="email"
                placeholder="Email/Username"
              ></input>
              <input
                className="ipt2"
                onChange={handleChange1}
                name="password"
                id="password"
                type="password"
                placeholder="Password"
              ></input>
              <div>
                <button className="btttn" type="submit">
                  Sign In
                </button>
                <Link to="/fpassword" style={{ textDecoration: "none" }}>
                  <span
                    className="nspan"
                    style={{
                      color: "red",
                      position: "relative",
                      top: "9vh",
                      right: "-14.5vw",
                      cursor: "pointer",
                    }}
                  >
                    Forgot Password?
                  </span>
                </Link>
              </div>
            </form>
            <div>
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  top: "-2vh",
                  left: "19%",
                  position: "relative",
                }}
              >
                OR Login With
              </span>
              <input
                type="image"
                src={gg}
                className="g-inp"
                alt="photo"
              ></input>
            </div>
          </div>
          <div className="first-hidden" style={{ display: dis2 }}>
            <form onSubmit={su_h_submit}>
              <input
                className="h-ipt"
                type="text"
                placeholder="First Name*"
                onChange={handleChange2}
                name="f_name"
                ref={(ref) => (inputRefs.current[0] = ref)}
              ></input>
              <input
                className="h-ipt"
                type="text"
                placeholder="Last Name*"
                style={{ top: "6vh" }}
                onChange={handleChange2}
                name="l_name"
                ref={(ref) => (inputRefs.current[1] = ref)}
              ></input>
              <input
                className="h-ipt"
                type="email"
                placeholder="Email*"
                style={{ top: "9vh" }}
                onChange={handleChange2}
                name="email"
                ref={(ref) => (inputRefs.current[2] = ref)}
              ></input>
              <input
                className="h-ipt"
                type="number"
                placeholder="Mobile*"
                style={{ top: "12vh" }}
                onChange={handleChange2}
                name="mobile"
                ref={(ref) => (inputRefs.current[3] = ref)}
              ></input>
              <div>
                <input
                  className="h-ipt"
                  type="password"
                  placeholder="Password (min 4 characters)*"
                  style={{ top: "15vh" }}
                  onChange={handleChange2s}
                  name="password"
                  ref={(ref) => (inputRefs.current[4] = ref)}
                  maxLength="20"
                ></input>
                <div
                  style={{
                    position: "relative",
                    top: "12.75vh",
                    marginLeft: "20px",
                    width: "100%",
                    height: "0px",
                  }}
                >
                  <hr
                    style={{
                      borderWidth: "1.4px",
                      width: widthh,
                      borderColor: col,
                      opacity: "2",
                      borderStyle: "solid",
                      display: diss,
                    }}
                  ></hr>
                </div>
                <div
                  style={{ position: "relative", top: "13vh", height: "0px" }}
                >
                  <span
                    style={{
                      color: col,
                      padding: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      display: diss,
                    }}
                  >
                    {strength}
                  </span>
                </div>
              </div>
              <input
                className="h-ipt"
                type="password"
                placeholder="Confirm Password*"
                style={{ top: "18vh" }}
                onChange={handleChange2}
                name="cpassword"
                ref={(ref) => (inputRefs.current[5] = ref)}
              ></input>
              <button className="h-btttn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom" style={{ top: "21vh" }}>
        <Footer />
      </div>
      {/* </Layout> */}
    </>
  );
};

export default Login;
