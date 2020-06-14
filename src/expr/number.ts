import { DebugInfo } from '../debug';
import { atoi } from '@jupitersim/helpers';
import { Expression, ExpressionError } from './expr';

/**
 * Number assembler expression.
 */
export class Number extends Expression {
  /** Number literal. */
  private value: string;

  /**
   * Creates a new number expression.
   *
   * @param value - Number literal to convert to number.
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
