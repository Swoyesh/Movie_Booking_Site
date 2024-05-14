import {useState} from 'react'
import movieContext from './movieContext'

const MovieState = (props) => {

  const host = "http://localhost:5000"
    const header1 = useState("MY TICKETS")
    const header2 = useState("BOOKING")
    const [user, setUser] = useState("")

    const userFunc = async()=>{
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token")
        }
      })
      const json = await response.json()
      localStorage.setItem("name", user.f_name)
      setUser(json)
    }
    
  return (
    <movieContext.Provider value = {{header1, header2, userFunc, user}}>
        {props.children}
    </movieContext.Provider>
  )
}

export default MovieState