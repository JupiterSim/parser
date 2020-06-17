import * as expr from '../expr';
import { Relocation } from '../relocation';

/**
 * Expression Mixing.
 *
 * @param superclass - Super class object
 */
export const Expr = (superclass: any) =>
  class extends superclass {
    /** {@inheritdoc} */
    exitUNARYEXPR(ctx: any) {
      if (ctx.op.text === '-') {
        this.stack.push(new expr.UMinus(this.getDebugInfo(ctx.op), this.stack.pop()));
      }
    }

    /** {@inheritdoc} */
    exitPLUSEXPR(ctx: any) {
      const e2 = this.stack.pop();
      const e1 = this.stack.pop();
      if (ctx.op.text === '+') {
        this.stack.push(new expr.Plus(this.getDebugInfo(ctx.op), e1, e2));
      } else {
        this.stack.push(new expr.Minus(this.getDebugInfo(ctx.op), e1, e2));
      }
    }

    /** {@inheritdoc} */
    exitINTEXPR(ctx: any) {
      const i = ctx.INT().symbol;
      this.stack.push(new expr.Constant(this.getDebugInfo(i), i.text));
    }

    /** {@inheritdoc} */
    exitHEXEXPR(ctx: any) {
      const i = ctx.HEX().symbol;
      this.stack.push(new expr.Constant(this.getDebugInfo(i), i.text));
    }

    /** {@inheritdoc} */
    exitBINEXPR(ctx: any) {
      const i = ctx.BIN().symbol;
      this.stack.push(new expr.Constant(this.getDebugInfo(i), i.text));
    }

    /** {@inheritdoc} */
    exitCHAREXPR(ctx: any) {
      const c = ctx.CHAR().symbol;
      this.stack.push(new expr.Constant(this.getDebugInfo(c), c.text));
    }

    /** {@inheritdoc} */
    exitIDEXPR(ctx: any) {
      const id = ctx.ID().symbol;
      this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.ABSOLUTE, this.st));
    }

    /** {@inheritdoc} */
    exitHIRELEXPR(ctx: any) {
      const id = ctx.ID().symbol;
      this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.HI, this.st));
    }

    /** {@inheritdoc} */
    exitLORELEXPR(ctx: any) {
      const id = ctx.ID().symbol;
      this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.LO, this.st));
    }

    /** {@inheritdoc} */
    exitPCRELHIRELEXPR(ctx: any) {
      const id = ctx.ID().symbol;
      this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.PCREL_HI, this.st));
    }

    /** {@inheritdoc} */
    exitPCRELLORELEXPR(ctx: any) {
      const id = ctx.ID().symbol;
      this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.PCREL_LO, this.st));
    }

    /** {@inheritdoc} */
    exitUNARYFEXPR(ctx: any) {
      if (ctx.op.text === '-') {
        this.stack.push(new expr.UMinus(this.getDebugInfo(ctx.op), this.stack.pop()));
      }
    }

    /** {@inheritdoc} */
    exitINTFEXPR(ctx: any) {
      const f = ctx.INT().symbol;
      this.stack.push(new expr.Float(this.getDebugInfo(f), f.text));
    }

    /** {@inheritdoc} */
    exitHEXFEXPR(ctx: any) {
      const f = ctx.HEX().symbol;
      this.stack.push(new expr.Float(this.getDebugInfo(f), f.text));
    }

    /** {@inheritdoc} */
    exitBINFEXPR(ctx: any) {
      const f = ctx.BIN().symbol;
      this.stack.push(new expr.Float(this.getDebugInfo(f), f.text));
    }

    /** {@inheritdoc} */
    exitFLOATFEXPR(ctx: any) {
      const f = ctx.FLOAT().symbol;
      this.stack.push(new expr.Float(this.getDebugInfo(f), f.text));
    }
  };
