// node run_contract.js

const my_account = "0xb316c8ca80e0dce73f3a81338ed97f31fe0a31eb"
const PK = "115409ee5cbf15ae3a470ac4aa954c1ad8ed94901069ee593507ec444f7fe1c9"



















const ethers = require("ethers")
const provider = new ethers.JsonRpcProvider("http://35.209.100.125:8555")
// or websocket @ 35.209.100.125:8556

const wallet = new ethers.Wallet(PK, provider) // Keep the private key secure!






















// const BlackScholesAccount = "0x5e20ee9d02234051aef23150a72a6139c0fecb59"
// S, K, r, s, T, precision, steps = 1, 1, 0, 0.1, 1, 10, 10
// const BlackScholesData = "0x95ba71af0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000A000000000000000000000000000000000000000000000000000000000000000A"





















const NeuronAccount = "0xc0b26667a429cD90808ED1C56a5F5Da199a07314"

// set_weights(0.4, 0.6) = set_weights(4, -1, 6, -1)
// const NeuronData = "0x61d311e80000000000000000000000000000000000000000000000000000000000000004ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000006ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

// run(0.1, 0.2) = run(1, -1, 2, -1)
const function_selector = "0xc5b5bb77" // run(int256[])
const precision = "000000000000000000000000000000000000000000000000000000000000000A" // 10
const steps = "000000000000000000000000000000000000000000000000000000000000000A" // 10
input_1_c = "0000000000000000000000000000000000000000000000000000000000000001" // 1
input_1_q = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" // -1
input_2_c = "0000000000000000000000000000000000000000000000000000000000000002" // 2
input_2_q = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" // -1

const NeuronData = `${function_selector}${precision}${steps}\
${input_1_c}${input_1_q}${input_2_c}${input_2_q}`





















const tx = {
  from: my_account,
  to: NeuronAccount,
  value: 0,
  data: NeuronData,
  gas: "1000000",
}

wallet.sendTransaction(tx).then(transaction => {
  console.log('Transaction hash:', transaction.hash)
  transaction.wait().then(receipt => {
    console.log('Transaction was mined in block:', receipt.blockNumber)
    getLogsFromTxHash(transaction.hash)
  })
})

async function getLogsFromTxHash(txHash) {
  // Fetch the transaction receipt
  const receipt = await provider.getTransactionReceipt(txHash)
  // console.log('receipt:', receipt)
  console.log('receipt.logs.data:', receipt.logs.map(l => l.data))
}

// eth.getStorageAt("0xc0b26667a429cD90808ED1C56a5F5Da199a07314",0)
// eth.getTransactionReceipt("0x5630a3bd7cfce09b57b849cfb75c5fef8b2a174f5aad375427362f514d022966")
