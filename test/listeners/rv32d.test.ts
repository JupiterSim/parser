import { Test } from './utils';
import { IType, SType, RType, R4Type, Pseudo } from '../../src';

class RV32D extends Test {
  constructor() {
    super(`
      fld f0, 0(sp)
      fsd f0, 0(sp)
      fmadd.d f0, f1, f2, f3
      fmsub.d f0, f1, f2, f3
      fnmsub.d f0, f1, f2, f3
      fnmadd.d f0, f1, f2, f3
      fadd.d f1, f2, f3
      fsub.d f1, f2, f3
      fmul.d f1, f2, f3
      fdiv.d f1, f2, f3
      fsqrt.d f1, f2
      fsgnj.d f1, f2, f3
      fsgnjn.d f1, f2, f3
      fsgnjx.d f1, f2, f3
      fmin.d f1, f2, f3
      fmax.d f1, f2, f3
      fcvt.s.d f1, f2
      fcvt.d.s f1, f2
      feq.d x1, f2, f3
      flt.d x1, f2, f3
      fle.d x1, f2, f3
      fclass.d x1, f2
      fcvt.w.d x1, f2
      fcvt.wu.d x1, f2
      fcvt.d.w f1, x2
      fcvt.d.wu f1, x2
      fld f0, test, x6
      fsd f0, test, x6
      fmv.d f0, f1
      fabs.d f0, f1
      fneg.d f0, f1
    `);
  }

  disable(): void {
    this.options.extensions.d = false;
  }

  disablePseudos(): void {
    this.options.extensions.d = true;
    this.options.pseudos = false;
  }

  fld = (ctx: IType): void => {
    this.testI('fld', 0, 2, 0, ctx);
  };

  fsd = (ctx: SType): void => {
    this.testSB('fsd', 2, 0, 0, ctx);
  };

  fmaddd = (ctx: R4Type): void => {
    this.testR4('fmadd.d', 0, 1, 2, 3, ctx);
  };

  fmsubd = (ctx: R4Type): void => {
    this.testR4('fmsub.d', 0, 1, 2, 3, ctx);
  };

  fnmsubd = (ctx: R4Type): void => {
    this.testR4('fnmsub.d', 0, 1, 2, 3, ctx);
  };

  fnmaddd = (ctx: R4Type): void => {
    this.testR4('fnmadd.d', 0, 1, 2, 3, ctx);
  };

  faddd = (ctx: RType): void => {
    this.testR('fadd.d', 1, 2, 3, ctx);
  };

  fsubd = (ctx: RType): void => {
    this.testR('fsub.d', 1, 2, 3, ctx);
  };

  fmuld = (ctx: RType): void => {
    this.testR('fmul.d', 1, 2, 3, ctx);
  };

  fdivd = (ctx: RType): void => {
    this.testR('fdiv.d', 1, 2, 3, ctx);
  };

  fsqrtd = (ctx: RType): void => {
    this.testR('fsqrt.d', 1, 2, 0, ctx);
  };

  fsgnjd = (ctx: RType): void => {
    this.testR('fsgnj.d', 1, 2, 3, ctx);
  };

  fsgnjnd = (ctx: RType): void => {
    this.testR('fsgnjn.d', 1, 2, 3, ctx);
  };

  fsgnjxd = (ctx: RType): void => {
    this.testR('fsgnjx.d', 1, 2, 3, ctx);
  };

  fmind = (ctx: RType): void => {
    this.testR('fmin.d', 1, 2, 3, ctx);
  };

  fmaxd = (ctx: RType): void => {
    this.testR('fmax.d', 1, 2, 3, ctx);
  };

  fcvtsd = (ctx: RType): void => {
    this.testR('fcvt.s.d', 1, 2, 0, ctx);
  };

  fcvtds = (ctx: RType): void => {
    this.testR('fcvt.d.s', 1, 2, 0, ctx);
  };

  feqd = (ctx: RType): void => {
    this.testR('feq.d', 1, 2, 3, ctx);
  };

  fltd = (ctx: RType): void => {
    this.testR('flt.d', 1, 2, 3, ctx);
  };

  fled = (ctx: RType): void => {
    this.testR('fle.d', 1, 2, 3, ctx);
  };

  fclassd = (ctx: RType): void => {
    this.testR('fclass.d', 1, 2, 0, ctx);
  };

  fcvtwd = (ctx: RType): void => {
    this.testR('fcvt.w.d', 1, 2, 0, ctx);
  };

  fcvtwud = (ctx: RType): void => {
    this.testR('fcvt.wu.d', 1, 2, 0, ctx);
  };

  fcvtdw = (ctx: RType): void => {
    this.testR('fcvt.d.w', 1, 2, 0, ctx);
  };

  fcvtdwu = (ctx: RType): void => {
    this.testR('fcvt.d.wu', 1, 2, 0, ctx);
  };

  fldg = (ctx: Pseudo): void => {
    this.testGlobalLoad('fld', 'fld', 0, 6, 765101, -1278, ctx);
  };

  fsdg = (ctx: Pseudo): void => {
    this.testGlobalStore('fsd', 0, 6, 765101, -1278, ctx);
  };

  fmvd = (ctx: Pseudo): void => {
    this.testRPseudo('fmv.d', 'fsgnj.d', 0, 1, 1, ctx);
  };

  fabsd = (ctx: Pseudo): void => {
    this.testRPseudo('fabs.d', 'fsgnjx.d', 0, 1, 1, ctx);
  };

  fnegd = (ctx: Pseudo): void => {
    this.testRPseudo('fneg.d', 'fsgnjn.d', 0, 1, 1, ctx);
  };
}

describe('RV32D', () => {
  const rv32d = new RV32D();
  rv32d.parse();
  rv32d.disable();
  rv32d.parse();
  rv32d.disablePseudos();
  rv32d.parse();
});
