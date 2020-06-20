import chai from 'chai';
import { Test } from './utils';
import { Directive } from '../../src';

class Directives extends Test {
  constructor() {
    super(`
      .bss
      .data
      .rodata
      .text
      .globl foo, bar
      .align 2
      .balign 4
      .file "foo.s"
      .equ xd, 2 + 2
    `);
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
}

describe('Directives', () => {
  const directives = new Directives();
  directives.parse();
});
