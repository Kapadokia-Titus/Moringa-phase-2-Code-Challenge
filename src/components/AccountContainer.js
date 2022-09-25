import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [searchItem, setSearchItem] = useState({
    item:''
  })
  function filterSearchOptions(data){
    if(data!==''){
      setSearchItem({searchItem, item:data})
    }
   
  }
  
  return (
    <div>
      <Search query={filterSearchOptions} />
      <AddTransactionForm/>
      <TransactionsList search={searchItem}/>
    </div>
  );
}

export default AccountContainer;
