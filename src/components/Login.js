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
    const [credentials, setCredentials] = useState({email: "", password: ""})
    const handleChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    
  return (
    <>
    <div className='container' style={{backgroundColor: "#182356", top: "60px", position: "relative"}}>
        <img src={nns} height="520px" width="350px"></img>
        <div className='l-cont'>
          <form>
            <Link to="" style={{textDecoration: "none"}}><span className={active == "Sign In"? "a-spans": "spans"} onClick={()=>changer("Sign In")}>Sign In</span></Link>
            <Link to="" style={{textDecoration: "none"}}><span className={active == "Sign Up"? "a-spans": "spans"} onClick={()=>changer("Sign Up")}>Sign Up</span></Link>
            <hr style={{ borderTop: "1px solid #A9A9A9", width: "90%", position: "relative", left: "25px", top: "18px"}} />
            <input className='ipt1' onChange={handleChange} name='email' id='email' type = "email" placeholder='Email/Username' ></input>
            <input className='ipt2' onChange={handleChange} name='password' id='password' type='password' placeholder='Password'></input>
            <div>
              <button className='btttn'>Sign In</button>
              <span style={{color: "red", position:"relative", top: "60px", left: "165px", cursor: "pointer"}}>Forgot Password?</span>
            </div>
            <div>
              <span style={{color: "white", fontWeight: "bold", fontSize: "17px", top: "70px", left:"140px", position: "relative"}}>OR Login With</span>
              <button class="google-sign-in">Gmail</button>
            </div>
            </form>
        </div>
    </div>
    <div className='bottom' style={{top: "120px"}}>
      <Footer/>
    </div>
    </>
  )
}

export default Login