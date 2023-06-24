import React from 'react'
import CompC from './CompC'
import CompA from './CompA'

const CompB = (props) => {
  return (
    <div className='compB'>
    CompB

    <CompC data={props.data}/>
    <CompA/>

    </div>
  )
}

export default CompB