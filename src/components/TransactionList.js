import React from "react";
import { IncomeExpenses } from "./IncomeExpenses";
import Data from "../db.json";

export function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* {Data.map((transaction) => {
          return (
            <IncomeExpenses transaction={transaction} /> */}
        <li className="plus">
          Cash <span>+$400</span>
          <button className="delete-btn">x</button>
        </li>
        )
      </ul>
    </>
  );
}
