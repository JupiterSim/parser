import { Test } from './utils';
import { IType, Pseudo } from '../../src';

const code: string = `
csrrw x1, 0x1, x2
csrrs x1, 0x1, x2
csrrc x1, 0x1, x2
csrrwi x1, 0x1, 0x2
csrrsi x1, 0x1, 0x2
csrrci x1, 0x1, 0x2

# pseudos
rdinstret x1
rdcycle x1
rdtime x1
rdinstreth x1
rdcycleh x1
rdtimeh x1
csrr x1, 0x2
csrw 0x1, x2
csrs 0x1, x2
csrc 0x1, x2
csrwi 0x1, 0x2
csrsi 0x1, 0x2
csrci 0x1, 0x2
frcsr x1
fscsr x1, x2
frrm x1
fsrm x1, x2
frflags x1
fsflags x1, x2
fscsr x10
fsrm x10
fsflags x10
`;

class RV32ZicsrEmpty extends Test {
  constructor() {
    super(code);
  }
}

class RV32Zicsr extends Test {
  constructor() {
    super(code);
  }

  disable(): void {
    this.options.extensions.zicsr = false;
  }

  disablePseudos(): void {
    this.options.extensions.zicsr = true;
    this.options.pseudos = false;
  }

  csrrw = (ctx: IType): void => {
    this.testI('csrrw', 1, 2, 1, ctx);
  };

  csrrs = (ctx: IType): void => {
    this.testI('csrrs', 1, 2, 1, ctx);
  };

  csrrc = (ctx: IType): void => {
    this.testI('csrrc', 1, 2, 1, ctx);
  };

  csrrwi = (ctx: IType): void => {
    this.testI('csrrwi', 1, 2, 1, ctx);
  };

  csrrsi = (ctx: IType): void => {
    this.testI('csrrsi', 1, 2, 1, ctx);
  };

  csrrci = (ctx: IType): void => {
    this.testI('csrrci', 1, 2, 1, ctx);
  };

  rdinstret = (ctx: Pseudo): void => {
    this.testIPseudo('rdinstret', 'csrrs', 1, 0, 0xc02, ctx);
  };

  rdinstreth = (ctx: Pseudo): void => {
    this.testIPseudo('rdinstreth', 'csrrs', 1, 0, 0xc82, ctx);
  };

  rdcycle = (ctx: Pseudo): void => {
    this.testIPseudo('rdcycle', 'csrrs', 1, 0, 0xc00, ctx);
  };

  rdcycleh = (ctx: Pseudo): void => {
    this.testIPseudo('rdcycleh', 'csrrs', 1, 0, 0xc80, ctx);
  };

  rdtime = (ctx: Pseudo): void => {
    this.testIPseudo('rdtime', 'csrrs', 1, 0, 0xc01, ctx);
  };

  rdtimeh = (ctx: Pseudo): void => {
    this.testIPseudo('rdtimeh', 'csrrs', 1, 0, 0xc81, ctx);
  };

  csrr = (ctx: Pseudo): void => {
    this.testIPseudo('csrr', 'csrrs', 1, 0, 0x2, ctx);
  };

  csrw = (ctx: Pseudo): void => {
    this.testIPseudo('csrw', 'csrrw', 0, 2, 1, ctx);
  };

  csrs = (ctx: Pseudo): void => {
    this.testIPseudo('csrs', 'csrrs', 0, 2, 1, ctx);
  };

  csrc = (ctx: Pseudo): void => {
    this.testIPseudo('csrc', 'csrrc', 0, 2, 1, ctx);
  };

  csrwi = (ctx: Pseudo): void => {
    this.testIPseudo('csrwi', 'csrrwi', 0, 2, 1, ctx);
  };

  csrsi = (ctx: Pseudo): void => {
    this.testIPseudo('csrsi', 'csrrsi', 0, 2, 1, ctx);
  };

  csrci = (ctx: Pseudo): void => {
    this.testIPseudo('csrci', 'csrrci', 0, 2, 1, ctx);
  };

  frcsr = (ctx: Pseudo): void => {
    this.testIPseudo('frcsr', 'csrrs', 1, 0, 3, ctx);
  };

  fscsr = (ctx: Pseudo): void => {
    if ((ctx.tal[0] as IType).rs1 === 10) {
      this.testIPseudo('fscsr', 'csrrw', 0, 10, 3, ctx);
    } else {
      this.testIPseudo('fscsr', 'csrrw', 1, 2, 3, ctx);
    }
  };

  frrm = (ctx: Pseudo): void => {
    this.testIPseudo('frrm', 'csrrs', 1, 0, 2, ctx);
  };

  fsrm = (ctx: Pseudo): void => {
    if ((ctx.tal[0] as IType).rs1 === 10) {
      this.testIPseudo('fsrm', 'csrrw', 0, 10, 2, ctx);
    } else {
      this.testIPseudo('fsrm', 'csrrw', 1, 2, 2, ctx);
    }
  };

  frflags = (ctx: Pseudo): void => {
    this.testIPseudo('frflags', 'csrrs', 1, 0, 1, ctx);
  };

  fsflags = (ctx: Pseudo): void => {
    if ((ctx.tal[0] as IType).rs1 === 10) {
      this.testIPseudo('fsflags', 'csrrw', 0, 10, 1, ctx);
    } else {
      this.testIPseudo('fsflags', 'csrrw', 1, 2, 1, ctx);
    }
  };
}

describe('RV32Zicsr', () => {
  const rv32zicsr = new RV32Zicsr();
  rv32zicsr.parse();
  rv32zicsr.disable();
  rv32zicsr.parse();
  rv32zicsr.disablePseudos();
  rv32zicsr.parse();
  const empty = new RV32ZicsrEmpty();
  empty.parse();
});
