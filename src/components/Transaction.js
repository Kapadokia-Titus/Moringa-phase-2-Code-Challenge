import React from "react";

function Transaction({trans, onDeleteTransaction}) {
            
     function handleDelete(event, id){
      onDeleteTransaction(id)
     }
  
      return (
         <>
          {trans?.map(data=>{
          return(
            <tr>
            <td key={data.id} >{data.date}</td>
            <td >{data.description}</td>
            <td>{data.category}</td>
            <td>{data.amount}</td>
            <td><button onClick={(e)=> handleDelete(e, data.id)} >Delete</button></td>
          </tr>
          )
         })}
         </>
         
         )

 
}

export default Transaction;
