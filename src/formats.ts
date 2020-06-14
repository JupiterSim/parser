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
  /** Source register. */
  readonly rs1: number;
  /** Immediate expression. */
  readonly expr: Expression;
}

/** RISC-V S format. */
export type SType = IType;

/** RISC-V B format. */
export type BType = IType;

/** RISC-V U format. */
export interface UType extends Format {
  /** Destination register. */
  rd: number;
  /** Immediate expression. */
  expr: Expression;
}

/** RISC-V J format. */
export type JType = UType;
