require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17"
  },
  defaultNetwork: "smrevm1072",
  networks: {
    smrevm1072: {
      url: "https://json-rpc.evm.testnet.shimmer.network/",
      accounts: [process.env.RMS_EVM_PRIVATEKEY],
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/fXcphe9VsC6eWwEjRWaSz2ATxI_Sxn0K",
      accounts: [process.env.MUMBAI_PRIVATEKEY]
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/d76f3ff2954844359b16db013a099e45",
      accounts: [process.env.MUMBAI_PRIVATEKEY]
    }
  }
};
