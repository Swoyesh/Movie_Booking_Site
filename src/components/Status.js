import React from 'react'
import '../status.css'

const Status = () => {
  return (
    <div className='container'>
        <div>
        <button className='red'></button>
        <span className='nice'>SOLD</span>
        </div>
        <div>
        <button className='yellow'></button>
        <span className='nice1'>BOOKED</span>
        </div>
        <div>
        <button className='green'></button>
        <span className='nice2'>AVAILABLE</span>
        </div>
    </div>
  )
}

export default Status