import React, { useState, useEffect } from "react";
// import { getBalance } from "../api";

export function Balance({ balance }) {
  // const [balance, setBalance] = useState(0);

  // useEffect(() => {
  //   getBalance(setBalance);
  // }, []);

  // const amounts = transactions.map(tr=>tr.amount)
  // const total = amounts.reduce((acc,item)=>(acc += item.amount),0).toFixed(2)
  return (
    <div>
      <h4>Your Current Balance</h4>
      <h1>${balance.toLocaleString()}</h1>
    </div>
  );
}
