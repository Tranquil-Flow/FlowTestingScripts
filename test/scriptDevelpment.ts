import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { TestToken as TestTokenType,
        DEXFactory as DEXFactoryType,
        DEXRouter as DEXRouterType}
        from "../typechain";

let owner: SignerWithAddress;
let addr1: SignerWithAddress;
let addr2: SignerWithAddress;
let addr3: SignerWithAddress;
let addr4: SignerWithAddress;
let addr5: SignerWithAddress;
let addr6: SignerWithAddress;
let addr7: SignerWithAddress;
let addr8: SignerWithAddress;
let addr9: SignerWithAddress;
let addr10: SignerWithAddress;

// import DEX router
// import token
// import backing token (USDC)

// setup 10 addr
// give each addr 1% of token supply so they can all sell without running out (more elegant way?)
// add liquidity to DEX (100,000 USDC + 50% supply default)

////////////////// BATCHES //////////////////

// Batches of 10 transactions that simulate 10 different addresses buying and selling
// the `token` on a `DEX` over a 1 hour timeframe.

// Extra Stuff:
// - Create batches of 5, 15, 20, 50
// - Variable to alter how much difference there is in buy/sell sizes per batch?
// - Bool Variable to alter how much difference there is in buy/sell sizes per batch?
//    At 0 all buys/sells same amount, at 1 all amount purchased in 1 of the 10 txs.

// buy transaction code
//    buyValue
// sell transaction code
//    sellValue

// eleven types of batches 0 = all buy, 10 = all sell, 5 = half buy, half sell

// buy, buy, buy, buy, buy, buy, buy, buy, buy, buy
// buy, buy, buy, buy, buy, buy, buy, buy, buy, sell
// buy, buy, buy, buy, buy, buy, buy, buy, sell, sell
// buy, buy, buy, buy, buy, buy, buy, sell, sell, sell
// buy, buy, buy, buy, buy, buy, sell, sell, sell, sell
// buy, buy, buy, buy, buy, sell, sell, sell, sell, sell
// buy, buy, buy, buy, sell, sell, sell, sell, sell, sell
// buy, buy, buy, sell, sell, sell, sell, sell, sell, sell
// buy, buy, sell, sell, sell, sell, sell, sell, sell, sell
// buy, sell, sell, sell, sell, sell, sell, sell, sell, sell
// sell, sell, sell, sell, sell, sell, sell, sell, sell, sell

////////////////// SCANNER //////////////////

// console(log)
// script to display all data:

/////////////////////////////////////////////

describe("FlowTestingScripts", function () {

  beforeEach(async function () {

    [owner, addr1, addr2, addr3, addr4, addr5, addr6, addr7, addr8, addr9, addr10] = await ethers.getSigners();

    TestToken = await ethers.getContractFactory("TestToken");
    testToken = await TestToken.deploy();
    await testToken.deployed();

    // DEXFactory = await ethers.getContractFactory("DEXFactory");
    // dexFactory = await DEXFactory.deploy();
    // await dexFactory.deployed();

    // DEXRouter = await ethers.getContractFactory("DEXRouter");
    // dexRouter = await DEXRouter.deploy();
    // await dexRouter.deployed();

    await testToken.mint(addr1, ethers.utils.parseEther("100")); // TO-DO mint % of supply instead of hard number
  });

});



/* HELPFUL CODE

      // move time forwards
      let oneDay = 86400; // seconds
      await ethers.provider.send('evm_increaseTime', [oneDay * 98]); // Increase time 
      await ethers.provider.send('evm_mine', []) // Force mine to update block timestamp

      // call contract with specific address
      await testToken.connect(addr1).FUNCTION([var1, var2]);

      // call contract
      await testToken.balanceOf(addr1.address)

*/