import React from 'react'
import Footer from './Footer'

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