import React from 'react'
import Footer from './Footer'
import Status from './Status'

const Layout = ({children}) => {
  return (
    <div>
        {children}
        {/* <Status/> */}
        <Footer/>
    </div>
  )
}

export default Layout