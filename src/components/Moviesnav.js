import React, { useState, useContext } from 'react'
import "../moviesnav.css"
import { Link } from 'react-router-dom'
import movieContext from '../Context/movieContext'

const Moviesnav = () => {
  const context = useContext(movieContext)
  const {dis1, setDis1, dis2, setDis2, day, setDay} = context
  const d = new Date();
  const ld = new Date(d.getFullYear(), d.getMonth()+1, 0)
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let arr = [];
  let newArr = [];
  for (let index = 0; index < 8; index++) {
    if(index === 0){
      if(d.getDate() + 2>ld.getDate()){
        arr[index] = 1;
      }else{
        arr[index] = d.getDate() + 2
      }
    }else{
      if(arr[index-1] === ld.getDate()){
        arr[index] = 1
      }else{
        arr[index] = arr[index-1] + 1;
      }    
    } 
  }

  const cm = (index)=>{
    let final_date
    for(let i = 1; i<=8; i++){
    if(arr[index]<=ld.getDate() && arr[index-i]!=ld.getDate()){
      final_date = d.getMonth()
    }else{
      return d. getMonth()+1
    }
  }
  return final_date
  }

  for (let index = 0; index < 8; index++) {
    newArr[index] = arr[index].toString();
  }
  let [activeTab, setActiveTab] = useState("Today")
    let style = {
        color: "white",
        fontSize: "30px"
    }
    let clicked11 = (state)=>{
      setDis1("")
      setDis2("none")
      setActiveTab(state)
      setDay("today")
    }
    let clicked12 = (state)=>{
      setDis1("")
      setDis2("none")
      setActiveTab(state)
      setDay("tomm")
    }
    let clicked2 = (state)=>{
      setActiveTab(state)
      setDis1("none")
      setDis2("")
    }
  return (
    <div className='container'>
        <div className='text' style={style}><strong>Now Showing <span style={{backgroundColor: "red", height: "5px", width: "5px", display: "inline-block", borderRadius: "50%"}}></span></strong></div>
        <div className='dates'>
          <Link className={activeTab==="Today"?'actor':'dice'} onClick={()=>clicked11("Today")}>Today</Link>
          <Link className={activeTab==="Tomm"?'actor':'dice'} onClick={()=>clicked12("Tomm")}>Tomm</Link>
          <Link className={activeTab==="1"?'actor':'dice'} onClick={()=>clicked2("1")}>{newArr[0].concat(" ", month[cm(0)])}</Link>
          <Link className={activeTab==="2"?'actor':'dice'} onClick={()=>clicked2("2")}>{newArr[1].concat(" ", month[cm(1)])}</Link>
          <Link className={activeTab==="3"?'actor':'dice'} onClick={()=>clicked2("3")}>{newArr[2].concat(" ", month[cm(2)])}</Link>
          <Link className={activeTab==="4"?'actor':'dice'} onClick={()=>clicked2("4")}>{newArr[3].concat(" ", month[cm(3)])}</Link>
          <Link className={activeTab==="5"?'actor':'dice'} onClick={()=>clicked2("5")}>{newArr[4].concat(" ", month[cm(4)])}</Link>
          <Link className={activeTab==="6"?'actor':'dice'} onClick={()=>clicked2("6")}>{newArr[5].concat(" ", month[cm(5)])}</Link>
          <Link className={activeTab==="7"?'actor':'dice'} onClick={()=>clicked2("7")}>{newArr[6].concat(" ", month[cm(6)])}</Link>
          <Link className={activeTab==="8"?'actor':'dice'} onClick={()=>clicked2("8")}>{newArr[7].concat(" ", month[cm(7)])}</Link>
        </div>
    </div>
  )
}

export default Moviesnav