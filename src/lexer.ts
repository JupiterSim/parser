/**
 * Lexer token.
 */
export interface Token {
  /** Token identifier. */
  id: number;
  /** Token start position. */
  start: number;
  /** Token stop position. */
  stop: number;
  /** Token line number. */
  line: number;
  /** Token column number. */
  column: number;
  /** Token value. */
  value: string;
}

/**
 * Lexer error.
 */
export class LexerError extends Error {
  /** Offending token. */
  readonly token: Token;

  /**
   * Creates a new lexer error.
   *
   * @param message - Error message.
   */
  constructor(message: string, token: Token) {
    super(message);
    Object.setPrototypeOf(this, LexerError.prototype);
    this.token = token;
  }
}

/** Lexer rules. */
const RULES = [
  // KEYWORDS
  { name: 'AMOMAXUW', regex: 'amomaxu\\.w' },
  { name: 'AMOMINUW', regex: 'amominu\\.w' },
  { name: 'AMOSWAPW', regex: 'amoswap\\.w' },
  { name: 'FCVTDWU', regex: 'fcvt\\.d\\.wu' },
  { name: 'FCVTSWU', regex: 'fcvt\\.s\\.wu' },
  { name: 'FCVTWUD', regex: 'fcvt\\.wu\\.d' },
  { name: 'FCVTWUS', regex: 'fcvt\\.wu\\.s' },
  { name: 'RDINSTRET', regex: 'rdinstret' },
  { name: 'AMOADDW', regex: 'amoadd\\.w' },
  { name: 'AMOANDW', regex: 'amoand\\.w' },
  { name: 'AMOMAXW', regex: 'amomax\\.w' },
  { name: 'AMOMINW', regex: 'amomin\\.w' },
  { name: 'AMOXORW', regex: 'amoxor\\.w' },
  { name: 'FCLASSD', regex: 'fclass\\.d' },
  { name: 'FCLASSS', regex: 'fclass\\.s' },
  { name: 'FCVTDS', regex: 'fcvt\\.d\\.s' },
  { name: 'FCVTDW', regex: 'fcvt\\.d\\.w' },
  { name: 'FCVTSD', regex: 'fcvt\\.s\\.d' },
  { name: 'FCVTSW', regex: 'fcvt\\.s\\.w' },
  { name: 'FCVTWD', regex: 'fcvt\\.w\\.d' },
  { name: 'FCVTWS', regex: 'fcvt\\.w\\.s' },
  { name: 'FNMADDD', regex: 'fnmadd\\.d' },
  { name: 'FNMADDS', regex: 'fnmadd\\.s' },
  { name: 'FNMSUBD', regex: 'fnmsub\\.d' },
  { name: 'FNMSUBS', regex: 'fnmsub\\.s' },
  { name: 'FSGNJND', regex: 'fsgnjn\\.d' },
  { name: 'FSGNJNS', regex: 'fsgnjn\\.s' },
  { name: 'FSGNJXD', regex: 'fsgnjx\\.d' },
  { name: 'FSGNJXS', regex: 'fsgnjx\\.s' },
  { name: 'AMOORW', regex: 'amoor\\.w' },
  { name: 'FENCEI', regex: 'fence\\.i' },
  { name: 'FMADDD', regex: 'fmadd\\.d' },
  { name: 'FMADDS', regex: 'fmadd\\.s' },
  { name: 'FMSUBD', regex: 'fmsub\\.d' },
  { name: 'FMSUBS', regex: 'fmsub\\.s' },
  { name: 'FMVWX', regex: 'fmv\\.w\\.x' },
  { name: 'FMVXW', regex: 'fmv\\.x\\.w' },
  { name: 'FRFLAGS', regex: 'frflags' },
  { name: 'FSFLAGS', regex: 'fsflags' },
  { name: 'FSGNJD', regex: 'fsgnj\\.d' },
  { name: 'FSGNJS', regex: 'fsgnj\\.s' },
  { name: 'FSQRTD', regex: 'fsqrt\\.d' },
  { name: 'FSQRTS', regex: 'fsqrt\\.s' },
  { name: 'RDCYCLE', regex: 'rdcycle' },
  { name: 'CSRRCI', regex: 'csrrci' },
  { name: 'CSRRSI', regex: 'csrrsi' },
  { name: 'CSRRWI', regex: 'csrrwi' },
  { name: 'EBREAK', regex: 'ebreak' },
  { name: 'FABSD', regex: 'fabs\\.d' },
  { name: 'FABSS', regex: 'fabs\\.s' },
  { name: 'FADDD', regex: 'fadd\\.d' },
  { name: 'FADDS', regex: 'fadd\\.s' },
  { name: 'FDIVD', regex: 'fdiv\\.d' },
  { name: 'FDIVS', regex: 'fdiv\\.s' },
  { name: 'FMAXD', regex: 'fmax\\.d' },
  { name: 'FMAXS', regex: 'fmax\\.s' },
  { name: 'FMIND', regex: 'fmin\\.d' },
  { name: 'FMINS', regex: 'fmin\\.s' },
  { name: 'FMULD', regex: 'fmul\\.d' },
  { name: 'FMULS', regex: 'fmul\\.s' },
  { name: 'FNEGD', regex: 'fneg\\.d' },
  { name: 'FNEGS', regex: 'fneg\\.s' },
  { name: 'FSUBD', regex: 'fsub\\.d' },
  { name: 'FSUBS', regex: 'fsub\\.s' },
  { name: 'MULHSU', regex: 'mulhsu' },
  { name: 'RDTIME', regex: 'rdtime' },
  { name: 'AUIPC', regex: 'auipc' },
  { name: 'CSRCI', regex: 'csrci' },
  { name: 'CSRRC', regex: 'csrrc' },
  { name: 'CSRRS', regex: 'csrrs' },
  { name: 'CSRRW', regex: 'csrrw' },
  { name: 'CSRSI', regex: 'csrsi' },
  { name: 'CSRWI', regex: 'csrwi' },
  { name: 'ECALL', regex: 'ecall' },
  { name: 'FENCE', regex: 'fence' },
  { name: 'FEQD', regex: 'feq\\.d' },
  { name: 'FEQS', regex: 'feq\\.s' },
  { name: 'FLED', regex: 'fle\\.d' },
  { name: 'FLES', regex: 'fle\\.s' },
  { name: 'FLTD', regex: 'flt\\.d' },
  { name: 'FLTS', regex: 'flt\\.s' },
  { name: 'FMVD', regex: 'fmv\\.d' },
  { name: 'FMVS', regex: 'fmv\\.s' },
  { name: 'FRCSR', regex: 'frcsr' },
  { name: 'FSCSR', regex: 'fscsr' },
  { name: 'MULHU', regex: 'mulhu' },
  { name: 'SLTIU', regex: 'sltiu' },
  { name: 'ADDI', regex: 'addi' },
  { name: 'ANDI', regex: 'andi' },
  { name: 'BEQZ', regex: 'beqz' },
  { name: 'BGEU', regex: 'bgeu' },
  { name: 'BGEZ', regex: 'bgez' },
  { name: 'BGTU', regex: 'bgtu' },
  { name: 'BGTZ', regex: 'bgtz' },
  { name: 'BLEU', regex: 'bleu' },
  { name: 'BLEZ', regex: 'blez' },
  { name: 'BLTU', regex: 'bltu' },
  { name: 'BLTZ', regex: 'bltz' },
  { name: 'BNEZ', regex: 'bnez' },
  { name: 'CALL', regex: 'call' },
  { name: 'CSRC', regex: 'csrc' },
  { name: 'CSRR', regex: 'csrr' },
  { name: 'CSRS', regex: 'csrs' },
  { name: 'CSRW', regex: 'csrw' },
  { name: 'DIVU', regex: 'divu' },
  { name: 'FRRM', regex: 'frrm' },
  { name: 'FSRM', regex: 'fsrm' },
  { name: 'JALR', regex: 'jalr' },
  { name: 'LRW', regex: 'lr\\.w' },
  { name: 'MULH', regex: 'mulh' },
  { name: 'REMU', regex: 'remu' },
  { name: 'SCW', regex: 'sc\\.w' },
  { name: 'SEQZ', regex: 'seqz' },
  { name: 'SGTZ', regex: 'sgtz' },
  { name: 'SLLI', regex: 'slli' },
  { name: 'SLTI', regex: 'slti' },
  { name: 'SLTU', regex: 'sltu' },
  { name: 'SLTZ', regex: 'sltz' },
  { name: 'SNEZ', regex: 'snez' },
  { name: 'SRAI', regex: 'srai' },
  { name: 'SRLI', regex: 'srli' },
  { name: 'TAIL', regex: 'tail' },
  { name: 'XORI', regex: 'xori' },
  { name: 'ADD', regex: 'add' },
  { name: 'AND', regex: 'and' },
  { name: 'BEQ', regex: 'beq' },
  { name: 'BGE', regex: 'bge' },
  { name: 'BGT', regex: 'bgt' },
  { name: 'BLE', regex: 'ble' },
  { name: 'BLT', regex: 'blt' },
  { name: 'BNE', regex: 'bne' },
  { name: 'DIV', regex: 'div' },
  { name: 'FLD', regex: 'fld' },
  { name: 'FLW', regex: 'flw' },
  { name: 'FSD', regex: 'fsd' },
  { name: 'FSW', regex: 'fsw' },
  { name: 'JAL', regex: 'jal' },
  { name: 'LBU', regex: 'lbu' },
  { name: 'LHU', regex: 'lhu' },
  { name: 'LLA', regex: 'lla' },
  { name: 'LUI', regex: 'lui' },
  { name: 'MUL', regex: 'mul' },
  { name: 'NEG', regex: 'neg' },
  { name: 'NOP', regex: 'nop' },
  { name: 'NOT', regex: 'not' },
  { name: 'ORI', regex: 'ori' },
  { name: 'REM', regex: 'rem' },
  { name: 'RET', regex: 'ret' },
  { name: 'SLL', regex: 'sll' },
  { name: 'SLT', regex: 'slt' },
  { name: 'SRA', regex: 'sra' },
  { name: 'SRL', regex: 'srl' },
  { name: 'SUB', regex: 'sub' },
  { name: 'XOR', regex: 'xor' },
  { name: 'JR', regex: 'jr' },
  { name: 'LA', regex: 'la' },
  { name: 'LB', regex: 'lb' },
  { name: 'LH', regex: 'lh' },
  { name: 'LI', regex: 'li' },
  { name: 'LW', regex: 'lw' },
  { name: 'MV', regex: 'mv' },
  { name: 'OR', regex: 'or' },
  { name: 'SB', regex: 'sb' },
  { name: 'SH', regex: 'sh' },
  { name: 'SW', regex: 'sw' },
  { name: 'J', regex: 'j' },
  // DIRECTIVES
  { name: 'D_BYTE', regex: '\\.byte' },
  { name: 'D_HALF', regex: '\\.(2byte|short|half)' },
  { name: 'D_WORD', regex: '\\.(4byte|word|long)' },
  { name: 'D_FLOAT', regex: '\\.float' },
  { name: 'D_STRING', regex: '\\.(string|asciiz|asciz)' },
  { name: 'D_ASCII', regex: '\\.ascii' },
  { name: 'D_ZERO', regex: '\\.(space|zero)' },
  { name: 'D_SECTION', regex: '\\.section' },
  { name: 'D_BSS', regex: '\\.bss' },
  { name: 'D_DATA', regex: '\\.data' },
  { name: 'D_RODATA', regex: '\\.rodata' },
  { name: 'D_TEXT', regex: '\\.text' },
  { name: 'D_GLOBL', regex: '\\.(global|globl)' },
  { name: 'D_ALIGN', regex: '\\.(p2align|align)' },
  { name: 'D_BALIGN', regex: '\\.balign' },
  { name: 'D_FILE', regex: '\\.file' },
  { name: 'D_EQU', regex: '\\.(equiv|equ)' },
  // RELOCATIONS
  { name: 'R_HI', regex: '%hi' },
  { name: 'R_LO', regex: '%lo' },
  { name: 'R_PCREL_HI', regex: '%pcrel_hi' },
  { name: 'R_PCREL_LO', regex: '%pcrel_lo' },
  // REGISTERS
  { name: 'XREG', regex: '(x(3[01]|[12][0-9]|[0-9])|zero|ra|sp|gp|tp|fp|t[0-6]|a[0-7]|s(10|11|[0-9]))' },
  { name: 'FREG', regex: '(f(3[01]|[12][0-9]|[0-9])|ft(10|11|[0-9])|fa[0-7]|fs(10|11|[0-9]))' },
  // NUMBERS
  { name: 'FLOAT', regex: '([0-9]*\\.[0-9]+([eE][+-][0-9]+)?|NaN|nan|inf|Inf)' },
  { name: 'INT', regex: '(0[xX][a-fA-F0-9]+|0[bB][01]+|[0-9]+)' },
  // STRINGS
  { name: 'STRING', regex: '"([^"]|\\[\'"?abfnrtv\\]|\\?\n)*?"' },
  { name: 'CHAR', regex: "'([^'\\\n]|\\['\"?abfnrtv\\])+?'" },
  // IDENTIFIERS
  { name: 'LABEL', regex: '[a-zA-Z_$@][.a-zA-Z0-9_$@]*?:' },
  { name: 'ID', regex: '[a-zA-Z_$@][.a-zA-Z0-9_$@]*' },
  // ELEMENTS
  { name: 'COMMA', regex: ',' },
  { name: 'LPAREN', regex: '\\(' },
  { name: 'RPAREN', regex: '\\)' },
  { name: 'PLUS', regex: '[+]' },
  { name: 'MINUS', regex: '[-]' },
  // NEWLINE
  { name: 'EOL', regex: '\n+' },
  // COMMENTS
  { name: 'COMMENT', regex: '[#;][^\r\n]*' },
  // WHITESPACE
  { name: 'WHITESPACE', regex: '^[ \t]+' },
  // ERROR
  { name: 'ERROR', regex: '.' }
];

/** Label regex. */
const LABEL = /^[a-zA-Z_$@][.a-zA-Z0-9_$@]*:/;

/** ID regex. */
const ID = /^[a-zA-Z_$@][.a-zA-Z0-9_$@]*/;

/** Single regex matcher. */
const REGEX = new RegExp(`^${RULES.map((e) => `(?<${e.name}>${e.regex})`).join('|')}`);

/** Token ids. */
export const IDS: { [name: string]: number } = { EOF: 0 };

/** Token names.  */
export const NAMES: string[] = ['EOF'];

RULES.forEach((e, i): void => {
  IDS[e.name] = i + 1;
  NAMES.push(e.name);
});

/**
 * RISC-V RV32G lexer.
 */
export class Lexer {
  /** private static EOF token. */
  static readonly EOF: Token = {
    id: 0,
    start: Infinity,
    stop: Infinity,
    line: Infinity,
    column: Infinity,
    value: '\0'
  };

  /** Buffer of characters. */
  private buff: string;
  /** Current buffer position. */
  private pos: number;
  /** Buffer length. */
  private len: number;
  /** Current line. */
  private line: number;
  /** Current column. */
  private column: number;

  /**
   * Creates a new RISC-V lexer.
   *
   * @param buff - Buffer input.
   */
  constructor(buff: string) {
    this.buff = buff.replace(/\r?\n/gm, '\n');
    this.pos = 0;
    this.len = this.buff.length;
    this.line = 1;
    this.column = 1;
  }

  /**
   * Gets all tokens from input buffer ignoring comments and whitespace.
   *
   * @returns List of all tokens.
   */
  tokens(): Token[] {
    this.pos = 0;
    this.line = 1;
    this.column = 1;
    const tokens: Token[] = [];
    let exit = false;
    while (!exit) {
      const token = this.nextToken();
      if (token.id === IDS.EOF) exit = true;
      if (token.id === IDS.COMMENT) continue;
      if (token.id === IDS.WHITESPACE) continue;
      tokens.push(token);
    }
    return tokens;
  }

  /**
   * Gets the next token from input buffer ignoring comments and whitespace.
   *
   * @returns Next token.
   */
  next(): Token {
    while (true) {
      const token = this.nextToken();
      if (token.id === IDS.COMMENT) continue;
      if (token.id === IDS.WHITESPACE) continue;
      return token;
    }
  }

  /**
   * Gets the next token from input buffer.
   *
   * @returns Next lexer token.
   */
  private nextToken(): Token {
    if (this.pos < this.len) {
      // handle char and strings separately
      if (this.buff.charAt(this.pos) === '"') return this.getString();
      if (this.buff.charAt(this.pos) === "'") return this.getChar();
      const data = this.buff.substring(this.pos);
      const match: any = REGEX.exec(data);
      const idMatch = ID.exec(data);
      const labelMatch = LABEL.exec(data);
      // find if a regex group match
      for (let i = 0; i < NAMES.length; i++) {
        const name = NAMES[i];
        // We always have a match thanks to the error token
        if (!match.groups[name]) continue;
        let id = IDS[name];
        let value: string = match.groups[name];
        // ensure longest match
        if (id !== IDS.LABEL && labelMatch && labelMatch[0].length > value.length) {
          id = IDS.LABEL;
          value = labelMatch[0];
        } else if (id !== IDS.ID && idMatch && idMatch[0].length > value.length) {
          id = IDS.ID;
          value = idMatch[0];
        }
        // calculate token info
        const start = this.pos;
        const stop = this.pos + value.length;
        const line = this.line;
        const column = this.column;
        this.pos += value.length;
        this.column += value.length;
        // set current line and column
        if (id === IDS.EOL) {
          this.line += value.length;
          this.column = 1;
        }
        const token: Token = { id, start, stop, line, column, value };
        if (id === IDS.ERROR) throw new LexerError('invalid language element', token);
        return token;
      }
    }
    return Lexer.EOF;
  }

  /**
   * Gets next string token.
   *
   * @returns String token.
   * @throws Lexer error if an invalid string token is found.
   */
  private getString(): Token {
    const token = {
      id: IDS.STRING,
      start: this.pos,
      stop: this.pos,
      line: this.line,
      column: this.column,
      value: '"'
    };
    this.pos++;
    this.column++;
    let escape = false;
    while (this.pos < this.len) {
      const c = this.buff.charAt(this.pos);
      token.value += c;
      this.column++;
      this.pos++;
      switch (c) {
        case '"':
          token.stop = this.pos;
          return token;
        case '\\':
          escape = true;
          break;
        case '\n':
          if (!escape) throw new LexerError('unterminated string constant', token);
          escape = false;
          this.line++;
          this.column = 1;
          break;
        default:
          escape = false;
          break;
      }
    }
    throw new LexerError('EOF in string constant', token);
  }

  /**
   * Gets next char token.
   *
   * @returns Char token.
   * @throws Lexer error if an invalid char constant is found.
   */
  private getChar(): Token {
    const token = {
      id: IDS.CHAR,
      start: this.pos,
      stop: this.pos,
      line: this.line,
      column: this.column,
      value: "'"
    };
    this.pos++;
    this.column++;
    while (this.pos < this.len) {
      const c = this.buff.charAt(this.pos);
      token.value += c;
      this.column++;
      this.pos++;
      switch (c) {
        case "'":
          token.stop = this.pos;
          return token;
        case '\n':
          throw new LexerError('unterminated char constant', token);
        default:
          break;
      }
    }
    throw new LexerError('EOF in char constant', token);
  }
}
