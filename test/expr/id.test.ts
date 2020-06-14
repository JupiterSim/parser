import chai from 'chai';
import { eSym, eGlob, eLoc, eLo, eHi, ePcrel, ePcrelHi, ePcrelLo, eValid, eInv, eCycle } from './utils';

describe('Expression/Id', () => {
  it('build should be 10', () => {
    chai.expect(eSym.build(0, [])).to.eq(10);
    chai.expect(eGlob.build(0, [])).to.eq(10);
    chai.expect(eLoc.build(0, [])).to.eq(10);
  });
  it('build should be 0xafe', () => {
    chai.expect(eLo.build(0, [])).to.eq(0xafe);
  });
  it('build should be 0xbacac', () => {
    chai.expect(eHi.build(0, [])).to.eq(0xbacac);
  });
  it('build should be 0xbacacafe', () => {
    chai.expect(ePcrel.build(0, [])).to.eq(0xbacacafe);
  });
  it('build should be 0xbacad', () => {
    chai.expect(ePcrelHi.build(0, [])).to.eq(0xbacad);
  });
  it('build should be -1278', () => {
    chai.expect(ePcrelLo.build(0, [])).to.eq(-1278);
  });
  it('hasIds should be true', () => {
    chai.expect(eGlob.hasIds()).to.be.true;
  });
  it('build should be 20', () => {
    chai.expect(eValid.build(0, [])).to.eq(20);
  });
  it('build should throw ExpressionError', () => {
    chai.expect(() => eInv.build(0, [])).to.throw(Error);
    chai.expect(() => eCycle.build(0, [])).to.throw(Error);
  });
});
