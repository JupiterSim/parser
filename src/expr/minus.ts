import { Expression } from './expr';
import { DebugInfo } from '../debug';

/**
 * Minus assembler expression.
 */
export class Minus extends Expression {
  /** First expression operand. */
  private e1: Expression;
  /** Second expression operand. */
  private e2: Expression;

  /**
   * Creates a new minus assembler expression.
   *
   * @param debugInfo - Debug information.
   * @param e1        - First expression operand.
   * @param e2        - Second expression operand.
   */
  constructor(debugInfo: DebugInfo, e1: Expression, e2: Expression) {
    super(debugInfo);
    this.e1 = e1;
    this.e2 = e2;
  }

  /** {@inheritdoc} */
  build(pc: number, visited: string[]): number {
    return this.e1.build(pc, visited) - this.e2.build(pc, visited);
  }

  /** {@inheritdoc} */
  hasIds(): boolean {
    return this.e1.hasIds() || this.e2.hasIds();
  }
}
