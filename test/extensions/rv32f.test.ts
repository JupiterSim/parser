import { Test } from './utils';
import { RType, SType, IType, R4Type, Pseudo } from '../../src';

class RV32F extends Test {
  constructor() {
    super(`
      flw f0, 0(sp)
      fsw f0, 0(sp)
      fmadd.s f0, f1, f2, f3
      fmsub.s f0, f1, f2, f3
      fnmsub.s f0, f1, f2, f3
      fnmadd.s f0, f1, f2, f3
      fadd.s f1, f2, f3
      fsub.s f1, f2, f3
      fmul.s f1, f2, f3
      fdiv.s f1, f2, f3
      fsqrt.s f1, f2
      fsgnj.s f1, f2, f3
      fsgnjn.s f1, f2, f3
      fsgnjx.s f1, f2, f3
      fmin.s f1, f2, f3
      fmax.s f1, f2, f3
      fcvt.w.s x1, f2
      fcvt.wu.s x1, f2
      fmv.x.w x1, f2
      fmv.x.s x1, f2
      feq.s x1, f2, f3
      flt.s x1, f2, f3
      fle.s x1, f2, f3
      fclass.s x1, f2
      fcvt.s.w f1, x2
      fcvt.s.wu f1, x2
      fmv.w.x f1, x2
      fmv.s.x f1, x2
      flw f0, test, x6
      fsw f0, test, x6
      fmv.s f0, f1
      fabs.s f0, f1
      fneg.s f0, f1
    `);
  }

  disable(): void {
    this.options.extensions.f = false;
  }

  disablePseudos(): void {
    this.options.extensions.f = true;
    this.options.pseudos = false;
  }

  flw = (ctx: IType): void => {
    this.testI('flw', 0, 2, 0, ctx);
  };

  fsw = (ctx: SType): void => {
    this.testSB('fsw', 2, 0, 0, ctx);
  };

  fmadds = (ctx: R4Type): void => {
    this.testR4('fmadd.s', 0, 1, 2, 3, ctx);
  };

  fmsubs = (ctx: R4Type): void => {
    this.testR4('fmsub.s', 0, 1, 2, 3, ctx);
  };

  fnmsubs = (ctx: R4Type): void => {
    this.testR4('fnmsub.s', 0, 1, 2, 3, ctx);
  };

  fnmadds = (ctx: R4Type): void => {
    this.testR4('fnmadd.s', 0, 1, 2, 3, ctx);
  };

  fadds = (ctx: RType): void => {
    this.testR('fadd.s', 1, 2, 3, ctx);
  };

  fsubs = (ctx: RType): void => {
    this.testR('fsub.s', 1, 2, 3, ctx);
  };

  fmuls = (ctx: RType): void => {
    this.testR('fmul.s', 1, 2, 3, ctx);
  };

  fdivs = (ctx: RType): void => {
    this.testR('fdiv.s', 1, 2, 3, ctx);
  };

  fsqrts = (ctx: RType): void => {
    this.testR('fsqrt.s', 1, 2, 0, ctx);
  };

  fsgnjs = (ctx: RType): void => {
    this.testR('fsgnj.s', 1, 2, 3, ctx);
  };

  fsgnjns = (ctx: RType): void => {
    this.testR('fsgnjn.s', 1, 2, 3, ctx);
  };

  fsgnjxs = (ctx: RType): void => {
    this.testR('fsgnjx.s', 1, 2, 3, ctx);
  };

  fmins = (ctx: RType): void => {
    this.testR('fmin.s', 1, 2, 3, ctx);
  };

  fmaxs = (ctx: RType): void => {
    this.testR('fmax.s', 1, 2, 3, ctx);
  };

  fcvtws = (ctx: RType): void => {
    this.testR('fcvt.w.s', 1, 2, 0, ctx);
  };

  fcvtwus = (ctx: RType): void => {
    this.testR('fcvt.wu.s', 1, 2, 0, ctx);
  };

  fmvxw = (ctx: RType): void => {
    this.testR('fmv.x.w', 1, 2, 0, ctx);
  };

  fmvxs = (ctx: RType): void => {
    this.testR('fmv.x.s', 1, 2, 0, ctx);
  };

  feqs = (ctx: RType): void => {
    this.testR('feq.s', 1, 2, 3, ctx);
  };

  flts = (ctx: RType): void => {
    this.testR('flt.s', 1, 2, 3, ctx);
  };

  fles = (ctx: RType): void => {
    this.testR('fle.s', 1, 2, 3, ctx);
  };

  fclasss = (ctx: RType): void => {
    this.testR('fclass.s', 1, 2, 0, ctx);
  };

  fcvtsw = (ctx: RType): void => {
    this.testR('fcvt.s.w', 1, 2, 0, ctx);
  };

  fcvtswu = (ctx: RType): void => {
    this.testR('fcvt.s.wu', 1, 2, 0, ctx);
  };

  fmvwx = (ctx: RType): void => {
    this.testR('fmv.w.x', 1, 2, 0, ctx);
  };

  fmvsx = (ctx: RType): void => {
    this.testR('fmv.s.x', 1, 2, 0, ctx);
  };

  flwg = (ctx: Pseudo): void => {
    this.testGlobalLoad('flw', 'flw', 0, 6, 765101, -1278, ctx);
  };

  fswg = (ctx: Pseudo): void => {
    this.testGlobalStore('fsw', 0, 6, 765101, -1278, ctx);
  };

  fmvs = (ctx: Pseudo): void => {
    this.testRPseudo('fmv.s', 'fsgnj.s', 0, 1, 1, ctx);
  };

  fabss = (ctx: Pseudo): void => {
    this.testRPseudo('fabs.s', 'fsgnjx.s', 0, 1, 1, ctx);
  };

  fnegs = (ctx: Pseudo): void => {
    this.testRPseudo('fneg.s', 'fsgnjn.s', 0, 1, 1, ctx);
  };
}

describe('RV32F', () => {
  const rv32f = new RV32F();
  rv32f.parse();
  rv32f.disable();
  rv32f.parse();
  rv32f.disablePseudos();
  rv32f.parse();
});
