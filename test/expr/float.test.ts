import chai from 'chai';
import { debugInfo } from './utils';
import { Float } from '../../src/expr';

describe('Expression/Float', () => {
  it('build should be 10.0', () => {
    chai.expect(new Float(debugInfo, '10.0').build()).to.be.closeTo(10.0, 1e-30);
  });
  it('hasIds should be false', () => {
    chai.expect(new Float(debugInfo, '10.0').hasIds()).to.be.false;
  });
  it('should throw ExpressionError', () => {
    chai.expect(() => new Float(debugInfo, ':)').build()).to.throw(Error);
  });
});
