import React, { useState } from 'react'
import nns from '../nns.jpg'
import Footer from './Footer'
import '../lg.css'
import { Link } from 'react-router-dom'

const Login = () => {
    let [active, setActive] = useState("Sign In")
    const changer = (elem)=>{
        setActive(elem)
    }
  return (
    <>
    <div className='container' style={{backgroundColor: "#182356", top: "60px", position: "relative"}}>
        <img src={nns} height="520px" width="350px"></img>
        <div className='l-cont'>
            <Link to="" style={{textDecoration: "none"}}><span className={active == "Sign In"? "a-spans": "spans"} onClick={()=>changer("Sign In")}>Sign In</span></Link>
            <Link to="" style={{textDecoration: "none"}}><span className={active == "Sign Up"? "a-spans": "spans"} onClick={()=>changer("Sign Up")}>Sign Up</span></Link>
            <hr style={{ borderTop: "1px solid #A9A9A9", width: "150%", position: "relative", left: "25px", top: "18px"}} />
            <input type='text' value="Email/Username" className='ipt'></input>
        </div>
    </div>
    <div className='bottom' style={{top: "120px"}}>
      <Footer/>
    </div>
    </>
  )
}

export default Login