import fs from 'fs';
import path from 'path';
import chai from 'chai';
import { Lexer } from '../../src/lexer';

describe('Lexer Performance', () => {
  const data = fs.readFileSync(path.resolve(__dirname, 'data', 'cool.s'), { encoding: 'utf-8' });
  const lexer = new Lexer(data);
  const start = process.hrtime();
  lexer.tokens();
  const time = process.hrtime(start)[1] / 1000000;
  it('should be less than 100ms', () => {
    chai.expect(time).to.be.lt(100);
  });
});
