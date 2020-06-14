/**
 * Assembler relocations.
 */
export enum Relocation {
  /** High relocation. */
  HI,
  /** Low relocation. */
  LO,
  /** PC relative relocation. */
  PCREL,
  /** PC-relative high relocation. */
  PCREL_HI,
  /** PC-relative low relocation. */
  PCREL_LO,
  /** Absolute relocation. */
  ABSOLUTE
}
