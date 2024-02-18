import React, { useState } from 'react'
import "../image.css"

const Images = () => {
  const [display1, setDisplay1] = useState(-100)
  const [display2, setDisplay2] = useState(100)
  const [animation, setAnimation] = useState("not")
  const [animations, setAnimations] = useState("not")
  let delay = 6000;
const func = () => {
  if(animation === "not"){
    setAnimation("cont")
    setAnimations("conts")
  }
    setTimeout(() => {
      setAnimation("not")
    setAnimations("not")
    }, 1000);
    delay += 6000;
  setTimeout(func, delay);
}
// setTimeout(func, 5000);
  
  let s1 = {
    translate: display1
  }
  let s2 = {
    translate: display2
  }
    let sign1 = ">"
    let sign2 = "<"
    const clicked1 = (e)=>{
      setDisplay1(0)
      setDisplay2(0)
    }
    const clicked2 = (e)=>{
      setDisplay1(-100)
      setDisplay2(100)
    }

    const changed = (e)=>{
      if(animation === "not"){
        setAnimation("cont")
        setAnimations("conts")
      }
      setTimeout(() => {
        setAnimation("not")
      setAnimations("not")
      }, 1000);
      
    }
  return (
    <>
    <div className='main' onMouseMove={clicked1} onMouseOut={clicked2}>
      {/* <div className='m-cont'> */}
    <div className={animation}>
    <div className={animations}></div>
    </div>
    <div className='s-cont'>
    <button className='newButt' style={s1}><p style={{fontSize: "30px", position: "relative", top: "-10px"}} onClick={changed}>{sign2}</p></button>
    <button className='newBut1' style={s2}><p style={{fontSize: "30px", position: "relative", top: "-10px"}} onClick={changed}>{sign1}</p></button>
    
    </div>
    <div style={{color: "yellow", zIndex: 11}}>
      goodboy
    </div>
    </div>
    </>
  )
}

export default Images