import React from "react";
// import Comp1 from './Comp1'
import data from "./data.js";
import { useState } from "react";

const Header = () => {

  const [add, setAdd] = useState([])


const handleClick = (e) => {

  setAdd([...add, e])
  console.log(add);


}

const [addState, setState] = useState(false)

const showCart = () => {
  console.log(add);
  setState(true);

}

  return (
    <div className="head">
      <h2>fACEBOOK ftech</h2>
      <h2 onClick={showCart}>cart : {add.length}</h2>


      {data.map((e,id) => {
        return (
          <div className="d" key={id}>
            <h3 className="bx">{e.name}</h3>
            <h3 className="bx">{e.bike}</h3>
            <button onClick={()=>handleClick(e)} >add to cart</button>
          </div>
        );
      })}

      {/* <Comp1/> */}
    
      
      {
        addState && 
        add.map((item)=>{
          return(
            <>
          <p>{item.name}</p>
          <p>{item.bike}</p>

            </>
          )

        })
      }
    </div>
  );
};

export default Header;
