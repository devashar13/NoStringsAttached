import React, { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import Navbar from "./Navbar";
import Nostringsattached from "../abis/Nostringsattached.json.json";
import "./App.css";
import Main from "./Main";
import "./index.css";
const App = () => {
  const [account, setAccount] = useState(() => {
    return "";
  });
  const [loading, setLoading] = useState(true);
  const [imageCount, setImageCount] = useState(() => {
    return 0;
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
      window.alert("Pls download truffle and ganache to use the webapp, go to the github repo for more info");
    }
  };
  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const netWorkId = await web3.eth.getId();
    const netData = await Nostringsattached.networks[netWorkId];
    if (netData) {
        const decentragram = web3.eth.Contract(Decentragram.abi, netData.address);
        setDecentragram(decentragram);
        const imageCount = await decentragram.methods.imageCount().call();
        setImageCount(imageCount);
  };
  return (
    <div className="main-screen">
      <Navbar account={account} />
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex">
            {loading ? (
              <div id="loader" className="text-center">
                <p className="Text Center">Loading..</p>
              </div>
            ) : (
              <Main
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
