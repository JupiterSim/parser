import chai from 'chai';
import { Test } from './utils';
import { Directive } from '../../src';

const code: string = `
.bss
.data
.rodata
.text
.globl foo, bar
.align 2
.balign 4
.file "foo.s"
.equ xd, 2 + 2
# data directives
.byte +1, 2
.half 3, 4
.word 0xcafe
.float 2.5, NaN, -inf, +2, 0b0, 0x0
.ascii "hola"
.string "tes\\t"
.space 10
`;

class DirectivesEmpty extends Test {
  constructor() {
    super(code);
  }
}

class Directives extends Test {
  constructor() {
    super(code);
  }

  bss = (ctx: Directive): void => {
    describe('.bss', () => {
      it('directive should be .bss', () => chai.expect(ctx.directive).to.eq('.bss'));
    });
  };

  data = (ctx: Directive): void => {
    describe('.data', () => {
      it('directive should be .data', () => chai.expect(ctx.directive).to.eq('.data'));
    });
  };

  rodata = (ctx: Directive): void => {
    describe('.rodata', () => {
      it('directive should be .rodata', () => chai.expect(ctx.directive).to.eq('.rodata'));
    });
  };

  text = (ctx: Directive): void => {
    describe('.text', () => {
      it('directive should be .text', () => chai.expect(ctx.directive).to.eq('.text'));
    });
  };

  globl = (ctx: Directive): void => {
    describe('.globl', () => {
      it('directive should be .globl', () => chai.expect(ctx.directive).to.eq('.globl'));
      it('should have 2 globals', () => chai.expect(ctx.labels.length).to.eq(2));
      it('first global should be foo', () => chai.expect(ctx.labels[0].name).to.eq('foo'));
      it('second global should be bar', () => chai.expect(ctx.labels[1].name).to.eq('bar'));
    });
  };

  align = (ctx: Directive): void => {
    describe('.align', () => {
      it('directive should be .align', () => chai.expect(ctx.directive).to.eq('.align'));
      it('align value should be 2', () => chai.expect(ctx.expr.build(0, [])).to.eq(2));
    });
  };

  balign = (ctx: Directive): void => {
    describe('.balign', () => {
      it('directive should be .balign', () => chai.expect(ctx.directive).to.eq('.balign'));
      it('balign value should be 4', () => chai.expect(ctx.expr.build(0, [])).to.eq(4));
    });
  };

  file = (ctx: Directive): void => {
    describe('.file', () => {
      it('directive should be .file', () => chai.expect(ctx.directive).to.eq('.file'));
      it('file should be foo.s', () => chai.expect(ctx.file).to.eq('foo.s'));
    });
  };

  equ = (ctx: Directive): void => {
    describe('.equ', () => {
      it('directive should be .equ', () => chai.expect(ctx.directive).to.eq('.equ'));
      it('id should be xd', () => chai.expect(ctx.id).to.eq('xd'));
      it('expression should be 4', () => chai.expect(ctx.expr.build(0, [])).to.eq(4));
    });
  };

  byte = (ctx: Directive): void => {
    describe('.byte', () => {
      it('directive should be .byte', () => chai.expect(ctx.directive).to.eq('.byte'));
      it('should have 2 bytes', () => chai.expect(ctx.data.length).to.eq(2));
      it('first expr should be 1', () => chai.expect(ctx.data[0].build(0, [])).to.eq(1));
      it('second expr should be 2', () => chai.expect(ctx.data[1].build(0, [])).to.eq(2));
    });
  };

  half = (ctx: Directive): void => {
    describe('.half', () => {
      it('directive should be .half', () => chai.expect(ctx.directive).to.eq('.half'));
      it('should have 2 halfs', () => chai.expect(ctx.data.length).to.eq(2));
      it('first expr should be 3', () => chai.expect(ctx.data[0].build(0, [])).to.eq(3));
      it('second expr should be 4', () => chai.expect(ctx.data[1].build(0, [])).to.eq(4));
    });
  };

  word = (ctx: Directive): void => {
    describe('.word', () => {
      it('directive should be .word', () => chai.expect(ctx.directive).to.eq('.word'));
      it('should have 1 word', () => chai.expect(ctx.data.length).to.eq(1));
      it('first expr should be 0xcafe', () => chai.expect(ctx.data[0].build(0, [])).to.eq(0xcafe));
    });
  };

  float = (ctx: Directive): void => {
    describe('.float', () => {
      it('directive should be .float', () => chai.expect(ctx.directive).to.eq('.float'));
      it('should have 6 floats', () => chai.expect(ctx.data.length).to.eq(6));
      it('first expr should be 2.5', () => chai.expect(ctx.data[0].build(0, [])).to.eq(2.5));
      it('second expr should be NaN', () => chai.expect(ctx.data[1].build(0, [])).to.be.NaN);
      it('second expr should be -Infinity', () => chai.expect(ctx.data[2].build(0, [])).to.eq(-Infinity));
      it('second expr should be 2.0', () => chai.expect(ctx.data[3].build(0, [])).to.eq(2.0));
      it('second expr should be 0.0', () => chai.expect(ctx.data[4].build(0, [])).to.eq(0.0));
      it('second expr should be 0.0', () => chai.expect(ctx.data[5].build(0, [])).to.eq(0.0));
    });
  };

  ascii = (ctx: Directive): void => {
    describe('.ascii', () => {
      it('directive should be .ascii', () => chai.expect(ctx.directive).to.eq('.ascii'));
      it('should have 4 bytes', () => chai.expect(ctx.bytes.length).to.eq(4));
      it('argument should be hola', () => chai.expect(ctx.bytes).to.eql(['h', 'o', 'l', 'a']));
    });
  };

  asciiz = (ctx: Directive): void => {
    describe('.asciiz', () => {
      it('directive should be .string', () => chai.expect(ctx.directive).to.eq('.string'));
      it('should have 4 bytes', () => chai.expect(ctx.bytes.length).to.eq(4));
      it('argument should be tes\t', () => chai.expect(ctx.bytes).to.eql(['t', 'e', 's', '\t']));
    });
  };

  zero = (ctx: Directive): void => {
    describe('.zero', () => {
      it('directive should be .space', () => chai.expect(ctx.directive).to.eq('.space'));
      it('argument should be 10', () => chai.expect(ctx.expr.build(0, [])).to.eq(10));
    });
  };
}

describe('Directives', () => {
  const directives = new Directives();
  directives.parse();
  const empty = new DirectivesEmpty();
  empty.parse();
});
