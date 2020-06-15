import chai from 'chai';
import { debugInfo } from './utils';
import { Constant } from '../../src/expr';

describe('Expression/Constant', () => {
  const a = new Constant(debugInfo, '10');
  it('build should be 10', () => {
    chai.expect(a.build()).to.eq(10);
  });
  it('hasIds should be false', () => {
    chai.expect(a.hasIds()).to.be.false;
  });
  it('should throw ExpressionError', () => {
    chai.expect(() => new Constant(debugInfo, 'hi, there').build()).to.throw(Error);
  });
});
