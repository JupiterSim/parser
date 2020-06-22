import fs from 'fs';
import path from 'path';
import chai from 'chai';
import { Lexer, IDS } from '../../src/lexer';

describe('Lexer Relocations', () => {
  const data = fs.readFileSync(path.resolve(__dirname, 'data', 'relocations.tokens'), { encoding: 'utf-8' });
  const lexer = new Lexer(data);
  const tokens = lexer.tokens();
  it('should generate 6 tokens', () => {
    chai.expect(tokens.length).to.eq(6);
  });
  const expect = [IDS.R_HI, IDS.R_LO, IDS.R_PCREL_HI, IDS.R_PCREL_LO, IDS.EOL, IDS.EOF];
  it('should match all expected tokens', () => {
    tokens.forEach((e, i) => {
      chai.expect(e.id).to.eq(expect[i]);
    });
  });
});
