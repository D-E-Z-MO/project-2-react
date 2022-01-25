import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import "./App.css";

const linkStyles = {
  display: "inline-block",
  width: "90px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  textAlign: "autoComplete",
};

function NavBar() {
  return (
    <>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/balance"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Balance
      </NavLink>
      <NavLink
        to="/incomeExpenses"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Summary
      </NavLink>
      <NavLink
        to="/transactionList"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Transactions
      </NavLink>
      <NavLink
        to="/form"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Make transactions
      </NavLink>
    </>
  );
}
function Home() {
  return (
    <div>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <Form />
    </div>
  );
}
function Header() {
  return <h2>Expense Tracker</h2>;
}
function Balance() {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>$1,000,000.00</h1>
    </div>
  );
}
function IncomeExpenses() {
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
function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
}
function Form() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

function App() {
  return (
    <>
      <Header className="" />
      <NavBar />
      <Switch>
        <div className="container">
          <Route path="/balance">
            <Balance />
          </Route>
          <Route path="/incomeExpenses">
            <IncomeExpenses />
          </Route>
          <Route exact path="/transactionList">
            <TransactionList />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
