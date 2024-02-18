import React, { useContext, useState } from 'react';
import logo from "../logo.jpg";
import movieContext from '../Context/movieContext';
import '../navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("HOME"); // State to track the active tab

    const handleMenuClick = (tab) => {
        setActiveTab(tab);
    };

    const context = useContext(movieContext);
    const { header1, header2 } = context;

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "transparent", cursor: "pointer" }}>
                <div className="container-fluid">
                    <Link to ="/"><img alt='logo' src={logo} height={"50px"} width={"140px"} style={{ left: "150px", position: "relative", cursor: "pointer" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav container" style={{ display: "flex", justifyContent: "center"}}>
                                <Link className={activeTab === 'HOME' ? 'act nav-link' : 'nav-link'} onClick={() => handleMenuClick('HOME')} to="/" style={{color: activeTab==="HOME" ?"white":""}}>HOME</Link>
                                <Link className={activeTab === 'CAREER' ? 'act nav-link' : 'nav-link'} onClick={() => handleMenuClick('CAREER')} to="/career" style={{color: activeTab==="CAREER" ?"white":""}}>CAREER</Link>
                                <Link className={activeTab === header1 ? 'act nav-link' : 'nav-link'} onClick={() => handleMenuClick(header1)} to={`/${header1}`} style={{display: header1===null?"none": "inline", color: activeTab===header1 ?"white":"gray"}}>{header1}</Link>
                                <Link className={activeTab === 'CONTACT' ? 'act nav-link' : 'nav-link'} onClick={() => handleMenuClick('CONTACT')} to="/contact" style={{color: activeTab==="CONTACT" ?"white":""}}>CONTACT</Link>
                                <Link className={activeTab === header2 ? 'act nav-link' : 'nav-link'} onClick={() => handleMenuClick(header2)} to={`/${header2}`} style={{display: header2===null?"none": "inline", color: activeTab===header2 ?"white":"gray"}}>{header2}</Link>
                                <Link className={activeTab === 'TICKET RATE' ? 'act nav-link' : 'nav-link'} onClick={() => handleMenuClick('TICKET RATE')} to="/rate" style={{color: activeTab==="TICKET RATE" ?"white":""}}>TICKET RATE</Link>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn" style={{ borderRadius: "30px", right: "150px", borderColor: "red", borderWidth: "2px", position: "relative", color: "white", zIndex: "5"}}><strong>Login</strong></button>
            </nav>
        </>
    );
};

export default Navbar;