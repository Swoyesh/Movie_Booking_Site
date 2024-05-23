import React, {useState} from 'react'
import "../nncMovie.css"

const SCmovie = (props) => {
    const [display1, setDisplay1] = useState(-140)
    const[zoom, setZoom] = useState("1")
    const s11 = {
        color: "white", 
        fontSize: "21px"
    }
    const s21 = {
        fontSize: "21px",
        animation: "changes 0.75s ease",
        color: "red"
    }
    const s12 = {
        color: "gray", 
        fontSize: "12px", 
        textAlign: "left"
    }
    const s22 = {
        color: "red", 
        fontSize: "12px", 
        animation: "changess 0.75s ease",
        textAlign: "left"
    }
    const {type} = props
    const clicked1 = ()=>{
        setZoom("1.1")
        setDisplay1(0)
    }
    const [styler1, setStyler1] = useState(s11)
    const [styler2, setStyler2] = useState(s12)
    
    const clicked2 = ()=>{
        setZoom("1")
        setDisplay1(-150)
    }

    const st1 = ()=>{
        setStyler1(s21)
        setStyler2(s22)
    }

    const st2 = ()=>{
        setStyler1(s11)
        setStyler2(s12)
    }

    let s1 = {
        translate: display1
      }
      let s2 = {
        scale: zoom
      }
  return (
    <>
    {/* <div className='nancestor'> */}
    <div className="card" style={{width: "16.5rem", margin: "15px", border: "none", height: "70vh"}}>
            <div onMouseMove={clicked1} onMouseOut={clicked2} className='timer' style = {{position: "relative",top: "-20px", backgroundColor: "red", height: "0%", textAlign: "left"}}>
                    <div><button className='bb2' style={s1}><i class="fa-thin fa-play" style={{margin: "8px"}}></i>Play Trailer</button></div>
            <div><button className='bb1' style={s1}><i class="fa-solid fa-eye" style={{margin: "8px"}}></i>View Details</button></div>
                    <button className='buttter'><i class="fa-regular fa-calendar" style = {{margin: "8px"}}></i>{type}</button>
                    
                </div>
                <div className='main' style={{height: "57vh"}}>
                <div className='img-div' style={s2} onMouseMove={clicked1} onMouseOut={clicked2}>
                <img src={props.img} className="card-img-top" alt="..." height={"380vh"} />
                
                </div>
                </div>
                {/* </div> */}
                <div className='ancestor' style={{backgroundColor: "#000B4B"}}>
                <div className="card-body" style={{backgroundColor: "#182356", height: "14vh", cursor: "pointer"}} onMouseMove={st1} onMouseLeave={st2}>
                    
                    <h5 className="card-title" style={styler1}><strong>{props.title}</strong></h5>
                    <p className="card-text" style={styler2}>{props.duration}</p>
                </div>
                </div>
            </div>
        </>
  )
}

export default SCmovie