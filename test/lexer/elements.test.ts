import fs from 'fs';
import path from 'path';
import chai from 'chai';
import { Lexer, IDS } from '../../src/lexer';

describe('Lexer Elements', () => {
  const data = fs.readFileSync(path.resolve(__dirname, 'data', 'elements.tokens'), { encoding: 'utf-8' });
  const lexer = new Lexer(data);
  const tokens = lexer.tokens();
  it('should generate 7 tokens', () => {
    chai.expect(tokens.length).to.eq(7);
  });
  const expect = [IDS.LPAREN, IDS.RPAREN, IDS.PLUS, IDS.MINUS, IDS.COMMA, IDS.EOL, IDS.EOF];
  tokens.forEach((e, i) => {
    it(`id should be ${expect[i]}`, () => {
      chai.expect(e.id).to.eq(expect[i]);
    });
  });
});
