import React, { useState } from 'react'
import gg from '../gg.png'
import nns from '../nns.jpg'
import Footer from './Footer'
import '../lg.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const host = "http://localhost:5000"
  const [credentials, setCredentials] = useState({
    f_name: "",
    l_name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
  })
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
    const handleChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    
  return (
    <>
    <div className='container' style={{backgroundColor: "#182356", top: "10vh", position: "relative"}}>
        <img src={nns} height="520vh" width="350vh"></img>
        <div className='l-cont' style={{width: "100%"}}>
            <Link to="" style={{textDecoration: "none"}}><span className={active == "Sign In"? "a-spans": "spans"} onClick={()=>changer1("Sign In")}>Sign In</span></Link>
            <Link to="" style={{textDecoration: "none"}}><span className={active == "Sign Up"? "a-spans": "spans"} onClick={()=>changer2("Sign Up")}>Sign Up</span></Link>
            <hr style={{ borderTop: "1px solid #A9A9A9", width: "46%", position: "relative", left: "2vw", top: "3vh"}} />
            <div className='first-visible' style={{display:dis1}}>
            <form>
            <input className='ipt1' onChange={handleChange} name='email' id='email' type = "email" placeholder='Email/Username' ></input>
            <input className='ipt2' onChange={handleChange} name='password' id='password' type='password' placeholder='Password'></input>
            <div>
              <button className='btttn' type='submit'>Sign In</button>
              <Link to="/fpassword" style={{textDecoration: "none"}}><span className='nspan' style={{color: "red", position:"relative", top: "9vh", right: "-14.5vw", cursor: "pointer"}}>Forgot Password?</span></Link>
            </div>
            <div>
              <span style={{color: "white", fontWeight: "bold", fontSize: "18px", top: "-2vh", left:"19%", position: "relative"}}>OR Login With</span>
              <input type='image' src={gg} className='g-inp'></input>
            </div>
            </form>
            </div>
             <div className='first-hidden' style={{display: dis2}}>
              <form>
                <input className='h-ipt' type='text' placeholder='First Name*'></input> 
                <input className='h-ipt' type='text' placeholder='Last Name*' style={{top: "6vh"}}></input> 
                <input className='h-ipt' type='email' placeholder='Email*' style={{top: "9vh"}}></input> 
                <input className='h-ipt' type='number' placeholder='Mobile*' style={{top: "12vh"}}></input> 
                <input className='h-ipt' type='password' placeholder='Password (min 4 characters)*' style={{top: "15vh"}}></input> 
                <input className='h-ipt' type='password' placeholder='Confirm Password*' style={{top: "18vh"}}></input> 
                <button className='h-btttn' type='submit' >Sign Up</button>
              </form>
            </div>
        </div>
    </div>
    <div className='bottom' style={{top: "21vh"}}>
      <Footer/>
    </div>
    </>
  )
}

export default Login