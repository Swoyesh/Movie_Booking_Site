import React, { useEffect, useState } from 'react'
import gg from '../gg.png'
import nns from '../nns.jpg'
import Footer from './Footer'
import '../lg.css'
// eslint-disable-next-line
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const host = "http://localhost:5000"

  const [credentials1, setCredentials1] = useState({
    email: "",
    password: ""
  })
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
  let[fdis, setFdis] = useState("none")
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
    const handleChange2 = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const su_h_submit = async (e)=>{
      e.preventDefault();
      const response = await fetch(`${host}/api/auth/signup`,{
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
          cpassword: credentials.cpassword
        })
      })
      console.log(credentials)
      const json = await response.json()
      if(json.success){
        localStorage.setItem("auth-token", json.authToken)
        navigate("/home")
      }else{
        
      }
    }

    const si_s_h = async(e)=>{
      e.preventDefault()
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: credentials1.email,
          password: credentials1.password
        })
      })
      const json  = await response.json()
      console.log(json.success)
      if(json.success){
        navigate("/home")
      }else{
        setFdis("")
      }
    }

    const handleChange1 = (e)=>{
      setCredentials1({...credentials1, [e.target.name]: e.target.value})
    }
    
    useEffect(() => {
      setFdis("none")
    }, [])
    

  return (
    <>
    <div className='container' style={{backgroundColor: "#182356", top: "10vh", position: "relative"}}>
        <img src={nns} height="520vh" width="350vh" alt='loading'></img>
        <div className='l-cont' style={{width: "100%"}}>
            <Link to="" style={{textDecoration: "none"}}><span className={active === "Sign In"? "a-spans": "spans"} onClick={()=>changer1("Sign In")}>Sign In</span></Link>
            <Link to="" style={{textDecoration: "none"}}><span className={active === "Sign Up"? "a-spans": "spans"} onClick={()=>changer2("Sign Up")}>Sign Up</span></Link>
            <hr style={{ borderTop: "1px solid #A9A9A9", width: "46%", position: "relative", left: "2vw", top: "3vh"}} />
            
            <div className='first-visible' style={{display:dis1}}>
            <div style={{height: "60px", display: fdis}}>
              <p style={{color: "red", position: "absolute", margin: "40px"}}>Invalid Username or Password</p>
            </div>
            <form onSubmit={si_s_h}>
            <input className='ipt1' onChange={handleChange1} name='email' id='email' type = "email" placeholder='Email/Username' ></input>
            <input className='ipt2' onChange={handleChange1} name='password' id='password' type='password' placeholder='Password'></input>
            <div>
              <button className='btttn' type='submit'>Sign In</button>
              <Link to="/fpassword" style={{textDecoration: "none"}}><span className='nspan' style={{color: "red", position:"relative", top: "9vh", right: "-14.5vw", cursor: "pointer"}}>Forgot Password?</span></Link>
            </div>
            </form>
            <div>
              <span style={{color: "white", fontWeight: "bold", fontSize: "18px", top: "-2vh", left:"19%", position: "relative"}}>OR Login With</span>
              <input type='image' src={gg} className='g-inp' alt = "photo"></input>
            </div>
            </div>
             <div className='first-hidden' style={{display: dis2}}>
              <form onSubmit={su_h_submit}>
                <input className='h-ipt' type='text' placeholder='First Name*' onChange={handleChange2} name='f_name'></input> 
                <input className='h-ipt' type='text' placeholder='Last Name*' style={{top: "6vh"}} onChange={handleChange2} name='l_name'></input> 
                <input className='h-ipt' type='email' placeholder='Email*' style={{top: "9vh"}} onChange={handleChange2} name='email'></input> 
                <input className='h-ipt' type='number' placeholder='Mobile*' style={{top: "12vh"}} onChange={handleChange2} name='mobile'></input> 
                <input className='h-ipt' type='password' placeholder='Password (min 4 characters)*' style={{top: "15vh"}} onChange={handleChange2} name='password'></input> 
                <input className='h-ipt' type='password' placeholder='Confirm Password*' style={{top: "18vh"}} onChange={handleChange2} name='cpassword'></input> 
                <button className='h-btttn' type='submit'>Sign Up</button>
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