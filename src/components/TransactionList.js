import React, { useEffect, useState } from "react";
import { IncomeExpenses } from "./IncomeExpenses";
import { PieChart } from "react-minimal-pie-chart";
import { getTransactions } from "../api";

export function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    getTransactions().then((data) => setTransactions(data));
  }, []);
  return (
    <>
      {transactions.length && (
        <PieChart
          startAngle={45}
          data={transactions.reduce(
            (result, transaction) => {
              if (transaction.category === "Expense") {
                result[0].value += transaction.amount;
              } else if (transaction.category === "Income") {
                result[1].value += transaction.amount;
              } else {
                result[2].value += transaction.amount;
              }
              return result;
            },
            [
              { title: "Expense", value: 0, color: "#E53935" },
              { title: "Income", value: 0, color: "#4CAF50" },
              { title: "Other", value: 0, color: "#4CAF59" },
            ]
          )}
        />
      )}
      <h3>
        History &<span className="text-muted"> Balance: ${balance.amount}</span>
      </h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return (
            <li key={transaction.id}>
              <IncomeExpenses transaction={transaction} />
            </li>
          );
        })}
        {/* <li className="plus">
          Cash <span>+$400</span>
        </li> */}
      </ul>
    </>
  );
}
