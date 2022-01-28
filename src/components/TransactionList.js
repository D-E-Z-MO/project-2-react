import React, { useEffect, useState } from "react";
import { IncomeExpenses } from "./IncomeExpenses";
import { PieChart } from "react-minimal-pie-chart";
import { getTransactions, getBalance } from "../api";
import { Balance } from "./Balance";

export function TransactionList({ balance }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <Balance balance={balance} />

      {transactions.length && (
        <PieChart
          startAngle={45}
          animate
          animationDuration={1000}
          data={transactions.reduce(
            (result, transaction) => {
              if (transaction.category === "Expense") {
                result[0].value += transaction.amount;
              } else {
                result[1].value += transaction.amount;
              }
              return result;
            },
            [
              { title: "Expense", value: 0, color: "#E53935" },
              { title: "Income", value: 0, color: "#4CAF50" },
            ]
          )}
        />
      )}
      <h3>Recent Transactions</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return (
            <li key={transaction.id}>
              <IncomeExpenses transaction={transaction} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
