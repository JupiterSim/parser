import fs from 'fs';
import path from 'path';
import chai from 'chai';
import { Lexer, IDS } from '../../src/lexer';

describe('Lexer Numbers', () => {
  const data = fs.readFileSync(path.resolve(__dirname, 'data', 'numbers.tokens'), { encoding: 'utf-8' });
  const lexer = new Lexer(data);
  const tokens = lexer.tokens();
  it('should generate 15 tokens', () => {
    chai.expect(tokens.length).to.eq(15);
  });
  const expect = [
    IDS.FLOAT,
    IDS.FLOAT,
    IDS.FLOAT,
    IDS.FLOAT,
    IDS.FLOAT,
    IDS.FLOAT,
    IDS.FLOAT,
    IDS.INT,
    IDS.INT,
    IDS.INT,
    IDS.INT,
    IDS.INT,
    IDS.INT,
    IDS.EOL,
    IDS.EOF
  ];
  tokens.forEach((e, i) => {
    it(`id should be ${expect[i]}`, () => {
      chai.expect(e.id).to.eq(expect[i]);
    });
  });
});
