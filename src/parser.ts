import * as expr from './expr';
import { Relocation } from './relocation';
import { Expression, Id, Lo, Hi, Constant } from './expr';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { RISCVListener, RISCVLexer, RISCVParser } from './syntax';
import { isUndefined, sortBy, find, isFunction, split } from 'lodash';
import { getRegisterNumber, between, atoi, cleanEscapes } from '@jupitersim/helpers';
import {
  ASMFile,
  DebugInfo,
  ParseError,
  SymbolTable,
  ParserOptions,
  RType,
  IType,
  SType,
  BType,
  UType,
  JType,
  R4Type,
  Pseudo,
  Label,
  Directive
} from './types';

/**
 * RISC-V RV32G parser.
 */
// eslint-disable-next-line
// @ts-ignore
export abstract class RV32G implements RISCVListener {
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
  /** .byte directive listener. */
  protected byte?: (ctx: Directive) => void;
  /** .half directive listener. */
  protected half?: (ctx: Directive) => void;
  /** .word directive listener. */
  protected word?: (ctx: Directive) => void;
  /** .float directive listener. */
  protected float?: (ctx: Directive) => void;
  /** .ascii directive listener. */
  protected ascii?: (ctx: Directive) => void;
  /** .asciiz directive listener. */
  protected asciiz?: (ctx: Directive) => void;
  /** .zero directive listener. */
  protected zero?: (ctx: Directive) => void;

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

  /** lrw instruction listener. */
  protected lrw?: (ctx: RType) => void;
  /** scw instruction listener. */
  protected scw?: (ctx: RType) => void;
  /** amoswapw instruction listener. */
  protected amoswapw?: (ctx: RType) => void;
  /** amoaddw instruction listener. */
  protected amoaddw?: (ctx: RType) => void;
  /** amoxorw instruction listener. */
  protected amoxorw?: (ctx: RType) => void;
  /** amoandw instruction listener. */
  protected amoandw?: (ctx: RType) => void;
  /** amoorw instruction listener. */
  protected amoorw?: (ctx: RType) => void;
  /** amominw instruction listener. */
  protected amominw?: (ctx: RType) => void;
  /** amomaxw instruction listener. */
  protected amomaxw?: (ctx: RType) => void;
  /** amominuw instruction listener. */
  protected amominuw?: (ctx: RType) => void;
  /** amomaxuw instruction listener. */
  protected amomaxuw?: (ctx: RType) => void;

  /** flw instruction listener. */
  protected flw?: (ctx: IType) => void;
  /** fsw instruction listener. */
  protected fsw?: (ctx: SType) => void;
  /** fmadd.s instruction listener. */
  protected fmadds?: (ctx: R4Type) => void;
  /** fmsub.s instruction listener. */
  protected fmsubs?: (ctx: R4Type) => void;
  /** fnmsub.s instruction listener. */
  protected fnmsubs?: (ctx: R4Type) => void;
  /** fnmadd.s instruction listener. */
  protected fnmadds?: (ctx: R4Type) => void;
  /** fadd.s instruction listener. */
  protected fadds?: (ctx: RType) => void;
  /** fsub.s instruction listener. */
  protected fsubs?: (ctx: RType) => void;
  /** fmul.s instruction listener. */
  protected fmuls?: (ctx: RType) => void;
  /** fdiv.s instruction listener. */
  protected fdivs?: (ctx: RType) => void;
  /** fsqrt.s instruction listener. */
  protected fsqrts?: (ctx: RType) => void;
  /** fsgnj.s instruction listener. */
  protected fsgnjs?: (ctx: RType) => void;
  /** fsgnjn.s instruction listener. */
  protected fsgnjns?: (ctx: RType) => void;
  /** fsgnjx.s instruction listener. */
  protected fsgnjxs?: (ctx: RType) => void;
  /** fmin.s instruction listener. */
  protected fmins?: (ctx: RType) => void;
  /** fmax.s instruction listener. */
  protected fmaxs?: (ctx: RType) => void;
  /** fcvt.w.s instruction listener. */
  protected fcvtws?: (ctx: RType) => void;
  /** fcvt.wu.s instruction listener. */
  protected fcvtwus?: (ctx: RType) => void;
  /** fmv.x.w instruction listener. */
  protected fmvxw?: (ctx: RType) => void;
  /** fmv.x.s instruction listener. */
  protected fmvxs?: (ctx: RType) => void;
  /** feq.s instruction listener. */
  protected feqs?: (ctx: RType) => void;
  /** flt.s instruction listener. */
  protected flts?: (ctx: RType) => void;
  /** fle.s instruction listener. */
  protected fles?: (ctx: RType) => void;
  /** fclass.s instruction listener. */
  protected fclasss?: (ctx: RType) => void;
  /** fcvt.s.w instruction listener. */
  protected fcvtsw?: (ctx: RType) => void;
  /** fcvt.s.wu instruction listener. */
  protected fcvtswu?: (ctx: RType) => void;
  /** fmv.w.x instruction listener. */
  protected fmvwx?: (ctx: RType) => void;
  /** fmv.s.x instruction listener. */
  protected fmvsx?: (ctx: RType) => void;
  /** flw pseudo listener. */
  protected flwg?: (ctx: Pseudo) => void;
  /** fsw pseudo listener. */
  protected fswg?: (ctx: Pseudo) => void;
  /** fmv.s pseudo listener. */
  protected fmvs?: (ctx: Pseudo) => void;
  /** fabs.s pseudo listener. */
  protected fabss?: (ctx: Pseudo) => void;
  /** fneg.s pseudo listener. */
  protected fnegs?: (ctx: Pseudo) => void;

  /** fld instruction listener. */
  protected fld?: (ctx: IType) => void;
  /** fsd instruction listener. */
  protected fsd?: (ctx: SType) => void;
  /** fmadd.d instruction listener. */
  protected fmaddd?: (ctx: R4Type) => void;
  /** fmsub.d instruction listener. */
  protected fmsubd?: (ctx: R4Type) => void;
  /** fnmsub.d instruction listener. */
  protected fnmsubd?: (ctx: R4Type) => void;
  /** fnmadd.d instruction listener. */
  protected fnmaddd?: (ctx: R4Type) => void;
  /** fadd.d instruction listener. */
  protected faddd?: (ctx: RType) => void;
  /** fsub.d instruction listener. */
  protected fsubd?: (ctx: RType) => void;
  /** fmul.d instruction listener. */
  protected fmuld?: (ctx: RType) => void;
  /** fdiv.d instruction listener. */
  protected fdivd?: (ctx: RType) => void;
  /** fsqrt.d instruction listener. */
  protected fsqrtd?: (ctx: RType) => void;
  /** fsgnj.d instruction listener. */
  protected fsgnjd?: (ctx: RType) => void;
  /** fsgnjn.d instruction listener. */
  protected fsgnjnd?: (ctx: RType) => void;
  /** fsgnjx.d instruction listener. */
  protected fsgnjxd?: (ctx: RType) => void;
  /** fmin.d instruction listener. */
  protected fmind?: (ctx: RType) => void;
  /** fmax.d instruction listener. */
  protected fmaxd?: (ctx: RType) => void;
  /** fcvt.s.d instruction listener. */
  protected fcvtsd?: (ctx: RType) => void;
  /** fcvt.d.s instruction listener. */
  protected fcvtds?: (ctx: RType) => void;
  /** feq.d instruction listener. */
  protected feqd?: (ctx: RType) => void;
  /** flt.d instruction listener. */
  protected fltd?: (ctx: RType) => void;
  /** fle.d instruction listener. */
  protected fled?: (ctx: RType) => void;
  /** fclass.d instruction listener. */
  protected fclassd?: (ctx: RType) => void;
  /** fcvt.w.d instruction listener. */
  protected fcvtwd?: (ctx: RType) => void;
  /** fcvt.wu.d instruction listener. */
  protected fcvtwud?: (ctx: RType) => void;
  /** fcvt.d.w instruction listener. */
  protected fcvtdw?: (ctx: RType) => void;
  /** fcvt.d.wu instruction listener. */
  protected fcvtdwu?: (ctx: RType) => void;
  /** fld pseudo listener. */
  protected fldg?: (ctx: Pseudo) => void;
  /** fsd pseudo listener. */
  protected fsdg?: (ctx: Pseudo) => void;
  /** fmv.d pseudo listener. */
  protected fmvd?: (ctx: Pseudo) => void;
  /** fabs.d pseudo listener. */
  protected fabsd?: (ctx: Pseudo) => void;
  /** fneg.d pseudo listener. */
  protected fnegd?: (ctx: Pseudo) => void;

  /** csrrw instruction listener. */
  protected csrrw?: (ctx: IType) => void;
  /** csrrs instruction listener. */
  protected csrrs?: (ctx: IType) => void;
  /** csrrc instruction listener. */
  protected csrrc?: (ctx: IType) => void;
  /** csrrwi instruction listener. */
  protected csrrwi?: (ctx: IType) => void;
  /** csrrsi instruction listener. */
  protected csrrsi?: (ctx: IType) => void;
  /** csrrci instruction listener. */
  protected csrrci?: (ctx: IType) => void;
  /** rdinstreth pseudo listener. */
  protected rdinstreth?: (ctx: Pseudo) => void;
  /** rdinstret pseudo listener. */
  protected rdinstret?: (ctx: Pseudo) => void;
  /** rdcycleh pseudo listener. */
  protected rdcycleh?: (ctx: Pseudo) => void;
  /** rdcycle pseudo listener. */
  protected rdcycle?: (ctx: Pseudo) => void;
  /** rdtimeh pseudo listener. */
  protected rdtimeh?: (ctx: Pseudo) => void;
  /** rdtime pseudo listener. */
  protected rdtime?: (ctx: Pseudo) => void;
  /** csrr pseudo listener. */
  protected csrr?: (ctx: Pseudo) => void;
  /** csrw pseudo listener. */
  protected csrw?: (ctx: Pseudo) => void;
  /** csrs pseudo listener. */
  protected csrs?: (ctx: Pseudo) => void;
  /** csrc pseudo listener. */
  protected csrc?: (ctx: Pseudo) => void;
  /** csrwi pseudo listener. */
  protected csrwi?: (ctx: Pseudo) => void;
  /** csrsi pseudo listener. */
  protected csrsi?: (ctx: Pseudo) => void;
  /** csrci pseudo listener. */
  protected csrci?: (ctx: Pseudo) => void;
  /** frcsr pseudo listener. */
  protected frcsr?: (ctx: Pseudo) => void;
  /** fscsr pseudo listener. */
  protected fscsr?: (ctx: Pseudo) => void;
  /** frrm pseudo listener. */
  protected frrm?: (ctx: Pseudo) => void;
  /** fsrm pseudo listener. */
  protected fsrm?: (ctx: Pseudo) => void;
  /** frflags pseudo listener. */
  protected frflags?: (ctx: Pseudo) => void;
  /** fsflags pseudo listener. */
  protected fsflags?: (ctx: Pseudo) => void;

  /** fence.i instruction listener. */
  protected fencei?: (ctx: IType) => void;

  /**
   * Creates a new RISC-V RV32G parser.
   *
   * @param file - RISC-V assembly file to parse.
   */
  constructor(file: ASMFile, st: SymbolTable, options: ParserOptions) {
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
      const lexer = new RISCVLexer(new ANTLRInputStream(this.code));
      const parser = new RISCVParser(new CommonTokenStream(lexer));
      // eslint-disable-next-line
      // @ts-ignore
      ParseTreeWalker.DEFAULT.walk(this, parser.prog());
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
   * @param uimm     - If source register 1 is an unsigned immediate.
   * @returns I-Type RISC-V instruction.
   */
  private getIType(mnemonic: any, rd: any, rs1: any, uimm = false): IType {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rd: this.getRegisterNumber(rd),
      rs1: uimm ? this.getUImm(rs1) : this.getRegisterNumber(rs1),
      expr: this.stack.pop() as Expression
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
  private getSType(mnemonic: any, rs1: any, rs2: any): SType {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rs1: this.getRegisterNumber(rs1),
      rs2: this.getRegisterNumber(rs2),
      expr: this.stack.pop() as Expression
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
  private getUType(mnemonic: any, rd: any): UType {
    return {
      debugInfo: this.getDebugInfo(mnemonic),
      mnemonic: mnemonic.symbol.text,
      rd: this.getRegisterNumber(rd),
      expr: this.stack.pop() as Expression
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
  private getLoadPseudo(mnemonic: any, rd: any, rt: any, id: any, itype: string): Pseudo {
    this.stack.push(new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL_LO, this.st));
    this.stack.push(new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL_HI, this.st));
    const line = mnemonic.symbol.line;
    const charPositionInLine = mnemonic.symbol.charPositionInLine;
    return this.getPseudo(mnemonic, [
      this.getUType({ symbol: { line, charPositionInLine, text: 'auipc' } }, rt),
      this.getIType({ symbol: { line, charPositionInLine, text: itype } }, rd, rt)
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
  private getStorePseudo(mnemonic: any, rd: any, rt: any, id: any): Pseudo {
    this.stack.push(new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL_LO, this.st));
    this.stack.push(new Id(this.getDebugInfo(id), id.symbol.text, Relocation.PCREL_HI, this.st));
    const line = mnemonic.symbol.line;
    const charPositionInLine = mnemonic.symbol.charPositionInLine;
    return this.getPseudo(mnemonic, [
      this.getUType({ symbol: { line, charPositionInLine, text: 'auipc' } }, rt),
      this.getSType(mnemonic, rt, rd)
    ]);
  }

  /**
   * Creates a li RISC-V pseudo instruction.
   *
   * @param mnemonic - Instruction mnemonic terminal node.
   * @param rd       - Destination register terminal node.
   */
  private getLiPseudo(mnemonic: any, rd: any): Pseudo {
    const e = this.stack.pop() as Expression;
    const n: number = e.build(0, []);
    const line = mnemonic.symbol.line;
    const charPositionInLine = mnemonic.symbol.charPositionInLine;
    if (e.hasIds() || !between(n, -2048, 2047)) {
      this.stack.push(new Lo(e.debugInfo, e));
      this.stack.push(new Hi(e.debugInfo, e));
      return this.getPseudo(mnemonic, [
        this.getUType({ symbol: { line, charPositionInLine, text: 'lui' } }, rd),
        this.getIType({ symbol: { line, charPositionInLine, text: 'addi' } }, rd, rd)
      ]);
    }
    this.stack.push(e);
    const zero = { symbol: { text: 'x0' } };
    return this.getPseudo(mnemonic, [this.getIType({ symbol: { line, charPositionInLine, text: 'addi' } }, rd, zero)]);
  }

  /**
   * Adds a Constant expression to the expression stack.
   *
   * @param num - Constant literal to add as an expression.
   */
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
    const column: number = (info.symbol ? info.symbol.charPositionInLine : info.charPositionInLine) + 1;
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
   * Gets the register number that represents a register terminal node.
   *
   * @param token - Register terminal node.
   * @returns The register number that represents the given terminal node.
   */
  private getRegisterNumber(token: any): number {
    if (!token) return 0;
    try {
      return getRegisterNumber(token.symbol.text);
    } catch (error) {
      this.addError(token.symbol.line, token.symbol.charPositionInLine + 1, error.message);
    }
    return 0;
  }

  /**
   * Gets an unsigned immediate for some CSR instructions.
   *
   * @param token - Unsigned immediate terminal token.
   */
  private getUImm(token: any): number {
    if (!token) return 0;
    try {
      return atoi(token.text);
    } catch (error) {
      this.addError(token.line, token.charPositionInLine + 1, error.message);
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

  // RV32I

  /** {@inheritdoc} */
  enterRV32IPSEUDOS(ctx: any) {
    if (!this.options.pseudos) {
      this.addError(ctx.start.line, ctx.start.charPositionInLine + 1, 'Pseudoinstructions are disabled');
    }
  }

  /** {@inheritdoc} */
  exitLUI(ctx: any) {
    if (isFunction(this.lui)) {
      this.lui(this.getUType(ctx.I_LUI(), ctx.XREG(0)));
    }
  }

  /** {@inheritdoc} */
  exitAUIPC(ctx: any) {
    if (isFunction(this.auipc)) {
      this.auipc(this.getUType(ctx.I_AUIPC(), ctx.XREG(0)));
    }
  }

  /** {@inheritdoc} */
  exitJAL(ctx: any) {
    if (isFunction(this.jal)) {
      this.jal(this.getJType(ctx.I_JAL(), ctx.XREG(0), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitJALR(ctx: any) {
    if (isFunction(this.jalr)) {
      this.jalr(this.getIType(ctx.I_JALR(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitBEQ(ctx: any) {
    if (isFunction(this.beq)) {
      this.beq(this.getBType(ctx.I_BEQ(), ctx.XREG(0), ctx.XREG(1), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitBNE(ctx: any) {
    if (isFunction(this.bne)) {
      this.bne(this.getBType(ctx.I_BNE(), ctx.XREG(0), ctx.XREG(1), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitBLT(ctx: any) {
    if (isFunction(this.blt)) {
      this.blt(this.getBType(ctx.I_BLT(), ctx.XREG(0), ctx.XREG(1), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitBGE(ctx: any) {
    if (isFunction(this.bge)) {
      this.bge(this.getBType(ctx.I_BGE(), ctx.XREG(0), ctx.XREG(1), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitBLTU(ctx: any) {
    if (isFunction(this.bltu)) {
      this.bltu(this.getBType(ctx.I_BLTU(), ctx.XREG(0), ctx.XREG(1), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitBGEU(ctx: any) {
    if (isFunction(this.bgeu)) {
      this.bgeu(this.getBType(ctx.I_BGEU(), ctx.XREG(0), ctx.XREG(1), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitLB(ctx: any) {
    if (isFunction(this.lb)) {
      this.lb(this.getIType(ctx.I_LB(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitLH(ctx: any) {
    if (isFunction(this.lh)) {
      this.lh(this.getIType(ctx.I_LH(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitLW(ctx: any) {
    if (isFunction(this.lw)) {
      this.lw(this.getIType(ctx.I_LW(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitLBU(ctx: any) {
    if (isFunction(this.lbu)) {
      this.lbu(this.getIType(ctx.I_LBU(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitLHU(ctx: any) {
    if (isFunction(this.lhu)) {
      this.lhu(this.getIType(ctx.I_LHU(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitSB(ctx: any) {
    if (isFunction(this.sb)) {
      this.sb(this.getSType(ctx.I_SB(), ctx.XREG(1), ctx.XREG(0)));
    }
  }

  /** {@inheritdoc} */
  exitSH(ctx: any) {
    if (isFunction(this.sh)) {
      this.sh(this.getSType(ctx.I_SH(), ctx.XREG(1), ctx.XREG(0)));
    }
  }

  /** {@inheritdoc} */
  exitSW(ctx: any) {
    if (isFunction(this.sw)) {
      this.sw(this.getSType(ctx.I_SW(), ctx.XREG(1), ctx.XREG(0)));
    }
  }

  /** {@inheritdoc} */
  exitADDI(ctx: any) {
    if (isFunction(this.addi)) {
      this.addi(this.getIType(ctx.I_ADDI(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitSLTI(ctx: any) {
    if (isFunction(this.slti)) {
      this.slti(this.getIType(ctx.I_SLTI(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitSLTIU(ctx: any) {
    if (isFunction(this.sltiu)) {
      this.sltiu(this.getIType(ctx.I_SLTIU(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitXORI(ctx: any) {
    if (isFunction(this.xori)) {
      this.xori(this.getIType(ctx.I_XORI(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitORI(ctx: any) {
    if (isFunction(this.ori)) {
      this.ori(this.getIType(ctx.I_ORI(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitANDI(ctx: any) {
    if (isFunction(this.andi)) {
      this.andi(this.getIType(ctx.I_ANDI(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitSLLI(ctx: any) {
    if (isFunction(this.slli)) {
      this.slli(this.getIType(ctx.I_SLLI(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitSRLI(ctx: any) {
    if (isFunction(this.srli)) {
      this.srli(this.getIType(ctx.I_SRLI(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitSRAI(ctx: any) {
    if (isFunction(this.srai)) {
      this.srai(this.getIType(ctx.I_SRAI(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitADD(ctx: any) {
    if (isFunction(this.add)) {
      this.add(this.getRType(ctx.I_ADD(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitSUB(ctx: any) {
    if (isFunction(this.sub)) {
      this.sub(this.getRType(ctx.I_SUB(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitSLL(ctx: any) {
    if (isFunction(this.sll)) {
      this.sll(this.getRType(ctx.I_SLL(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitSLT(ctx: any) {
    if (isFunction(this.slt)) {
      this.slt(this.getRType(ctx.I_SLT(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitSLTU(ctx: any) {
    if (isFunction(this.sltu)) {
      this.sltu(this.getRType(ctx.I_SLTU(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitXOR(ctx: any) {
    if (isFunction(this.xor)) {
      this.xor(this.getRType(ctx.I_XOR(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitSRL(ctx: any) {
    if (isFunction(this.srl)) {
      this.srl(this.getRType(ctx.I_SRL(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitSRA(ctx: any) {
    if (isFunction(this.sra)) {
      this.sra(this.getRType(ctx.I_SRA(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitOR(ctx: any) {
    if (isFunction(this.or)) {
      this.or(this.getRType(ctx.I_OR(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAND(ctx: any) {
    if (isFunction(this.and)) {
      this.and(this.getRType(ctx.I_AND(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFENCE(ctx: any) {
    if (isFunction(this.fence)) {
      this.addNumber('0');
      this.fence(this.getIType(ctx.I_FENCE(), { symbol: { text: 'x0' } }, { symbol: { text: 'x0' } }));
    }
  }

  /** {@inheritdoc} */
  exitECALL(ctx: any) {
    if (isFunction(this.ecall)) {
      this.addNumber('0');
      this.ecall(this.getIType(ctx.I_ECALL(), { symbol: { text: 'x0' } }, { symbol: { text: 'x0' } }));
    }
  }

  /** {@inheritdoc} */
  exitEBREAK(ctx: any) {
    if (isFunction(this.ebreak)) {
      this.addNumber('1');
      this.ebreak(this.getIType(ctx.I_EBREAK(), { symbol: { text: 'x0' } }, { symbol: { text: 'x0' } }));
    }
  }

  // RV32I Pseudos

  /** {@inheritdoc} */
  exitLAPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.la)) {
      this.la(this.getLoadPseudo(ctx.I_LA(), ctx.XREG(), ctx.XREG(), ctx.ID(), 'addi'));
    }
  }

  /** {@inheritdoc} */
  exitLLAPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.lla)) {
      this.lla(this.getLoadPseudo(ctx.I_LLA(), ctx.XREG(), ctx.XREG(), ctx.ID(), 'addi'));
    }
  }

  /** {@inheritdoc} */
  exitLBPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.lbg)) {
      this.lbg(this.getLoadPseudo(ctx.I_LB(), ctx.XREG(), ctx.XREG(), ctx.ID(), 'lb'));
    }
  }

  /** {@inheritdoc} */
  exitLHPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.lhg)) {
      this.lhg(this.getLoadPseudo(ctx.I_LH(), ctx.XREG(), ctx.XREG(), ctx.ID(), 'lh'));
    }
  }

  /** {@inheritdoc} */
  exitLWPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.lwg)) {
      this.lwg(this.getLoadPseudo(ctx.I_LW(), ctx.XREG(), ctx.XREG(), ctx.ID(), 'lw'));
    }
  }

  /** {@inheritdoc} */
  exitSBPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.sbg)) {
      this.sbg(this.getStorePseudo(ctx.I_SB(), ctx.XREG(0), ctx.XREG(1), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitSHPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.shg)) {
      this.shg(this.getStorePseudo(ctx.I_SH(), ctx.XREG(0), ctx.XREG(1), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitSWPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.swg)) {
      this.swg(this.getStorePseudo(ctx.I_SW(), ctx.XREG(0), ctx.XREG(1), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitNOPPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.nop)) {
      const mnemonic = ctx.I_NOP();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'addi' } };
      const zero = { symbol: { text: 'x0' } };
      this.addNumber('0');
      this.nop(this.getPseudo(mnemonic, [this.getIType(tal, zero, zero)]));
    }
  }

  /** {@inheritdoc} */
  exitLIPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.li)) {
      this.li(this.getLiPseudo(ctx.I_LI(), ctx.XREG()));
    }
  }

  /** {@inheritdoc} */
  exitMVPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.mv)) {
      const mnemonic = ctx.I_MV();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'addi' } };
      this.addNumber('0');
      this.mv(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitNOTPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.not)) {
      const mnemonic = ctx.I_NOT();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'xori' } };
      this.addNumber('-1');
      this.not(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitNEGPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.neg)) {
      const mnemonic = ctx.I_NEG();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'sub' } };
      const zero = { symbol: { text: 'x0' } };
      this.neg(this.getPseudo(mnemonic, [this.getRType(tal, ctx.XREG(0), zero, ctx.XREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitSEQZPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.seqz)) {
      const mnemonic = ctx.I_SEQZ();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'sltiu' } };
      this.addNumber('1');
      this.seqz(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitSNEZPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.snez)) {
      const mnemonic = ctx.I_SNEZ();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'sltu' } };
      const zero = { symbol: { text: 'x0' } };
      this.snez(this.getPseudo(mnemonic, [this.getRType(tal, ctx.XREG(0), zero, ctx.XREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitSLTZPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.sltz)) {
      const mnemonic = ctx.I_SLTZ();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'slt' } };
      const zero = { symbol: { text: 'x0' } };
      this.sltz(this.getPseudo(mnemonic, [this.getRType(tal, ctx.XREG(0), ctx.XREG(1), zero)]));
    }
  }

  /** {@inheritdoc} */
  exitSGTZPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.sgtz)) {
      const mnemonic = ctx.I_SGTZ();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'slt' } };
      const zero = { symbol: { text: 'x0' } };
      this.sgtz(this.getPseudo(mnemonic, [this.getRType(tal, ctx.XREG(0), zero, ctx.XREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitBEQZPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.beqz)) {
      const mnemonic = ctx.I_BEQZ();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'beq' } };
      const zero = { symbol: { text: 'x0' } };
      this.beqz(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(), zero, ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitBNEZPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.bnez)) {
      const mnemonic = ctx.I_BNEZ();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'bne' } };
      const zero = { symbol: { text: 'x0' } };
      this.bnez(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(), zero, ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitBLEZPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.blez)) {
      const mnemonic = ctx.I_BLEZ();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'bge' } };
      const zero = { symbol: { text: 'x0' } };
      this.blez(this.getPseudo(mnemonic, [this.getBType(tal, zero, ctx.XREG(), ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitBGEZPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.bgez)) {
      const mnemonic = ctx.I_BGEZ();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'bge' } };
      const zero = { symbol: { text: 'x0' } };
      this.bgez(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(), zero, ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitBLTZPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.bltz)) {
      const mnemonic = ctx.I_BLTZ();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'blt' } };
      const zero = { symbol: { text: 'x0' } };
      this.bltz(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(), zero, ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitBGTPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.bgt)) {
      const mnemonic = ctx.I_BGT();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'blt' } };
      this.bgt(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(1), ctx.XREG(0), ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitBLEPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.ble)) {
      const mnemonic = ctx.I_BLE();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'bge' } };
      this.ble(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(1), ctx.XREG(0), ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitBGTUPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.bgtu)) {
      const mnemonic = ctx.I_BGTU();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'bltu' } };
      this.bgtu(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(1), ctx.XREG(0), ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitBLEUPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.bleu)) {
      const mnemonic = ctx.I_BLEU();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'bgeu' } };
      this.bleu(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(1), ctx.XREG(0), ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitJPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.j)) {
      const mnemonic = ctx.I_J();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'jal' } };
      const zero = { symbol: { text: 'x0' } };
      this.j(this.getPseudo(mnemonic, [this.getJType(tal, zero, ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitJALPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.jalp)) {
      const mnemonic = ctx.I_JAL();
      const ra = { symbol: { text: 'x1' } };
      this.jalp(this.getPseudo(mnemonic, [this.getJType(mnemonic, ra, ctx.ID())]));
    }
  }

  /** {@inheritdoc} */
  exitJRPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.jr)) {
      const mnemonic = ctx.I_JR();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'jalr' } };
      const zero = { symbol: { text: 'x0' } };
      this.addNumber('0');
      this.jr(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
    }
  }

  /** {@inheritdoc} */
  exitJALRPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.jalrp)) {
      const mnemonic = ctx.I_JALR();
      const ra = { symbol: { text: 'x1' } };
      this.addNumber('0');
      this.jalrp(this.getPseudo(mnemonic, [this.getIType(mnemonic, ra, ctx.XREG())]));
    }
  }

  /** {@inheritdoc} */
  exitRETPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.ret)) {
      const mnemonic = ctx.I_RET();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'jalr' } };
      const zero = { symbol: { text: 'x0' } };
      const ra = { symbol: { text: 'x1' } };
      this.addNumber('0');
      this.ret(this.getPseudo(mnemonic, [this.getIType(tal, zero, ra)]));
    }
  }

  /** {@inheritdoc} */
  exitCALLPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.call)) {
      const ra = { symbol: { text: 'x1' } };
      this.call(this.getLoadPseudo(ctx.I_CALL(), ra, ra, ctx.ID(), 'jalr'));
    }
  }

  /** {@inheritdoc} */
  exitTAILPSEUDO(ctx: any) {
    if (this.options.pseudos && isFunction(this.tail)) {
      const t1 = { symbol: { text: 'x6' } };
      const zero = { symbol: { text: 'x0' } };
      this.tail(this.getLoadPseudo(ctx.I_TAIL(), zero, t1, ctx.ID(), 'jalr'));
    }
  }

  // RV32M

  /** {@inheritdoc} */
  enterRV32M(ctx: any) {
    if (!this.options.extensions.m) {
      this.addError(ctx.start.line, ctx.start.charPositionInLine + 1, 'RV32M extension is disabled');
    }
  }

  /** {@inheritdoc} */
  exitMUL(ctx: any) {
    if (this.options.extensions.m && isFunction(this.mul)) {
      this.mul(this.getRType(ctx.I_MUL(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitMULH(ctx: any) {
    if (this.options.extensions.m && isFunction(this.mulh)) {
      this.mulh(this.getRType(ctx.I_MULH(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitMULHSU(ctx: any) {
    if (this.options.extensions.m && isFunction(this.mulhsu)) {
      this.mulhsu(this.getRType(ctx.I_MULHSU(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitMULHU(ctx: any) {
    if (this.options.extensions.m && isFunction(this.mulhu)) {
      this.mulhu(this.getRType(ctx.I_MULHU(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitDIV(ctx: any) {
    if (this.options.extensions.m && isFunction(this.div)) {
      this.div(this.getRType(ctx.I_DIV(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitDIVU(ctx: any) {
    if (this.options.extensions.m && isFunction(this.divu)) {
      this.divu(this.getRType(ctx.I_DIVU(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitREM(ctx: any) {
    if (this.options.extensions.m && isFunction(this.rem)) {
      this.rem(this.getRType(ctx.I_REM(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitREMU(ctx: any) {
    if (this.options.extensions.m && isFunction(this.remu)) {
      this.remu(this.getRType(ctx.I_REMU(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  // RV32A

  /** {@inheritdoc} */
  enterRV32A(ctx: any) {
    if (!this.options.extensions.a) {
      this.addError(ctx.start.line, ctx.start.charPositionInLine + 1, 'RV32A extension is disabled');
    }
  }

  /** {@inheritdoc} */
  exitLRW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.lrw)) {
      this.lrw(this.getRType(ctx.I_LRW(), ctx.XREG(0), ctx.XREG(1), undefined));
    }
  }

  /** {@inheritdoc} */
  exitSCW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.scw)) {
      this.scw(this.getRType(ctx.I_SCW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAMOSWAPW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.amoswapw)) {
      this.amoswapw(this.getRType(ctx.I_AMOSWAPW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAMOADDW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.amoaddw)) {
      this.amoaddw(this.getRType(ctx.I_AMOADDW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAMOXORW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.amoxorw)) {
      this.amoxorw(this.getRType(ctx.I_AMOXORW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAMOANDW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.amoandw)) {
      this.amoandw(this.getRType(ctx.I_AMOANDW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAMOORW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.amoorw)) {
      this.amoorw(this.getRType(ctx.I_AMOORW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAMOMINW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.amominw)) {
      this.amominw(this.getRType(ctx.I_AMOMINW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAMOMAXW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.amomaxw)) {
      this.amomaxw(this.getRType(ctx.I_AMOMAXW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAMOMINUW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.amominuw)) {
      this.amominuw(this.getRType(ctx.I_AMOMINUW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitAMOMAXUW(ctx: any) {
    if (this.options.extensions.a && isFunction(this.amomaxuw)) {
      this.amomaxuw(this.getRType(ctx.I_AMOMAXUW(), ctx.XREG(0), ctx.XREG(1), ctx.XREG(2)));
    }
  }

  // RV32F

  /** {@inheritdoc} */
  enterRV32F(ctx: any) {
    if (!this.options.extensions.f) {
      this.addError(ctx.start.line, ctx.start.charPositionInLine + 1, 'RV32F extension is disabled');
    }
  }

  /** {@inheritdoc} */
  enterRV32FPSEUDOS(ctx: any) {
    if (!this.options.extensions.f) {
      this.addError(ctx.start.line, ctx.start.charPositionInLine + 1, 'RV32F extension is disabled');
    } else if (!this.options.pseudos) {
      this.addError(ctx.start.line, ctx.start.charPositionInLine + 1, 'Pseudoinstructions are disabled');
    }
  }

  /** {@inheritdoc} */
  exitFLW(ctx: any) {
    if (this.options.extensions.f && isFunction(this.flw)) {
      this.flw(this.getIType(ctx.I_FLW(), ctx.FREG(), ctx.XREG()));
    }
  }

  /** {@inheritdoc} */
  exitFSW(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fsw)) {
      this.fsw(this.getSType(ctx.I_FSW(), ctx.XREG(), ctx.FREG()));
    }
  }

  /** {@inheritdoc} */
  exitFMADDS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fmadds)) {
      this.fmadds(this.getR4Type(ctx.I_FMADDS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2), ctx.FREG(3)));
    }
  }

  /** {@inheritdoc} */
  exitFMSUBS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fmsubs)) {
      this.fmsubs(this.getR4Type(ctx.I_FMSUBS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2), ctx.FREG(3)));
    }
  }

  /** {@inheritdoc} */
  exitFNMSUBS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fnmsubs)) {
      this.fnmsubs(this.getR4Type(ctx.I_FNMSUBS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2), ctx.FREG(3)));
    }
  }

  /** {@inheritdoc} */
  exitFNMADDS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fnmadds)) {
      this.fnmadds(this.getR4Type(ctx.I_FNMADDS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2), ctx.FREG(3)));
    }
  }

  /** {@inheritdoc} */
  exitFADDS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fadds)) {
      this.fadds(this.getRType(ctx.I_FADDS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFSUBS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fsubs)) {
      this.fsubs(this.getRType(ctx.I_FSUBS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFMULS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fmuls)) {
      this.fmuls(this.getRType(ctx.I_FMULS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFDIVS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fdivs)) {
      this.fdivs(this.getRType(ctx.I_FDIVS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFSQRTS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fsqrts)) {
      this.fsqrts(this.getRType(ctx.I_FSQRTS(), ctx.FREG(0), ctx.FREG(1), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFSGNJS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fsgnjs)) {
      this.fsgnjs(this.getRType(ctx.I_FSGNJS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFSGNJNS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fsgnjns)) {
      this.fsgnjns(this.getRType(ctx.I_FSGNJNS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFSGNJXS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fsgnjxs)) {
      this.fsgnjxs(this.getRType(ctx.I_FSGNJXS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFMINS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fmins)) {
      this.fmins(this.getRType(ctx.I_FMINS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFMAXS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fmaxs)) {
      this.fmaxs(this.getRType(ctx.I_FMAXS(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFCVTWS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fcvtws)) {
      this.fcvtws(this.getRType(ctx.I_FCVTWS(), ctx.XREG(), ctx.FREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFCVTWUS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fcvtwus)) {
      this.fcvtwus(this.getRType(ctx.I_FCVTWUS(), ctx.XREG(), ctx.FREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFMVXW(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fmvxw)) {
      this.fmvxw(this.getRType(ctx.I_FMVXW(), ctx.XREG(), ctx.FREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFMVXS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fmvxs)) {
      this.fmvxs(this.getRType(ctx.I_FMVXS(), ctx.XREG(), ctx.FREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFEQS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.feqs)) {
      this.feqs(this.getRType(ctx.I_FEQS(), ctx.XREG(), ctx.FREG(0), ctx.FREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitFLTS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.flts)) {
      this.flts(this.getRType(ctx.I_FLTS(), ctx.XREG(), ctx.FREG(0), ctx.FREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitFLES(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fles)) {
      this.fles(this.getRType(ctx.I_FLES(), ctx.XREG(), ctx.FREG(0), ctx.FREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitFCLASSS(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fclasss)) {
      this.fclasss(this.getRType(ctx.I_FCLASSS(), ctx.XREG(), ctx.FREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFCVTSW(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fcvtsw)) {
      this.fcvtsw(this.getRType(ctx.I_FCVTSW(), ctx.FREG(), ctx.XREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFCVTSWU(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fcvtswu)) {
      this.fcvtswu(this.getRType(ctx.I_FCVTSWU(), ctx.FREG(), ctx.XREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFMVWX(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fmvwx)) {
      this.fmvwx(this.getRType(ctx.I_FMVWX(), ctx.FREG(), ctx.XREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFMVSX(ctx: any) {
    if (this.options.extensions.f && isFunction(this.fmvsx)) {
      this.fmvsx(this.getRType(ctx.I_FMVSX(), ctx.FREG(), ctx.XREG(), undefined));
    }
  }

  // Pseudos

  /** {@inheritdoc} */
  exitFLWPSEUDO(ctx: any) {
    if (this.options.extensions.f && this.options.pseudos && isFunction(this.flwg)) {
      this.flwg(this.getLoadPseudo(ctx.I_FLW(), ctx.FREG(), ctx.XREG(), ctx.ID(), 'flw'));
    }
  }

  /** {@inheritdoc} */
  exitFSWPSEUDO(ctx: any) {
    if (this.options.extensions.f && this.options.pseudos && isFunction(this.fswg)) {
      this.fswg(this.getStorePseudo(ctx.I_FSW(), ctx.FREG(), ctx.XREG(), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitFMVSPSEUDO(ctx: any) {
    if (this.options.extensions.f && this.options.pseudos && isFunction(this.fmvs)) {
      const mnemonic = ctx.I_FMVS();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'fsgnj.s' } };
      this.fmvs(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitFABSSPSEUDO(ctx: any) {
    if (this.options.extensions.f && this.options.pseudos && isFunction(this.fabss)) {
      const mnemonic = ctx.I_FABSS();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'fsgnjx.s' } };
      this.fabss(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitFNEGSPSEUDO(ctx: any) {
    if (this.options.extensions.f && this.options.pseudos && isFunction(this.fnegs)) {
      const mnemonic = ctx.I_FNEGS();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'fsgnjn.s' } };
      this.fnegs(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
    }
  }

  // RV32D

  /** {@inheritdoc} */
  enterRV32D(ctx: any) {
    if (!this.options.extensions.d) {
      this.addError(ctx.start.line, ctx.start.column + 1, 'RV32D extension is disabled');
    }
  }

  /** {@inheritdoc} */
  enterRV32DPSEUDOS(ctx: any) {
    if (!this.options.extensions.d) {
      this.addError(ctx.start.line, ctx.start.column + 1, 'RV32D extension is disabled');
    } else if (!this.options.pseudos) {
      this.addError(ctx.start.line, ctx.start.column + 1, 'Pseudoinstructions are disabled');
    }
  }

  /** {@inheritdoc} */
  exitFLD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fld)) {
      this.fld(this.getIType(ctx.I_FLD(), ctx.FREG(), ctx.XREG()));
    }
  }

  /** {@inheritdoc} */
  exitFSD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fsd)) {
      this.fsd(this.getSType(ctx.I_FSD(), ctx.XREG(), ctx.FREG()));
    }
  }

  /** {@inheritdoc} */
  exitFMADDD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fmaddd)) {
      this.fmaddd(this.getR4Type(ctx.I_FMADDD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2), ctx.FREG(3)));
    }
  }

  /** {@inheritdoc} */
  exitFMSUBD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fmsubd)) {
      this.fmsubd(this.getR4Type(ctx.I_FMSUBD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2), ctx.FREG(3)));
    }
  }

  /** {@inheritdoc} */
  exitFNMSUBD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fnmsubd)) {
      this.fnmsubd(this.getR4Type(ctx.I_FNMSUBD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2), ctx.FREG(3)));
    }
  }

  /** {@inheritdoc} */
  exitFNMADDD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fnmaddd)) {
      this.fnmaddd(this.getR4Type(ctx.I_FNMADDD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2), ctx.FREG(3)));
    }
  }

  /** {@inheritdoc} */
  exitFADDD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.faddd)) {
      this.faddd(this.getRType(ctx.I_FADDD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFSUBD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fsubd)) {
      this.fsubd(this.getRType(ctx.I_FSUBD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFMULD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fmuld)) {
      this.fmuld(this.getRType(ctx.I_FMULD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFDIVD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fdivd)) {
      this.fdivd(this.getRType(ctx.I_FDIVD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFSQRTD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fsqrtd)) {
      this.fsqrtd(this.getRType(ctx.I_FSQRTD(), ctx.FREG(0), ctx.FREG(1), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFSGNJD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fsgnjd)) {
      this.fsgnjd(this.getRType(ctx.I_FSGNJD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFSGNJND(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fsgnjnd)) {
      this.fsgnjnd(this.getRType(ctx.I_FSGNJND(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFSGNJXD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fsgnjxd)) {
      this.fsgnjxd(this.getRType(ctx.I_FSGNJXD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFMIND(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fmind)) {
      this.fmind(this.getRType(ctx.I_FMIND(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFMAXD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fmaxd)) {
      this.fmaxd(this.getRType(ctx.I_FMAXD(), ctx.FREG(0), ctx.FREG(1), ctx.FREG(2)));
    }
  }

  /** {@inheritdoc} */
  exitFCVTSD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fcvtsd)) {
      this.fcvtsd(this.getRType(ctx.I_FCVTSD(), ctx.FREG(0), ctx.FREG(1), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFCVTDS(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fcvtds)) {
      this.fcvtds(this.getRType(ctx.I_FCVTDS(), ctx.FREG(0), ctx.FREG(1), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFEQD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.feqd)) {
      this.feqd(this.getRType(ctx.I_FEQD(), ctx.XREG(), ctx.FREG(0), ctx.FREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitFLTD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fltd)) {
      this.fltd(this.getRType(ctx.I_FLTD(), ctx.XREG(), ctx.FREG(0), ctx.FREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitFLED(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fled)) {
      this.fled(this.getRType(ctx.I_FLED(), ctx.XREG(), ctx.FREG(0), ctx.FREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitFCLASSD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fclassd)) {
      this.fclassd(this.getRType(ctx.I_FCLASSD(), ctx.XREG(), ctx.FREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFCVTWD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fcvtwd)) {
      this.fcvtwd(this.getRType(ctx.I_FCVTWD(), ctx.XREG(), ctx.FREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFCVTWUD(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fcvtwud)) {
      this.fcvtwud(this.getRType(ctx.I_FCVTWUD(), ctx.XREG(), ctx.FREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFCVTDW(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fcvtdw)) {
      this.fcvtdw(this.getRType(ctx.I_FCVTDW(), ctx.FREG(), ctx.XREG(), undefined));
    }
  }

  /** {@inheritdoc} */
  exitFCVTDWU(ctx: any) {
    if (this.options.extensions.d && isFunction(this.fcvtdwu)) {
      this.fcvtdwu(this.getRType(ctx.I_FCVTDWU(), ctx.FREG(), ctx.XREG(), undefined));
    }
  }

  // Pseudos

  /** {@inheritdoc} */
  exitFLDPSEUDO(ctx: any) {
    if (this.options.extensions.d && this.options.pseudos && isFunction(this.fldg)) {
      this.fldg(this.getLoadPseudo(ctx.I_FLD(), ctx.FREG(), ctx.XREG(), ctx.ID(), 'fld'));
    }
  }

  /** {@inheritdoc} */
  exitFSDPSEUDO(ctx: any) {
    if (this.options.extensions.d && this.options.pseudos && isFunction(this.fsdg)) {
      this.fsdg(this.getStorePseudo(ctx.I_FSD(), ctx.FREG(), ctx.XREG(), ctx.ID()));
    }
  }

  /** {@inheritdoc} */
  exitFMVDPSEUDO(ctx: any) {
    if (this.options.extensions.d && this.options.pseudos && isFunction(this.fmvd)) {
      const mnemonic = ctx.I_FMVD();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'fsgnj.d' } };
      this.fmvd(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitFABSDPSEUDO(ctx: any) {
    if (this.options.extensions.d && this.options.pseudos && isFunction(this.fabsd)) {
      const mnemonic = ctx.I_FABSD();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'fsgnjx.d' } };
      this.fabsd(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitFNEGDPSEUDO(ctx: any) {
    if (this.options.extensions.d && this.options.pseudos && isFunction(this.fnegd)) {
      const mnemonic = ctx.I_FNEGD();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'fsgnjn.d' } };
      this.fnegd(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
    }
  }

  // RV32Zicsr

  /** {@inheritdoc} */
  enterRV32Zicsr(ctx: any) {
    if (!this.options.extensions.zicsr) {
      this.addError(ctx.start.line, ctx.start.column + 1, 'RV32Zicsr extension is disabled');
    }
  }

  /** {@inheritdoc} */
  enterRV32ZicsrPSEUDOS(ctx: any) {
    if (!this.options.extensions.zicsr) {
      this.addError(ctx.start.line, ctx.start.column + 1, 'RV32Zicsr extension is disabled');
    } else if (!this.options.pseudos) {
      this.addError(ctx.start.line, ctx.start.column + 1, 'Pseudoinstructions are disabled');
    }
  }

  /** {@inheritdoc} */
  exitCSRRW(ctx: any) {
    if (this.options.extensions.zicsr && isFunction(this.csrrw)) {
      this.csrrw(this.getIType(ctx.I_CSRRW(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitCSRRS(ctx: any) {
    if (this.options.extensions.zicsr && isFunction(this.csrrs)) {
      this.csrrs(this.getIType(ctx.I_CSRRS(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitCSRRC(ctx: any) {
    if (this.options.extensions.zicsr && isFunction(this.csrrc)) {
      this.csrrc(this.getIType(ctx.I_CSRRC(), ctx.XREG(0), ctx.XREG(1)));
    }
  }

  /** {@inheritdoc} */
  exitCSRRWI(ctx: any) {
    if (this.options.extensions.zicsr && isFunction(this.csrrwi)) {
      this.csrrwi(this.getIType(ctx.I_CSRRWI(), ctx.XREG(0), ctx.uimm()._i, true));
    }
  }

  /** {@inheritdoc} */
  exitCSRRSI(ctx: any) {
    if (this.options.extensions.zicsr && isFunction(this.csrrsi)) {
      this.csrrsi(this.getIType(ctx.I_CSRRSI(), ctx.XREG(0), ctx.uimm()._i, true));
    }
  }

  /** {@inheritdoc} */
  exitCSRRCI(ctx: any) {
    if (this.options.extensions.zicsr && isFunction(this.csrrci)) {
      this.csrrci(this.getIType(ctx.I_CSRRCI(), ctx.XREG(0), ctx.uimm()._i, true));
    }
  }

  /** {@inheritdoc} */
  exitRDINSTRETPSEUDO(ctx: any) {
    if (!this.options.pseudos) return;
    if (!this.options.extensions.zicsr) return;
    const mnemonic = ctx.I_RDINSTRET();
    const line = mnemonic.symbol.line;
    const charPositionInLine = mnemonic.symbol.charPositionInLine;
    const tal = { symbol: { line, charPositionInLine, text: 'csrrs' } };
    const zero = { symbol: { text: 'x0' } };
    if (mnemonic.symbol.text.toLowerCase().endsWith('h')) {
      if (isFunction(this.rdinstreth)) {
        this.addNumber('0xC82');
        this.rdinstreth(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
      }
    } else if (isFunction(this.rdinstret)) {
      this.addNumber('0xC02');
      this.rdinstret(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
    }
  }

  /** {@inheritdoc} */
  exitRDCYCLEPSEUDO(ctx: any) {
    if (!this.options.pseudos) return;
    if (!this.options.extensions.zicsr) return;
    const mnemonic = ctx.I_RDCYCLE();
    const line = mnemonic.symbol.line;
    const charPositionInLine = mnemonic.symbol.charPositionInLine;
    const tal = { symbol: { line, charPositionInLine, text: 'csrrs' } };
    const zero = { symbol: { text: 'x0' } };
    if (mnemonic.symbol.text.toLowerCase().endsWith('h')) {
      if (isFunction(this.rdcycleh)) {
        this.addNumber('0xC80');
        this.rdcycleh(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
      }
    } else if (isFunction(this.rdcycle)) {
      this.addNumber('0xC00');
      this.rdcycle(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
    }
  }

  /** {@inheritdoc} */
  exitRDTIMEPSEUDO(ctx: any) {
    if (!this.options.pseudos) return;
    if (!this.options.extensions.zicsr) return;
    const mnemonic = ctx.I_RDTIME();
    const line = mnemonic.symbol.line;
    const charPositionInLine = mnemonic.symbol.charPositionInLine;
    const tal = { symbol: { line, charPositionInLine, text: 'csrrs' } };
    const zero = { symbol: { text: 'x0' } };
    if (mnemonic.symbol.text.toLowerCase().endsWith('h')) {
      if (isFunction(this.rdtimeh)) {
        this.addNumber('0xC81');
        this.rdtimeh(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
      }
    } else if (isFunction(this.rdtime)) {
      this.addNumber('0xC01');
      this.rdtime(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
    }
  }

  /** {@inheritdoc} */
  exitCSRRPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrr)) {
      const mnemonic = ctx.I_CSRR();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrs' } };
      const zero = { symbol: { text: 'x0' } };
      this.csrr(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
    }
  }

  /** {@inheritdoc} */
  exitCSRWPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrw)) {
      const mnemonic = ctx.I_CSRW();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrw' } };
      const zero = { symbol: { text: 'x0' } };
      this.csrw(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
    }
  }

  /** {@inheritdoc} */
  exitCSRSPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrs)) {
      const mnemonic = ctx.I_CSRS();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrs' } };
      const zero = { symbol: { text: 'x0' } };
      this.csrs(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
    }
  }

  /** {@inheritdoc} */
  exitCSRCPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrc)) {
      const mnemonic = ctx.I_CSRC();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrc' } };
      const zero = { symbol: { text: 'x0' } };
      this.csrc(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
    }
  }

  /** {@inheritdoc} */
  exitCSRWIPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrwi)) {
      const mnemonic = ctx.I_CSRWI();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrwi' } };
      const zero = { symbol: { text: 'x0' } };
      this.csrwi(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.uimm()._i, true)]));
    }
  }

  /** {@inheritdoc} */
  exitCSRSIPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrsi)) {
      const mnemonic = ctx.I_CSRSI();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrsi' } };
      const zero = { symbol: { text: 'x0' } };
      this.csrsi(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.uimm()._i, true)]));
    }
  }

  /** {@inheritdoc} */
  exitCSRCIPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrci)) {
      const mnemonic = ctx.I_CSRCI();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrci' } };
      const zero = { symbol: { text: 'x0' } };
      this.csrci(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.uimm()._i, true)]));
    }
  }

  /** {@inheritdoc} */
  exitFRCSRPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.frcsr)) {
      const mnemonic = ctx.I_FRCSR();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrs' } };
      const zero = { symbol: { text: 'x0' } };
      this.addNumber('0x3');
      this.frcsr(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
    }
  }

  /** {@inheritdoc} */
  exitFSCSR2PSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fscsr)) {
      const mnemonic = ctx.I_FSCSR();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrw' } };
      this.addNumber('0x3');
      this.fscsr(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitFSCSRPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fscsr)) {
      const mnemonic = ctx.I_FSCSR();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrw' } };
      const zero = { symbol: { text: 'x0' } };
      this.addNumber('0x3');
      this.fscsr(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
    }
  }

  /** {@inheritdoc} */
  exitFRRMPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.frrm)) {
      const mnemonic = ctx.I_FRRM();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrs' } };
      const zero = { symbol: { text: 'x0' } };
      this.addNumber('0x2');
      this.frrm(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
    }
  }

  /** {@inheritdoc} */
  exitFSRM2PSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fsrm)) {
      const mnemonic = ctx.I_FSRM();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrw' } };
      this.addNumber('0x2');
      this.fsrm(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitFSRMPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fsrm)) {
      const mnemonic = ctx.I_FSRM();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrw' } };
      const zero = { symbol: { text: 'x0' } };
      this.addNumber('0x2');
      this.fsrm(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
    }
  }

  /** {@inheritdoc} */
  exitFRFLAGSPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.frflags)) {
      const mnemonic = ctx.I_FRFLAGS();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrs' } };
      const zero = { symbol: { text: 'x0' } };
      this.addNumber('0x1');
      this.frflags(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
    }
  }

  /** {@inheritdoc} */
  exitFSFLAGS2PSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fsflags)) {
      const mnemonic = ctx.I_FSFLAGS();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrw' } };
      this.addNumber('0x1');
      this.fsflags(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
    }
  }

  /** {@inheritdoc} */
  exitFSFLAGSPSEUDO(ctx: any) {
    if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fsflags)) {
      const mnemonic = ctx.I_FSFLAGS();
      const line = mnemonic.symbol.line;
      const charPositionInLine = mnemonic.symbol.charPositionInLine;
      const tal = { symbol: { line, charPositionInLine, text: 'csrrw' } };
      const zero = { symbol: { text: 'x0' } };
      this.addNumber('0x1');
      this.fsflags(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
    }
  }

  // RV32Zifencei

  /** {@inheritdoc} */
  enterRV32Zifencei(ctx: any) {
    if (!this.options.extensions.zifencei) {
      this.addError(ctx.start.line, ctx.start.column + 1, 'RV32Zifencei extension is disabled');
    }
  }

  /** {@inheritdoc} */
  exitFENCEI(ctx: any) {
    if (this.options.extensions.zifencei && isFunction(this.fencei)) {
      this.addNumber('0');
      const zero = { symbol: { text: 'x0' } };
      this.fencei(this.getIType(ctx.I_FENCEI(), zero, zero));
    }
  }

  // Label

  /** {@inheritdoc} */
  exitLABEL(ctx: any) {
    if (isFunction(this.label)) {
      const label = ctx.LABEL();
      this.label({
        debugInfo: this.getDebugInfo(label),
        name: label.symbol.text.substring(0, label.symbol.text.length - 1)
      });
    }
  }

  // Directives

  /** {@inheritdoc} */
  exitBSS(ctx: any) {
    if (isFunction(this.bss)) {
      this.bss({ debugInfo: this.getDebugInfo(ctx._d), directive: '.bss' });
    }
  }

  /** {@inheritdoc} */
  exitDATA(ctx: any) {
    if (isFunction(this.data)) {
      this.data({ debugInfo: this.getDebugInfo(ctx._d), directive: '.data' });
    }
  }

  /** {@inheritdoc} */
  exitRODATA(ctx: any) {
    if (isFunction(this.rodata)) {
      this.rodata({ debugInfo: this.getDebugInfo(ctx._d), directive: '.rodata' });
    }
  }

  /** {@inheritdoc} */
  exitTEXT(ctx: any) {
    if (isFunction(this.text)) {
      this.text({ debugInfo: this.getDebugInfo(ctx._d), directive: '.text' });
    }
  }

  /** {@inheritdoc} */
  exitGLOBL(ctx: any) {
    if (isFunction(this.globl)) {
      const labels: Label[] = [];
      ctx.ID().forEach((e: any) =>
        labels.push({
          debugInfo: this.getDebugInfo(e.symbol),
          name: e.symbol.text
        })
      );
      this.globl({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        labels
      });
    }
  }

  /** {@inheritdoc} */
  exitALIGN(ctx: any) {
    if (isFunction(this.align)) {
      this.align({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        expr: new Constant(this.getDebugInfo(ctx._i), ctx._i.text)
      });
    }
  }

  /** {@inheritdoc} */
  exitBALIGN(ctx: any) {
    if (isFunction(this.balign)) {
      this.balign({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        expr: new Constant(this.getDebugInfo(ctx._i), ctx._i.text)
      });
    }
  }

  /** {@inheritdoc} */
  exitFILE(ctx: any) {
    if (isFunction(this.file)) {
      const file = ctx.STRING().symbol.text;
      this.file({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        file: cleanEscapes(file.substring(1, file.length - 1))
      });
    }
  }

  /** {@inheritdoc} */
  exitEQU(ctx: any) {
    if (isFunction(this.equ)) {
      this.equ({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        id: ctx.ID().symbol.text,
        expr: this.stack.pop()
      });
    }
  }

  /** {@inheritdoc} */
  exitBYTE(ctx: any) {
    if (isFunction(this.byte)) {
      const data: Expression[] = [];
      ctx.expr().forEach(() => data.push(this.stack.pop() as Expression));
      data.reverse();
      this.byte({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        data
      });
    }
  }

  /** {@inheritdoc} */
  exitHALF(ctx: any) {
    if (isFunction(this.half)) {
      const data: Expression[] = [];
      ctx.expr().forEach(() => data.push(this.stack.pop() as Expression));
      data.reverse();
      this.half({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        data
      });
    }
  }

  /** {@inheritdoc} */
  exitWORD(ctx: any) {
    if (isFunction(this.word)) {
      const data: Expression[] = [];
      ctx.expr().forEach(() => data.push(this.stack.pop() as Expression));
      data.reverse();
      this.word({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        data
      });
    }
  }

  /** {@inheritdoc} */
  exitFLOAT(ctx: any) {
    if (isFunction(this.float)) {
      const data: Expression[] = [];
      ctx.fexpr().forEach(() => data.push(this.stack.pop() as Expression));
      data.reverse();
      this.float({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        data
      });
    }
  }

  /** {@inheritdoc} */
  exitASCII(ctx: any) {
    if (isFunction(this.ascii)) {
      const str = ctx.STRING().symbol.text;
      this.ascii({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        bytes: split(cleanEscapes(str.substring(1, str.length - 1)), '')
      });
    }
  }

  /** {@inheritdoc} */
  exitASCIIZ(ctx: any) {
    if (isFunction(this.asciiz)) {
      const str = ctx.STRING().symbol.text;
      this.asciiz({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        bytes: split(cleanEscapes(str.substring(1, str.length - 1)), '')
      });
    }
  }

  /** {@inheritdoc} */
  exitZERO(ctx: any) {
    if (isFunction(this.zero)) {
      this.zero({
        debugInfo: this.getDebugInfo(ctx._d),
        directive: ctx._d.text,
        expr: new Constant(this.getDebugInfo(ctx._i), ctx._i.text)
      });
    }
  }

  // Expressions

  /** {@inheritdoc} */
  exitUNARYEXPR(ctx: any) {
    if (ctx._op.text === '-') {
      this.stack.push(new expr.UMinus(this.getDebugInfo(ctx._op), this.stack.pop() as Expression));
    }
  }

  /** {@inheritdoc} */
  exitPLUSEXPR(ctx: any) {
    const e2 = this.stack.pop() as Expression;
    const e1 = this.stack.pop() as Expression;
    if (ctx._op.text === '+') {
      this.stack.push(new expr.Plus(this.getDebugInfo(ctx._op), e1, e2));
    } else {
      this.stack.push(new expr.Minus(this.getDebugInfo(ctx._op), e1, e2));
    }
  }

  /** {@inheritdoc} */
  exitINTEXPR(ctx: any) {
    const i = ctx.INT().symbol;
    this.stack.push(new expr.Constant(this.getDebugInfo(i), i.text));
  }

  /** {@inheritdoc} */
  exitHEXEXPR(ctx: any) {
    const i = ctx.HEX().symbol;
    this.stack.push(new expr.Constant(this.getDebugInfo(i), i.text));
  }

  /** {@inheritdoc} */
  exitBINEXPR(ctx: any) {
    const i = ctx.BIN().symbol;
    this.stack.push(new expr.Constant(this.getDebugInfo(i), i.text));
  }

  /** {@inheritdoc} */
  exitCHAREXPR(ctx: any) {
    const c = ctx.CHAR().symbol;
    this.stack.push(new expr.Constant(this.getDebugInfo(c), c.text));
  }

  /** {@inheritdoc} */
  exitIDEXPR(ctx: any) {
    const id = ctx.ID().symbol;
    this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.ABSOLUTE, this.st));
  }

  /** {@inheritdoc} */
  exitHIRELEXPR(ctx: any) {
    const id = ctx.ID().symbol;
    this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.HI, this.st));
  }

  /** {@inheritdoc} */
  exitLORELEXPR(ctx: any) {
    const id = ctx.ID().symbol;
    this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.LO, this.st));
  }

  /** {@inheritdoc} */
  exitPCRELHIRELEXPR(ctx: any) {
    const id = ctx.ID().symbol;
    this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.PCREL_HI, this.st));
  }

  /** {@inheritdoc} */
  exitPCRELLORELEXPR(ctx: any) {
    const id = ctx.ID().symbol;
    this.stack.push(new expr.Id(this.getDebugInfo(id), id.text, Relocation.PCREL_LO, this.st));
  }

  /** {@inheritdoc} */
  exitUNARYFEXPR(ctx: any) {
    if (ctx._op.text === '-') {
      this.stack.push(new expr.UMinus(this.getDebugInfo(ctx._op), this.stack.pop() as Expression));
    }
  }

  /** {@inheritdoc} */
  exitINTFEXPR(ctx: any) {
    const f = ctx.INT().symbol;
    this.stack.push(new expr.Float(this.getDebugInfo(f), f.text));
  }

  /** {@inheritdoc} */
  exitHEXFEXPR(ctx: any) {
    const f = ctx.HEX().symbol;
    this.stack.push(new expr.Float(this.getDebugInfo(f), f.text));
  }

  /** {@inheritdoc} */
  exitBINFEXPR(ctx: any) {
    const f = ctx.BIN().symbol;
    this.stack.push(new expr.Float(this.getDebugInfo(f), f.text));
  }

  /** {@inheritdoc} */
  exitFLOATFEXPR(ctx: any) {
    const f = ctx.FLOAT().symbol;
    this.stack.push(new expr.Float(this.getDebugInfo(f), f.text));
  }
}
