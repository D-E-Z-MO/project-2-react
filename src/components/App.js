import { Route, Switch } from "react-router-dom";
import "../App.css";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Form } from "./Form";

export function App() {
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
