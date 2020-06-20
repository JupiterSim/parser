import { ASMFile } from './file';
import { DebugInfo } from './debug';
import { ParseError } from './error';
import { SymbolTable } from './table';
import { ParserOptions } from './options';
import { Relocation } from './relocation';
import { isUndefined, sortBy, find } from 'lodash';
import { M, I, Expr, Lbl, Directives } from './listeners';
import { Expression, Id, Lo, Hi, Constant } from './expr';
import { getRegisterNumber, between } from '@jupitersim/helpers';
import { RISCVListener, RISCVLexer, RISCVParser } from './syntax';
import { ParseTreeWalker, ParseTreeListener } from 'antlr4/tree/Tree';
import { InputStream, CommonTokenStream, Lexer, Parser } from 'antlr4';
import { RType, IType, SType, BType, UType, JType, R4Type, Pseudo, Label, Directive } from './formats';

/**
 * RISC-V RV32G parser.
 */
export abstract class RV32G extends M(I(Expr(Directives(Lbl(RISCVListener))))) {
  /** RISC-V assembly file name. */
  readonly filename: string;
  /** RISC-V assembly file code. */
  readonly code: string;
  /** Source code lines. */
  protected lines: string[];
  /** List of parse errors. */
  protected errors: ParseError[];
  /** Stack of expressions. */
  protected stack: Expression[];
  /** Symbol table. */
  protected st: SymbolTable;
  /** Parser options. */
  protected options: ParserOptions;

  /** label listener. */
  protected label?: (ctx: Label) => void;

  /** .bss directive listener. */
  protected bss?: (ctx: Directive) => void;
  /** .data directive listener. */
  protected data?: (ctx: Directive) => void;
  /** .rodata directive listener */
  protected rodata?: (ctx: Directive) => void;
  /** .text directive listener. */
  protected text?: (ctx: Directive) => void;
  /** .globl directive listener. */
  protected globl?: (ctx: Directive) => void;
  /** .align directive listener. */
  protected align?: (ctx: Directive) => void;
  /** .balign directive listener. */
  protected balign?: (ctx: Directive) => void;
  /** .file directive listener. */
  protected file?: (ctx: Directive) => void;
  /** .equ directive listener. */
  protected equ?: (ctx: Directive) => void;

  /** lui instruction listener. */
  protected lui?: (ctx: UType) => void;
  /** auipc instruction listener. */
  protected auipc?: (ctx: UType) => void;
  /** jal instruction listener. */
  protected jal?: (ctx: JType) => void;
  /** jalr instruction listener. */
  protected jalr?: (ctx: IType) => void;
  /** beq instruction listener. */
  protected beq?: (ctx: BType) => void;
  /** bne instruction listener. */
  protected bne?: (ctx: BType) => void;
  /** blt instruction listener. */
  protected blt?: (ctx: BType) => void;
  /** bge instruction listener. */
  protected bge?: (ctx: BType) => void;
  /** bltu instruction listener. */
  protected bltu?: (ctx: BType) => void;
  /** bgeu instruction listener. */
  protected bgeu?: (ctx: BType) => void;
  /** lb instruction listener. */
  protected lb?: (ctx: IType) => void;
  /** lh instruction listener. */
  protected lh?: (ctx: IType) => void;
  /** lw instruction listener. */
  protected lw?: (ctx: IType) => void;
  /** lbu instruction listener. */
  protected lbu?: (ctx: IType) => void;
  /** lhu instruction listener. */
  protected lhu?: (ctx: IType) => void;
  /** sb instruction listener. */
  protected sb?: (ctx: SType) => void;
  /** sh instruction listener. */
  protected sh?: (ctx: SType) => void;
  /** sw instruction listener. */
  protected sw?: (ctx: SType) => void;
  /** addi instruction listener. */
  protected addi?: (ctx: IType) => void;
  /** slti instruction listener. */
  protected slti?: (ctx: IType) => void;
  /** sltiu instruction listener. */
  protected sltiu?: (ctx: IType) => void;
  /** xori instruciton listener. */
  protected xori?: (ctx: IType) => void;
  /** ori instruction listener. */
  protected ori?: (ctx: IType) => void;
  /** andi instruction listener. */
  protected andi?: (ctx: IType) => void;
  /** slli instruction listener. */
  protected slli?: (ctx: IType) => void;
  /** srli instruction listener. */
  protected srli?: (ctx: IType) => void;
  /** srai instruction listener. */
  protected srai?: (ctx: IType) => void;
  /** add instruction listener. */
  protected add?: (ctx: RType) => void;
  /** sub instruction listener. */
  protected sub?: (ctx: RType) => void;
  /** sll instruction listener. */
  protected sll?: (ctx: RType) => void;
  /** slt instruction listener. */
  protected slt?: (ctx: RType) => void;
  /** sltu instruction listener. */
  protected sltu?: (ctx: RType) => void;
  /** xor instruction listener. */
  protected xor?: (ctx: RType) => void;
  /** srl instruction listener. */
  protected srl?: (ctx: RType) => void;
  /** sra instruction listener. */
  protected sra?: (ctx: RType) => void;
  /** or instruction listener. */
  protected or?: (ctx: RType) => void;
  /** and instruction listener. */
  protected and?: (ctx: RType) => void;
  /** fence instruction listener. */
  protected fence?: (ctx: IType) => void;
  /** ecall instruction listener. */
  protected ecall?: (ctx: IType) => void;
  /** ebreak instruction listener. */
  protected ebreak?: (ctx: IType) => void;
  /** la pseudo listener. */
  protected la?: (ctx: Pseudo) => void;
  /** lla pseudo listener. */
  protected lla?: (ctx: Pseudo) => void;
  /** lb global pseudo listener. */
  protected lbg?: (ctx: Pseudo) => void;
  /** lh global pseudo listener. */
  protected lhg?: (ctx: Pseudo) => void;
  /** lw global pseudo listener. */
  protected lwg?: (ctx: Pseudo) => void;
  /** sb global pseudo listener. */
  protected sbg?: (ctx: Pseudo) => void;
  /** sh global pseudo listener. */
  protected shg?: (ctx: Pseudo) => void;
  /** sw global pseudo listener. */
  protected swg?: (ctx: Pseudo) => void;
  /** nop pseudo listener. */
  protected nop?: (ctx: Pseudo) => void;
  /** li pseudo listener. */
  protected li?: (ctx: Pseudo) => void;
  /** mv pseudo listener. */
  protected mv?: (ctx: Pseudo) => void;
  /** not pseudo listener. */
  protected not?: (ctx: Pseudo) => void;
  /** neg pseudo listener. */
  protected neg?: (ctx: Pseudo) => void;
  /** seqz pseudo listener. */
  protected seqz?: (ctx: Pseudo) => void;
  /** snez pseudo listener. */
  protected snez?: (ctx: Pseudo) => void;
  /** sltz pseudo listener. */
  protected sltz?: (ctx: Pseudo) => void;
  /** sgtz pseudo listener. */
  protected sgtz?: (ctx: Pseudo) => void;
  /** beqz pseudo listener. */
  protected beqz?: (ctx: Pseudo) => void;
  /** bnez pseudo listener. */
  protected bnez?: (ctx: Pseudo) => void;
  /** blez pseudo listener. */
  protected blez?: (ctx: Pseudo) => void;
  /** bgez pseudo listener. */
  protected bgez?: (ctx: Pseudo) => void;
  /** bltz pseudo listener. */
  protected bltz?: (ctx: Pseudo) => void;
  /** bgt pseudo listener. */
  protected bgt?: (ctx: Pseudo) => void;
  /** ble pseudo listener. */
  protected ble?: (ctx: Pseudo) => void;
  /** bgtu pseudo listener. */
  protected bgtu?: (ctx: Pseudo) => void;
  /** bleu pseudo listener. */
  protected bleu?: (ctx: Pseudo) => void;
  /** j pseudo listener. */
  protected j?: (ctx: Pseudo) => void;
  /** jal pseudo listener. */
  protected jalp?: (ctx: Pseudo) => void;
  /** jr pseudo listener. */
  protected jr?: (ctx: Pseudo) => void;
  /** jalr pseudo listener. */
  protected jalrp?: (ctx: Pseudo) => void;
  /** ret pseudo listener. */
  protected ret?: (ctx: Pseudo) => void;
  /** call pseudo listener. */
  protected call?: (ctx: Pseudo) => void;
  /** tail pseudo listener. */
  protected tail?: (ctx: Pseudo) => void;

  /** mul instruction listener. */
  protected mul?: (ctx: RType) => void;
  /** mulh instruction listener. */
  protected mulh?: (ctx: RType) => void;
  /** mulhsu instruction listener. */
  protected mulhsu?: (ctx: RType) => void;
  /** mulhu instruction listener. */
  protected mulhu?: (ctx: RType) => void;
  /** div instruction listener. */
  protected div?: (ctx: RType) => void;
  /** divu instruction listener. */
  protected divu?: (ctx: RType) => void;
  /** rem instruction listener. */
  protected rem?: (ctx: RType) => void;
  /** remu instruction listener. */
  protected remu?: (ctx: RType) => void;

  /**
   * Creates a new RISC-V RV32G parser.
   *
   * @param file - RISC-V assembly file to parse.
   */
  constructor(file: ASMFile, st: SymbolTable, options: ParserOptions) {
    super();
    this.filename = file.name;
    this.code = file.code;
    this.st = st;
    this.options = options;
    this.errors = [];
    this.stack = [];
    this.lines = file.code.split(/\r?\n/);
  }

  /**
   * Parses RISC-V assembly file.
   */
  parse(): void {
    try {
      const lexer = (new RISCVLexer(new InputStream(this.code)) as unknown) as Lexer;
      const parser = (new RISCVParser(new CommonTokenStream(lexer)) as unknown) as Parser;
      ParseTreeWalker.DEFAULT.walk((this as unknown) as ParseTreeListener, (parser as any).prog());
    } catch (error) {}
  }

  /**
   * Gets list of parsing errors.
   *
   * @returns List of parsing errors sorted by line number.
   */
  getErrors(): ParseError[] {
    return sortBy(this.errors, ['line']);
  }

  /**
   * Adds an error to the error list.
   *
   * @param line    - Error line number (1-indexed).
   * @param column  - Error column number (1-indexed).
   * @param message - Error message.
   */
  protected addError(line: number, column: number, message: string): void {
    if (isUndefined(find(this.errors, { line }))) {
      const [source, indicator] = this.getSourceAndIndicator(line, column);
      // update error
      this.errors.push({
        filename: this.filename,
        line,
        column,
        message,
        source,
        indicator
      });
    }
  }

  /**
   * Creates a R4-Type RISC-V instruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rd       - Destination register terminal node.
   * @param rs1      - Source register 1 terminal node.
   * @param rs2      - Source register 2 terminal node.
   * @param rs3      - Source register 3 terminal node.
   * @returns R4-Type RISC-V instruction.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getR4Type(mnemonic: any, rd: any, rs1: any, rs2: any, rs3: any): R4Type {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rd: this.getRegisterNumber(rd),
      rs1: this.getRegisterNumber(rs1),
      rs2: this.getRegisterNumber(rs2),
      rs3: this.getRegisterNumber(rs3)
    };
  }

  /**
   * Creates a R-Type RISC-V instruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rd       - Destination register terminal node.
   * @param rs1      - Source register 1 terminal node.
   * @param rs2      - Source register 2 terminal node.
   * @returns R-Type RISC-V instruction.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getRType(mnemonic: any, rd: any, rs1: any, rs2: any): RType {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rd: this.getRegisterNumber(rd),
      rs1: this.getRegisterNumber(rs1),
      rs2: isUndefined(rs2) ? 0 : this.getRegisterNumber(rs2)
    };
  }

  /**
   * Creates a I-Type RISC-V instruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rd       - Destination register terminal node.
   * @param rs1      - Source register 1 terminal node.
   * @returns I-Type RISC-V instruction.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getIType(mnemonic: any, rd: any, rs1: any): IType {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rd: this.getRegisterNumber(rd),
      rs1: this.getRegisterNumber(rs1),
      expr: this.stack.pop()
    };
  }

  /**
   * Creates a S-Type RISC-V instruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rs1      - Source register 1 terminal node.
   * @param rs2      - Source register 2 terminal node.
   * @returns S-Type RISC-V instruction.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getSType(mnemonic: any, rs1: any, rs2: any): SType {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rs1: this.getRegisterNumber(rs1),
      rs2: this.getRegisterNumber(rs2),
      expr: this.stack.pop()
    };
  }

  /**
   * Creates a B-Type RISC-V instruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rs1      - Source register 1 terminal node.
   * @param rs2      - Source register 2 terminal node.
   * @param id       - Label identifier terminal node.
   * @returns B-Type RISC-V instruction.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getBType(mnemonic: any, rs1: any, rs2: any, id: any): BType {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rs1: this.getRegisterNumber(rs1),
      rs2: this.getRegisterNumber(rs2),
      expr: new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL, this.st)
    };
  }

  /**
   * Creates a U-Type RISC-V instruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rd       - Destination register terminal node.
   * @returns U-Type RISC-V instruction.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getUType(mnemonic: any, rd: any): UType {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rd: this.getRegisterNumber(rd),
      expr: this.stack.pop()
    };
  }

  /**
   * Creates a J-Type RISC-V instruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rd       - Destination register terminal node.
   * @param id       - Label identifier terminal node.
   * @returns J-Type RISC-V instruction.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getJType(mnemonic: any, rd: any, id: any): JType {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rd: this.getRegisterNumber(rd),
      expr: new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL, this.st)
    };
  }

  /**
   * Creates a RISC-V pseudoinstruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param tal      - List of true assembly instructions.
   * @returns RISC-V pseudo instruction.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getPseudo(mnemonic: any, tal: Array<R4Type | RType | IType | SType | BType | UType | JType>): Pseudo {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      tal
    };
  }

  /**
   * Creates a load RISC-V pseudoinstruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rd       - Destination register terminal node.
   * @param rt       - Source register terminal node.
   * @param id       - Target label identifier terminal node.
   * @param itype    - I-Type instruction name.
   * @returns Load RISC-V pseudoinstruction.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getLoadPseudo(mnemonic: any, rd: any, rt: any, id: any, itype: string): Pseudo {
    this.stack.push(new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL_LO, this.st));
    this.stack.push(new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL_HI, this.st));
    return this.getPseudo(mnemonic, [
      this.getUType({ ...mnemonic, symbol: { ...mnemonic.symbol, text: 'auipc' } }, rt),
      this.getIType({ ...mnemonic, symbol: { ...mnemonic.symbol, text: itype } }, rd, rt)
    ]);
  }

  /**
   * Creates a store RISC-V pseudoinstruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rd       - Destination register terminal node.
   * @param rt       - Source register terminal node.
   * @param id       - Target label identifier terminal node.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getStorePseudo(mnemonic: any, rd: any, rt: any, id: any): Pseudo {
    this.stack.push(new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL_LO, this.st));
    this.stack.push(new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL_HI, this.st));
    return this.getPseudo(mnemonic, [
      this.getUType({ ...mnemonic, symbol: { ...mnemonic.symbol, text: 'auipc' } }, rt),
      this.getSType(mnemonic, rt, rd)
    ]);
  }

  /**
   * Creates a li RISC-V pseudo instruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rd       - Destination register terminal node.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private getLiPseudo(mnemonic: any, rd: any): Pseudo {
    const e = this.stack.pop() as Expression;
    const n: number = e.build(0, []);
    if (e.hasIds() || !between(n, -2048, 2047)) {
      this.stack.push(new Lo(e.debugInfo, e));
      this.stack.push(new Hi(e.debugInfo, e));
      return this.getPseudo(mnemonic, [
        this.getUType({ ...mnemonic, symbol: { ...mnemonic.symbol, text: 'lui' } }, rd),
        this.getIType({ ...mnemonic, symbol: { ...mnemonic.symbol, text: 'addi' } }, rd, rd)
      ]);
    }
    this.stack.push(e);
    const zero = { symbol: { text: 'x0' } };
    return this.getPseudo(mnemonic, [
      this.getIType({ ...mnemonic, symbol: { ...mnemonic.symbol, text: 'addi' } }, rd, zero)
    ]);
  }

  /**
   * Adds a Constant expression to the expression stack.
   *
   * @param num - Constant literal to add as an expression.
   */
  // eslint-disable-next-line
  // @ts-ignore
  private addNumber(num: string): void {
    this.stack.push(new Constant({} as DebugInfo, num));
  }

  /**
   * Gets debugs information.
   *
   * @param info - Terminal node with debug information.
   * @returns Debug information associated with a terminal node.
   */
  private getDebugInfo(info: any): DebugInfo {
    const line: number = info.symbol ? info.symbol.line : info.line;
    const column: number = (info.symbol ? info.symbol.column : info.column) + 1;
    const [source, indicator] = this.getSourceAndIndicator(line, column);
    return {
      filename: this.filename,
      line,
      column,
      source,
      indicator
    };
  }

  /**
   * Gets the register number that represents a register terminal node or token.
   *
   * @param token - Register terminal node or token.
   * @returns The register number that represents the given terminal node or token.
   */
  private getRegisterNumber(token: any): number {
    if (!token) return 0;
    try {
      if (token.symbol) {
        return getRegisterNumber(token.symbol.text);
      } else {
        return getRegisterNumber(token.text);
      }
    } catch (error) {
      if (token.symbol) {
        this.addError(token.symbol.line, token.symbol.column + 1, error.message);
      } else {
        this.addError(token.line, token.column + 1, error.message);
      }
    }
    return 0;
  }

  /**
   * Gets the source line and indicator position.
   *
   * @param line   - Line number (1-indexed).
   * @param column - Column number (1-indexed).
   * @returns Tuple with source line and indicator position.
   */
  private getSourceAndIndicator(line: number, column: number): [string, number] {
    // remove comments and trailing whitespace
    const tmp = this.lines[line - 1].replace(/(#|;).*$/, '').trimRight();
    // remove labels and leading whitespace
    const source = tmp.trimLeft();
    // calculate indicator position
    const indicator = column - Math.max(0, tmp.length - source.length) - 1;
    return [source, indicator];
  }
}
