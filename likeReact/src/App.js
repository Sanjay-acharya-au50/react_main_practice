import './App.css';

//  importing components
import Header from './components/Header';
import React, { useState } from 'react';


function App() {
  // num = initial aisigned value
  // setNum is a function
  const [num, setNum] = useState(0);

  function like(){
    setNum(num+1)
  }
  function dis(){
    setNum(num-1)
  }

  return(
    <div className='App'>
        <Header/>
          <h1>{num}</h1>
        <div className='movie'>
          
          <div className='btn'>
          <button onClick={like}>like</button>
          <button onClick={dis}>Dis like</button>
          </div>
        

            
        </div>
      </div>
  )
}

export default App;
