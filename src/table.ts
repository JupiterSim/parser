import { Segment } from './segment';
import { Expression } from './expr';
import { DebugInfo } from './debug';

/**
 * Assembler label.
 */
export interface Label {
  /** Symbol segment. */
  readonly segment: Segment;
  /** Symbol debug information. */
  readonly debugInfo: DebugInfo;
  /** Symbol address. */
  address: number;
}

/**
 * Assembler symbol table.
 */
export interface SymbolTable {
  /** Globals symbols. */
  readonly globals: {
    /** Symbol name. */
    [symbol: string]: Label;
  };
  /** Local symbols. */
  readonly locals: {
    /** File name where the local symbol is. */
    [filename: string]: {
      /** Symbol name. */
      [symbol: string]: Label;
    };
  };
  /** Local expressions. */
  readonly expr: {
    /** File name where the local symbol is. */
    [filename: string]: {
      /** Symbol name. */
      [symbol: string]: Expression;
    };
  };
}
