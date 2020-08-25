const cryptoRandomString = require('crypto-random-string');


const token = cryptoRandomString({length: 35, type:'base64'});

console.log(`your token: ${token}`);
