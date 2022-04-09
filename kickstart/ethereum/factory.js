import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2250cAE2d89b61145ba914507a8355397B48E89f"
);

export default instance;
