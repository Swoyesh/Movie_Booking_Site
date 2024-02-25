import React from 'react'
import "../cMovie.css"

const Cmovie = (props) => {
    const time = ["09:00 AM", "09:30 AM", "11:00 AM", "03:00 PM"]
    return (
        <>
            <div class="card" style={{width: "18rem", margin: "15px", border: "none"}}>
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body" style={{backgroundColor: "#002f5e"}}>
                    <h5 class="card-title" style={{color: "white", fontSize: "21px"}}><strong>{props.title}</strong></h5>
                    <p class="card-text" style={{color: "gray", fontSize: "12px", textAlign: "left"}}>{props.duration}</p>
                    <p class="card-text" style={{color: "gray", marginTop: "-12px", fontSize: "12px", textAlign: "left"}}>{props.genre}</p>
                    {time.map((element)=>{
                        return <a href="#" class="btn btn-primary">{element}</a>
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Cmovie