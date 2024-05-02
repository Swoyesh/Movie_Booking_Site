import React from 'react'
import Footer from './Footer'

const Forgo = () => {
  return (
    <>
    <div className='container' style={{height: "100px", backgroundColor: "#081243"}}>
        <div className='n-cont'>
            <span style={{color: "#0e68a0", alignItems: "center"}}>Forgot Password</span>
        </div>
    </div>
    <div className='bottom' style={{top: "60px"}}>
      <Footer/>
    </div>
    </>
  )
}

export default Forgo