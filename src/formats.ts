import { DebugInfo } from './debug';
import { Expression } from './expr';

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
  rd: number;
  /** Immediate expression. */
  expr: Expression | undefined;
}

/** RISC-V J format. */
export type JType = UType;

/** RISC-V pseudo */
export interface Pseudo extends Format {
  /** List of true assemble language instructions. */
  tal: Array<R4Type | RType | IType | SType | BType | UType | JType>;
}
