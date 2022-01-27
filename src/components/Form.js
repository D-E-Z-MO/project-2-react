import React, { useState } from "react";
import { createTransaction, updateBalance } from "../api";

export function Form({ balance }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  //onsubmit create function to post transaction & change value
  const onSubmit = () => {
    const data = {
      category,
      amount: Math.abs(amount),
      date: new Date().getTime(),
    };
    console.log("** First");
    createTransaction(data);
    if (data.category === "Expense") {
      const transaction = data.amount * -1;
      const newBalance = balance + transaction;
      return updateBalance(newBalance, data.category);
    } else {
      const transaction = data.amount;
      const newBalance = balance + transaction;
      return updateBalance(newBalance, data.category);
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Category</label>
          <select
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            {/* {(negative - expense, positive - income)} */}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={() => onSubmit()} className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
}
