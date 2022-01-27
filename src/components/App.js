import { Route, Switch } from "react-router-dom";
import { getBalance } from "../api";
import { useState, useEffect } from "react";
import "../App.css";
import { Header } from "./Header";
import { TransactionList } from "./TransactionList";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Form } from "./Form";

export function App() {
  const [balance, setBalance] = useState(0);
  // const [updatedBalance, setUpdatedBalance] = useState(0);
  const onUpdate = (amount, category) => {
    console.log("here");
    if (category === "Expense") {
      return setBalance(balance - amount);
    } else {
      return setBalance(balance + amount);
    }
  };
  useEffect(() => {
    getBalance(setBalance);
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <div className="container">
          <Route exact path="/transactionList">
            <TransactionList balance={balance} onUpdate={onUpdate} />
          </Route>

          <Route exact path="/form">
            <Form onUpdate={onUpdate} />
          </Route>

          <Route exact path="/">
            <Home balance={balance} onUpdate={onUpdate} />
          </Route>
        </div>
      </Switch>
    </>
  );
}
