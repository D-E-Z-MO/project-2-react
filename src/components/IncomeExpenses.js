import React from "react";

export function IncomeExpenses({ transaction }) {
  const isExpense = transaction.category === "Expense";
  return (
    <div>
      <h3>{isExpense ? "Expense" : "Income"}</h3>
      <p className={`money ${isExpense ? "minus" : "plus"}`}>
        ${isExpense ? "-" : "+"} {transaction.amount}
      </p>
      <p>Date: {new Date(transaction.date).toLocaleDateString("en-US")}</p>
    </div>
  );
}
