import React, {useState} from 'react'
import "../nncMovie.css"

const SCmovie = (props) => {
    const [display1, setDisplay1] = useState(-140)
    const[zoom, setZoom] = useState("1")
    const {type} = props
    const clicked1 = ()=>{
        setZoom("1.1")
        setDisplay1(0)
    }

    const clicked2 = ()=>{
        setZoom("1")
        setDisplay1(-150)
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
    <div className="card" style={{width: "16.5rem", margin: "15px", border: "none"}}>
            <div onMouseMove={clicked1} onMouseOut={clicked2} className='timer' style = {{position: "relative",top: "-20px", backgroundColor: "red", height: "0%", textAlign: "left"}}>
                    <div><button className='bb2' style={s1}><i class="fa-thin fa-play" style={{margin: "8px"}}></i>Play Trailer</button></div>
            <div><button className='bb1' style={s1}><i class="fa-solid fa-eye" style={{margin: "8px"}}></i>View Details</button></div>
                    <button className='buttter'><i class="fa-regular fa-calendar" style = {{margin: "8px"}}></i>{type}</button>
                    
                </div>
                <div className='main' style={{height: "380px"}}>
                <div className='img-div' style={s2} onMouseMove={clicked1} onMouseOut={clicked2}>
                <img src={props.img} className="card-img-top" alt="..." height={"380px"} />
                
                </div>
                </div>
                {/* </div> */}
                <div className='ancestor' style={{height: "0px", backgroundColor: "#000B4B"}}>
                <div className="card-body" style={{backgroundColor: "#182356", height: "120px"}}>
                    
                    <h5 className="card-title" style={{color: "white", fontSize: "21px"}}><strong>{props.title}</strong></h5>
                    <p className="card-text" style={{color: "gray", fontSize: "12px", textAlign: "left"}}>{props.duration}</p>
                </div>
                </div>
            </div>
        </>
  )
}

export default SCmovie