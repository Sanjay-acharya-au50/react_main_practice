import React from 'react'
import CompB from './CompB'
const CompA = ({data}) => {
  return (
    <div className='compA'>
    CompA
    <CompB data = {data}/>
    {/* <h1>{data}</h1> */}
    </div>
  )
}

export default CompA