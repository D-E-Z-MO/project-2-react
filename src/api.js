const API_URL = "http://localhost:3000";

export const getTransactions = () => {
  return fetch(API_URL + "/transactions").then((response) => response.json());
};

export const getBalance = () =>
  fetch(API_URL + "/balance")
    .then((response) => response.json())
    .then((data) => data.value);

export const createTransaction = (data) =>
  fetch(API_URL + "/transactions", {
    body: JSON.stringify(data),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => data.value);

// export const updateBalance(amount, category){
//   fetch(API_URL + "/balance")
// }
// export const updateBalanceAndCreateTransaction = ()=>{
//   //async await the promises
//   updateBalance()
//   createTransaction()
// }
