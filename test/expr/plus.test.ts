import chai from 'chai';
import { Plus } from '../../src/expr';
import { debugInfo, three, one, id } from './utils';

describe('Expression/Plus', () => {
  it('build should be 4', () => {
    chai.expect(new Plus(debugInfo, three, one).build(0, [])).to.eq(4);
  });
  it('hasIds should be true', () => {
    chai.expect(new Plus(debugInfo, id, one).hasIds()).to.be.true;
    chai.expect(new Plus(debugInfo, id, one).hasIds()).to.be.true;
  });
  it('hasIds should be false', () => {
    chai.expect(new Plus(debugInfo, three, one).hasIds()).to.be.false;
  });
});
