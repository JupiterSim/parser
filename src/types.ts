/**
 * Assembler debug information.
 */
export interface DebugInfo {
  /** Source file name. */
  readonly filename: string;
  /** Source line number. */
  readonly line: number;
  /** Source column number. */
  readonly column: number;
  /** Source code line. */
  readonly source: string;
  /** Error indicator. */
  readonly indicator: number;
}
