import { Test } from './utils';
import { RType } from '../../src';

class RV32A extends Test {
  constructor() {
    super(`
      lr.w x1, ( x2 )
      sc.w x1, x2, ( x3 )
      amoswap.w.aqrl x1, x2, ( x3 )
      amoadd.w x1, x2, ( x3 )
      amoxor.w.aq x1, x2, ( x3 )
      amoand.w.rl x1, x2, ( x3 )
      amoor.w x1, x2, ( x3 )
      amomin.w x1, x2, ( x3 )
      amomax.w x1, x2, ( x3 )
      amominu.w x1, x2, ( x3 )
      amomaxu.w x1, x2, ( x3 )
    `);
  }

  disable(): void {
    this.options.extensions.a = false;
  }

  lrw = (ctx: RType): void => {
    this.testR('lr.w', 1, 2, 0, ctx);
  };

  scw = (ctx: RType): void => {
    this.testR('sc.w', 1, 2, 3, ctx);
  };

  amoswapw = (ctx: RType): void => {
    this.testR('amoswap.w.aqrl', 1, 2, 3, ctx);
  };

  amoaddw = (ctx: RType): void => {
    this.testR('amoadd.w', 1, 2, 3, ctx);
  };

  amoxorw = (ctx: RType): void => {
    this.testR('amoxor.w.aq', 1, 2, 3, ctx);
  };

  amoandw = (ctx: RType): void => {
    this.testR('amoand.w.rl', 1, 2, 3, ctx);
  };

  amoorw = (ctx: RType): void => {
    this.testR('amoor.w', 1, 2, 3, ctx);
  };

  amominw = (ctx: RType): void => {
    this.testR('amomin.w', 1, 2, 3, ctx);
  };

  amomaxw = (ctx: RType): void => {
    this.testR('amomax.w', 1, 2, 3, ctx);
  };

  amominuw = (ctx: RType): void => {
    this.testR('amominu.w', 1, 2, 3, ctx);
  };

  amomaxuw = (ctx: RType): void => {
    this.testR('amomaxu.w', 1, 2, 3, ctx);
  };
}

describe('RV32A', () => {
  const rv32a = new RV32A();
  rv32a.parse();
  rv32a.disable();
  rv32a.parse();
});
