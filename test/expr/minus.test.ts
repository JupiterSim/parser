import chai from 'chai';
import { Minus } from '../../src/expr';
import { debugInfo, one, three, id } from './utils';

describe('Expression/Minus', () => {
  it('build should be 2', () => {
    chai.expect(new Minus(debugInfo, three, one).build(0, [])).to.eq(2);
  });
  it('hasIds should be true', () => {
    chai.expect(new Minus(debugInfo, id, one).hasIds()).to.be.true;
    chai.expect(new Minus(debugInfo, id, one).hasIds()).to.be.true;
  });
  it('hasIds should be false', () => {
    chai.expect(new Minus(debugInfo, three, one).hasIds()).to.be.false;
  });
});
