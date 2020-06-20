import { Segment } from './segment';
import { Expression } from './expr';

/**
 * RISC-V assembly file.
 */
export interface ASMFile {
  /** File name. */
  readonly name: string;
  /** File assembly code. */
  readonly code: string;
}

/**
 * RISC-V parser options.
 */
export interface ParserOptions {
  /** Allow pseudoinstructions. */
  pseudos: boolean;
  /** Enabled extensions. */
  extensions: {
    /** RV32M extension. */
    m: boolean;
    /** RV32A extension. */
    a: boolean;
    /** RV32F extension. */
    f: boolean;
    /** RV32D extension. */
    d: boolean;
    /** RV32Zicsr extension. */
    zicsr: boolean;
    /** RV32Zifencei extension. */
    zifencei: boolean;
  };
}

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

/**
 * Parser error.
 */
export interface ParseError extends DebugInfo {
  /** Error message. */
  readonly message: string;
}

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

/**
 * RISC-V Format.
 */
interface Format {
  /** Instruction mnemonic. */
  readonly mnemonic: string;
  /** Debug information. */
  readonly debugInfo: DebugInfo;
}

/**
 * RISC-V R4 format.
 */
export interface R4Type extends Format {
  /** Destination register. */
  readonly rd: number;
  /** Source register 1. */
  readonly rs1: number;
  /** Source register 2. */
  readonly rs2: number;
  /** Source register 3. */
  readonly rs3: number;
}

/**
 * RISC-V R format.
 */
export interface RType extends Format {
  /** Destination register. */
  readonly rd: number;
  /** Source register 1. */
  readonly rs1: number;
  /** Source register 2. */
  readonly rs2: number;
}

/**
 * RISC-V I format.
 */
export interface IType extends Format {
  /** Destination register. */
  readonly rd: number;
  /** Source register 1. */
  readonly rs1: number;
  /** Immediate expression. */
  readonly expr: Expression | undefined;
}

/** RISC-V S format. */
export interface SType extends Format {
  /** Source register 1 */
  readonly rs1: number;
  /** Source register 2. */
  readonly rs2: number;
  /** Immediate expression. */
  readonly expr: Expression | undefined;
}

/** RISC-V B format. */
export type BType = SType;

/** RISC-V U format. */
export interface UType extends Format {
  /** Destination register. */
  readonly rd: number;
  /** Immediate expression. */
  readonly expr: Expression | undefined;
}

/** RISC-V J format. */
export type JType = UType;

/** RISC-V pseudo */
export interface Pseudo extends Format {
  /** List of true assemble language instructions. */
  readonly tal: Array<R4Type | RType | IType | SType | BType | UType | JType>;
}

/** RISC-V label */
export interface Label {
  /** Debug information. */
  readonly debugInfo: DebugInfo;
  /** Label name */
  readonly name: string;
}

/** Assembler section. */
export interface Directive {
  /** Debug information. */
  readonly debugInfo: DebugInfo;
  /** Assembler section. */
  readonly directive: string;
  /** Assembler expression. */
  readonly expr?: Expression;
  /** Equ id */
  readonly id?: string;
  /** File name */
  readonly file?: string;
  /** symbols */
  readonly labels?: Label[];
}
