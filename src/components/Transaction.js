import React from "react";

function Transaction(props) {
      return (
         <>
          {props.trans?.map(data=>{
          return(
            <tr key={data.id}>
            <td>{data.date}</td>
            <td>{data.description}</td>
            <td>{data.category}</td>
            <td>{data.ammount}</td>
          </tr>
          )
         })}
         </>
         
         )

 
}

export default Transaction;
