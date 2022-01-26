import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export function IncomeExpenses({ transaction }) {
  return (
    <>
      <PieChart
        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 10, color: "#c13c37" },
          { title: "Three", value: 10, color: "#6A2135" },
        ]}
      />
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>
    </>
  );
}
