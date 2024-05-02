import React, { useState } from 'react'
import gg from '../gg.png'
import nns from '../nns.jpg'
import Footer from './Footer'
import '../lg.css'
import { Link } from 'react-router-dom'

const Login = () => {
  let[dis1, setDis1] = useState("")
  let[dis2, setDis2] = useState("none")
    let [active, setActive] = useState("Sign In")
    const changer1 = (elem)=>{
        setActive(elem)
        setDis1("")
      setDis2("none")
    }
    const changer2 = (elem)=>{
        setActive(elem)
        setDis1("none")
      setDis2("")
    }
    const [credentials, setCredentials] = useState({email: "", password: ""})
    const handleChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    
  return (
    <>
    <div className='container' style={{backgroundColor: "#182356", top: "60px", position: "relative"}}>
        <img src={nns} height="520px" width="350px"></img>
        <div className='l-cont' style={{width: "100%"}}>
            <Link to="" style={{textDecoration: "none"}}><span className={active == "Sign In"? "a-spans": "spans"} onClick={()=>changer1("Sign In")}>Sign In</span></Link>
            <Link to="" style={{textDecoration: "none"}}><span className={active == "Sign Up"? "a-spans": "spans"} onClick={()=>changer2("Sign Up")}>Sign Up</span></Link>
            <hr style={{ borderTop: "1px solid #A9A9A9", width: "46%", position: "relative", left: "25px", top: "18px"}} />
            <div className='first-visible' style={{display:dis1}}>
            <form>
            <input className='ipt1' onChange={handleChange} name='email' id='email' type = "email" placeholder='Email/Username' ></input>
            <input className='ipt2' onChange={handleChange} name='password' id='password' type='password' placeholder='Password'></input>
            <div>
              <button className='btttn' type='submit'>Sign In</button>
              <span style={{color: "red", position:"relative", top: "60px", left: "165px", cursor: "pointer"}}>Forgot Password?</span>
            </div>
            <div>
              <span style={{color: "white", fontWeight: "bold", fontSize: "18px", top: "-10px", left:"140px", position: "relative"}}>OR Login With</span>
              <input type='image' src={gg} className='g-inp'></input>
            </div>
            </form>
            </div>
             <div className='first-hidden' style={{display: dis2}}>
              <form>
                <input className='h-ipt' type='text' placeholder='First Name*'></input> 
                <input className='h-ipt' type='text' placeholder='Last Name*' style={{top: "40px"}}></input> 
                <input className='h-ipt' type='email' placeholder='Email*' style={{top: "60px"}}></input> 
                <input className='h-ipt' type='number' placeholder='Mobile*' style={{top: "80px"}}></input> 
                <input className='h-ipt' type='password' placeholder='Password (min 4 characters)*' style={{top: "100px"}}></input> 
                <input className='h-ipt' type='password' placeholder='Confirm Password*' style={{top: "120px"}}></input> 
                <button className='h-btttn' type='submit'>Sign Up</button>
              </form>
            </div>
        </div>
    </div>
    <div className='bottom' style={{top: "120px"}}>
      <Footer/>
    </div>
    </>
  )
}

export default Login