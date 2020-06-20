import { isFunction } from 'lodash';

/**
 * RV32Zifencei Mixing.
 *
 * @param superclass - Super class object
 */
export const Zifencei = (superclass: any) =>
  class extends superclass {
    /** {@inheritdoc} */
    enterRV32Zifencei(ctx: any) {
      if (!this.options.extensions.zifencei) {
        this.addError(ctx.start.line, ctx.start.column + 1, 'RV32Zifencei extension is disabled');
      }
    }

    /** {@inheritdoc} */
    exitFENCEI(ctx: any) {
      if (this.options.extensions.zifencei && isFunction(this.fencei)) {
        this.addNumber('0');
        const zero = { symbol: { text: 'x0' } };
        this.fencei(this.getIType(ctx.I_FENCEI(), zero, zero));
      }
    }
  };
