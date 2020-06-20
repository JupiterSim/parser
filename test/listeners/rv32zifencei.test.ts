import { Test } from './utils';
import { IType } from '../../src';

class RV32Zifencei extends Test {
  constructor() {
    super(`
      fence.i
    `);
  }

  disable(): void {
    this.options.extensions.zifencei = false;
  }

  fencei = (ctx: IType): void => {
    this.testI('fence.i', 0, 0, 0, ctx);
  };
}

describe('RV32Zifencei', () => {
  const rv32zifencei = new RV32Zifencei();
  rv32zifencei.parse();
  rv32zifencei.disable();
  rv32zifencei.parse();
});
