import { DebugInfo } from './debug';

/**
 * Parser error.
 */
export interface ParseError extends DebugInfo {
  /** Error message. */
  readonly message: string;
}
