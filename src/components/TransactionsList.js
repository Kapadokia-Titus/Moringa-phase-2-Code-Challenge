import React, {useState, useEffect}from "react";
import Transaction from "./Transaction";

function TransactionsList() {

  const [transaction, setTransaction] =useState();

  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then(res =>res.json())
    .then(data =>{
      setTransaction(data)
    })
  },[])

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        <Transaction  trans={transaction}/> 
                  
      </tbody>
    </table>
  );
}

export default TransactionsList;
