import { DebugInfo } from '../types';

/**
 * Expression error.
 */
export class ExpressionError extends Error {
  /** Debug information */
  readonly debugInfo: DebugInfo;

  /**
   * Creates a new expression error.
   *
   * @param message   - Error message.
   * @param debugInfo - Expression debug information.
   */
  constructor(message: string, debugInfo: DebugInfo) {
    super(message);
    Object.setPrototypeOf(this, ExpressionError.prototype);
    this.debugInfo = debugInfo;
  }
}

/**
 * Generic assembler expression.
 */
export abstract class Expression {
  /** Debug information. */
  readonly debugInfo: DebugInfo;

  /**
   * Initializes expression debug information.
   *
   * @param debugInfo - Debug information.
   */
  constructor(debugInfo: DebugInfo) {
    this.debugInfo = debugInfo;
  }

  /**
   * Builds the expression.
   *
   * @param pc      - Program counter value.
   * @param visited - Array of visited ids.
   * @returns Generated number from expression.
   * @throws AssemblerError if an expression has an error.
   */
  abstract build(pc: number, visted: string[]): number;

  /**
   * Verifies if the expression has identifiers.
   *
   * @returns true if the expression has any identifier.
   */
  abstract hasIds(): boolean;
}
