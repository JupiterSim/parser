import { Label } from '../types';
import { isFunction, split } from 'lodash';
import { Expression, Constant } from '../expr/';
import { cleanEscapes } from '@jupitersim/helpers';

/**
 * Directives Mixing.
 *
 * @param superclass - Super class object
 */
export const Directives = (superclass: any) =>
  class extends superclass {
    /** {@inheritdoc} */
    exitBSS(ctx: any) {
      if (isFunction(this.bss)) {
        this.bss({ debugInfo: this.getDebugInfo(ctx.d), directive: '.bss' });
      }
    }

    /** {@inheritdoc} */
    exitDATA(ctx: any) {
      if (isFunction(this.bss)) {
        this.data({ debugInfo: this.getDebugInfo(ctx.d), directive: '.data' });
      }
    }

    /** {@inheritdoc} */
    exitRODATA(ctx: any) {
      if (isFunction(this.rodata)) {
        this.rodata({ debugInfo: this.getDebugInfo(ctx.d), directive: '.rodata' });
      }
    }

    /** {@inheritdoc} */
    exitTEXT(ctx: any) {
      if (isFunction(this.text)) {
        this.text({ debugInfo: this.getDebugInfo(ctx.d), directive: '.text' });
      }
    }

    /** {@inheritdoc} */
    exitGLOBL(ctx: any) {
      if (isFunction(this.globl)) {
        const labels: Label[] = [];
        ctx.ID().forEach((e: any) =>
          labels.push({
            debugInfo: this.getDebugInfo(e.symbol),
            name: e.symbol.text
          })
        );
        this.globl({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          labels
        });
      }
    }

    /** {@inheritdoc} */
    exitALIGN(ctx: any) {
      if (isFunction(this.align)) {
        this.align({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          expr: new Constant(this.getDebugInfo(ctx.i), ctx.i.text)
        });
      }
    }

    /** {@inheritdoc} */
    exitBALIGN(ctx: any) {
      if (isFunction(this.balign)) {
        this.balign({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          expr: new Constant(this.getDebugInfo(ctx.i), ctx.i.text)
        });
      }
    }

    /** {@inheritdoc} */
    exitFILE(ctx: any) {
      if (isFunction(this.file)) {
        const file = ctx.STRING().symbol.text;
        this.file({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          file: cleanEscapes(file.substring(1, file.length - 1))
        });
      }
    }

    /** {@inheritdoc} */
    exitEQU(ctx: any) {
      if (isFunction(this.equ)) {
        this.equ({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          id: ctx.ID().symbol.text,
          expr: this.stack.pop()
        });
      }
    }

    /** @inheritdoc */
    exitBYTE(ctx: any) {
      if (isFunction(this.byte)) {
        const data: Expression[] = [];
        ctx.expr().forEach(() => data.push(this.stack.pop()));
        data.reverse();
        this.byte({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          data
        });
      }
    }

    /** @inheritdoc */
    exitHALF(ctx: any) {
      if (isFunction(this.half)) {
        const data: Expression[] = [];
        ctx.expr().forEach(() => data.push(this.stack.pop()));
        data.reverse();
        this.half({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          data
        });
      }
    }

    /** @inheritdoc */
    exitWORD(ctx: any) {
      if (isFunction(this.word)) {
        const data: Expression[] = [];
        ctx.expr().forEach(() => data.push(this.stack.pop()));
        data.reverse();
        this.word({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          data
        });
      }
    }

    /** @inheritdoc */
    exitFLOAT(ctx: any) {
      if (isFunction(this.float)) {
        const data: Expression[] = [];
        ctx.fexpr().forEach(() => data.push(this.stack.pop()));
        data.reverse();
        this.float({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          data
        });
      }
    }

    /** @inheritdoc */
    exitASCII(ctx: any) {
      if (isFunction(this.ascii)) {
        const str = ctx.STRING().symbol.text;
        this.ascii({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          bytes: split(cleanEscapes(str.substring(1, str.length - 1)), '')
        });
      }
    }

    /** @inheritdoc */
    exitASCIIZ(ctx: any) {
      if (isFunction(this.asciiz)) {
        const str = ctx.STRING().symbol.text;
        this.asciiz({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          bytes: split(cleanEscapes(str.substring(1, str.length - 1)), '')
        });
      }
    }

    /** @inheritdoc */
    exitZERO(ctx: any) {
      if (isFunction(this.zero)) {
        this.zero({
          debugInfo: this.getDebugInfo(ctx.d),
          directive: ctx.d.text,
          expr: new Constant(this.getDebugInfo(ctx.i), ctx.i.text)
        });
      }
    }
  };
