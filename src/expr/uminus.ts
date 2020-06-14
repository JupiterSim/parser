import { Expression } from './expr';
import { DebugInfo } from '../debug';

/**
 * Unary minus assembler expression.
 */
export class UMinus extends Expression {
  /** Expression operand. */
  private e: Expression;

  /**
   * Creates a new unary minus assembler expression.
   *
   * @param debugInfo - Debug information.
   * @param e         - Expression operand.
   */
  constructor(debugInfo: DebugInfo, e: Expression) {
    super(debugInfo);
    this.e = e;
  }

  /** {@inheritdoc} */
  build(pc: number, visited: string[]): number {
    return -this.e.build(pc, visited);
  }

  /** {@inheritdoc} */
  hasIds(): boolean {
    return this.e.hasIds();
  }
}
