import * as CryptoJS from 'crypto-js';

class Block {
  static calculateHash = (index: number, previousHash: string, timestamp: number, data: string): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString(); // //

  static validateStructure = (block: Block): boolean =>
    typeof block.index === 'number' &&
    typeof block.hash === 'string' &&
    typeof block.previousHash === 'string' &&
    typeof block.data === 'string' &&
    typeof block.timestamp === 'number';

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

//최초 블럭
const genesisBlock: Block = new Block(0, new Date().getTime().toString(), '', 'first block', new Date().getTime());

const blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateHash(newIndex, previousBlock.hash, newTimeStamp, data);

  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
  addBlock(newBlock);
  return newBlock;
};

const getHashForBlock = (block: Block): string =>
  Block.calculateHash(block.index, block.previousHash, block.timestamp, block.data);

const isValidationOfBlock = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    console.log('111');
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    console.log('222');
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    console.log(previousBlock.hash);
    console.log(candidateBlock.previousHash);
    console.log('333');
    return false;
  } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
    console.log('444');
    return false;
  } else return true;
};

const addBlock = (candidateBlock: Block): void => {
  if (isValidationOfBlock(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

const secondBlock = createNewBlock('second block');
addBlock(secondBlock);
const thirdBlock = createNewBlock('thrid block');
addBlock(thirdBlock);
const forthBlock = createNewBlock('forth block');
addBlock(forthBlock);

console.log(blockchain);

export {};
