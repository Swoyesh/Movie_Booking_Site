import React from 'react'
import Footer from './Footer'
import '../Forgo.css'
import bg from '../bg.png'
import rell from '../rell.png'

const Forgo = () => {
  return (
    <>
    <div className='container' style={{width: "35%", backgroundColor: "#081243", display: "flex", justifyContent: "center", boxShadow: "0px 0px 30px #fff", borderRadius: "6px", position: "relative", top: "60px", overflow:"hidden", border: "1px solid white", alignItems: "stretch"}}>
        <div className='n-cont' style={{marginTop: "10px", marginBottom: "40px", width: "100%"}}>
            <span style={{color: "#0e68a0", marginBottom: "15px", fontWeight: "bold", fontSize: "25px", display: "block", display: "flex", justifyContent: "center"}}>Forgot Password</span>
            <div className='former'>
              <form>
                <input type='text' style={{position: "relative", borderRadius: "5px", border: "none", padding: "7px", width: "90%", backgroundColor: "#fff", marginLeft: "18px", justifyContent:"flex-start"}} className='iinp'></input>
                <img src = {bg} className='cpt' height= "50px" width="200px"></img>
                <input type = "image" src={rell} style={{height: "30px", position: "relative", top: "55px", left: "-180px" ,backgroundColor:"yellow", borderRadius: "5px", cursor: "pointer"}}/>
                <input type='text' style={{position: "relative", borderRadius: "5px", border: "none", padding: "7px", width: "90%", backgroundColor: "#fff", top: "20px", marginLeft: "18px"}} className='iinp' placeholder="Enter Captcha Text"></input>
                <div style={{width: "80%"}}>
                <button type='submit' className='sbtn'>Submit</button>
                <button type='submit' className='cbtn'>Cancel</button>
                </div>
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

export default Forgo