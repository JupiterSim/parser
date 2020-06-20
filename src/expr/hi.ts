import { Expression } from './expr';
import { DebugInfo } from '../types';

/**
 * High relocation assembler expression.
 */
export class Hi extends Expression {
  /** Expression operand. */
  private e: Expression;

  /**
   * Creates a new high relocation assembler expression.
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
    const imm = this.e.build(pc, visited);
    return ((imm >>> 12) + ((imm >>> 11) & 0x1)) & 0xfffff;
  }

  /** {@inheritdoc} */
  hasIds(): boolean {
    return this.e.hasIds();
  }
}
