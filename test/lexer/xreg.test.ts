import fs from 'fs';
import path from 'path';
import chai from 'chai';
import { Lexer, IDS } from '../../src/lexer';

describe('Lexer X registers', () => {
  const data = fs.readFileSync(path.resolve(__dirname, 'data', 'xreg.tokens'), { encoding: 'utf-8' });
  const lexer = new Lexer(data);
  const tokens = lexer.tokens();
  it('should generate 67 tokens', () => {
    chai.expect(tokens.length).to.eq(67);
  });
  const expect = [];
  for (let i = 0; i < 65; i++) expect.push(IDS.XREG);
  expect.push(IDS.EOL);
  expect.push(IDS.EOF);
  tokens.forEach((e, i) => {
    it(`id should be ${expect[i]}`, () => {
      chai.expect(e.id).to.eq(expect[i]);
    });
  });
});
