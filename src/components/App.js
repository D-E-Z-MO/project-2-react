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

  console.log("**here");

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
            <TransactionList balance={balance} />
          </Route>

          <Route exact path="/form">
            <Form balance={balance} />
          </Route>

          <Route exact path="/">
            <Home balance={balance} />
          </Route>
        </div>
      </Switch>
    </>
  );
}
