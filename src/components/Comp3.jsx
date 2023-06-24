import React,{useContext} from 'react';
import { FirstContext } from '../App';


const Comp3 = () => {
const myDatat = useContext(FirstContext)

  return (
    <div className='comp3'>Comp3
    
    <div className='useContext'>{myDatat}</div>
    
    </div>
  )
}

export default Comp3