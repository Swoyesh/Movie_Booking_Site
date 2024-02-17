import React, { useState } from 'react'
import "../moviesnav.css"
import { Link } from 'react-router-dom'

const Moviesnav = () => {
  const d = new Date();
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let arr = [];
  let newArr = [];
  for (let index = 0; index < 8; index++) {
    if(index === 0){
      arr[index] = d.getDate() + 2
    }else{
      arr[index] = arr[index-1] + 1;
    }
    
  }
  for (let index = 0; index < 8; index++) {
    newArr[index] = arr[index].toString();
  }
  let [activeTab, setActiveTab] = useState("Today")
    let style = {
        color: "white",
        fontSize: "30px"
    }
    let clicked = (state)=>{
      setActiveTab(state)
    }
  return (
    <div className='container'>
        <div className='text' style={style}><strong>Now Showing<span style={{color: "red"}}> .</span></strong></div>
        <div className='dates'>
          <a className={activeTab==="Today"?'actor':'dice'} onClick={()=>clicked("Today")}>Today</a>
          <a className={activeTab==="Tomm"?'actor':'dice'} onClick={()=>clicked("Tomm")}>Tomm</a>
          <a className={activeTab==="1"?'actor':'dice'} onClick={()=>clicked("1")}>{newArr[0].concat(" ", month[d.getMonth()])}</a>
          <a className={activeTab==="2"?'actor':'dice'} onClick={()=>clicked("2")}>{newArr[1].concat(" ", month[d.getMonth()])}</a>
          <a className={activeTab==="3"?'actor':'dice'} onClick={()=>clicked("3")}>{newArr[2].concat(" ", month[d.getMonth()])}</a>
          <a className={activeTab==="4"?'actor':'dice'} onClick={()=>clicked("4")}>{newArr[3].concat(" ", month[d.getMonth()])}</a>
          <a className={activeTab==="5"?'actor':'dice'} onClick={()=>clicked("5")}>{newArr[4].concat(" ", month[d.getMonth()])}</a>
          <a className={activeTab==="6"?'actor':'dice'} onClick={()=>clicked("6")}>{newArr[5].concat(" ", month[d.getMonth()])}</a>
          <a className={activeTab==="7"?'actor':'dice'} onClick={()=>clicked("7")}>{newArr[6].concat(" ", month[d.getMonth()])}</a>
          <a className={activeTab==="8"?'actor':'dice'} onClick={()=>clicked("8")}>{newArr[7].concat(" ", month[d.getMonth()])}</a>
        </div>
    </div>
  )
}

export default Moviesnav