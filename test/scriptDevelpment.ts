import { expect } from "chai";
import { ethers } from "hardhat";

// setup 5 addr

// import DEX
// import token
// import backing token (ETH)

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

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
