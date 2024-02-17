import {useState} from 'react'
import movieContext from './movieContext'

const MovieState = (props) => {
    const [header1, setHeader1] = useState(null)
    const [header2, setHeader2] = useState(null)
  return (
    <movieContext.Provider value = {{header1, header2}}>
        {props.children}
    </movieContext.Provider>
  )
}

export default MovieState