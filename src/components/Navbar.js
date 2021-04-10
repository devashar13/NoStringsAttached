import React, { Component } from "react";
import Identicon from "identicon.js";
import photo from "../photo.png";


const Navbar = ({ account }) => {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a
        className="navbar-brand col-sm-3 col-md-2 mr-0"
        target="_blank"
        rel="noopener noreferrer"
      >
        NoStringsAttached
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <small className="text-secondary">
            <small id="account">{account}</small>
          </small>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
