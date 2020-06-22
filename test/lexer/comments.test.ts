import fs from 'fs';
import path from 'path';
import chai from 'chai';
import { Lexer, IDS } from '../../src/lexer';

describe('Lexer Comments', () => {
  const data = fs.readFileSync(path.resolve(__dirname, 'data', 'comments.tokens'), { encoding: 'utf-8' });
  const lexer = new Lexer(data);
  const tokens = lexer.tokens();
  it('should generate 3 tokens', () => {
    chai.expect(tokens.length).to.eq(3);
  });
  const expect = [IDS.EOL, IDS.EOL, IDS.EOF];
  it('should match all expected tokens', () => {
    tokens.forEach((e, i) => {
      chai.expect(e.id).to.eq(expect[i]);
    });
  });
});
