import {useState} from 'react'
import movieContext from './movieContext'

const MovieState = (props) => {
    const header1 = useState("MY TICKETS")
    const header2 = useState("BOOKING")
  return (
    <movieContext.Provider value = {{header1, header2}}>
        {props.children}
    </movieContext.Provider>
  )
}

export default MovieState