import * as _ from 'lodash';
import { DebugInfo } from '../debug';
import { SymbolTable } from '../table';
import { Relocation } from '../relocation';
import { signExtend } from '@jupitersim/helpers';
import { Expression, ExpressionError } from './expr';

/**
 * Identifier assembler expression.
 */
export class Id extends Expression {
  /** Identifier literal. */
  private value: string;
  /** Relocation type */
  private relocation: Relocation;
  /** Symbol table */
  private st: SymbolTable;

  /**
   * Creates a new identifier assembler expression.
   *
   * @param debugInfo  - Debug information.
   * @param value      - Identifier name.
   * @param relocation - Relocation type.
   * @param st         - Symbol table.
   */
  constructor(debugInfo: DebugInfo, value: string, relocation: Relocation, st: SymbolTable) {
    super(debugInfo);
    this.value = value;
    this.relocation = relocation;
    this.st = st;
  }

  /**
   * Gets the absolute address of the symbol.
   *
   * @param pc      - Program counter value.
   * @param visited - Array of visited ids.
   * @returns Gets the absolute address of the symbol.
   * @throws AssemblerError if the symbol is not defined.
   */
  private getAddress(pc: number, visited: string[]): number {
    const id = this.value;
    const st = this.st;
    const filename = this.debugInfo.filename;
    if (!_.isUndefined(st.locals[filename][id])) {
      return st.locals[filename][id].address;
    } else if (!_.isUndefined(st.expr[filename][id])) {
      return st.expr[filename][id].build(pc, visited);
    } else if (!_.isUndefined(st.globals[id])) {
      return st.globals[id].address;
    }
    throw new ExpressionError(`symbol '${id}' used but not defined`, this.debugInfo);
  }

  /** {@inheritdoc} */
  build(pc: number, visited: string[] = []): number {
    if (_.indexOf(visited, this.value) !== -1) {
      visited.push(this.value);
      const absolute = this.getAddress(pc, visited);
      const delta = absolute - pc;
      let value = 0;
      switch (this.relocation) {
        case Relocation.HI:
          value = (absolute >>> 12) & 0xfffff;
          break;
        case Relocation.LO:
          value = absolute & 0xfff;
          break;
        case Relocation.PCREL:
          value = delta;
          break;
        case Relocation.PCREL_HI:
          value = ((delta >>> 12) + ((delta >>> 11) & 0x1)) & 0xfffff;
          break;
        case Relocation.PCREL_LO:
          value = signExtend((delta + 4) & 0xfff, 12);
          break;
        default:
          value = absolute;
      }
      visited.pop();
      return value;
    }
    throw new ExpressionError(`'${this.value}' is involved in a definition cycle`, this.debugInfo);
  }

  /** {@inheritdoc} */
  hasIds(): boolean {
    return true;
  }
}
