import chai from 'chai';
import { Lo } from '../../src/expr';
import { debugInfo, one, three, id } from './utils';

describe('Expression/Lo', () => {
  it('build should be 3', () => {
    chai.expect(new Lo(debugInfo, three).build(0, [])).to.eq(3);
  });
  it('hasIds should be true', () => {
    chai.expect(new Lo(debugInfo, id).hasIds()).to.be.true;
  });
  it('hasIds should be false', () => {
    chai.expect(new Lo(debugInfo, one).hasIds()).to.be.false;
  });
});
