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
