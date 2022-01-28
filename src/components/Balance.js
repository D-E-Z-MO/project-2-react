import React from "react";

export function Balance({ balance }) {
  return (
    <div>
      <h4>Your Current Balance</h4>
      <h1>${balance.toLocaleString()}</h1>
    </div>
  );
}
