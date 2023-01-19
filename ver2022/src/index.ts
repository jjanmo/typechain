import crypto from 'crypto';
interface BlockBase {
  prevHash: string;
  height: number;
  data: string;
  hash: string;
}
class Block implements BlockBase {
  public hash: string;

  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;

    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    return this.blocks.length === 0
      ? ''
      : this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const prevHash = this.getPrevHash();
    const newBlock = new Block(prevHash, this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  public getBlockchain() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock('jjanmo');
blockchain.addBlock('dev');
blockchain.addBlock('human');
blockchain.addBlock('good to see you');

console.log(blockchain.getBlockchain());
