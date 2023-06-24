import React from 'react'
// use navigate (go back)
import {useNavigate} from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <>
    <h1>404 Error</h1>
    <button onClick={()=>{
      navigate(-1)
    }}>go back </button>
</>

  )
}

export default Error