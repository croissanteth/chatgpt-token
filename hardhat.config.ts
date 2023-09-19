import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",

  networks: {
    hardhat: {},

    GOERLI: {
      accounts: [process.env.GOERLI_PRIVATE_KEY!],
      url: process.env.GOERLI_URL,
    },
  },
};

export default config;
