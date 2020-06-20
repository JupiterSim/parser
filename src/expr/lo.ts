import { Expression } from './expr';
import { DebugInfo } from '../types';
import { signExtend } from '@jupitersim/helpers';

/**
 * Low relocation assembler expression.
 */
export class Lo extends Expression {
  /** Expression operand. */
  private e: Expression;

  /**
   * Creates a new low relocation assembler expression.
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
    return signExtend(imm & 0xfff, 12);
  }

  /** {@inheritdoc} */
  hasIds(): boolean {
    return this.e.hasIds();
  }
}
