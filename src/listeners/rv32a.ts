import { isFunction } from 'lodash';

/**
 * RV32A Mixing.
 *
 * @param superclass - Super class object
 */
export const A = (superclass: any) =>
  class extends superclass {
    /** {@inheritdoc} */
    enterRV32A(ctx: any) {
      if (!this.options.extensions.a) {
        this.addError(ctx.start.line, ctx.start.column + 1, 'RV32A extension is disabled');
      }
    }

    /** {@inheritdoc} */
    exitLRW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.lrw)) {
        this.lrw(this.getRType(ctx.I_LRW(), ctx.XREG(0), ctx.XREG(1)));
      }
    }

    /** {@inheritdoc} */
    exitSCW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.scw)) {
        this.scw(this.getRType(ctx.I_SCW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitAMOSWAPW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.amoswapw)) {
        this.amoswapw(this.getRType(ctx.I_AMOSWAPW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitAMOADDW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.amoaddw)) {
        this.amoaddw(this.getRType(ctx.I_AMOADDW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitAMOXORW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.amoxorw)) {
        this.amoxorw(this.getRType(ctx.I_AMOXORW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitAMOANDW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.amoandw)) {
        this.amoandw(this.getRType(ctx.I_AMOANDW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitAMOORW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.amoorw)) {
        this.amoorw(this.getRType(ctx.I_AMOORW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitAMOMINW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.amominw)) {
        this.amominw(this.getRType(ctx.I_AMOMINW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitAMOMAXW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.amomaxw)) {
        this.amomaxw(this.getRType(ctx.I_AMOMAXW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitAMOMINUW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.amominuw)) {
        this.amominuw(this.getRType(ctx.I_AMOMINUW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }

    /** {@inheritdoc} */
    exitAMOMAXUW(ctx: any) {
      if (this.options.extensions.a && isFunction(this.amomaxuw)) {
        this.amomaxuw(this.getRType(ctx.I_AMOMAXUW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
      }
    }
  };
