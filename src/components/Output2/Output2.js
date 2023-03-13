import React from 'react';
import './Output2.css'
const Output2 = (props)=>{
    return (
        <>
          <div className="div2">
            <div>
          <table className="table">
                <thead>
                    <tr>
                        <th className="heading1">Customer</th>
                        <th className="heading2">Tip</th>
                    </tr>
                </thead>
                <tbody>
                  <tr className="output1">
                    <td className="output1">{props.length} </td>
                    <td className="output2">{props.sum} </td>
                  </tr>
                </tbody>
          </table>
        </div>
        <button onClick={props.clickHandle} className="Button">
            Calculate tip and customer
        </button>
        </div>
        <br/> 
        </>
    )
}
export default Output2;