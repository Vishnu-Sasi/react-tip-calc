import React from 'react';
import './Output1.css';
const Output1 = ({list })=>{
const newList =list.map((item,index)=>(<li key={index}>{item}</li>))
    return (
    <>
        <div className="div">
        <h2 align="center">
            Customer list
        </h2>
        < ol className="ol">
            {newList}
            
        </ol>
        <br/>
    
        </div>
      
    </>
    )
}
 export default Output1;