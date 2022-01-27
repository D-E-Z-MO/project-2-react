import React, { useState } from "react";
import { createTransaction, updateBalance } from "../api";

export function Form({ onUpdate }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  //onsubmit create function to post transaction & change value
  const onSubmit = () => {
    const data = {
      category,
      amount: Number(amount),
      date: new Date().getTime(),
    };
    createTransaction(data);
    updateBalance(data.amount, data.category, onUpdate);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter text..."
          />
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
