// node run_contract.js

// const { JsonRpcProvider } = require('ethers');
const ethers = require("ethers");
const provider = new ethers.JsonRpcProvider("http://35.209.100.125:8555");
console.log("provider", provider)

const wallet = new ethers.Wallet('115409ee5cbf15ae3a470ac4aa954c1ad8ed94901069ee593507ec444f7fe1c9', provider); // Keep the private key secure!

const Neuron = "0xaacDd33e07Cfd1094621DA89A0a00665261913A9";
const BlackScholes = "0x5e20ee9d02234051aef23150a72a6139c0fecb59";
// eth.getStorageAt("0xaacDd33e07Cfd1094621DA89A0a00665261913A9",0)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",1)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",2)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",3)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",4)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",5)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",6)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",7)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",8)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",9)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",10)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",11)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",12)
// eth.getStorageAt("0xDFceCFdCA4596776029B9AcBC48Ef370B66ad043",13)

// set_weights(0.4, 0.6)
// const NeuronData = "0x61d311e80000000000000000000000000000000000000000000000000000000000000004ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000006ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
// run(0.1, 0.2)
const NeuronData = "0xc5b5bb77000000000000000000000000000000000000000000000000000000000000000A000000000000000000000000000000000000000000000000000000000000000A0000000000000000000000000000000000000000000000000000000000000001ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000002ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

// S, K, r, s, T, precision, steps = 1, 1, 0, 0.1, 1, 10, 10
const BlackScholesData = "0x95ba71af0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000A000000000000000000000000000000000000000000000000000000000000000A";

const tx = {
  from: "0xb316c8ca80e0dce73f3a81338ed97f31fe0a31eb",
  to: Neuron,
  value: 0,
  data: NeuronData,
  gas: "1000000",
};

wallet.sendTransaction(tx).then(transaction => {
  console.log('Transaction hash:', transaction.hash);
  transaction.wait().then(receipt => {
    console.log('Transaction was mined in block:', receipt.blockNumber);
  });
});