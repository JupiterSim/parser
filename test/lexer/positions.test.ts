import fs from 'fs';
import path from 'path';
import chai from 'chai';
import { Lexer, IDS } from '../../src/lexer';

describe('Lexer Positions', () => {
  const data = fs.readFileSync(path.resolve(__dirname, 'data', 'cool.s'), { encoding: 'utf-8' });
  const lexer = new Lexer(data);
  const tokens = lexer.tokens();
  it('start and stop positions should be correct', () => {
    tokens.forEach((e) => {
      if (e.id === IDS.EOF) return;
      const value = data.substring(e.start, e.stop);
      chai.expect(e.value).to.eq(value);
    });
  });
});
