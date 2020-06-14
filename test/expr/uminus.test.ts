import chai from 'chai';
import { UMinus } from '../../src/expr';
import { one, three, id, debugInfo } from './utils';

describe('Expression/UMinus', () => {
  it('build should be -3', () => {
    chai.expect(new UMinus(debugInfo, three).build(0, [])).to.eq(-3);
  });
  it('hasIds should be true', () => {
    chai.expect(new UMinus(debugInfo, id).hasIds()).to.be.true;
  });
  it('hasIds should be false', () => {
    chai.expect(new UMinus(debugInfo, one).hasIds()).to.be.false;
  });
});
