import fs from 'fs';
import path from 'path';
import chai from 'chai';
import { Lexer, IDS } from '../../src/lexer';

describe('Lexer F registers', () => {
  const data = fs.readFileSync(path.resolve(__dirname, 'data', 'freg.tokens'), { encoding: 'utf-8' });
  const lexer = new Lexer(data);
  const tokens = lexer.tokens();
  it('should generate 66 tokens', () => {
    chai.expect(tokens.length).to.eq(66);
  });
  const expect = [];
  for (let i = 0; i < 64; i++) expect.push(IDS.FREG);
  expect.push(IDS.EOL);
  expect.push(IDS.EOF);
  it('should match all expected tokens', () => {
    tokens.forEach((e, i) => {
      chai.expect(e.id).to.eq(expect[i]);
    });
  });
});
