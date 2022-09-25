import React,{useState} from "react";

function Search(props) {

  const [search, setSearch] =useState([])

  function handleChange(event){
    const key = event.target.id; 
    
    setSearch({search, key:event.target.value })
    props.query(search); 

  }


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        id="search"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
