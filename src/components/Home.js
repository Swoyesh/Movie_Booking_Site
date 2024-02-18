import React from 'react'
import ImageCollection from './ImageCollection'
import Moviesnav from './Moviesnav'
import Status from './Status'
import "../universal.css"
import Moviecollec from './Moviecollec'


const Home = () => {
  return (
    <>
    <div>
      <ImageCollection/>
    </div>
    <div className='mnav' style={{zIndex: 10, backgroundColor: "#000B4B"}}>
      <Moviesnav/>
    </div>
    <div className='stat'>
      <Status/>
    </div>
    <div className='mcollec'>
      <Moviecollec/>
    </div>
    </>
  )
}

export default Home