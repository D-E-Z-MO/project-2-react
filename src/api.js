const API_URL = "http://localhost:3000";

export const getTransactions = () => {
  return fetch(API_URL + "/transactions").then((response) => response.json());
};

export const getBalance = (setBalance) =>
  fetch(API_URL + "/balance")
    .then((response) => response.json())
    .then((data) => {
      setBalance(data.amount);
    });

export const createTransaction = (data) =>
  fetch(API_URL + "/transactions", {
    body: JSON.stringify(data),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => data.value);

export const updateBalance = (amount, category, onUpdate) =>
  fetch(API_URL + "/balance", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: amount }),
  })
    .then((res) => res.json())
    .then((data) => onUpdate(data.amount));
//
// }
// export const updateBalanceAndCreateTransaction = ()=>{
//   //async await the promises
//   updateBalance()
//   createTransaction()
// }
