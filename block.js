const SHA256 = require('crypto-js/sha256');

class Block {
	constructor(data, previousHash = '', timestamp = new Date().toJSON()) {
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
	}

	calculateHash() {
		return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data));
	}
}

module.exports = Block;
