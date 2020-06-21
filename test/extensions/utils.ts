import chai from 'chai';
import { RV32G } from '../../src/parser';
import { Constant } from '../../src/expr';
import { Segment } from '../../src/segment';
import { UType, JType, SType, BType, IType, RType, R4Type, Pseudo } from '../../src';

export const debugInfo = {
  filename: 'test.s',
  line: 1,
  column: 2,
  source: 'add a0, a0, 10',
  indicator: 1
};

export class Test extends RV32G {
  constructor(code: string) {
    super(
      {
        name: 'test.s',
        code
      },
      {
        globals: {
          main: {
            segment: Segment.TEXT,
            address: 0x10000,
            debugInfo
          },
          test: {
            segment: Segment.TEXT,
            address: 0xbacacafe,
            debugInfo
          }
        },
        locals: {
          'test.s': {
            bar: {
              segment: Segment.TEXT,
              address: 0xdeadbeef,
              debugInfo
            }
          }
        },
        expr: {
          'test.s': {
            x: new Constant(debugInfo, '10'),
            y: new Constant(debugInfo, '20')
          }
        }
      },
      {
        pseudos: true,
        extensions: {
          m: true,
          a: true,
          f: true,
          d: true,
          zicsr: true,
          zifencei: true
        }
      }
    );
  }

  testGlobalLoad(mnemonic: string, tal: string, rd: number, rt: number, expr1: number, expr2: number, info: Pseudo) {
    describe(`#${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      this.testUJ('auipc', rt, expr1, info.tal[0] as UType);
      this.testI(tal, rd, rt, expr2, info.tal[1] as IType);
    });
  }

  testGlobalStore(mnemonic: string, rd: number, rt: number, expr1: number, expr2: number, info: Pseudo) {
    describe(`#${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      this.testUJ('auipc', rt, expr1, info.tal[0] as UType);
      this.testSB(mnemonic, rt, rd, expr2, info.tal[1] as SType);
    });
  }

  testRPseudo(mnemonic: string, tal: string, rd: number, rs1: number, rs2: number, info: Pseudo) {
    describe(`${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      this.testR(tal, rd, rs1, rs2, info.tal[0] as RType);
    });
  }

  testIPseudo(mnemonic: string, tal: string, rd: number, rs1: number, expr: number, info: Pseudo) {
    describe(`${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      this.testI(tal, rd, rs1, expr, info.tal[0] as IType);
    });
  }

  testSBPseudo(mnemonic: string, tal: string, rs1: number, rs2: number, expr: number, info: Pseudo) {
    describe(`${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      this.testSB(tal, rs1, rs2, expr, info.tal[0] as SType);
    });
  }

  testUJPseudo(mnemonic: string, tal: string, rd: number, expr: number, info: Pseudo) {
    describe(`${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      this.testUJ(tal, rd, expr, info.tal[0] as UType);
    });
  }

  testR4(mnemonic: string, rd: number, rs1: number, rs2: number, rs3: number, info: R4Type) {
    describe(`${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      it(`rd should be ${rd}`, () => {
        chai.expect(info.rd).to.eq(rd);
      });
      it(`rs1 should be ${rs1}`, () => {
        chai.expect(info.rs1).to.eq(rs1);
      });
      it(`rs2 should be ${rs2}`, () => {
        chai.expect(info.rs2).to.eq(rs2);
      });
      it(`rs3 should be ${rs3}`, () => {
        chai.expect(info.rs3).to.eq(rs3);
      });
    });
  }

  testR(mnemonic: string, rd: number, rs1: number, rs2: number, info: RType) {
    describe(`${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      it(`rd should be ${rd}`, () => {
        chai.expect(info.rd).to.eq(rd);
      });
      it(`rs1 should be ${rs1}`, () => {
        chai.expect(info.rs1).to.eq(rs1);
      });
      it(`rs2 should be ${rs2}`, () => {
        chai.expect(info.rs2).to.eq(rs2);
      });
    });
  }

  testI(mnemonic: string, rd: number, rs1: number, expr: number, info: IType) {
    describe(`${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      it(`rd should be ${rd}`, () => {
        chai.expect(info.rd).to.eq(rd);
      });
      it(`rs1 should be ${rs1}`, () => {
        chai.expect(info.rs1).to.eq(rs1);
      });
      it(`expr should be ${expr}`, () => {
        chai.expect(info.expr.build(0, [])).to.eq(expr);
      });
    });
  }

  testSB(mnemonic: string, rs1: number, rs2: number, expr: number, info: SType | BType) {
    describe(`${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      it(`rs1 should be ${rs1}`, () => {
        chai.expect(info.rs1).to.eq(rs1);
      });
      it(`rs2 should be ${rs2}`, () => {
        chai.expect(info.rs2).to.eq(rs2);
      });
      it(`expr should be ${expr}`, () => {
        chai.expect(info.expr.build(0, [])).to.eq(expr);
      });
    });
  }

  testUJ(mnemonic: string, rd: number, expr: number, info: UType | JType) {
    describe(`${mnemonic}`, () => {
      it(`mnemonic should be ${mnemonic}`, () => {
        chai.expect(info.mnemonic).to.eq(mnemonic);
      });
      it(`rd should be ${rd}`, () => {
        chai.expect(info.rd).to.eq(rd);
      });
      it(`expr should be ${expr}`, () => {
        chai.expect(info.expr.build(0, [])).to.eq(expr);
      });
    });
  }
}
