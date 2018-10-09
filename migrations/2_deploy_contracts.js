var ConvertLib = artifacts.require("./ConvertLib.sol");
var Gamble = artifacts.require("./Gamble.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Gamble);
  deployer.deploy(Gamble);
};