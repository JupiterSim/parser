/**
 * Parser error.
 */
export interface ParseError {
  /** Source file name. */
  readonly filename: string;
  /** Error line number. */
  readonly line: number;
  /** Error column number. */
  readonly column: number;
  /** Error source. */
  readonly source: string;
  /** Error indicator. */
  readonly indicator: number;
  /** Error message. */
  readonly message: string;
}
