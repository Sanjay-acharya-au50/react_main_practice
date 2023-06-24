import './App.css';

//  importing components
import Header from './components/Header';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'


function App (){
  
  const [myFetch, funFetch] = useState(0);
  const [hooksData, setData] = useState([])
  // const [myFetch1, funFetch1] = useState(0);
  // console.log(myFetch1);


  useEffect(()=>{
      // window.alert("hello from use effect");

        const getData = async () => {
          const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
          const res = await data.json();

          console.log(res);
          setData(res)
        }
        getData();

      // dipendency null (use effect runn initially one time)
  // },[])
},[myFetch])

  

  return (
    <div className='center'>
      <Header/>
      <div className="btn">
      <Button id='btn' onClick={() => {funFetch(myFetch+1)}}>click{myFetch}</Button>
      {/* <Button id='btn' onClick={() => {funFetch1(myFetch1+1)}}>click{myFetch1}</Button> */}

      </div>
      {
        hooksData.map((d, index) => {
        return(
        <div className="data" key= {index}>
        {d.name}
        {d.username}
        {d.email}
      </div>
        )
      })
      }
    </div>
  )

}



export default App;
