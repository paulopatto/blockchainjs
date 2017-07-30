const Block = require('./block.js');

class Blockchain {
	constructor() {
		this.chain = [this.createGenesisBlock()];
	}

  createGenesisBlock() { 
    return new Block("Genesis Block", "0"); 
  }

  markWithTimestamp() { new Date().toJSON(); }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block) {
    block.previousHash = this.getLatestBlock().hash;
    block.hash         = block.calculateHash();

    this.chain.push(block);
  }

  isValidChain() {
    for(let index = 1; index < this.chain.length; index++) {
      const current  = this.chain[index];
      const previous = this.chain[index - 1];

      if(current.hash !== current.calculateHash()) return false;
      if(current.previousHash !== previous.hash) return false;
    }

    return true;
  }
}

module.exports = Blockchain;
