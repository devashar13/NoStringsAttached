import React, { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import Navbar from "./Navbar";
import "./App.css";
import "./index.css";
const App = () => {
  const [account, setAccount] = useState(() => {
    return "";
  });
  useEffect(async () => {
    await loadWeb3();
    await loadBlockchainData();
  });
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Ethereum browser detected");
    }
  };
  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };
  return <div></div>;
};

export default App;
