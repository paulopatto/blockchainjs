const SHA256 = require('crypto-js/sha');

class Block {
	constructor(data, previousHash = '', timestamp = Date().toJSON()) {
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
	}

	calculateHash() {
		return SHA256(this.previousHash + this.timestamp + JSON.stringfy(this.data));
	}
}
