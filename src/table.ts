import { Segment } from './segment';
import { Expression } from './expr';
import { DebugInfo } from './debug';

/**
 * Assembler label.
 */
export interface Sym {
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
    [symbol: string]: Sym;
  };
  /** Local symbols. */
  readonly locals: {
    /** File name where the local symbol is. */
    [filename: string]: {
      /** Symbol name. */
      [symbol: string]: Sym;
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
