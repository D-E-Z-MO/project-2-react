import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
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
