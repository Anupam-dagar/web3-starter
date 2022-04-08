import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xbb8daae3c8299a209ff087ce7b0345ebccc0e3e5"
);

export default instance;
