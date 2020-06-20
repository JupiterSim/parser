import chai from 'chai';
import { Test } from './utils';
import { Label } from '../../src';

describe('Labels', () => {
  class LblTest extends Test {
    constructor() {
      super('foo: add a0, a0, a0');
    }

    label = (ctx: Label): void => {
      it('label should be foo', () => {
        chai.expect(ctx.name).to.eq('foo');
      });
    };
  }

  const empty = new Test('label: add a0, a0, a0');
  const test = new LblTest();
  test.parse();
  empty.parse();
});
