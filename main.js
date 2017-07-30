const Block = require('./block.js');
const Blockchain = require('./blockchain.js');

let bank = new Blockchain();

bank.addBlock(new Block({ amount: 4.00 }));
bank.addBlock(new Block({ amount: 8.00 }));

console.log( JSON.stringify(bank, null, 4) );
