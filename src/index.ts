import * as CryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateHash = (index: number, previousHash: string, timestamp: number, data: string): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (block: Block): boolean =>
    typeof block.index === 'number' &&
    typeof block.hash === 'string' &&
    typeof block.previousHash === 'string' &&
    typeof block.data === 'string' &&
    typeof block.timestamp === 'number';

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genensisBlock: Block = new Block(
  0,
  new Date().getTime().toString(),
  '',
  'Hello Blockchain',
  new Date().getTime()
);

const blockchain: Block[] = [genensisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateHash(newIndex, previousBlock.hash, newTimeStamp, data);

  const newBlock: Block = new Block(newIndex, previousBlock.hash, newHash, data, newTimeStamp);

  return newBlock;
};

const getHashForBlock = (block: Block): string =>
  Block.calculateHash(block.index, block.previousHash, block.timestamp, block.data);

const isValidationOfBlock = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) return false;
  else if (previousBlock.index + 1 !== candidateBlock.index) return false;
  else if (previousBlock.hash !== candidateBlock.previousHash) return false;
};

console.log(createNewBlock('hello world'));

export {};
