import './App.css';

//  importing components
import Header from './components/Header';
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'



function App() {
  // name = initial aisigned value
  // setName is a function
  const [name, setName] = useState("");
  const [caste, setCaste] = useState("");
  // array of object inside 2 fields name & caste
  const [data, setData] = useState([])

  const addData = () => {
    // setData({
    // // key_name : name,
    // name : name,

    // // key_caste : caste
    // caste : caste

    // })
    // // destructuring 
    // setData({name,caste});

    setData([...data, { name, caste }]);
    setName("");
    setCaste("")
  }

  const remove = (index) => {
    const arr = data;
    arr.splice(index, 1);
    setData([...arr])
  }

  return (
    <div className='App'>
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField className='formClass' value={name} onChange={(e) => setName(e.target.value)} label="name" variant="outlined" />
          <TextField className='formClass' value={caste} onChange={(e) => setCaste(e.target.value)} label="caste" variant="outlined" />
          <Button onClick={addData} className='formClass' id='btn' variant="contained" color='success' >
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="dataList">
          <div className="col">
            <h4>name</h4>

          </div>
          <div className="col">
            <h4>caste</h4>

          </div>

          <div className="col">
            <h4>remove</h4>

          </div>


        </div>

        {
          data.map((e, index) => {
            return (

              <div key={index} className="dataList">
                <div>{e.name}</div>
                <div>{e.caste}</div>
                <Button onClick={() => {
                  remove(index)
                }} className='formClass' id='btn' variant="contained" color='success' >
                  <AddIcon />
                </Button>
              </div>
            )
          })
        }


      </div>

    </div>
  )
}

export default App;
