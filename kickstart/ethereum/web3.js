import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // browser running metamask
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // server side or metamask not present
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/b26bcb2ce97143138bd27606d822c477"
  );
  web3 = new Web3(provider);
}

export default web3;
