import React, {useEffect, useState} from "react";

function AddTransactionForm() {

  const [form, setForm] =useState(
    {
      "date":"", 
      "description":"description...",
      "category":"category...",
      "amount":"0000.00"
    }
  )
  
  function handleOnchange(event){
    const key = event.target.id
    setForm({...form, 
      [key]:event.target.value})
  }
  

 function handleOnSubmit(event){
  event.preventDefault();


  fetch("http://localhost:8001/transactions", {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(form)
  })
  .then(res => res.json())
  .then(data =>{
    console.log("Data added Successfully at "+data.date)
  })

 }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleOnSubmit}>
        <div className="inline fields">
          <input id="date" type="date" onChange={handleOnchange} name="date" />
          <input id="description" type="text" name="description" onChange={handleOnchange} placeholder={form.description} />
          <input id="category" type="text" name="category" onChange={handleOnchange} placeholder={form.category} />
          <input id="amount" type="number" name="amount" onChange={handleOnchange} placeholder={form.amount} step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
