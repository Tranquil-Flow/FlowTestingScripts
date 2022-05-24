# FlowTestingScripts
Hardhat script tests for testing trading tokens at large scale on a DEX.

Script tests that can create simulated trading situations for tokens on a DEX. First use case is for studying how tokenomics work

Core To-Do
- Write AutoTrading
- Write Batches
- Write Scanner
- Write Scenarios

Extra Stuff:
- Graphing to display charts for a GUI
- AutoTrading Batches to simulate all, medium, little buying etc.
- Easy to use 'Scenario Builder' with GUI
- Storage system for Scanner with looper

## AutoTrading
Buys and sells over a defined period to simulate trading pattern
- `tradingTimePeriod` total time to trade for

- `buyingTimeframe` how often to buy
- `buyingMax` the max a buy can be
- `buyingMin` the min a buy can be
- `buyingAverage` the average a buy can be
- `buyingX` the amount of variance from the `buyingAverage` the buy is

- `sellingTimeframe` how often to sell
- `sellingMax` the max a sell can be
- `sellingMin` the min a sell can be
- `sellingAverage` the average a sell can be
- `sellingX` the amount of variance from the `sellingAverage` the sell is

## Batches
Batches of 10 transactions that simulate 10 different addresses buying and selling the `token` on a `DEX` over a 1 hour timeframe.

Extra Stuff:
- Create batches of 5, 15, 20, 50
- Variable to alter how much difference there is in buy/sell sizes per batch?
- Bool Variable to alter how much difference there is in buy/sell sizes per batch? At 0 all buys/sells same amount, at 1 all amount purchased in 1 of the 10 txs.
### All Buying
### Medium Buying
### Little Buying
### Flat
### Little Selling
### Medium Selling
### All Selling

## Scanner
Collects data at the time called in simulation.

### Trading
- `totalTradeVolume` the total trade volume since start
- `dailyPriceMovement` the change in price for that day in % (+ or -)
- `averageDailyVolume` the average daily volume
- `highestDailyPrice` the highest price for that day
- `lowestDailyPrice` the lowest price for that day

- `totalBoughtTokens` the total amount of bought tokens
- `totalBoughtETH` the total amount bought in the backing token (e.g. ETH)
- `dailyBoughtTokens` the daily amount of bought tokens
- `dailyBoughtETH` the daily amount bought in the backing token (e.g. ETH)
- `totalSoldTokens` the total amount of sold tokens
- `totalSoldETH` the total amount sold for in backing tokens (e.g. ETH)
- `dailySoldTokens` the daily amount of sold tokens
- `dailySoldETH` the daily amount sold for in backing tokens (e.g. ETH)
- `totalGas` the total amount of gas in gwei used
- `dailyGas` the daily amount of gas in gwei used

### Tokenomics
- `totalBurned` the total amount of tokens burned (for tokens with Burn on transfer)
- `dailyBurned` the daily amount of tokens burned (for tokens with Burn on transfer)
- `totalLP` the total amount of LP tokens created (for tokens with Auto-Liquidity)
- `dailyLP` the daily amount of LP tokens created (for tokens with Auto-Liquidity)
- `totalReflected` the total amount of reflections (for tokens with Reflection)
- `dailyReflected` the daily amount of reflections (for tokens with Reflection)
- `totalDividends` the total amout of dividends distributed (for tokens with Dividends)
- `dailyDividends` the daily amout of dividends distributed (for tokens with Dividends)

## Scenarios
Scenarios created by custom stringing loops of batches together to simulate a situation. Can be themselves looped for custom scenarios or to design new ones at longer timeframes.
### Sideways Ranging
### Pump and Dump
### Whales Selling Tops and Buying Lows
### Whales Ranging a Token
