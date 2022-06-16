import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { USDC as USDCType,
        WETH as WETHType,
        TestToken as TestTokenType,
        DEXFactory as DEXFactoryType,
        DEXRouter as DEXRouterType,
        DEXPair as DEXPairType
      } from "../typechain";

let USDC;
let usdc: USDCType;
let WETH;
let weth: WETHType;
let TestToken;
let testToken: TestTokenType;
let DEXFactory;
let dexFactory: DEXFactoryType;
let DEXRouter;
let dexRouter: DEXRouterType;
let DEXPair;
let dexPair: DEXPairType;

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

describe("FlowTestingScripts", function () {

  // Inital Setup of Accounts
  [owner, addr1, addr2, addr3, addr4, addr5, addr6, addr7, addr8, addr9, addr10] = await ethers.getSigners();

  USDC = await ethers.getContractFactory("USDC");
  usdc = await USDC.deploy();
  await usdc.deployed();

  WETH = await ethers.getContractFactory("WETH");
  weth = await WETH.deploy();
  await weth.deployed();

  TestToken = await ethers.getContractFactory("TestToken");
  testToken = await TestToken.deploy();
  await testToken.deployed();

  DEXFactory = await ethers.getContractFactory("DEXFactory");
  dexFactory = await DEXFactory.deploy(owner);
  await dexFactory.deployed();

  // let factoryAddr = TD: GET DEPLOYED FACTORY ADDRESS
  // let WETHAddr = TD: GET DEPLOYED WETH ADDRESS

  DEXRouter = await ethers.getContractFactory("DEXRouter");
  dexRouter = await DEXRouter.deploy(factoryAddr, WETHAddr);
  await dexRouter.deployed();

  let tokenSupply = testToken.totalSupply;
  // let initialTransferAmount = tokenSupply / 10;
  // let initialLiquidityAmount = tokenSupply / 2;

  //TD: Mint 500,000 USDC to owner
  // await usdc.connect(owner).?

  //TD: USDC, usdc or new USDCAddr?
  // Adds 500,000 USDC and 500,000 TEST
  await dexRouter.connect(owner).addLiquidity([
    usdc,
    testToken,
    500000,
    500000,
    0,
    0,
    owner,
    //deadline
    ]);  

    // let pair = TD: GET DEPLOYED PAIR ADDR. Set to already DEXPair/dexPair?

  // await testToken.connect(owner).transfer([addr1, initialTransferAmount]); // TD: transfer 5% of supply instead of hard number

});





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

await pair.connect(addr1).swap([
  //amount0Out,
  //amount1Out,
  //to
  //data
])

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

// batch in which all 10 trades are purchases
describe("BatchB10", function () {

});



////////////////// SCANNER //////////////////

// console(log)
// script to display all data:

describe("Scanner", function () {

});




/////////////////////////////////////////////

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