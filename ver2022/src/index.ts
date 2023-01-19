// import crypto from 'crypto';
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
