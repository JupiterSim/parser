import chai from 'chai';
import { Hi } from '../../src/expr';
import { debugInfo, one, three, id } from './utils';

describe('Expression/Hi', () => {
  it('build should be 0', () => {
    chai.expect(new Hi(debugInfo, three).build(0, [])).to.eq(0);
  });
  it('hasIds should be true', () => {
    chai.expect(new Hi(debugInfo, id).hasIds()).to.be.true;
  });
  it('hasIds should be false', () => {
    chai.expect(new Hi(debugInfo, one).hasIds()).to.be.false;
  });
});
