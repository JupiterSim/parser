import * as _ from 'lodash';

/**
 * RV32M Mixing.
 *
 * @param superclass - Super class object
 */
export const M = (superclass: any) =>
  class extends superclass {
    /** {@inheritdoc} */
    enterRV32M(ctx: any) {
      if (!this.options.extensions.m) {
        this.addError(ctx.start.line, ctx.start.column + 1, 'RV32M extension is disabled');
      }
    }

    /** {@inheritdoc} */
    exitMUL(ctx: any) {
      if (this.options.extensions.m && _.isFunction(this.mul)) {
        this.mul(this.getRType(ctx.I_MUL(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitMULH(ctx: any) {
      if (this.options.extensions.m && _.isFunction(this.mulh)) {
        this.mulh(this.getRType(ctx.I_MULH(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitMULHSU(ctx: any) {
      if (this.options.extensions.m && _.isFunction(this.mulhsu)) {
        this.mulhsu(this.getRType(ctx.I_MULHSU(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitMULHU(ctx: any) {
      if (this.options.extensions.m && _.isFunction(this.mulhu)) {
        this.mulhu(this.getRType(ctx.I_MULHU(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitDIV(ctx: any) {
      if (this.options.extensions.m && _.isFunction(this.div)) {
        this.div(this.getRType(ctx.I_DIV(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitDIVU(ctx: any) {
      if (this.options.extensions.m && _.isFunction(this.divu)) {
        this.divu(this.getRType(ctx.I_DIVU(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitREM(ctx: any) {
      if (this.options.extensions.m && _.isFunction(this.rem)) {
        this.rem(this.getRType(ctx.I_REM(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitREMU(ctx: any) {
      if (this.options.extensions.m && _.isFunction(this.remu)) {
        this.remu(this.getRType(ctx.I_REMU(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }
  };
