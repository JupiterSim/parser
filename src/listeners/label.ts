import * as _ from 'lodash';

/**
 * Label Mixing.
 *
 * @param superclass - Super class object
 */
export const Lbl = (superclass: any) =>
  class extends superclass {
    /** {@inheritdoc} */
    exitLABEL(ctx: any) {
      if (_.isFunction(this.label)) {
        const label = ctx.LABEL();
        this.label({
          debugInfo: this.getDebugInfo(label),
          name: label.symbol.text.substring(0, label.symbol.text.length - 1)
        });
      }
    }
  };
