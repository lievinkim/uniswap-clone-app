require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkedby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/89yA5xkN7ffboYfckB32fbVyolF-42sh",
      accounts: [
        "b7b673026c4eaca6524c43be16548ead1d60c25e5ae71d7dc86bfdf912b5f302",
      ],
    },
  },
};
