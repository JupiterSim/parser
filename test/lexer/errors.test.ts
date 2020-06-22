import chai from 'chai';
import { Lexer } from '../../src/lexer';

describe('Lexer Errors', () => {
  it('invalid language element', () => {
    const lexer = new Lexer('label: ?');
    chai.expect(() => lexer.tokens()).to.throw(Error);
  });
  it('unterminated char constant', () => {
    const lexer = new Lexer(`'
    '`);
    chai.expect(() => lexer.tokens()).to.throw(Error);
  });
  it('EOF in char constant', () => {
    const lexer = new Lexer("'");
    chai.expect(() => lexer.tokens()).to.throw(Error);
  });
  it('unterminated string constant', () => {
    const lexer = new Lexer(`"
    "`);
    chai.expect(() => lexer.tokens()).to.throw(Error);
  });
  it('EOF in string constant', () => {
    const lexer = new Lexer('"');
    chai.expect(() => lexer.tokens()).to.throw(Error);
  });
});
