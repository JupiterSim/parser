import chai from 'chai';
import { Test } from './utils';
import sinon, { SinonSpy } from 'sinon';
import { RType, UType, JType, IType, BType, SType, Pseudo } from '../../src/formats';

const code = `
  lui a0, %hi(bar)
  auipc x1, %pcrel_hi(main)
  jal x1, test
  jalr x1, 0(a0)
  beq x1, x2, test
  bne x1, x2, test
  blt x1, x2, test
  bge x1, x2, test
  bltu x1, x2, test
  bgeu x1, x2, test
  lb a0, 0x4(sp)
  lh a0, 0b100(sp)
  lw a0, 4(sp)
  lbu a0, 4(sp)
  lhu a0, 'a'(sp)
  sb a0, 0(sp)
  sh a0, 4(sp)
  sw a0, 8(sp)
  addi a0, a0, %pcrel_lo(main)
  slti a0, a1, y
  sltiu a0, a1, 0
  xori a0, a1, 0
  ori a0, a0, %lo(bar)
  andi a0, a0, 9 + 1
  slli a0, a0, 2 - 1
  srli a0, a0, +(-(-1))
  srai a0, a0, 1
  add x1, x2, x3
  sub x1, x2, x3
  sll x1, x2, x3
  slt x1, x2, x3
  sltu x1, x2, x3
  xor x1, x2, x3
  srl x1, x2, x3
  sra x1, x2, x3
  or x1, x2, x3
  and x1, x2, x3
  fence
  ecall
  ebreak

  # Pseudos

  la a0, test
  lla a0, test
  lb a0, test
  lh a0, test
  lw a0, test
  sb a0, test, t1
  sh a0, test, t1
  sw a0, test, t1
  nop
  mv a0, a1
  not a0, a1
  neg a0, a1
  seqz a0, a1
  snez a0, a1
  sltz a0, a1
  sgtz a0, a1
  beqz x1, test
  bnez x1, test
  blez x1, test
  bgez x1, test
  bltz x1, test
  bgtz x1, test
  bgt x1, x2, test
  ble x1, x2, test
  bgtu x1, x2, test
  bleu x1, x2, test
  j test
  jal test
  jr x1
  jalr x1
  ret
  call test
  tail test

  li a0, 5 + 5
  li a0, -2047 - 1
  li a0, 2049
  li a0, test
`;

class RV32IEmpty extends Test {
  constructor() {
    super(code);
  }
}

class RV32I extends Test {
  private: SinonSpy;
  constructor(spy: SinonSpy) {
    super(code);
    this.spy = spy;
  }

  disable(): void {
    this.options.pseudos = false;
  }

  lui = (ctx: UType): void => {
    this.testUJ('lui', 10, 0xdeadb, ctx);
  };

  auipc = (ctx: UType): void => {
    this.testUJ('auipc', 1, 0x10, ctx);
  };

  jal = (ctx: JType): void => {
    this.testUJ('jal', 1, 0xbacacafe, ctx);
  };

  jalr = (ctx: IType): void => {
    this.testI('jalr', 1, 10, 0, ctx);
  };

  beq = (ctx: BType): void => {
    this.testSB('beq', 1, 2, 0xbacacafe, ctx);
  };

  bne = (ctx: BType): void => {
    this.testSB('bne', 1, 2, 0xbacacafe, ctx);
  };

  blt = (ctx: BType): void => {
    this.testSB('blt', 1, 2, 0xbacacafe, ctx);
  };

  bge = (ctx: BType): void => {
    this.testSB('bge', 1, 2, 0xbacacafe, ctx);
  };

  bltu = (ctx: BType): void => {
    this.testSB('bltu', 1, 2, 0xbacacafe, ctx);
  };

  bgeu = (ctx: BType): void => {
    this.testSB('bgeu', 1, 2, 0xbacacafe, ctx);
  };

  lb = (ctx: IType): void => {
    this.testI('lb', 10, 2, 4, ctx);
  };

  lh = (ctx: IType): void => {
    this.testI('lh', 10, 2, 4, ctx);
  };

  lw = (ctx: IType): void => {
    this.testI('lw', 10, 2, 4, ctx);
  };

  lbu = (ctx: IType): void => {
    this.testI('lbu', 10, 2, 4, ctx);
  };

  lhu = (ctx: IType): void => {
    this.testI('lhu', 10, 2, 97, ctx);
  };

  sb = (ctx: SType): void => {
    this.testSB('sb', 2, 10, 0, ctx);
  };

  sh = (ctx: SType): void => {
    this.testSB('sh', 2, 10, 4, ctx);
  };

  sw = (ctx: SType): void => {
    this.testSB('sw', 2, 10, 8, ctx);
  };

  addi = (ctx: IType): void => {
    this.testI('addi', 10, 10, 4, ctx);
  };

  slti = (ctx: IType): void => {
    this.testI('slti', 10, 11, 20, ctx);
  };

  sltiu = (ctx: IType): void => {
    this.testI('sltiu', 10, 11, 0, ctx);
  };

  xori = (ctx: IType): void => {
    this.testI('xori', 10, 11, 0, ctx);
  };

  ori = (ctx: IType): void => {
    this.testI('ori', 10, 10, 0xeef, ctx);
  };

  andi = (ctx: IType): void => {
    this.testI('andi', 10, 10, 10, ctx);
  };

  slli = (ctx: IType): void => {
    this.testI('slli', 10, 10, 1, ctx);
  };

  srli = (ctx: IType): void => {
    this.testI('srli', 10, 10, 1, ctx);
  };

  srai = (ctx: IType): void => {
    this.testI('srai', 10, 10, 1, ctx);
  };

  add = (ctx: RType): void => {
    this.testR('add', 1, 2, 3, ctx);
  };

  sub = (ctx: RType): void => {
    this.testR('sub', 1, 2, 3, ctx);
  };

  sll = (ctx: RType): void => {
    this.testR('sll', 1, 2, 3, ctx);
  };

  slt = (ctx: RType): void => {
    this.testR('slt', 1, 2, 3, ctx);
  };

  sltu = (ctx: RType): void => {
    this.testR('sltu', 1, 2, 3, ctx);
  };

  xor = (ctx: RType): void => {
    this.testR('xor', 1, 2, 3, ctx);
  };

  srl = (ctx: RType): void => {
    this.testR('srl', 1, 2, 3, ctx);
  };

  sra = (ctx: RType): void => {
    this.testR('sra', 1, 2, 3, ctx);
  };

  or = (ctx: RType): void => {
    this.testR('or', 1, 2, 3, ctx);
  };

  and = (ctx: RType): void => {
    this.testR('and', 1, 2, 3, ctx);
  };

  fence = (ctx: IType): void => {
    this.testI('fence', 0, 0, 0, ctx);
  };

  ecall = (ctx: IType): void => {
    this.testI('ecall', 0, 0, 0, ctx);
  };

  ebreak = (ctx: IType): void => {
    this.testI('ebreak', 0, 0, 1, ctx);
  };

  // PSEUDOS
  la = (ctx: Pseudo): void => {
    this.testGlobalLoad('la', 'addi', 10, 10, 765101, -1278, ctx);
  };

  lla = (ctx: Pseudo): void => {
    this.testGlobalLoad('lla', 'addi', 10, 10, 765101, -1278, ctx);
  };

  lbg = (ctx: Pseudo): void => {
    this.testGlobalLoad('lb', 'lb', 10, 10, 765101, -1278, ctx);
  };

  lhg = (ctx: Pseudo): void => {
    this.testGlobalLoad('lh', 'lh', 10, 10, 765101, -1278, ctx);
  };

  lwg = (ctx: Pseudo): void => {
    this.testGlobalLoad('lw', 'lw', 10, 10, 765101, -1278, ctx);
  };

  sbg = (ctx: Pseudo): void => {
    this.testGlobalStore('sb', 10, 6, 765101, -1278, ctx);
  };

  shg = (ctx: Pseudo): void => {
    this.testGlobalStore('sh', 10, 6, 765101, -1278, ctx);
  };

  swg = (ctx: Pseudo): void => {
    this.testGlobalStore('sw', 10, 6, 765101, -1278, ctx);
  };

  nop = (ctx: Pseudo): void => {
    this.testIPseudo('nop', 'addi', 0, 0, 0, ctx);
  };

  mv = (ctx: Pseudo): void => {
    this.testIPseudo('mv', 'addi', 10, 11, 0, ctx);
  };

  not = (ctx: Pseudo): void => {
    this.testIPseudo('not', 'xori', 10, 11, -1, ctx);
  };

  neg = (ctx: Pseudo): void => {
    this.testRPseudo('neg', 'sub', 10, 0, 11, ctx);
  };

  seqz = (ctx: Pseudo): void => {
    this.testIPseudo('seqz', 'sltiu', 10, 11, 1, ctx);
  };

  snez = (ctx: Pseudo): void => {
    this.testRPseudo('snez', 'sltu', 10, 0, 11, ctx);
  };

  sltz = (ctx: Pseudo): void => {
    this.testRPseudo('sltz', 'slt', 10, 11, 0, ctx);
  };

  sgtz = (ctx: Pseudo): void => {
    this.testRPseudo('sgtz', 'slt', 10, 0, 11, ctx);
  };

  beqz = (ctx: Pseudo): void => {
    this.testSBPseudo('beqz', 'beq', 1, 0, 0xbacacafe, ctx);
  };

  bnez = (ctx: Pseudo): void => {
    this.testSBPseudo('bnez', 'bne', 1, 0, 0xbacacafe, ctx);
  };

  blez = (ctx: Pseudo): void => {
    this.testSBPseudo('blez', 'bge', 0, 1, 0xbacacafe, ctx);
  };

  bgez = (ctx: Pseudo): void => {
    this.testSBPseudo('bgez', 'bge', 1, 0, 0xbacacafe, ctx);
  };

  bltz = (ctx: Pseudo): void => {
    this.testSBPseudo('bltz', 'blt', 1, 0, 0xbacacafe, ctx);
  };

  bgtz = (ctx: Pseudo): void => {
    this.testSBPseudo('bgtz', 'blt', 0, 1, 0xbacacafe, ctx);
  };

  bgt = (ctx: Pseudo): void => {
    this.testSBPseudo('bgt', 'blt', 2, 1, 0xbacacafe, ctx);
  };

  ble = (ctx: Pseudo): void => {
    this.testSBPseudo('ble', 'bge', 2, 1, 0xbacacafe, ctx);
  };

  bgtu = (ctx: Pseudo): void => {
    this.testSBPseudo('bgtu', 'bltu', 2, 1, 0xbacacafe, ctx);
  };

  bleu = (ctx: Pseudo): void => {
    this.testSBPseudo('bleu', 'bgeu', 2, 1, 0xbacacafe, ctx);
  };

  j = (ctx: Pseudo): void => {
    this.testUJPseudo('j', 'jal', 0, 0xbacacafe, ctx);
  };

  jalp = (ctx: Pseudo): void => {
    this.testUJPseudo('jal', 'jal', 1, 0xbacacafe, ctx);
  };

  jr = (ctx: Pseudo): void => {
    this.testIPseudo('jr', 'jalr', 0, 1, 0, ctx);
  };

  jalrp = (ctx: Pseudo): void => {
    this.testIPseudo('jalr', 'jalr', 1, 1, 0, ctx);
  };

  ret = (ctx: Pseudo): void => {
    this.testIPseudo('ret', 'jalr', 0, 1, 0, ctx);
  };

  call = (ctx: Pseudo): void => {
    this.testGlobalLoad('call', 'jalr', 1, 1, 765101, -1278, ctx);
  };

  tail = (ctx: Pseudo): void => {
    this.testGlobalLoad('tail', 'jalr', 0, 6, 765101, -1278, ctx);
  };

  li = (info: Pseudo): void => {
    this.spy(info);
  };
}

describe('RV32I', () => {
  const spy = sinon.spy();
  const rv32i = new RV32I(spy);
  rv32i.parse();
  rv32i.disable();
  rv32i.parse();
  const rv32iEmpty = new RV32IEmpty();
  rv32iEmpty.parse();
  const li1 = spy.getCall(0).args[0];
  const li2 = spy.getCall(1).args[0];
  const li3 = spy.getCall(2).args[0];
  const li4 = spy.getCall(3).args[0];
  it('mnemonic should be li', () => {
    chai.expect(li1.mnemonic).to.eq('li');
    chai.expect(li2.mnemonic).to.eq('li');
    chai.expect(li3.mnemonic).to.eq('li');
    chai.expect(li4.mnemonic).to.eq('li');
  });
  it('li a0, 5 + 5 should be converted to addi a0, x0, 5 + 5', () => {
    chai.expect(li1.tal.length).to.eq(1);
    const addi = li1.tal[0];
    chai.expect(addi.mnemonic).to.eq('addi');
    chai.expect(addi.rd).to.eq(10);
    chai.expect(addi.rs1).to.eq(0);
    chai.expect(addi.expr.build(0, [])).to.eq(10);
  });
  it('li a0, -2047 - 1 should be converted to addi a0, x0, -2047 - 1', () => {
    chai.expect(li2.tal.length).to.eq(1);
    const addi = li2.tal[0];
    chai.expect(addi.mnemonic).to.eq('addi');
    chai.expect(addi.rd).to.eq(10);
    chai.expect(addi.rs1).to.eq(0);
    chai.expect(addi.expr.build(0, [])).to.eq(-2048);
  });
  it('li a0, 2049 should be converted to lui a0, 1; addi a0, a0, -2047', () => {
    chai.expect(li3.tal.length).to.eq(2);
    const lui = li3.tal[0];
    const addi = li3.tal[1];
    chai.expect(lui.mnemonic).to.eq('lui');
    chai.expect(lui.rd).to.eq(10);
    chai.expect(lui.expr.build(0, [])).to.eq(1);
    chai.expect(addi.mnemonic).to.eq('addi');
    chai.expect(addi.rd).to.eq(10);
    chai.expect(addi.rs1).to.eq(10);
    chai.expect(addi.expr.build(0, [])).to.eq(-2047);
    chai.expect(addi.expr.build(0, []) + (lui.expr.build(0, []) << 12)).to.eq(2049);
  });
  it('li a0, test should be converted to lui a0, 765101; addi a0, a0, -1282', () => {
    chai.expect(li4.tal.length).to.eq(2);
    const lui = li4.tal[0];
    const addi = li4.tal[1];
    chai.expect(lui.mnemonic).to.eq('lui');
    chai.expect(lui.rd).to.eq(10);
    chai.expect(lui.expr.build(0, [])).to.eq(765101);
    chai.expect(addi.mnemonic).to.eq('addi');
    chai.expect(addi.rd).to.eq(10);
    chai.expect(addi.rs1).to.eq(10);
    chai.expect(addi.expr.build(0, [])).to.eq(-1282);
    chai.expect(addi.expr.build(0, []) + (lui.expr.build(0, []) << 12)).to.eq(-1161114882);
  });
});
