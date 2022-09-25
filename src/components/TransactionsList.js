import React, {useState, useEffect}from "react";
import Transaction from "./Transaction";

const API= `http://localhost:8001/`;
function TransactionsList(props) {

  const [transaction, setTransaction] =useState();

  const search = !props.search.item.key? `transactions`:`transactions?q=${props.search.item.key}` ;
  

  useEffect(()=>{
    fetch(`${API}${search}`)
    .then(res =>res.json())
    .then(data =>{
        setTransaction(data)
      
      
    })
  },[props.search])

  function deleteTransaction(id){
    fetch(`${API}transactions/${id}`, {
      method:'DELETE'
    })
    .then(res =>res.json())
    .then(data =>{
      console.log('data deleted successfully')
    })
    const updatedTransaction = transaction.filter(trans => trans.id !==id)
    setTransaction(updatedTransaction)
  }

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
          <th>
            <h3 className="ui center aligned header">Action</h3>
          </th>
        </tr>
        <Transaction trans={transaction} onDeleteTransaction={deleteTransaction}/> 
                  
      </tbody>
    </table>
  );
}

export default TransactionsList;
