import React, { useContext, useEffect, useState } from "react";
import logo from "../logo.jpg";
import movieContext from "../Context/movieContext";
import "../navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const context = useContext(movieContext)
    let { userFunc, user, activeTab, setActiveTab } = context
    const { header1, header2 } = context;
    const [pos, setPos] = useState("relative")
    const [disp, setDisp] = useState("none")
    const [title, setTitle] = useState("Login")
    const navigate = useNavigate();
    
    const handleMenuClick = (tab) => {
        setActiveTab(tab);
    };

    const s1 = {
        borderRadius: "30px",
        borderColor: "red",
        borderWidth: "2px",
        position: "relative",
        color: "white",
        zIndex: "5",
        right: "6vw",
    }

    const s2 = {
        borderRadius: "30px",
        borderColor: "#424242",
        backgroundColor: "#424242",
        borderWidth: "2px",
        position: "relative",
        color: "white",
        zIndex: "5",
        right: "6vw",
    }
    const [styler, setStyler] = useState(s1)

    const nneutral = () => {
        setActiveTab(null);
    }

    const neutral = () => {
        localStorage.removeItem("auth-token")
        localStorage.removeItem("name")
        navigate("/");
    };

    const starter = () => {
        setActiveTab("HOME");
    };

    useEffect(() => {
        setActiveTab(activeTab === "HOME" ? "HOME" : null);
        if (localStorage.getItem("auth-token")) {
            setDisp("")
            setTitle("Logout")
            setStyler(s2)
            setPos("fixed")
        } else {
            setDisp("none")
            setTitle("Login")
            setStyler(s1)
            setPos("relative")
        }
    }, [localStorage.getItem("auth-token")]);

    useEffect(() => {
        userFunc()
    }, [])

    return (
        <>
            <nav
                className="navbar navbar-expand-lg"
                style={{ backgroundColor: "transparent", cursor: "pointer", display: "flex" }}
            >
                <div className="container-fluid">
                    <Link to="/">
                        <img
                            alt="logo"
                            src={logo}
                            height={"50vh"}
                            width={"130vh"}
                            style={{ left: "5vw", position: "relative", cursor: "pointer" }}
                            onClick={starter}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ width: "100%" }}>
                        <div
                            className="navbar-nav container"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                position: "relative"
                            }}
                        >
                            <Link
                                className={activeTab === "HOME" ? "act nav-link" : "nav-link"}
                                onClick={() => handleMenuClick("HOME")}
                                to="/"
                                style={{ color: activeTab === "HOME" ? "white" : "" }}
                            >
                                HOME
                            </Link>
                            <Link
                                className={activeTab === "CAREER" ? "act nav-link" : "nav-link"}
                                onClick={() => handleMenuClick("CAREER")}
                                to="/career"
                                style={{ color: activeTab === "CAREER" ? "white" : "" }}
                            >
                                CAREER
                            </Link>
                            <Link
                                className={activeTab === header1 ? "act nav-link" : "nav-link"}
                                onClick={() => handleMenuClick(header1)}
                                to={`/${header1}`}
                                style={{
                                    display: disp,
                                    color: activeTab === header1 ? "white" : "",
                                }}
                            >
                                {header1}
                            </Link>
                            <Link
                                className={
                                    activeTab === "CONTACT" ? "act nav-link" : "nav-link"
                                }
                                onClick={() => handleMenuClick("CONTACT")}
                                to="/contact"
                                style={{ color: activeTab === "CONTACT" ? "white" : "" }}
                            >
                                CONTACT
                            </Link>
                            <Link
                                className={activeTab === header2 ? "act nav-link" : "nav-link"}
                                onClick={() => handleMenuClick(header2)}
                                to={`/${header2}`}
                                style={{
                                    display: disp,
                                    color: activeTab === header2 ? "white" : "",
                                }}
                            >
                                {header2}
                            </Link>
                            <Link
                                className={
                                    activeTab === "TICKET RATE" ? "act nav-link" : "nav-link"
                                }
                                onClick={() => handleMenuClick("TICKET RATE")}
                                to="/rate"
                                style={{ color: activeTab === "TICKET RATE" ? "white" : "" }}
                            >
                                TICKET RATE
                            </Link>
                        </div>
                    </div>
                </div>
                <i
                    class="fa-regular fa-user"
                    style={{
                        color: "white",
                        zIndex: "5",
                        fontSize: "20px",
                        position: "relative",
                        right: "7.5vw",
                        display: disp
                    }}
                ></i>
                <p style={{ color: "white", zIndex: "5", position: "relative", right: "7.5vw", fontSize: "15px", display: disp }}>{user.f_name}</p>
                <Link to={title === "Login" ? "/login" : "/"}>
                    <button
                        type="button"
                        className="btn"
                        style={styler}
                        onClick={title === "Login" ? nneutral : neutral}
                    >
                        <strong>{title}</strong>
                    </button>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;