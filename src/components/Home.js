import React, { useContext, useEffect } from 'react'
import ImageCollection from './ImageCollection'
import Moviesnav from './Moviesnav'
import Status from './Status'
import "../universal.css"
import Moviecollec from './Moviecollec'
import Upcoming from './Upcoming'
import Footer from './Footer'
import { useLocation} from 'react-router-dom'
import movieContext from '../Context/movieContext'


const Home = () => {
  let context = useContext(movieContext)
  const {activeTab, setActiveTab} = context
  const location = useLocation()
  useEffect(() => {
    if(location.pathname === '/'){
      setActiveTab("HOME")
    }
  }, [])
  
  return (
    <>
    {/* <Layout> */}
    <div className='topper'>
      <ImageCollection/>
    </div>
    <div className='mnav'>
      <Moviesnav/>
    </div>
    <div className='stat'>
      <Status/>
    </div>
    <div className='mcollec'>
      <Moviecollec/>
    </div>
    <div className='up'>
      <Upcoming/>
    </div>
    <div className='bottom'>
      <Footer/>
    </div>
    {/* </Layout> */}
    </>
  )
}

export default Home