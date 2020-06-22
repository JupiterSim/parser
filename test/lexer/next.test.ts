import chai from 'chai';
import { Lexer, IDS } from '../../src/lexer';

describe('Lexer nextToken', () => {
  it('should produce correct tokens', () => {
    const lexer = new Lexer(`# this is a random comment
    add`);
    let token = lexer.next();
    chai.expect(token.id).to.eq(IDS.EOL);
    token = lexer.next();
    chai.expect(token.id).to.eq(IDS.ADD);
  });
});
