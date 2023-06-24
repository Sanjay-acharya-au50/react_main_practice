import React from 'react'
import { Link,Outlet } from 'react-router-dom'


const Home = () => {
  const users = [
    {id: 1, name: "san", bike:"KTM"},
    {id: 1, name: "man", bike:"RS"},
    {id: 1, name: "ban", bike:"RX"},

  ]
  return (

    <>
      {
        users.map((item)=>{
          return(
            <Link to={`/users/${item.id}`} key={item.id}><h3>  {item.name} and {item.bike} </h3></Link>
          )
        })
      }
      <Outlet/>
      </>

  )
}

export default Home