import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <NavLink to="/" exact className="nav">
        Home
      </NavLink>

      <NavLink to="/transactionList" exact className="nav">
        Summary
      </NavLink>

      <NavLink to="/form" exact className="nav-add">
        Add transaction
      </NavLink>
    </>
  );
}
