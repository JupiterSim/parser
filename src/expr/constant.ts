import { DebugInfo } from '../types';
import { atoi } from '@jupitersim/helpers';
import { Expression, ExpressionError } from './expr';

/**
 * Constant assembler expression.
 */
export class Constant extends Expression {
  /** Constant literal. */
  private value: string;

  /**
   * Creates a new constant expression.
   *
   * @param value - Constant literal to convert to number.
   */
  constructor(debugInfo: DebugInfo, value: string) {
    super(debugInfo);
    this.value = value;
  }

  /** {@inheritdoc} */
  build(): number {
    try {
      return atoi(this.value);
    } catch (error) {
      throw new ExpressionError(error.message, this.debugInfo);
    }
  }

  /** {@inheritdoc} */
  hasIds(): boolean {
    return false;
  }
}
