const fs = require('fs');
const Wallet = require('ethereumjs-wallet').default

// Read the keystore file
const keystore = fs.readFileSync('/Users/1m1/Downloads/chaindata/keystore/UTC--2023-10-18T21-03-34.496928000Z--a254d348b1f58fda23b71c613a291a1ceb4a9523', 'utf8');

// Decrypt the keystore file with the password
const password = '';  // Be careful! Use environment variables or other methods to keep this secure.
const wallet = Wallet.fromV3(keystore, password);

// Get the private key (this will be a Buffer)
const privateKey = wallet.getPrivateKey();

// Convert the Buffer to a hex string if needed
console.log(privateKey.toString('hex'));
