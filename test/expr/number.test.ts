import chai from 'chai';
import { debugInfo } from './utils';
import { Number } from '../../src/expr';

describe('Expression/Number', () => {
  const a = new Number(debugInfo, '10');
  it('build should be 10', () => {
    chai.expect(a.build()).to.eq(10);
  });
  it('hasIds should be false', () => {
    chai.expect(a.hasIds()).to.be.false;
  });
  it('should throw ExpressionError', () => {
    chai.expect(() => new Number(debugInfo, 'hi, there').build()).to.throw(Error);
  });
});
