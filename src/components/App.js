import React, { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import Navbar from "./Navbar";
import Nostringsattached from "../abis/Nostringsattached.json.json";
import "./App.css";
import Main from "./Main";
import "./index.css";
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
const App = () => {
  const [account, setAccount] = useState(() => {
    return "";
  });
  const [loading, setLoading] = useState(true);
  const [songCount, setSongCount] = useState(() => {
    return 0;
  });
  const songs = useRef([]);
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
    // console.log(accounts[0])
    if (netData) {
      const nostringsattached = web3.eth.Contract(Nostringsattached.abi, netData.address);
      setDecentragram(nostringsattached);
      const songCount = await nostringsattached.methods.songCount().call();
      setSongCount(songCount);
      // console.log(songCount.toNumber());
      for(var i =1;i<=songCount;i++){
        const song = await nostringsattached.methods.songs(i).call()
        songs.current = [...songs.current,song]
      }
      console.log(songs.current)
      images.current.sort((a,b)=>b.tipAmount-a.tipAmount)
      setLoading(false);
    } else {
      window.alert("LOLOLOLOLOL");
    }
  };
  const captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      buffer.current = Buffer(reader.result);
      console.log(buffer.current);
    };
  };
  const uploadSong = (description) => {
    console.log("sending to ipfs");
    ipfs.add(buffer.current, (error, result) => {
      console.log("ipfs file", result);
      if (error) {
        console.log(error);
      }
      setLoading(true)
      decentragram.methods.uploadSong(result[0].hash,description).send({from:account}).on('transactionHash', (hash) => {
        setLoading(false)
      })
    });
  };
  const tipSongOwner = async (id,tipAmount) =>{
    setLoading(true)
    decentragram.methods.tipSongOwner(id).send({from:account,value:tipAmount}).on('transactionHash',(hash)=>{
      setLoading(false)
    })
  }
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
                songs = {songs.current}
                captureFile={captureFile}
                account={account}
                uploadSong={uploadSong}
                tipSongOwner = {tipSongOwner}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
