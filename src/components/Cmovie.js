import React from 'react'
import "../cMovie.css"

const Cmovie = (props) => {
    const {type} = props
    const time = ["09:00 AM", "09:30 AM", "11:00 AM", "03:00 PM"]
    return (
        <>
            <div className="card" style={{width: "18rem", margin: "15px", border: "none"}}>
            <div className='type' style={{position: "relative", top: "10px", backgroundColor: "red", height: "0%", textAlign: "right", right:"10px"}}>
            <button className='b1'><i class="fa-regular fa-ticket" style={{margin: "8px"}}></i>Buy Tickets</button>
                    <button className='b2'><i class="fa-thin fa-play" style={{margin: "8px"}}></i>Play Trailer</button>
                    <button className='buttt'>{type}</button>
                    
                </div>
                <div className='img-div'>
                <img src={props.img} className="card-img-top" alt="..." height={"380px"} />
                </div>
                <div className="card-body" style={{backgroundColor: "#002f5e"}}>
                    <h5 className="card-title" style={{color: "white", fontSize: "21px"}}><strong>{props.title}</strong></h5>
                    <p className="card-text" style={{color: "gray", fontSize: "12px", textAlign: "left"}}>{props.duration}</p>
                    <p className="card-text" style={{color: "gray", marginTop: "-12px", fontSize: "12px", textAlign: "left"}}>{props.genre}</p>
                    {time.map((element)=>{
                        return <a href="#" className="btn btn-primary">{element}</a>
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Cmovie