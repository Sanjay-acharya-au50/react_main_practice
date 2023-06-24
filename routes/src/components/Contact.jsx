import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <>

   <Link to={'facebook'}> <h3>facebook</h3> </Link>
   <Link to={'instagram'}> <h3>instagram</h3> </Link>
   <Outlet/>

    </>
  )
}

export default Contact