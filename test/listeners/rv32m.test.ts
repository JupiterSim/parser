import { Test } from './utils';
import { RType } from '../../src/formats';

class RV32M extends Test {
  constructor() {
    super(`
      mul x1, x2, x3
      mulh x1, x2, x3
      mulhsu x1, x2, x3
      mulhu x1, x2, x3
      div x1, x2, x3
      divu x1, x2, x3
      rem x1, x2, x3
      remu x1, x2, x3
    `);
  }

  disable(): void {
    this.options.extensions.m = false;
  }

  mul = (ctx: RType): void => {
    this.testR('mul', 1, 2, 3, ctx);
  };

  mulh = (ctx: RType): void => {
    this.testR('mulh', 1, 2, 3, ctx);
  };

  mulhsu = (ctx: RType): void => {
    this.testR('mulhsu', 1, 2, 3, ctx);
  };

  mulhu = (ctx: RType): void => {
    this.testR('mulhu', 1, 2, 3, ctx);
  };

  div = (ctx: RType): void => {
    this.testR('div', 1, 2, 3, ctx);
  };

  divu = (ctx: RType): void => {
    this.testR('divu', 1, 2, 3, ctx);
  };

  rem = (ctx: RType): void => {
    this.testR('rem', 1, 2, 3, ctx);
  };

  remu = (ctx: RType): void => {
    this.testR('remu', 1, 2, 3, ctx);
  };
}

describe('RV32M', () => {
  const rv32m = new RV32M();
  rv32m.parse();
  rv32m.disable();
  rv32m.parse();
});
