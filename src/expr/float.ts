import { DebugInfo } from '../types';
import { atof } from '@jupitersim/helpers';
import { Expression, ExpressionError } from './expr';

/**
 * Float assembler expression.
 */
export class Float extends Expression {
  /** Floating-point literal. */
  private value: string;

  /**
   * Creates a new number expression.
   *
   * @param value - Floating-point literal to convert to number.
   */
  constructor(debugInfo: DebugInfo, value: string) {
    super(debugInfo);
    this.value = value;
  }

  /** {@inheritdoc} */
  build(): number {
    try {
      return atof(this.value);
    } catch (error) {
      throw new ExpressionError(error.message, this.debugInfo);
    }
  }

  /** {@inheritdoc} */
  hasIds(): boolean {
    return false;
  }
}
