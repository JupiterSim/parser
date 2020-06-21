// Generated from src/syntax/RISCV.g4 by ANTLR 4.7.3-SNAPSHOT
// @ts-nocheck

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RISCVListener } from "./RISCVListener";

export class RISCVParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly I_LUI = 37;
	public static readonly I_AUIPC = 38;
	public static readonly I_JAL = 39;
	public static readonly I_JALR = 40;
	public static readonly I_BEQ = 41;
	public static readonly I_BNE = 42;
	public static readonly I_BLT = 43;
	public static readonly I_BGE = 44;
	public static readonly I_BLTU = 45;
	public static readonly I_BGEU = 46;
	public static readonly I_LB = 47;
	public static readonly I_LH = 48;
	public static readonly I_LW = 49;
	public static readonly I_LBU = 50;
	public static readonly I_LHU = 51;
	public static readonly I_SB = 52;
	public static readonly I_SH = 53;
	public static readonly I_SW = 54;
	public static readonly I_ADDI = 55;
	public static readonly I_SLTI = 56;
	public static readonly I_SLTIU = 57;
	public static readonly I_XORI = 58;
	public static readonly I_ORI = 59;
	public static readonly I_ANDI = 60;
	public static readonly I_SLLI = 61;
	public static readonly I_SRLI = 62;
	public static readonly I_SRAI = 63;
	public static readonly I_ADD = 64;
	public static readonly I_SUB = 65;
	public static readonly I_SLL = 66;
	public static readonly I_SLT = 67;
	public static readonly I_SLTU = 68;
	public static readonly I_XOR = 69;
	public static readonly I_SRL = 70;
	public static readonly I_SRA = 71;
	public static readonly I_OR = 72;
	public static readonly I_AND = 73;
	public static readonly I_FENCE = 74;
	public static readonly I_ECALL = 75;
	public static readonly I_EBREAK = 76;
	public static readonly I_FENCEI = 77;
	public static readonly I_CSRRW = 78;
	public static readonly I_CSRRS = 79;
	public static readonly I_CSRRC = 80;
	public static readonly I_CSRRWI = 81;
	public static readonly I_CSRRSI = 82;
	public static readonly I_CSRRCI = 83;
	public static readonly I_MUL = 84;
	public static readonly I_MULH = 85;
	public static readonly I_MULHSU = 86;
	public static readonly I_MULHU = 87;
	public static readonly I_DIV = 88;
	public static readonly I_DIVU = 89;
	public static readonly I_REM = 90;
	public static readonly I_REMU = 91;
	public static readonly I_LRW = 92;
	public static readonly I_SCW = 93;
	public static readonly I_AMOSWAPW = 94;
	public static readonly I_AMOADDW = 95;
	public static readonly I_AMOXORW = 96;
	public static readonly I_AMOANDW = 97;
	public static readonly I_AMOORW = 98;
	public static readonly I_AMOMINW = 99;
	public static readonly I_AMOMAXW = 100;
	public static readonly I_AMOMINUW = 101;
	public static readonly I_AMOMAXUW = 102;
	public static readonly I_FLW = 103;
	public static readonly I_FSW = 104;
	public static readonly I_FMADDS = 105;
	public static readonly I_FMSUBS = 106;
	public static readonly I_FNMSUBS = 107;
	public static readonly I_FNMADDS = 108;
	public static readonly I_FADDS = 109;
	public static readonly I_FSUBS = 110;
	public static readonly I_FMULS = 111;
	public static readonly I_FDIVS = 112;
	public static readonly I_FSQRTS = 113;
	public static readonly I_FSGNJS = 114;
	public static readonly I_FSGNJNS = 115;
	public static readonly I_FSGNJXS = 116;
	public static readonly I_FMINS = 117;
	public static readonly I_FMAXS = 118;
	public static readonly I_FCVTWS = 119;
	public static readonly I_FCVTWUS = 120;
	public static readonly I_FMVXW = 121;
	public static readonly I_FMVXS = 122;
	public static readonly I_FEQS = 123;
	public static readonly I_FLTS = 124;
	public static readonly I_FLES = 125;
	public static readonly I_FCLASSS = 126;
	public static readonly I_FCVTSW = 127;
	public static readonly I_FCVTSWU = 128;
	public static readonly I_FMVWX = 129;
	public static readonly I_FMVSX = 130;
	public static readonly I_FLD = 131;
	public static readonly I_FSD = 132;
	public static readonly I_FMADDD = 133;
	public static readonly I_FMSUBD = 134;
	public static readonly I_FNMSUBD = 135;
	public static readonly I_FNMADDD = 136;
	public static readonly I_FADDD = 137;
	public static readonly I_FSUBD = 138;
	public static readonly I_FMULD = 139;
	public static readonly I_FDIVD = 140;
	public static readonly I_FSQRTD = 141;
	public static readonly I_FSGNJD = 142;
	public static readonly I_FSGNJND = 143;
	public static readonly I_FSGNJXD = 144;
	public static readonly I_FMIND = 145;
	public static readonly I_FMAXD = 146;
	public static readonly I_FCVTSD = 147;
	public static readonly I_FCVTDS = 148;
	public static readonly I_FEQD = 149;
	public static readonly I_FLTD = 150;
	public static readonly I_FLED = 151;
	public static readonly I_FCLASSD = 152;
	public static readonly I_FCVTWD = 153;
	public static readonly I_FCVTWUD = 154;
	public static readonly I_FCVTDW = 155;
	public static readonly I_FCVTDWU = 156;
	public static readonly I_LA = 157;
	public static readonly I_LLA = 158;
	public static readonly I_NOP = 159;
	public static readonly I_LI = 160;
	public static readonly I_MV = 161;
	public static readonly I_NOT = 162;
	public static readonly I_NEG = 163;
	public static readonly I_SEQZ = 164;
	public static readonly I_SNEZ = 165;
	public static readonly I_SLTZ = 166;
	public static readonly I_SGTZ = 167;
	public static readonly I_BEQZ = 168;
	public static readonly I_BNEZ = 169;
	public static readonly I_BLEZ = 170;
	public static readonly I_BGEZ = 171;
	public static readonly I_BLTZ = 172;
	public static readonly I_BGTZ = 173;
	public static readonly I_BGT = 174;
	public static readonly I_BLE = 175;
	public static readonly I_BGTU = 176;
	public static readonly I_BLEU = 177;
	public static readonly I_J = 178;
	public static readonly I_JR = 179;
	public static readonly I_RET = 180;
	public static readonly I_CALL = 181;
	public static readonly I_TAIL = 182;
	public static readonly I_RDINSTRET = 183;
	public static readonly I_RDCYCLE = 184;
	public static readonly I_RDTIME = 185;
	public static readonly I_CSRR = 186;
	public static readonly I_CSRW = 187;
	public static readonly I_CSRS = 188;
	public static readonly I_CSRC = 189;
	public static readonly I_CSRWI = 190;
	public static readonly I_CSRSI = 191;
	public static readonly I_CSRCI = 192;
	public static readonly I_FRCSR = 193;
	public static readonly I_FSCSR = 194;
	public static readonly I_FRRM = 195;
	public static readonly I_FSRM = 196;
	public static readonly I_FRFLAGS = 197;
	public static readonly I_FSFLAGS = 198;
	public static readonly I_FMVS = 199;
	public static readonly I_FABSS = 200;
	public static readonly I_FNEGS = 201;
	public static readonly I_FMVD = 202;
	public static readonly I_FABSD = 203;
	public static readonly I_FNEGD = 204;
	public static readonly XREG = 205;
	public static readonly FREG = 206;
	public static readonly INT = 207;
	public static readonly HEX = 208;
	public static readonly BIN = 209;
	public static readonly FLOAT = 210;
	public static readonly STRING = 211;
	public static readonly CHAR = 212;
	public static readonly ID = 213;
	public static readonly LABEL = 214;
	public static readonly EOL = 215;
	public static readonly COMMENT = 216;
	public static readonly WHITESPACE = 217;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_label_def = 3;
	public static readonly RULE_instruction = 4;
	public static readonly RULE_rv32i_ext = 5;
	public static readonly RULE_rv32zifencei_ext = 6;
	public static readonly RULE_rv32zicsr_ext = 7;
	public static readonly RULE_rv32m_ext = 8;
	public static readonly RULE_rv32a_ext = 9;
	public static readonly RULE_rv32f_ext = 10;
	public static readonly RULE_rv32d_ext = 11;
	public static readonly RULE_rv32i_ext_pseudos = 12;
	public static readonly RULE_rv32zicsr_ext_pseudos = 13;
	public static readonly RULE_rv32f_ext_pseudos = 14;
	public static readonly RULE_rv32d_ext_pseudos = 15;
	public static readonly RULE_static_data = 16;
	public static readonly RULE_directive = 17;
	public static readonly RULE_expr = 18;
	public static readonly RULE_fexpr = 19;
	public static readonly RULE_uimm = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "stmt", "label_def", "instruction", "rv32i_ext", "rv32zifencei_ext", 
		"rv32zicsr_ext", "rv32m_ext", "rv32a_ext", "rv32f_ext", "rv32d_ext", "rv32i_ext_pseudos", 
		"rv32zicsr_ext_pseudos", "rv32f_ext_pseudos", "rv32d_ext_pseudos", "static_data", 
		"directive", "expr", "fexpr", "uimm",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'('", "')'", "'.byte'", "'.half'", "'.short'", "'.2byte'", 
		"'.word'", "'.long'", "'.4byte'", "'.float'", "'.ascii'", "'.string'", 
		"'.asciiz'", "'.asciz'", "'.zero'", "'.space'", "'.section'", "'.bss'", 
		"'.data'", "'.rodata'", "'.text'", "'.globl'", "'.global'", "'.align'", 
		"'.p2align'", "'.balign'", "'.file'", "'.equ'", "'.equiv'", "'-'", "'+'", 
		"'%hi'", "'%lo'", "'%pcrel_hi'", "'%pcrel_lo'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "I_LUI", "I_AUIPC", "I_JAL", "I_JALR", "I_BEQ", 
		"I_BNE", "I_BLT", "I_BGE", "I_BLTU", "I_BGEU", "I_LB", "I_LH", "I_LW", 
		"I_LBU", "I_LHU", "I_SB", "I_SH", "I_SW", "I_ADDI", "I_SLTI", "I_SLTIU", 
		"I_XORI", "I_ORI", "I_ANDI", "I_SLLI", "I_SRLI", "I_SRAI", "I_ADD", "I_SUB", 
		"I_SLL", "I_SLT", "I_SLTU", "I_XOR", "I_SRL", "I_SRA", "I_OR", "I_AND", 
		"I_FENCE", "I_ECALL", "I_EBREAK", "I_FENCEI", "I_CSRRW", "I_CSRRS", "I_CSRRC", 
		"I_CSRRWI", "I_CSRRSI", "I_CSRRCI", "I_MUL", "I_MULH", "I_MULHSU", "I_MULHU", 
		"I_DIV", "I_DIVU", "I_REM", "I_REMU", "I_LRW", "I_SCW", "I_AMOSWAPW", 
		"I_AMOADDW", "I_AMOXORW", "I_AMOANDW", "I_AMOORW", "I_AMOMINW", "I_AMOMAXW", 
		"I_AMOMINUW", "I_AMOMAXUW", "I_FLW", "I_FSW", "I_FMADDS", "I_FMSUBS", 
		"I_FNMSUBS", "I_FNMADDS", "I_FADDS", "I_FSUBS", "I_FMULS", "I_FDIVS", 
		"I_FSQRTS", "I_FSGNJS", "I_FSGNJNS", "I_FSGNJXS", "I_FMINS", "I_FMAXS", 
		"I_FCVTWS", "I_FCVTWUS", "I_FMVXW", "I_FMVXS", "I_FEQS", "I_FLTS", "I_FLES", 
		"I_FCLASSS", "I_FCVTSW", "I_FCVTSWU", "I_FMVWX", "I_FMVSX", "I_FLD", "I_FSD", 
		"I_FMADDD", "I_FMSUBD", "I_FNMSUBD", "I_FNMADDD", "I_FADDD", "I_FSUBD", 
		"I_FMULD", "I_FDIVD", "I_FSQRTD", "I_FSGNJD", "I_FSGNJND", "I_FSGNJXD", 
		"I_FMIND", "I_FMAXD", "I_FCVTSD", "I_FCVTDS", "I_FEQD", "I_FLTD", "I_FLED", 
		"I_FCLASSD", "I_FCVTWD", "I_FCVTWUD", "I_FCVTDW", "I_FCVTDWU", "I_LA", 
		"I_LLA", "I_NOP", "I_LI", "I_MV", "I_NOT", "I_NEG", "I_SEQZ", "I_SNEZ", 
		"I_SLTZ", "I_SGTZ", "I_BEQZ", "I_BNEZ", "I_BLEZ", "I_BGEZ", "I_BLTZ", 
		"I_BGTZ", "I_BGT", "I_BLE", "I_BGTU", "I_BLEU", "I_J", "I_JR", "I_RET", 
		"I_CALL", "I_TAIL", "I_RDINSTRET", "I_RDCYCLE", "I_RDTIME", "I_CSRR", 
		"I_CSRW", "I_CSRS", "I_CSRC", "I_CSRWI", "I_CSRSI", "I_CSRCI", "I_FRCSR", 
		"I_FSCSR", "I_FRRM", "I_FSRM", "I_FRFLAGS", "I_FSFLAGS", "I_FMVS", "I_FABSS", 
		"I_FNEGS", "I_FMVD", "I_FABSD", "I_FNEGD", "XREG", "FREG", "INT", "HEX", 
		"BIN", "FLOAT", "STRING", "CHAR", "ID", "LABEL", "EOL", "COMMENT", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RISCVParser._LITERAL_NAMES, RISCVParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RISCVParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RISCV.g4"; }

	// @Override
	public get ruleNames(): string[] { return RISCVParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RISCVParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RISCVParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RISCVParser.RULE_prog);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 42;
					this.line();
					}
					}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 48;
			this.match(RISCVParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RISCVParser.RULE_line);
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.T__3:
			case RISCVParser.T__4:
			case RISCVParser.T__5:
			case RISCVParser.T__6:
			case RISCVParser.T__7:
			case RISCVParser.T__8:
			case RISCVParser.T__9:
			case RISCVParser.T__10:
			case RISCVParser.T__11:
			case RISCVParser.T__12:
			case RISCVParser.T__13:
			case RISCVParser.T__14:
			case RISCVParser.T__15:
			case RISCVParser.T__16:
			case RISCVParser.T__17:
			case RISCVParser.T__18:
			case RISCVParser.T__19:
			case RISCVParser.T__20:
			case RISCVParser.T__21:
			case RISCVParser.T__22:
			case RISCVParser.T__23:
			case RISCVParser.T__24:
			case RISCVParser.T__25:
			case RISCVParser.T__26:
			case RISCVParser.T__27:
			case RISCVParser.T__28:
			case RISCVParser.T__29:
			case RISCVParser.I_LUI:
			case RISCVParser.I_AUIPC:
			case RISCVParser.I_JAL:
			case RISCVParser.I_JALR:
			case RISCVParser.I_BEQ:
			case RISCVParser.I_BNE:
			case RISCVParser.I_BLT:
			case RISCVParser.I_BGE:
			case RISCVParser.I_BLTU:
			case RISCVParser.I_BGEU:
			case RISCVParser.I_LB:
			case RISCVParser.I_LH:
			case RISCVParser.I_LW:
			case RISCVParser.I_LBU:
			case RISCVParser.I_LHU:
			case RISCVParser.I_SB:
			case RISCVParser.I_SH:
			case RISCVParser.I_SW:
			case RISCVParser.I_ADDI:
			case RISCVParser.I_SLTI:
			case RISCVParser.I_SLTIU:
			case RISCVParser.I_XORI:
			case RISCVParser.I_ORI:
			case RISCVParser.I_ANDI:
			case RISCVParser.I_SLLI:
			case RISCVParser.I_SRLI:
			case RISCVParser.I_SRAI:
			case RISCVParser.I_ADD:
			case RISCVParser.I_SUB:
			case RISCVParser.I_SLL:
			case RISCVParser.I_SLT:
			case RISCVParser.I_SLTU:
			case RISCVParser.I_XOR:
			case RISCVParser.I_SRL:
			case RISCVParser.I_SRA:
			case RISCVParser.I_OR:
			case RISCVParser.I_AND:
			case RISCVParser.I_FENCE:
			case RISCVParser.I_ECALL:
			case RISCVParser.I_EBREAK:
			case RISCVParser.I_FENCEI:
			case RISCVParser.I_CSRRW:
			case RISCVParser.I_CSRRS:
			case RISCVParser.I_CSRRC:
			case RISCVParser.I_CSRRWI:
			case RISCVParser.I_CSRRSI:
			case RISCVParser.I_CSRRCI:
			case RISCVParser.I_MUL:
			case RISCVParser.I_MULH:
			case RISCVParser.I_MULHSU:
			case RISCVParser.I_MULHU:
			case RISCVParser.I_DIV:
			case RISCVParser.I_DIVU:
			case RISCVParser.I_REM:
			case RISCVParser.I_REMU:
			case RISCVParser.I_LRW:
			case RISCVParser.I_SCW:
			case RISCVParser.I_AMOSWAPW:
			case RISCVParser.I_AMOADDW:
			case RISCVParser.I_AMOXORW:
			case RISCVParser.I_AMOANDW:
			case RISCVParser.I_AMOORW:
			case RISCVParser.I_AMOMINW:
			case RISCVParser.I_AMOMAXW:
			case RISCVParser.I_AMOMINUW:
			case RISCVParser.I_AMOMAXUW:
			case RISCVParser.I_FLW:
			case RISCVParser.I_FSW:
			case RISCVParser.I_FMADDS:
			case RISCVParser.I_FMSUBS:
			case RISCVParser.I_FNMSUBS:
			case RISCVParser.I_FNMADDS:
			case RISCVParser.I_FADDS:
			case RISCVParser.I_FSUBS:
			case RISCVParser.I_FMULS:
			case RISCVParser.I_FDIVS:
			case RISCVParser.I_FSQRTS:
			case RISCVParser.I_FSGNJS:
			case RISCVParser.I_FSGNJNS:
			case RISCVParser.I_FSGNJXS:
			case RISCVParser.I_FMINS:
			case RISCVParser.I_FMAXS:
			case RISCVParser.I_FCVTWS:
			case RISCVParser.I_FCVTWUS:
			case RISCVParser.I_FMVXW:
			case RISCVParser.I_FMVXS:
			case RISCVParser.I_FEQS:
			case RISCVParser.I_FLTS:
			case RISCVParser.I_FLES:
			case RISCVParser.I_FCLASSS:
			case RISCVParser.I_FCVTSW:
			case RISCVParser.I_FCVTSWU:
			case RISCVParser.I_FMVWX:
			case RISCVParser.I_FMVSX:
			case RISCVParser.I_FLD:
			case RISCVParser.I_FSD:
			case RISCVParser.I_FMADDD:
			case RISCVParser.I_FMSUBD:
			case RISCVParser.I_FNMSUBD:
			case RISCVParser.I_FNMADDD:
			case RISCVParser.I_FADDD:
			case RISCVParser.I_FSUBD:
			case RISCVParser.I_FMULD:
			case RISCVParser.I_FDIVD:
			case RISCVParser.I_FSQRTD:
			case RISCVParser.I_FSGNJD:
			case RISCVParser.I_FSGNJND:
			case RISCVParser.I_FSGNJXD:
			case RISCVParser.I_FMIND:
			case RISCVParser.I_FMAXD:
			case RISCVParser.I_FCVTSD:
			case RISCVParser.I_FCVTDS:
			case RISCVParser.I_FEQD:
			case RISCVParser.I_FLTD:
			case RISCVParser.I_FLED:
			case RISCVParser.I_FCLASSD:
			case RISCVParser.I_FCVTWD:
			case RISCVParser.I_FCVTWUD:
			case RISCVParser.I_FCVTDW:
			case RISCVParser.I_FCVTDWU:
			case RISCVParser.I_LA:
			case RISCVParser.I_LLA:
			case RISCVParser.I_NOP:
			case RISCVParser.I_LI:
			case RISCVParser.I_MV:
			case RISCVParser.I_NOT:
			case RISCVParser.I_NEG:
			case RISCVParser.I_SEQZ:
			case RISCVParser.I_SNEZ:
			case RISCVParser.I_SLTZ:
			case RISCVParser.I_SGTZ:
			case RISCVParser.I_BEQZ:
			case RISCVParser.I_BNEZ:
			case RISCVParser.I_BLEZ:
			case RISCVParser.I_BGEZ:
			case RISCVParser.I_BLTZ:
			case RISCVParser.I_BGTZ:
			case RISCVParser.I_BGT:
			case RISCVParser.I_BLE:
			case RISCVParser.I_BGTU:
			case RISCVParser.I_BLEU:
			case RISCVParser.I_J:
			case RISCVParser.I_JR:
			case RISCVParser.I_RET:
			case RISCVParser.I_CALL:
			case RISCVParser.I_TAIL:
			case RISCVParser.I_RDINSTRET:
			case RISCVParser.I_RDCYCLE:
			case RISCVParser.I_RDTIME:
			case RISCVParser.I_CSRR:
			case RISCVParser.I_CSRW:
			case RISCVParser.I_CSRS:
			case RISCVParser.I_CSRC:
			case RISCVParser.I_CSRWI:
			case RISCVParser.I_CSRSI:
			case RISCVParser.I_CSRCI:
			case RISCVParser.I_FRCSR:
			case RISCVParser.I_FSCSR:
			case RISCVParser.I_FRRM:
			case RISCVParser.I_FSRM:
			case RISCVParser.I_FRFLAGS:
			case RISCVParser.I_FSFLAGS:
			case RISCVParser.I_FMVS:
			case RISCVParser.I_FABSS:
			case RISCVParser.I_FNEGS:
			case RISCVParser.I_FMVD:
			case RISCVParser.I_FABSD:
			case RISCVParser.I_FNEGD:
			case RISCVParser.LABEL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 50;
				this.stmt();
				this.state = 52;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 51;
					this.match(RISCVParser.EOL);
					}
					break;
				}
				}
				break;
			case RISCVParser.EOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 54;
				this.match(RISCVParser.EOL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RISCVParser.RULE_stmt);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 57;
				this.label_def();
				this.state = 58;
				this.static_data();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.label_def();
				this.state = 61;
				this.instruction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 63;
				this.label_def();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 64;
				this.directive();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 65;
				this.static_data();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 66;
				this.instruction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label_def(): Label_defContext {
		let _localctx: Label_defContext = new Label_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RISCVParser.RULE_label_def);
		try {
			_localctx = new LABELContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(RISCVParser.LABEL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RISCVParser.RULE_instruction);
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new RV32IContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 71;
				this.rv32i_ext();
				}
				break;

			case 2:
				_localctx = new RV32ZifenceiContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.rv32zifencei_ext();
				}
				break;

			case 3:
				_localctx = new RV32ZicsrContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 73;
				this.rv32zicsr_ext();
				}
				break;

			case 4:
				_localctx = new RV32MContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 74;
				this.rv32m_ext();
				}
				break;

			case 5:
				_localctx = new RV32AContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 75;
				this.rv32a_ext();
				}
				break;

			case 6:
				_localctx = new RV32FContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 76;
				this.rv32f_ext();
				}
				break;

			case 7:
				_localctx = new RV32DContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 77;
				this.rv32d_ext();
				}
				break;

			case 8:
				_localctx = new RV32IPSEUDOSContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 78;
				this.rv32i_ext_pseudos();
				}
				break;

			case 9:
				_localctx = new RV32ZicsrPSEUDOSContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 79;
				this.rv32zicsr_ext_pseudos();
				}
				break;

			case 10:
				_localctx = new RV32FPSEUDOSContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 80;
				this.rv32f_ext_pseudos();
				}
				break;

			case 11:
				_localctx = new RV32DPSEUDOSContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 81;
				this.rv32d_ext_pseudos();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32i_ext(): Rv32i_extContext {
		let _localctx: Rv32i_extContext = new Rv32i_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RISCVParser.RULE_rv32i_ext);
		let _la: number;
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_LUI:
				_localctx = new LUIContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 84;
				this.match(RISCVParser.I_LUI);
				this.state = 85;
				this.match(RISCVParser.XREG);
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 86;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 89;
				this.expr(0);
				}
				break;
			case RISCVParser.I_AUIPC:
				_localctx = new AUIPCContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.match(RISCVParser.I_AUIPC);
				this.state = 91;
				this.match(RISCVParser.XREG);
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 92;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 95;
				this.expr(0);
				}
				break;
			case RISCVParser.I_JAL:
				_localctx = new JALContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.match(RISCVParser.I_JAL);
				this.state = 97;
				this.match(RISCVParser.XREG);
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 98;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 101;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_JALR:
				_localctx = new JALRContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 102;
				this.match(RISCVParser.I_JALR);
				this.state = 103;
				this.match(RISCVParser.XREG);
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 104;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 117;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 107;
					this.match(RISCVParser.XREG);
					this.state = 109;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 108;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 111;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 112;
					this.expr(0);
					this.state = 113;
					this.match(RISCVParser.T__1);
					this.state = 114;
					this.match(RISCVParser.XREG);
					this.state = 115;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_BEQ:
				_localctx = new BEQContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 119;
				this.match(RISCVParser.I_BEQ);
				this.state = 120;
				this.match(RISCVParser.XREG);
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 121;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 124;
				this.match(RISCVParser.XREG);
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 125;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 128;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BNE:
				_localctx = new BNEContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 129;
				this.match(RISCVParser.I_BNE);
				this.state = 130;
				this.match(RISCVParser.XREG);
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 131;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 134;
				this.match(RISCVParser.XREG);
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 135;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 138;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLT:
				_localctx = new BLTContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 139;
				this.match(RISCVParser.I_BLT);
				this.state = 140;
				this.match(RISCVParser.XREG);
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 141;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 144;
				this.match(RISCVParser.XREG);
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 145;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 148;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGE:
				_localctx = new BGEContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 149;
				this.match(RISCVParser.I_BGE);
				this.state = 150;
				this.match(RISCVParser.XREG);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 151;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 154;
				this.match(RISCVParser.XREG);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 155;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 158;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLTU:
				_localctx = new BLTUContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 159;
				this.match(RISCVParser.I_BLTU);
				this.state = 160;
				this.match(RISCVParser.XREG);
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 161;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 164;
				this.match(RISCVParser.XREG);
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 165;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 168;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGEU:
				_localctx = new BGEUContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 169;
				this.match(RISCVParser.I_BGEU);
				this.state = 170;
				this.match(RISCVParser.XREG);
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 171;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 174;
				this.match(RISCVParser.XREG);
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 175;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 178;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LB:
				_localctx = new LBContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 179;
				this.match(RISCVParser.I_LB);
				this.state = 180;
				this.match(RISCVParser.XREG);
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 181;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 194;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 184;
					this.match(RISCVParser.XREG);
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 185;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 188;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 189;
					this.expr(0);
					this.state = 190;
					this.match(RISCVParser.T__1);
					this.state = 191;
					this.match(RISCVParser.XREG);
					this.state = 192;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_LH:
				_localctx = new LHContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 196;
				this.match(RISCVParser.I_LH);
				this.state = 197;
				this.match(RISCVParser.XREG);
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 198;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 211;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 201;
					this.match(RISCVParser.XREG);
					this.state = 203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 202;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 205;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 206;
					this.expr(0);
					this.state = 207;
					this.match(RISCVParser.T__1);
					this.state = 208;
					this.match(RISCVParser.XREG);
					this.state = 209;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_LW:
				_localctx = new LWContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 213;
				this.match(RISCVParser.I_LW);
				this.state = 214;
				this.match(RISCVParser.XREG);
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 215;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 228;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 218;
					this.match(RISCVParser.XREG);
					this.state = 220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 219;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 222;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 223;
					this.expr(0);
					this.state = 224;
					this.match(RISCVParser.T__1);
					this.state = 225;
					this.match(RISCVParser.XREG);
					this.state = 226;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_LBU:
				_localctx = new LBUContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 230;
				this.match(RISCVParser.I_LBU);
				this.state = 231;
				this.match(RISCVParser.XREG);
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 232;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 245;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 235;
					this.match(RISCVParser.XREG);
					this.state = 237;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 236;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 239;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 240;
					this.expr(0);
					this.state = 241;
					this.match(RISCVParser.T__1);
					this.state = 242;
					this.match(RISCVParser.XREG);
					this.state = 243;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_LHU:
				_localctx = new LHUContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 247;
				this.match(RISCVParser.I_LHU);
				this.state = 248;
				this.match(RISCVParser.XREG);
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 249;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 262;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 252;
					this.match(RISCVParser.XREG);
					this.state = 254;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 253;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 256;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 257;
					this.expr(0);
					this.state = 258;
					this.match(RISCVParser.T__1);
					this.state = 259;
					this.match(RISCVParser.XREG);
					this.state = 260;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_SB:
				_localctx = new SBContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 264;
				this.match(RISCVParser.I_SB);
				this.state = 265;
				this.match(RISCVParser.XREG);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 266;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 279;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 269;
					this.match(RISCVParser.XREG);
					this.state = 271;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 270;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 273;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 274;
					this.expr(0);
					this.state = 275;
					this.match(RISCVParser.T__1);
					this.state = 276;
					this.match(RISCVParser.XREG);
					this.state = 277;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_SH:
				_localctx = new SHContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 281;
				this.match(RISCVParser.I_SH);
				this.state = 282;
				this.match(RISCVParser.XREG);
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 283;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 296;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 286;
					this.match(RISCVParser.XREG);
					this.state = 288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 287;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 290;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 291;
					this.expr(0);
					this.state = 292;
					this.match(RISCVParser.T__1);
					this.state = 293;
					this.match(RISCVParser.XREG);
					this.state = 294;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_SW:
				_localctx = new SWContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 298;
				this.match(RISCVParser.I_SW);
				this.state = 299;
				this.match(RISCVParser.XREG);
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 300;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 313;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 303;
					this.match(RISCVParser.XREG);
					this.state = 305;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 304;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 307;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 308;
					this.expr(0);
					this.state = 309;
					this.match(RISCVParser.T__1);
					this.state = 310;
					this.match(RISCVParser.XREG);
					this.state = 311;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_ADDI:
				_localctx = new ADDIContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 315;
				this.match(RISCVParser.I_ADDI);
				this.state = 316;
				this.match(RISCVParser.XREG);
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 317;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 320;
				this.match(RISCVParser.XREG);
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 321;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 324;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SLTI:
				_localctx = new SLTIContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 325;
				this.match(RISCVParser.I_SLTI);
				this.state = 326;
				this.match(RISCVParser.XREG);
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 327;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 330;
				this.match(RISCVParser.XREG);
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 331;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 334;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SLTIU:
				_localctx = new SLTIUContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 335;
				this.match(RISCVParser.I_SLTIU);
				this.state = 336;
				this.match(RISCVParser.XREG);
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 337;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 340;
				this.match(RISCVParser.XREG);
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 341;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 344;
				this.expr(0);
				}
				break;
			case RISCVParser.I_XORI:
				_localctx = new XORIContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 345;
				this.match(RISCVParser.I_XORI);
				this.state = 346;
				this.match(RISCVParser.XREG);
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 347;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 350;
				this.match(RISCVParser.XREG);
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 351;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 354;
				this.expr(0);
				}
				break;
			case RISCVParser.I_ORI:
				_localctx = new ORIContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 355;
				this.match(RISCVParser.I_ORI);
				this.state = 356;
				this.match(RISCVParser.XREG);
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 357;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 360;
				this.match(RISCVParser.XREG);
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 361;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 364;
				this.expr(0);
				}
				break;
			case RISCVParser.I_ANDI:
				_localctx = new ANDIContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 365;
				this.match(RISCVParser.I_ANDI);
				this.state = 366;
				this.match(RISCVParser.XREG);
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 367;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 370;
				this.match(RISCVParser.XREG);
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 371;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 374;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SLLI:
				_localctx = new SLLIContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 375;
				this.match(RISCVParser.I_SLLI);
				this.state = 376;
				this.match(RISCVParser.XREG);
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 377;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 380;
				this.match(RISCVParser.XREG);
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 381;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 384;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SRLI:
				_localctx = new SRLIContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 385;
				this.match(RISCVParser.I_SRLI);
				this.state = 386;
				this.match(RISCVParser.XREG);
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 387;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 390;
				this.match(RISCVParser.XREG);
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 391;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 394;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SRAI:
				_localctx = new SRAIContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 395;
				this.match(RISCVParser.I_SRAI);
				this.state = 396;
				this.match(RISCVParser.XREG);
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 397;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 400;
				this.match(RISCVParser.XREG);
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 401;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 404;
				this.expr(0);
				}
				break;
			case RISCVParser.I_ADD:
				_localctx = new ADDContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 405;
				this.match(RISCVParser.I_ADD);
				this.state = 406;
				this.match(RISCVParser.XREG);
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 407;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 410;
				this.match(RISCVParser.XREG);
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 411;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 414;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SUB:
				_localctx = new SUBContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 415;
				this.match(RISCVParser.I_SUB);
				this.state = 416;
				this.match(RISCVParser.XREG);
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 417;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 420;
				this.match(RISCVParser.XREG);
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 421;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 424;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SLL:
				_localctx = new SLLContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 425;
				this.match(RISCVParser.I_SLL);
				this.state = 426;
				this.match(RISCVParser.XREG);
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 427;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 430;
				this.match(RISCVParser.XREG);
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 431;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 434;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SLT:
				_localctx = new SLTContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 435;
				this.match(RISCVParser.I_SLT);
				this.state = 436;
				this.match(RISCVParser.XREG);
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 437;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 440;
				this.match(RISCVParser.XREG);
				this.state = 442;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 441;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 444;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SLTU:
				_localctx = new SLTUContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 445;
				this.match(RISCVParser.I_SLTU);
				this.state = 446;
				this.match(RISCVParser.XREG);
				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 447;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 450;
				this.match(RISCVParser.XREG);
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 451;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 454;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_XOR:
				_localctx = new XORContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 455;
				this.match(RISCVParser.I_XOR);
				this.state = 456;
				this.match(RISCVParser.XREG);
				this.state = 458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 457;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 460;
				this.match(RISCVParser.XREG);
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 461;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 464;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SRL:
				_localctx = new SRLContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 465;
				this.match(RISCVParser.I_SRL);
				this.state = 466;
				this.match(RISCVParser.XREG);
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 467;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 470;
				this.match(RISCVParser.XREG);
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 471;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 474;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SRA:
				_localctx = new SRAContext(_localctx);
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 475;
				this.match(RISCVParser.I_SRA);
				this.state = 476;
				this.match(RISCVParser.XREG);
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 477;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 480;
				this.match(RISCVParser.XREG);
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 481;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 484;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_OR:
				_localctx = new ORContext(_localctx);
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 485;
				this.match(RISCVParser.I_OR);
				this.state = 486;
				this.match(RISCVParser.XREG);
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 487;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 490;
				this.match(RISCVParser.XREG);
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 491;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 494;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_AND:
				_localctx = new ANDContext(_localctx);
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 495;
				this.match(RISCVParser.I_AND);
				this.state = 496;
				this.match(RISCVParser.XREG);
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 497;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 500;
				this.match(RISCVParser.XREG);
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 501;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 504;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FENCE:
				_localctx = new FENCEContext(_localctx);
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 505;
				this.match(RISCVParser.I_FENCE);
				}
				break;
			case RISCVParser.I_ECALL:
				_localctx = new ECALLContext(_localctx);
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 506;
				this.match(RISCVParser.I_ECALL);
				}
				break;
			case RISCVParser.I_EBREAK:
				_localctx = new EBREAKContext(_localctx);
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 507;
				this.match(RISCVParser.I_EBREAK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32zifencei_ext(): Rv32zifencei_extContext {
		let _localctx: Rv32zifencei_extContext = new Rv32zifencei_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RISCVParser.RULE_rv32zifencei_ext);
		try {
			_localctx = new FENCEIContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(RISCVParser.I_FENCEI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32zicsr_ext(): Rv32zicsr_extContext {
		let _localctx: Rv32zicsr_extContext = new Rv32zicsr_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RISCVParser.RULE_rv32zicsr_ext);
		let _la: number;
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_CSRRW:
				_localctx = new CSRRWContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 512;
				this.match(RISCVParser.I_CSRRW);
				this.state = 513;
				this.match(RISCVParser.XREG);
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 514;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 517;
				this.expr(0);
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 518;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 521;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_CSRRS:
				_localctx = new CSRRSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
				this.match(RISCVParser.I_CSRRS);
				this.state = 524;
				this.match(RISCVParser.XREG);
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 525;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 528;
				this.expr(0);
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 529;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 532;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_CSRRC:
				_localctx = new CSRRCContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 534;
				this.match(RISCVParser.I_CSRRC);
				this.state = 535;
				this.match(RISCVParser.XREG);
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 536;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 539;
				this.expr(0);
				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 540;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 543;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_CSRRWI:
				_localctx = new CSRRWIContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 545;
				this.match(RISCVParser.I_CSRRWI);
				this.state = 546;
				this.match(RISCVParser.XREG);
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 547;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 550;
				this.expr(0);
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 551;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 554;
				this.uimm();
				}
				break;
			case RISCVParser.I_CSRRSI:
				_localctx = new CSRRSIContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 556;
				this.match(RISCVParser.I_CSRRSI);
				this.state = 557;
				this.match(RISCVParser.XREG);
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 558;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 561;
				this.expr(0);
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 562;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 565;
				this.uimm();
				}
				break;
			case RISCVParser.I_CSRRCI:
				_localctx = new CSRRCIContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 567;
				this.match(RISCVParser.I_CSRRCI);
				this.state = 568;
				this.match(RISCVParser.XREG);
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 569;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 572;
				this.expr(0);
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 573;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 576;
				this.uimm();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32m_ext(): Rv32m_extContext {
		let _localctx: Rv32m_extContext = new Rv32m_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RISCVParser.RULE_rv32m_ext);
		let _la: number;
		try {
			this.state = 660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_MUL:
				_localctx = new MULContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 580;
				this.match(RISCVParser.I_MUL);
				this.state = 581;
				this.match(RISCVParser.XREG);
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 582;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 585;
				this.match(RISCVParser.XREG);
				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 586;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 589;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_MULH:
				_localctx = new MULHContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.match(RISCVParser.I_MULH);
				this.state = 591;
				this.match(RISCVParser.XREG);
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 592;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 595;
				this.match(RISCVParser.XREG);
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 596;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 599;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_MULHSU:
				_localctx = new MULHSUContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 600;
				this.match(RISCVParser.I_MULHSU);
				this.state = 601;
				this.match(RISCVParser.XREG);
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 602;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 605;
				this.match(RISCVParser.XREG);
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 606;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 609;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_MULHU:
				_localctx = new MULHUContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 610;
				this.match(RISCVParser.I_MULHU);
				this.state = 611;
				this.match(RISCVParser.XREG);
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 612;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 615;
				this.match(RISCVParser.XREG);
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 616;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 619;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_DIV:
				_localctx = new DIVContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 620;
				this.match(RISCVParser.I_DIV);
				this.state = 621;
				this.match(RISCVParser.XREG);
				this.state = 623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 622;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 625;
				this.match(RISCVParser.XREG);
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 626;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 629;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_DIVU:
				_localctx = new DIVUContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 630;
				this.match(RISCVParser.I_DIVU);
				this.state = 631;
				this.match(RISCVParser.XREG);
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 632;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 635;
				this.match(RISCVParser.XREG);
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 636;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 639;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_REM:
				_localctx = new REMContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 640;
				this.match(RISCVParser.I_REM);
				this.state = 641;
				this.match(RISCVParser.XREG);
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 642;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 645;
				this.match(RISCVParser.XREG);
				this.state = 647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 646;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 649;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_REMU:
				_localctx = new REMUContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 650;
				this.match(RISCVParser.I_REMU);
				this.state = 651;
				this.match(RISCVParser.XREG);
				this.state = 653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 652;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 655;
				this.match(RISCVParser.XREG);
				this.state = 657;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 656;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 659;
				this.match(RISCVParser.XREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32a_ext(): Rv32a_extContext {
		let _localctx: Rv32a_extContext = new Rv32a_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RISCVParser.RULE_rv32a_ext);
		let _la: number;
		try {
			this.state = 834;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_LRW:
				_localctx = new LRWContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 662;
				this.match(RISCVParser.I_LRW);
				this.state = 663;
				this.match(RISCVParser.XREG);
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 664;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 667;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 670;
				this.match(RISCVParser.XREG);
				this.state = 672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 671;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_SCW:
				_localctx = new SCWContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 674;
				this.match(RISCVParser.I_SCW);
				this.state = 675;
				this.match(RISCVParser.XREG);
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 676;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 679;
				this.match(RISCVParser.XREG);
				this.state = 681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 680;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 683;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 686;
				this.match(RISCVParser.XREG);
				this.state = 688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 687;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOSWAPW:
				_localctx = new AMOSWAPWContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 690;
				this.match(RISCVParser.I_AMOSWAPW);
				this.state = 691;
				this.match(RISCVParser.XREG);
				this.state = 693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 692;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 695;
				this.match(RISCVParser.XREG);
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 696;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 699;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 702;
				this.match(RISCVParser.XREG);
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 703;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOADDW:
				_localctx = new AMOADDWContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 706;
				this.match(RISCVParser.I_AMOADDW);
				this.state = 707;
				this.match(RISCVParser.XREG);
				this.state = 709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 708;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 711;
				this.match(RISCVParser.XREG);
				this.state = 713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 712;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 716;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 715;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 718;
				this.match(RISCVParser.XREG);
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 719;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOXORW:
				_localctx = new AMOXORWContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 722;
				this.match(RISCVParser.I_AMOXORW);
				this.state = 723;
				this.match(RISCVParser.XREG);
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 724;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 727;
				this.match(RISCVParser.XREG);
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 728;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 731;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 734;
				this.match(RISCVParser.XREG);
				this.state = 736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 735;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOANDW:
				_localctx = new AMOANDWContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 738;
				this.match(RISCVParser.I_AMOANDW);
				this.state = 739;
				this.match(RISCVParser.XREG);
				this.state = 741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 740;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 743;
				this.match(RISCVParser.XREG);
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 744;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 747;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 750;
				this.match(RISCVParser.XREG);
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 751;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOORW:
				_localctx = new AMOORWContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 754;
				this.match(RISCVParser.I_AMOORW);
				this.state = 755;
				this.match(RISCVParser.XREG);
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 756;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 759;
				this.match(RISCVParser.XREG);
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 760;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 763;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 766;
				this.match(RISCVParser.XREG);
				this.state = 768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 767;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOMINW:
				_localctx = new AMOMINWContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 770;
				this.match(RISCVParser.I_AMOMINW);
				this.state = 771;
				this.match(RISCVParser.XREG);
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 772;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 775;
				this.match(RISCVParser.XREG);
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 776;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 779;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 782;
				this.match(RISCVParser.XREG);
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 783;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOMAXW:
				_localctx = new AMOMAXWContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 786;
				this.match(RISCVParser.I_AMOMAXW);
				this.state = 787;
				this.match(RISCVParser.XREG);
				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 788;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 791;
				this.match(RISCVParser.XREG);
				this.state = 793;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 792;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 795;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 798;
				this.match(RISCVParser.XREG);
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 799;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOMINUW:
				_localctx = new AMOMINUWContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 802;
				this.match(RISCVParser.I_AMOMINUW);
				this.state = 803;
				this.match(RISCVParser.XREG);
				this.state = 805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 804;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 807;
				this.match(RISCVParser.XREG);
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 808;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 811;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 814;
				this.match(RISCVParser.XREG);
				this.state = 816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 815;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOMAXUW:
				_localctx = new AMOMAXUWContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 818;
				this.match(RISCVParser.I_AMOMAXUW);
				this.state = 819;
				this.match(RISCVParser.XREG);
				this.state = 821;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 820;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 823;
				this.match(RISCVParser.XREG);
				this.state = 825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 824;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 827;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 830;
				this.match(RISCVParser.XREG);
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 831;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32f_ext(): Rv32f_extContext {
		let _localctx: Rv32f_extContext = new Rv32f_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RISCVParser.RULE_rv32f_ext);
		let _la: number;
		try {
			this.state = 1110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_FLW:
				_localctx = new FLWContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 836;
				this.match(RISCVParser.I_FLW);
				this.state = 837;
				this.match(RISCVParser.FREG);
				this.state = 839;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 838;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 851;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 841;
					this.match(RISCVParser.XREG);
					this.state = 843;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 842;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 845;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 846;
					this.expr(0);
					this.state = 847;
					this.match(RISCVParser.T__1);
					this.state = 848;
					this.match(RISCVParser.XREG);
					this.state = 849;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_FSW:
				_localctx = new FSWContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 853;
				this.match(RISCVParser.I_FSW);
				this.state = 872;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 854;
					this.match(RISCVParser.XREG);
					this.state = 856;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 855;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 858;
					this.match(RISCVParser.FREG);
					this.state = 860;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 859;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 862;
					this.expr(0);
					}
					break;
				case RISCVParser.FREG:
					{
					this.state = 863;
					this.match(RISCVParser.FREG);
					this.state = 865;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 864;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 867;
					this.expr(0);
					this.state = 868;
					this.match(RISCVParser.T__1);
					this.state = 869;
					this.match(RISCVParser.XREG);
					this.state = 870;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_FMADDS:
				_localctx = new FMADDSContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 874;
				this.match(RISCVParser.I_FMADDS);
				this.state = 875;
				this.match(RISCVParser.FREG);
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 876;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 879;
				this.match(RISCVParser.FREG);
				this.state = 881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 880;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 883;
				this.match(RISCVParser.FREG);
				this.state = 885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 884;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 887;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMSUBS:
				_localctx = new FMSUBSContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 888;
				this.match(RISCVParser.I_FMSUBS);
				this.state = 889;
				this.match(RISCVParser.FREG);
				this.state = 891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 890;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 893;
				this.match(RISCVParser.FREG);
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 894;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 897;
				this.match(RISCVParser.FREG);
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 898;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 901;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNMSUBS:
				_localctx = new FNMSUBSContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 902;
				this.match(RISCVParser.I_FNMSUBS);
				this.state = 903;
				this.match(RISCVParser.FREG);
				this.state = 905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 904;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 907;
				this.match(RISCVParser.FREG);
				this.state = 909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 908;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 911;
				this.match(RISCVParser.FREG);
				this.state = 913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 912;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 915;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNMADDS:
				_localctx = new FNMADDSContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 916;
				this.match(RISCVParser.I_FNMADDS);
				this.state = 917;
				this.match(RISCVParser.FREG);
				this.state = 919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 918;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 921;
				this.match(RISCVParser.FREG);
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 922;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 925;
				this.match(RISCVParser.FREG);
				this.state = 927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 926;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 929;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FADDS:
				_localctx = new FADDSContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 930;
				this.match(RISCVParser.I_FADDS);
				this.state = 931;
				this.match(RISCVParser.FREG);
				this.state = 933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 932;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 935;
				this.match(RISCVParser.FREG);
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 936;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 939;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSUBS:
				_localctx = new FSUBSContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 940;
				this.match(RISCVParser.I_FSUBS);
				this.state = 941;
				this.match(RISCVParser.FREG);
				this.state = 943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 942;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 945;
				this.match(RISCVParser.FREG);
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 946;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 949;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMULS:
				_localctx = new FMULSContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 950;
				this.match(RISCVParser.I_FMULS);
				this.state = 951;
				this.match(RISCVParser.FREG);
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 952;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 955;
				this.match(RISCVParser.FREG);
				this.state = 957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 956;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 959;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FDIVS:
				_localctx = new FDIVSContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 960;
				this.match(RISCVParser.I_FDIVS);
				this.state = 961;
				this.match(RISCVParser.FREG);
				this.state = 963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 962;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 965;
				this.match(RISCVParser.FREG);
				this.state = 967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 966;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 969;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSQRTS:
				_localctx = new FSQRTSContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 970;
				this.match(RISCVParser.I_FSQRTS);
				this.state = 971;
				this.match(RISCVParser.FREG);
				this.state = 973;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 972;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 975;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJS:
				_localctx = new FSGNJSContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 976;
				this.match(RISCVParser.I_FSGNJS);
				this.state = 977;
				this.match(RISCVParser.FREG);
				this.state = 979;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 978;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 981;
				this.match(RISCVParser.FREG);
				this.state = 983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 982;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 985;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJNS:
				_localctx = new FSGNJNSContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 986;
				this.match(RISCVParser.I_FSGNJNS);
				this.state = 987;
				this.match(RISCVParser.FREG);
				this.state = 989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 988;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 991;
				this.match(RISCVParser.FREG);
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 992;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 995;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJXS:
				_localctx = new FSGNJXSContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 996;
				this.match(RISCVParser.I_FSGNJXS);
				this.state = 997;
				this.match(RISCVParser.FREG);
				this.state = 999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 998;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1001;
				this.match(RISCVParser.FREG);
				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1002;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1005;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMINS:
				_localctx = new FMINSContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1006;
				this.match(RISCVParser.I_FMINS);
				this.state = 1007;
				this.match(RISCVParser.FREG);
				this.state = 1009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1008;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1011;
				this.match(RISCVParser.FREG);
				this.state = 1013;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1012;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1015;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMAXS:
				_localctx = new FMAXSContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1016;
				this.match(RISCVParser.I_FMAXS);
				this.state = 1017;
				this.match(RISCVParser.FREG);
				this.state = 1019;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1018;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1021;
				this.match(RISCVParser.FREG);
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1022;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1025;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTWS:
				_localctx = new FCVTWSContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1026;
				this.match(RISCVParser.I_FCVTWS);
				this.state = 1027;
				this.match(RISCVParser.XREG);
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1028;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1031;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTWUS:
				_localctx = new FCVTWUSContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1032;
				this.match(RISCVParser.I_FCVTWUS);
				this.state = 1033;
				this.match(RISCVParser.XREG);
				this.state = 1035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1034;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1037;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMVXW:
				_localctx = new FMVXWContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1038;
				this.match(RISCVParser.I_FMVXW);
				this.state = 1039;
				this.match(RISCVParser.XREG);
				this.state = 1041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1040;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1043;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMVXS:
				_localctx = new FMVXSContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1044;
				this.match(RISCVParser.I_FMVXS);
				this.state = 1045;
				this.match(RISCVParser.XREG);
				this.state = 1047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1046;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1049;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FEQS:
				_localctx = new FEQSContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1050;
				this.match(RISCVParser.I_FEQS);
				this.state = 1051;
				this.match(RISCVParser.XREG);
				this.state = 1053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1052;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1055;
				this.match(RISCVParser.FREG);
				this.state = 1057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1056;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1059;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FLTS:
				_localctx = new FLTSContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1060;
				this.match(RISCVParser.I_FLTS);
				this.state = 1061;
				this.match(RISCVParser.XREG);
				this.state = 1063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1062;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1065;
				this.match(RISCVParser.FREG);
				this.state = 1067;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1066;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1069;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FLES:
				_localctx = new FLESContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1070;
				this.match(RISCVParser.I_FLES);
				this.state = 1071;
				this.match(RISCVParser.XREG);
				this.state = 1073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1072;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1075;
				this.match(RISCVParser.FREG);
				this.state = 1077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1076;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1079;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCLASSS:
				_localctx = new FCLASSSContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1080;
				this.match(RISCVParser.I_FCLASSS);
				this.state = 1081;
				this.match(RISCVParser.XREG);
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1082;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1085;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTSW:
				_localctx = new FCVTSWContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1086;
				this.match(RISCVParser.I_FCVTSW);
				this.state = 1087;
				this.match(RISCVParser.FREG);
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1088;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1091;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FCVTSWU:
				_localctx = new FCVTSWUContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1092;
				this.match(RISCVParser.I_FCVTSWU);
				this.state = 1093;
				this.match(RISCVParser.FREG);
				this.state = 1095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1094;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1097;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FMVWX:
				_localctx = new FMVWXContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1098;
				this.match(RISCVParser.I_FMVWX);
				this.state = 1099;
				this.match(RISCVParser.FREG);
				this.state = 1101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1100;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1103;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FMVSX:
				_localctx = new FMVSXContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1104;
				this.match(RISCVParser.I_FMVSX);
				this.state = 1105;
				this.match(RISCVParser.FREG);
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1106;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1109;
				this.match(RISCVParser.XREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32d_ext(): Rv32d_extContext {
		let _localctx: Rv32d_extContext = new Rv32d_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RISCVParser.RULE_rv32d_ext);
		let _la: number;
		try {
			this.state = 1374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_FLD:
				_localctx = new FLDContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1112;
				this.match(RISCVParser.I_FLD);
				this.state = 1113;
				this.match(RISCVParser.FREG);
				this.state = 1115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1114;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1127;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 1117;
					this.match(RISCVParser.XREG);
					this.state = 1119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1118;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1121;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__30:
				case RISCVParser.T__31:
				case RISCVParser.T__32:
				case RISCVParser.T__33:
				case RISCVParser.T__34:
				case RISCVParser.T__35:
				case RISCVParser.INT:
				case RISCVParser.HEX:
				case RISCVParser.BIN:
				case RISCVParser.CHAR:
				case RISCVParser.ID:
					{
					this.state = 1122;
					this.expr(0);
					this.state = 1123;
					this.match(RISCVParser.T__1);
					this.state = 1124;
					this.match(RISCVParser.XREG);
					this.state = 1125;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_FSD:
				_localctx = new FSDContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1129;
				this.match(RISCVParser.I_FSD);
				this.state = 1148;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 1130;
					this.match(RISCVParser.XREG);
					this.state = 1132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1131;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1134;
					this.match(RISCVParser.FREG);
					this.state = 1136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1135;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1138;
					this.expr(0);
					}
					break;
				case RISCVParser.FREG:
					{
					this.state = 1139;
					this.match(RISCVParser.FREG);
					this.state = 1141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1140;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1143;
					this.expr(0);
					this.state = 1144;
					this.match(RISCVParser.T__1);
					this.state = 1145;
					this.match(RISCVParser.XREG);
					this.state = 1146;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_FMADDD:
				_localctx = new FMADDDContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1150;
				this.match(RISCVParser.I_FMADDD);
				this.state = 1151;
				this.match(RISCVParser.FREG);
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1152;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1155;
				this.match(RISCVParser.FREG);
				this.state = 1157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1156;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1159;
				this.match(RISCVParser.FREG);
				this.state = 1161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1160;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1163;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMSUBD:
				_localctx = new FMSUBDContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1164;
				this.match(RISCVParser.I_FMSUBD);
				this.state = 1165;
				this.match(RISCVParser.FREG);
				this.state = 1167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1166;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1169;
				this.match(RISCVParser.FREG);
				this.state = 1171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1170;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1173;
				this.match(RISCVParser.FREG);
				this.state = 1175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1174;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1177;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNMSUBD:
				_localctx = new FNMSUBDContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1178;
				this.match(RISCVParser.I_FNMSUBD);
				this.state = 1179;
				this.match(RISCVParser.FREG);
				this.state = 1181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1180;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1183;
				this.match(RISCVParser.FREG);
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1184;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1187;
				this.match(RISCVParser.FREG);
				this.state = 1189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1188;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1191;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNMADDD:
				_localctx = new FNMADDDContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1192;
				this.match(RISCVParser.I_FNMADDD);
				this.state = 1193;
				this.match(RISCVParser.FREG);
				this.state = 1195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1194;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1197;
				this.match(RISCVParser.FREG);
				this.state = 1199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1198;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1201;
				this.match(RISCVParser.FREG);
				this.state = 1203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1202;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1205;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FADDD:
				_localctx = new FADDDContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1206;
				this.match(RISCVParser.I_FADDD);
				this.state = 1207;
				this.match(RISCVParser.FREG);
				this.state = 1209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1208;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1211;
				this.match(RISCVParser.FREG);
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1212;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1215;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSUBD:
				_localctx = new FSUBDContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1216;
				this.match(RISCVParser.I_FSUBD);
				this.state = 1217;
				this.match(RISCVParser.FREG);
				this.state = 1219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1218;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1221;
				this.match(RISCVParser.FREG);
				this.state = 1223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1222;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1225;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMULD:
				_localctx = new FMULDContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1226;
				this.match(RISCVParser.I_FMULD);
				this.state = 1227;
				this.match(RISCVParser.FREG);
				this.state = 1229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1228;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1231;
				this.match(RISCVParser.FREG);
				this.state = 1233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1232;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1235;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FDIVD:
				_localctx = new FDIVDContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1236;
				this.match(RISCVParser.I_FDIVD);
				this.state = 1237;
				this.match(RISCVParser.FREG);
				this.state = 1239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1238;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1241;
				this.match(RISCVParser.FREG);
				this.state = 1243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1242;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1245;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSQRTD:
				_localctx = new FSQRTDContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1246;
				this.match(RISCVParser.I_FSQRTD);
				this.state = 1247;
				this.match(RISCVParser.FREG);
				this.state = 1249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1248;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1251;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJD:
				_localctx = new FSGNJDContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1252;
				this.match(RISCVParser.I_FSGNJD);
				this.state = 1253;
				this.match(RISCVParser.FREG);
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1254;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1257;
				this.match(RISCVParser.FREG);
				this.state = 1259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1258;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1261;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJND:
				_localctx = new FSGNJNDContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1262;
				this.match(RISCVParser.I_FSGNJND);
				this.state = 1263;
				this.match(RISCVParser.FREG);
				this.state = 1265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1264;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1267;
				this.match(RISCVParser.FREG);
				this.state = 1269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1268;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1271;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJXD:
				_localctx = new FSGNJXDContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1272;
				this.match(RISCVParser.I_FSGNJXD);
				this.state = 1273;
				this.match(RISCVParser.FREG);
				this.state = 1275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1274;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1277;
				this.match(RISCVParser.FREG);
				this.state = 1279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1278;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1281;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMIND:
				_localctx = new FMINDContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1282;
				this.match(RISCVParser.I_FMIND);
				this.state = 1283;
				this.match(RISCVParser.FREG);
				this.state = 1285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1284;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1287;
				this.match(RISCVParser.FREG);
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1288;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1291;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMAXD:
				_localctx = new FMAXDContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1292;
				this.match(RISCVParser.I_FMAXD);
				this.state = 1293;
				this.match(RISCVParser.FREG);
				this.state = 1295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1294;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1297;
				this.match(RISCVParser.FREG);
				this.state = 1299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1298;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1301;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTSD:
				_localctx = new FCVTSDContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1302;
				this.match(RISCVParser.I_FCVTSD);
				this.state = 1303;
				this.match(RISCVParser.FREG);
				this.state = 1305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1304;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1307;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTDS:
				_localctx = new FCVTDSContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1308;
				this.match(RISCVParser.I_FCVTDS);
				this.state = 1309;
				this.match(RISCVParser.FREG);
				this.state = 1311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1310;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1313;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FEQD:
				_localctx = new FEQDContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1314;
				this.match(RISCVParser.I_FEQD);
				this.state = 1315;
				this.match(RISCVParser.XREG);
				this.state = 1317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1316;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1319;
				this.match(RISCVParser.FREG);
				this.state = 1321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1320;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1323;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FLTD:
				_localctx = new FLTDContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1324;
				this.match(RISCVParser.I_FLTD);
				this.state = 1325;
				this.match(RISCVParser.XREG);
				this.state = 1327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1326;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1329;
				this.match(RISCVParser.FREG);
				this.state = 1331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1330;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1333;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FLED:
				_localctx = new FLEDContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1334;
				this.match(RISCVParser.I_FLED);
				this.state = 1335;
				this.match(RISCVParser.XREG);
				this.state = 1337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1336;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1339;
				this.match(RISCVParser.FREG);
				this.state = 1341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1340;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1343;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCLASSD:
				_localctx = new FCLASSDContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1344;
				this.match(RISCVParser.I_FCLASSD);
				this.state = 1345;
				this.match(RISCVParser.XREG);
				this.state = 1347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1346;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1349;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTWD:
				_localctx = new FCVTWDContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1350;
				this.match(RISCVParser.I_FCVTWD);
				this.state = 1351;
				this.match(RISCVParser.XREG);
				this.state = 1353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1352;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1355;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTWUD:
				_localctx = new FCVTWUDContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1356;
				this.match(RISCVParser.I_FCVTWUD);
				this.state = 1357;
				this.match(RISCVParser.XREG);
				this.state = 1359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1358;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1361;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTDW:
				_localctx = new FCVTDWContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1362;
				this.match(RISCVParser.I_FCVTDW);
				this.state = 1363;
				this.match(RISCVParser.FREG);
				this.state = 1365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1364;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1367;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FCVTDWU:
				_localctx = new FCVTDWUContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1368;
				this.match(RISCVParser.I_FCVTDWU);
				this.state = 1369;
				this.match(RISCVParser.FREG);
				this.state = 1371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1370;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1373;
				this.match(RISCVParser.XREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32i_ext_pseudos(): Rv32i_ext_pseudosContext {
		let _localctx: Rv32i_ext_pseudosContext = new Rv32i_ext_pseudosContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RISCVParser.RULE_rv32i_ext_pseudos);
		let _la: number;
		try {
			this.state = 1580;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_LA:
				_localctx = new LAPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1376;
				this.match(RISCVParser.I_LA);
				this.state = 1377;
				this.match(RISCVParser.XREG);
				this.state = 1379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1378;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1381;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LLA:
				_localctx = new LLAPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1382;
				this.match(RISCVParser.I_LLA);
				this.state = 1383;
				this.match(RISCVParser.XREG);
				this.state = 1385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1384;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1387;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LB:
				_localctx = new LBPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1388;
				this.match(RISCVParser.I_LB);
				this.state = 1389;
				this.match(RISCVParser.XREG);
				this.state = 1391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1390;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1393;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LH:
				_localctx = new LHPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1394;
				this.match(RISCVParser.I_LH);
				this.state = 1395;
				this.match(RISCVParser.XREG);
				this.state = 1397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1396;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1399;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LW:
				_localctx = new LWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1400;
				this.match(RISCVParser.I_LW);
				this.state = 1401;
				this.match(RISCVParser.XREG);
				this.state = 1403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1402;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1405;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_SB:
				_localctx = new SBPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1406;
				this.match(RISCVParser.I_SB);
				this.state = 1407;
				this.match(RISCVParser.XREG);
				this.state = 1409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1408;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1411;
				this.match(RISCVParser.ID);
				this.state = 1413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1412;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1415;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SH:
				_localctx = new SHPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1416;
				this.match(RISCVParser.I_SH);
				this.state = 1417;
				this.match(RISCVParser.XREG);
				this.state = 1419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1418;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1421;
				this.match(RISCVParser.ID);
				this.state = 1423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1422;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1425;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SW:
				_localctx = new SWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1426;
				this.match(RISCVParser.I_SW);
				this.state = 1427;
				this.match(RISCVParser.XREG);
				this.state = 1429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1428;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1431;
				this.match(RISCVParser.ID);
				this.state = 1433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1432;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1435;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_NOP:
				_localctx = new NOPPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1436;
				this.match(RISCVParser.I_NOP);
				}
				break;
			case RISCVParser.I_LI:
				_localctx = new LIPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1437;
				this.match(RISCVParser.I_LI);
				this.state = 1438;
				this.match(RISCVParser.XREG);
				this.state = 1440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1439;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1442;
				this.expr(0);
				}
				break;
			case RISCVParser.I_MV:
				_localctx = new MVPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1443;
				this.match(RISCVParser.I_MV);
				this.state = 1444;
				this.match(RISCVParser.XREG);
				this.state = 1446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1445;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1448;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_NOT:
				_localctx = new NOTPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1449;
				this.match(RISCVParser.I_NOT);
				this.state = 1450;
				this.match(RISCVParser.XREG);
				this.state = 1452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1451;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1454;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_NEG:
				_localctx = new NEGPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1455;
				this.match(RISCVParser.I_NEG);
				this.state = 1456;
				this.match(RISCVParser.XREG);
				this.state = 1458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1457;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1460;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SEQZ:
				_localctx = new SEQZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1461;
				this.match(RISCVParser.I_SEQZ);
				this.state = 1462;
				this.match(RISCVParser.XREG);
				this.state = 1464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1463;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1466;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SNEZ:
				_localctx = new SNEZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1467;
				this.match(RISCVParser.I_SNEZ);
				this.state = 1468;
				this.match(RISCVParser.XREG);
				this.state = 1470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1469;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1472;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SLTZ:
				_localctx = new SLTZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1473;
				this.match(RISCVParser.I_SLTZ);
				this.state = 1474;
				this.match(RISCVParser.XREG);
				this.state = 1476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1475;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1478;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SGTZ:
				_localctx = new SGTZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1479;
				this.match(RISCVParser.I_SGTZ);
				this.state = 1480;
				this.match(RISCVParser.XREG);
				this.state = 1482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1481;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1484;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_BEQZ:
				_localctx = new BEQZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1485;
				this.match(RISCVParser.I_BEQZ);
				this.state = 1486;
				this.match(RISCVParser.XREG);
				this.state = 1488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1487;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1490;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BNEZ:
				_localctx = new BNEZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1491;
				this.match(RISCVParser.I_BNEZ);
				this.state = 1492;
				this.match(RISCVParser.XREG);
				this.state = 1494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1493;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1496;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLEZ:
				_localctx = new BLEZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1497;
				this.match(RISCVParser.I_BLEZ);
				this.state = 1498;
				this.match(RISCVParser.XREG);
				this.state = 1500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1499;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1502;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGEZ:
				_localctx = new BGEZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1503;
				this.match(RISCVParser.I_BGEZ);
				this.state = 1504;
				this.match(RISCVParser.XREG);
				this.state = 1506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1505;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1508;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLTZ:
				_localctx = new BLTZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1509;
				this.match(RISCVParser.I_BLTZ);
				this.state = 1510;
				this.match(RISCVParser.XREG);
				this.state = 1512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1511;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1514;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGTZ:
				_localctx = new BGTZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1515;
				this.match(RISCVParser.I_BGTZ);
				this.state = 1516;
				this.match(RISCVParser.XREG);
				this.state = 1518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1517;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1520;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGT:
				_localctx = new BGTPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1521;
				this.match(RISCVParser.I_BGT);
				this.state = 1522;
				this.match(RISCVParser.XREG);
				this.state = 1524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1523;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1526;
				this.match(RISCVParser.XREG);
				this.state = 1528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1527;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1530;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLE:
				_localctx = new BLEPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1531;
				this.match(RISCVParser.I_BLE);
				this.state = 1532;
				this.match(RISCVParser.XREG);
				this.state = 1534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1533;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1536;
				this.match(RISCVParser.XREG);
				this.state = 1538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1537;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1540;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGTU:
				_localctx = new BGTUPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1541;
				this.match(RISCVParser.I_BGTU);
				this.state = 1542;
				this.match(RISCVParser.XREG);
				this.state = 1544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1543;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1546;
				this.match(RISCVParser.XREG);
				this.state = 1548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1547;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1550;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLEU:
				_localctx = new BLEUPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1551;
				this.match(RISCVParser.I_BLEU);
				this.state = 1552;
				this.match(RISCVParser.XREG);
				this.state = 1554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1553;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1556;
				this.match(RISCVParser.XREG);
				this.state = 1558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1557;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1560;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_J:
				_localctx = new JPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1561;
				this.match(RISCVParser.I_J);
				this.state = 1562;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_JAL:
				_localctx = new JALPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1563;
				this.match(RISCVParser.I_JAL);
				this.state = 1564;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_JR:
				_localctx = new JRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1565;
				this.match(RISCVParser.I_JR);
				this.state = 1566;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_JALR:
				_localctx = new JALRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1567;
				this.match(RISCVParser.I_JALR);
				this.state = 1568;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_RET:
				_localctx = new RETPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1569;
				this.match(RISCVParser.I_RET);
				}
				break;
			case RISCVParser.I_CALL:
				_localctx = new CALLPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1570;
				this.match(RISCVParser.I_CALL);
				this.state = 1572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1571;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1574;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_TAIL:
				_localctx = new TAILPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1575;
				this.match(RISCVParser.I_TAIL);
				this.state = 1577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1576;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1579;
				this.match(RISCVParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32zicsr_ext_pseudos(): Rv32zicsr_ext_pseudosContext {
		let _localctx: Rv32zicsr_ext_pseudosContext = new Rv32zicsr_ext_pseudosContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RISCVParser.RULE_rv32zicsr_ext_pseudos);
		let _la: number;
		try {
			this.state = 1666;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 312, this._ctx) ) {
			case 1:
				_localctx = new RDINSTRETPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1582;
				this.match(RISCVParser.I_RDINSTRET);
				this.state = 1583;
				this.match(RISCVParser.XREG);
				}
				break;

			case 2:
				_localctx = new RDCYCLEPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1584;
				this.match(RISCVParser.I_RDCYCLE);
				this.state = 1585;
				this.match(RISCVParser.XREG);
				}
				break;

			case 3:
				_localctx = new RDTIMEPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1586;
				this.match(RISCVParser.I_RDTIME);
				this.state = 1587;
				this.match(RISCVParser.XREG);
				}
				break;

			case 4:
				_localctx = new CSRRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1588;
				this.match(RISCVParser.I_CSRR);
				this.state = 1589;
				this.match(RISCVParser.XREG);
				this.state = 1591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1590;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1593;
				this.expr(0);
				}
				break;

			case 5:
				_localctx = new CSRWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1594;
				this.match(RISCVParser.I_CSRW);
				this.state = 1595;
				this.expr(0);
				this.state = 1597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1596;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1599;
				this.match(RISCVParser.XREG);
				}
				break;

			case 6:
				_localctx = new CSRSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1601;
				this.match(RISCVParser.I_CSRS);
				this.state = 1602;
				this.expr(0);
				this.state = 1604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1603;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1606;
				this.match(RISCVParser.XREG);
				}
				break;

			case 7:
				_localctx = new CSRCPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1608;
				this.match(RISCVParser.I_CSRC);
				this.state = 1609;
				this.expr(0);
				this.state = 1611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1610;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1613;
				this.match(RISCVParser.XREG);
				}
				break;

			case 8:
				_localctx = new CSRWIPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1615;
				this.match(RISCVParser.I_CSRWI);
				this.state = 1616;
				this.expr(0);
				this.state = 1618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1617;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1620;
				this.uimm();
				}
				break;

			case 9:
				_localctx = new CSRSIPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1622;
				this.match(RISCVParser.I_CSRSI);
				this.state = 1623;
				this.expr(0);
				this.state = 1625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1624;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1627;
				this.uimm();
				}
				break;

			case 10:
				_localctx = new CSRCIPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1629;
				this.match(RISCVParser.I_CSRCI);
				this.state = 1630;
				this.expr(0);
				this.state = 1632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1631;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1634;
				this.uimm();
				}
				break;

			case 11:
				_localctx = new FRCSRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1636;
				this.match(RISCVParser.I_FRCSR);
				this.state = 1637;
				this.match(RISCVParser.XREG);
				}
				break;

			case 12:
				_localctx = new FSCSRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1638;
				this.match(RISCVParser.I_FSCSR);
				this.state = 1639;
				this.match(RISCVParser.XREG);
				}
				break;

			case 13:
				_localctx = new FSCSR2PSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1640;
				this.match(RISCVParser.I_FSCSR);
				this.state = 1641;
				this.match(RISCVParser.XREG);
				this.state = 1643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1642;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1645;
				this.match(RISCVParser.XREG);
				}
				break;

			case 14:
				_localctx = new FRRMPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1646;
				this.match(RISCVParser.I_FRRM);
				this.state = 1647;
				this.match(RISCVParser.XREG);
				}
				break;

			case 15:
				_localctx = new FSRMPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1648;
				this.match(RISCVParser.I_FSRM);
				this.state = 1649;
				this.match(RISCVParser.XREG);
				}
				break;

			case 16:
				_localctx = new FSRM2PSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1650;
				this.match(RISCVParser.I_FSRM);
				this.state = 1651;
				this.match(RISCVParser.XREG);
				this.state = 1653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1652;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1655;
				this.match(RISCVParser.XREG);
				}
				break;

			case 17:
				_localctx = new FRFLAGSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1656;
				this.match(RISCVParser.I_FRFLAGS);
				this.state = 1657;
				this.match(RISCVParser.XREG);
				}
				break;

			case 18:
				_localctx = new FSFLAGSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1658;
				this.match(RISCVParser.I_FSFLAGS);
				this.state = 1659;
				this.match(RISCVParser.XREG);
				}
				break;

			case 19:
				_localctx = new FSFLAGS2PSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1660;
				this.match(RISCVParser.I_FSFLAGS);
				this.state = 1661;
				this.match(RISCVParser.XREG);
				this.state = 1663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1662;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1665;
				this.match(RISCVParser.XREG);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32f_ext_pseudos(): Rv32f_ext_pseudosContext {
		let _localctx: Rv32f_ext_pseudosContext = new Rv32f_ext_pseudosContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RISCVParser.RULE_rv32f_ext_pseudos);
		let _la: number;
		try {
			this.state = 1706;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_FLW:
				_localctx = new FLWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1668;
				this.match(RISCVParser.I_FLW);
				this.state = 1669;
				this.match(RISCVParser.FREG);
				this.state = 1671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1670;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1673;
				this.match(RISCVParser.ID);
				this.state = 1675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1674;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1677;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FSW:
				_localctx = new FSWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1678;
				this.match(RISCVParser.I_FSW);
				this.state = 1679;
				this.match(RISCVParser.FREG);
				this.state = 1681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1680;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1683;
				this.match(RISCVParser.ID);
				this.state = 1685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1684;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1687;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FMVS:
				_localctx = new FMVSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1688;
				this.match(RISCVParser.I_FMVS);
				this.state = 1689;
				this.match(RISCVParser.FREG);
				this.state = 1691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1690;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1693;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FABSS:
				_localctx = new FABSSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1694;
				this.match(RISCVParser.I_FABSS);
				this.state = 1695;
				this.match(RISCVParser.FREG);
				this.state = 1697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1696;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1699;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNEGS:
				_localctx = new FNEGSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1700;
				this.match(RISCVParser.I_FNEGS);
				this.state = 1701;
				this.match(RISCVParser.FREG);
				this.state = 1703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1702;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1705;
				this.match(RISCVParser.FREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32d_ext_pseudos(): Rv32d_ext_pseudosContext {
		let _localctx: Rv32d_ext_pseudosContext = new Rv32d_ext_pseudosContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RISCVParser.RULE_rv32d_ext_pseudos);
		let _la: number;
		try {
			this.state = 1746;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_FLD:
				_localctx = new FLDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1708;
				this.match(RISCVParser.I_FLD);
				this.state = 1709;
				this.match(RISCVParser.FREG);
				this.state = 1711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1710;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1713;
				this.match(RISCVParser.ID);
				this.state = 1715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1714;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1717;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FSD:
				_localctx = new FSDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1718;
				this.match(RISCVParser.I_FSD);
				this.state = 1719;
				this.match(RISCVParser.FREG);
				this.state = 1721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1720;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1723;
				this.match(RISCVParser.ID);
				this.state = 1725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1724;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1727;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FMVD:
				_localctx = new FMVDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1728;
				this.match(RISCVParser.I_FMVD);
				this.state = 1729;
				this.match(RISCVParser.FREG);
				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1730;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1733;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FABSD:
				_localctx = new FABSDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1734;
				this.match(RISCVParser.I_FABSD);
				this.state = 1735;
				this.match(RISCVParser.FREG);
				this.state = 1737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1736;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1739;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNEGD:
				_localctx = new FNEGDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1740;
				this.match(RISCVParser.I_FNEGD);
				this.state = 1741;
				this.match(RISCVParser.FREG);
				this.state = 1743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1742;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1745;
				this.match(RISCVParser.FREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public static_data(): Static_dataContext {
		let _localctx: Static_dataContext = new Static_dataContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RISCVParser.RULE_static_data);
		let _la: number;
		try {
			this.state = 1798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.T__3:
				_localctx = new BYTEContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1748;
				(_localctx as BYTEContext)._d = this.match(RISCVParser.T__3);
				this.state = 1749;
				this.expr(0);
				this.state = 1756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__0) | (1 << RISCVParser.T__1) | (1 << RISCVParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RISCVParser.T__31 - 32)) | (1 << (RISCVParser.T__32 - 32)) | (1 << (RISCVParser.T__33 - 32)) | (1 << (RISCVParser.T__34 - 32)) | (1 << (RISCVParser.T__35 - 32)))) !== 0) || ((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & ((1 << (RISCVParser.INT - 207)) | (1 << (RISCVParser.HEX - 207)) | (1 << (RISCVParser.BIN - 207)) | (1 << (RISCVParser.CHAR - 207)) | (1 << (RISCVParser.ID - 207)))) !== 0)) {
					{
					{
					this.state = 1751;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1750;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1753;
					this.expr(0);
					}
					}
					this.state = 1758;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case RISCVParser.T__4:
			case RISCVParser.T__5:
			case RISCVParser.T__6:
				_localctx = new HALFContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1759;
				(_localctx as HALFContext)._d = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__4) | (1 << RISCVParser.T__5) | (1 << RISCVParser.T__6))) !== 0))) {
					(_localctx as HALFContext)._d = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1760;
				this.expr(0);
				this.state = 1767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__0) | (1 << RISCVParser.T__1) | (1 << RISCVParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RISCVParser.T__31 - 32)) | (1 << (RISCVParser.T__32 - 32)) | (1 << (RISCVParser.T__33 - 32)) | (1 << (RISCVParser.T__34 - 32)) | (1 << (RISCVParser.T__35 - 32)))) !== 0) || ((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & ((1 << (RISCVParser.INT - 207)) | (1 << (RISCVParser.HEX - 207)) | (1 << (RISCVParser.BIN - 207)) | (1 << (RISCVParser.CHAR - 207)) | (1 << (RISCVParser.ID - 207)))) !== 0)) {
					{
					{
					this.state = 1762;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1761;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1764;
					this.expr(0);
					}
					}
					this.state = 1769;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case RISCVParser.T__7:
			case RISCVParser.T__8:
			case RISCVParser.T__9:
				_localctx = new WORDContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1770;
				(_localctx as WORDContext)._d = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__7) | (1 << RISCVParser.T__8) | (1 << RISCVParser.T__9))) !== 0))) {
					(_localctx as WORDContext)._d = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1771;
				this.expr(0);
				this.state = 1778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__0) | (1 << RISCVParser.T__1) | (1 << RISCVParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RISCVParser.T__31 - 32)) | (1 << (RISCVParser.T__32 - 32)) | (1 << (RISCVParser.T__33 - 32)) | (1 << (RISCVParser.T__34 - 32)) | (1 << (RISCVParser.T__35 - 32)))) !== 0) || ((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & ((1 << (RISCVParser.INT - 207)) | (1 << (RISCVParser.HEX - 207)) | (1 << (RISCVParser.BIN - 207)) | (1 << (RISCVParser.CHAR - 207)) | (1 << (RISCVParser.ID - 207)))) !== 0)) {
					{
					{
					this.state = 1773;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1772;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1775;
					this.expr(0);
					}
					}
					this.state = 1780;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case RISCVParser.T__10:
				_localctx = new FLOATContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1781;
				(_localctx as FLOATContext)._d = this.match(RISCVParser.T__10);
				this.state = 1782;
				this.fexpr();
				this.state = 1789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (RISCVParser.T__0 - 1)) | (1 << (RISCVParser.T__1 - 1)) | (1 << (RISCVParser.T__30 - 1)) | (1 << (RISCVParser.T__31 - 1)))) !== 0) || ((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & ((1 << (RISCVParser.INT - 207)) | (1 << (RISCVParser.HEX - 207)) | (1 << (RISCVParser.BIN - 207)) | (1 << (RISCVParser.FLOAT - 207)))) !== 0)) {
					{
					{
					this.state = 1784;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1783;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1786;
					this.fexpr();
					}
					}
					this.state = 1791;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case RISCVParser.T__11:
				_localctx = new ASCIIContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1792;
				(_localctx as ASCIIContext)._d = this.match(RISCVParser.T__11);
				this.state = 1793;
				this.match(RISCVParser.STRING);
				}
				break;
			case RISCVParser.T__12:
			case RISCVParser.T__13:
			case RISCVParser.T__14:
				_localctx = new ASCIIZContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1794;
				(_localctx as ASCIIZContext)._d = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__12) | (1 << RISCVParser.T__13) | (1 << RISCVParser.T__14))) !== 0))) {
					(_localctx as ASCIIZContext)._d = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1795;
				this.match(RISCVParser.STRING);
				}
				break;
			case RISCVParser.T__15:
			case RISCVParser.T__16:
				_localctx = new ZEROContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1796;
				(_localctx as ZEROContext)._d = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === RISCVParser.T__15 || _la === RISCVParser.T__16)) {
					(_localctx as ZEROContext)._d = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1797;
				(_localctx as ZEROContext)._i = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & ((1 << (RISCVParser.INT - 207)) | (1 << (RISCVParser.HEX - 207)) | (1 << (RISCVParser.BIN - 207)) | (1 << (RISCVParser.CHAR - 207)))) !== 0))) {
					(_localctx as ZEROContext)._i = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RISCVParser.RULE_directive);
		let _la: number;
		try {
			this.state = 1839;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 345, this._ctx) ) {
			case 1:
				_localctx = new BSSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__17) {
					{
					this.state = 1800;
					this.match(RISCVParser.T__17);
					}
				}

				this.state = 1803;
				(_localctx as BSSContext)._d = this.match(RISCVParser.T__18);
				}
				break;

			case 2:
				_localctx = new DATAContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__17) {
					{
					this.state = 1804;
					this.match(RISCVParser.T__17);
					}
				}

				this.state = 1807;
				(_localctx as DATAContext)._d = this.match(RISCVParser.T__19);
				}
				break;

			case 3:
				_localctx = new RODATAContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__17) {
					{
					this.state = 1808;
					this.match(RISCVParser.T__17);
					}
				}

				this.state = 1811;
				(_localctx as RODATAContext)._d = this.match(RISCVParser.T__20);
				}
				break;

			case 4:
				_localctx = new TEXTContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__17) {
					{
					this.state = 1812;
					this.match(RISCVParser.T__17);
					}
				}

				this.state = 1815;
				(_localctx as TEXTContext)._d = this.match(RISCVParser.T__21);
				}
				break;

			case 5:
				_localctx = new GLOBLContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1816;
				(_localctx as GLOBLContext)._d = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === RISCVParser.T__22 || _la === RISCVParser.T__23)) {
					(_localctx as GLOBLContext)._d = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1817;
				this.match(RISCVParser.ID);
				this.state = 1824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RISCVParser.T__0 || _la === RISCVParser.ID) {
					{
					{
					this.state = 1819;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1818;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1821;
					this.match(RISCVParser.ID);
					}
					}
					this.state = 1826;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 6:
				_localctx = new ALIGNContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1827;
				(_localctx as ALIGNContext)._d = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === RISCVParser.T__24 || _la === RISCVParser.T__25)) {
					(_localctx as ALIGNContext)._d = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1828;
				(_localctx as ALIGNContext)._i = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & ((1 << (RISCVParser.INT - 207)) | (1 << (RISCVParser.HEX - 207)) | (1 << (RISCVParser.BIN - 207)))) !== 0))) {
					(_localctx as ALIGNContext)._i = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 7:
				_localctx = new BALIGNContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1829;
				(_localctx as BALIGNContext)._d = this.match(RISCVParser.T__26);
				this.state = 1830;
				(_localctx as BALIGNContext)._i = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & ((1 << (RISCVParser.INT - 207)) | (1 << (RISCVParser.HEX - 207)) | (1 << (RISCVParser.BIN - 207)))) !== 0))) {
					(_localctx as BALIGNContext)._i = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 8:
				_localctx = new FILEContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1831;
				(_localctx as FILEContext)._d = this.match(RISCVParser.T__27);
				this.state = 1832;
				this.match(RISCVParser.STRING);
				}
				break;

			case 9:
				_localctx = new EQUContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1833;
				(_localctx as EQUContext)._d = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === RISCVParser.T__28 || _la === RISCVParser.T__29)) {
					(_localctx as EQUContext)._d = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1834;
				this.match(RISCVParser.ID);
				this.state = 1836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1835;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1838;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, RISCVParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1869;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.T__1:
				{
				_localctx = new PARENEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1842;
				this.match(RISCVParser.T__1);
				this.state = 1843;
				this.expr(0);
				this.state = 1844;
				this.match(RISCVParser.T__2);
				}
				break;
			case RISCVParser.T__30:
			case RISCVParser.T__31:
				{
				_localctx = new UNARYEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1846;
				(_localctx as UNARYEXPRContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === RISCVParser.T__30 || _la === RISCVParser.T__31)) {
					(_localctx as UNARYEXPRContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1847;
				this.expr(11);
				}
				break;
			case RISCVParser.INT:
				{
				_localctx = new INTEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1848;
				this.match(RISCVParser.INT);
				}
				break;
			case RISCVParser.HEX:
				{
				_localctx = new HEXEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1849;
				this.match(RISCVParser.HEX);
				}
				break;
			case RISCVParser.BIN:
				{
				_localctx = new BINEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1850;
				this.match(RISCVParser.BIN);
				}
				break;
			case RISCVParser.CHAR:
				{
				_localctx = new CHAREXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1851;
				this.match(RISCVParser.CHAR);
				}
				break;
			case RISCVParser.ID:
				{
				_localctx = new IDEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1852;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.T__32:
				{
				_localctx = new HIRELEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1853;
				this.match(RISCVParser.T__32);
				this.state = 1854;
				this.match(RISCVParser.T__1);
				this.state = 1855;
				this.match(RISCVParser.ID);
				this.state = 1856;
				this.match(RISCVParser.T__2);
				}
				break;
			case RISCVParser.T__33:
				{
				_localctx = new LORELEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1857;
				this.match(RISCVParser.T__33);
				this.state = 1858;
				this.match(RISCVParser.T__1);
				this.state = 1859;
				this.match(RISCVParser.ID);
				this.state = 1860;
				this.match(RISCVParser.T__2);
				}
				break;
			case RISCVParser.T__34:
				{
				_localctx = new PCRELHIRELEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1861;
				this.match(RISCVParser.T__34);
				this.state = 1862;
				this.match(RISCVParser.T__1);
				this.state = 1863;
				this.match(RISCVParser.ID);
				this.state = 1864;
				this.match(RISCVParser.T__2);
				}
				break;
			case RISCVParser.T__35:
				{
				_localctx = new PCRELLORELEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1865;
				this.match(RISCVParser.T__35);
				this.state = 1866;
				this.match(RISCVParser.T__1);
				this.state = 1867;
				this.match(RISCVParser.ID);
				this.state = 1868;
				this.match(RISCVParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1876;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 347, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PLUSEXPRContext(new ExprContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, RISCVParser.RULE_expr);
					this.state = 1871;
					if (!(this.precpred(this._ctx, 10))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
					}
					this.state = 1872;
					(_localctx as PLUSEXPRContext)._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === RISCVParser.T__30 || _la === RISCVParser.T__31)) {
						(_localctx as PLUSEXPRContext)._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1873;
					this.expr(11);
					}
					}
				}
				this.state = 1878;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 347, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fexpr(): FexprContext {
		let _localctx: FexprContext = new FexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RISCVParser.RULE_fexpr);
		let _la: number;
		try {
			this.state = 1889;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.T__1:
				_localctx = new PARENFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1879;
				this.match(RISCVParser.T__1);
				this.state = 1880;
				this.fexpr();
				this.state = 1881;
				this.match(RISCVParser.T__2);
				}
				break;
			case RISCVParser.T__30:
			case RISCVParser.T__31:
				_localctx = new UNARYFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1883;
				(_localctx as UNARYFEXPRContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === RISCVParser.T__30 || _la === RISCVParser.T__31)) {
					(_localctx as UNARYFEXPRContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1884;
				this.fexpr();
				}
				break;
			case RISCVParser.INT:
				_localctx = new INTFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1885;
				this.match(RISCVParser.INT);
				}
				break;
			case RISCVParser.HEX:
				_localctx = new HEXFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1886;
				this.match(RISCVParser.HEX);
				}
				break;
			case RISCVParser.BIN:
				_localctx = new BINFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1887;
				this.match(RISCVParser.BIN);
				}
				break;
			case RISCVParser.FLOAT:
				_localctx = new FLOATFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1888;
				this.match(RISCVParser.FLOAT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uimm(): UimmContext {
		let _localctx: UimmContext = new UimmContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RISCVParser.RULE_uimm);
		try {
			this.state = 1895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.INT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1891;
				_localctx._i = this.match(RISCVParser.INT);
				}
				break;
			case RISCVParser.HEX:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1892;
				_localctx._i = this.match(RISCVParser.HEX);
				}
				break;
			case RISCVParser.BIN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1893;
				_localctx._i = this.match(RISCVParser.BIN);
				}
				break;
			case RISCVParser.CHAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1894;
				_localctx._i = this.match(RISCVParser.CHAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xDB\u076C\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x07\x02" +
		".\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x037" +
		"\n\x03\x03\x03\x05\x03:\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04F\n\x04\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06U\n\x06\x03\x07\x03\x07\x03\x07\x05\x07Z\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07`\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07f\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07l\n\x07" +
		"\x03\x07\x03\x07\x05\x07p\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07x\n\x07\x03\x07\x03\x07\x03\x07\x05\x07}\n\x07\x03\x07" +
		"\x03\x07\x05\x07\x81\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x87" +
		"\n\x07\x03\x07\x03\x07\x05\x07\x8B\n\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x05\x07\x91\n\x07\x03\x07\x03\x07\x05\x07\x95\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\x9B\n\x07\x03\x07\x03\x07\x05\x07\x9F\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xA5\n\x07\x03\x07\x03\x07\x05\x07\xA9" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xAF\n\x07\x03\x07\x03\x07" +
		"\x05\x07\xB3\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xB9\n\x07\x03" +
		"\x07\x03\x07\x05\x07\xBD\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\xC5\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\xCA\n\x07\x03" +
		"\x07\x03\x07\x05\x07\xCE\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\xD6\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\xDB\n\x07\x03" +
		"\x07\x03\x07\x05\x07\xDF\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\xE7\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\xEC\n\x07\x03" +
		"\x07\x03\x07\x05\x07\xF0\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\xF8\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\xFD\n\x07\x03" +
		"\x07\x03\x07\x05\x07\u0101\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\u0109\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\u010E\n\x07" +
		"\x03\x07\x03\x07\x05\x07\u0112\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\u011A\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\u011F" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u0123\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u012B\n\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u0130\n\x07\x03\x07\x03\x07\x05\x07\u0134\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\u013C\n\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\u0141\n\x07\x03\x07\x03\x07\x05\x07\u0145\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\u014B\n\x07\x03\x07\x03\x07\x05\x07\u014F\n\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0155\n\x07\x03\x07\x03\x07\x05\x07" +
		"\u0159\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u015F\n\x07\x03\x07" +
		"\x03\x07\x05\x07\u0163\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0169" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u016D\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u0173\n\x07\x03\x07\x03\x07\x05\x07\u0177\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u017D\n\x07\x03\x07\x03\x07\x05\x07\u0181" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0187\n\x07\x03\x07\x03" +
		"\x07\x05\x07\u018B\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0191" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u0195\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u019B\n\x07\x03\x07\x03\x07\x05\x07\u019F\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u01A5\n\x07\x03\x07\x03\x07\x05\x07\u01A9" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01AF\n\x07\x03\x07\x03" +
		"\x07\x05\x07\u01B3\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01B9" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u01BD\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u01C3\n\x07\x03\x07\x03\x07\x05\x07\u01C7\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u01CD\n\x07\x03\x07\x03\x07\x05\x07\u01D1" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01D7\n\x07\x03\x07\x03" +
		"\x07\x05\x07\u01DB\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01E1" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u01E5\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u01EB\n\x07\x03\x07\x03\x07\x05\x07\u01EF\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u01F5\n\x07\x03\x07\x03\x07\x05\x07\u01F9" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01FF\n\x07\x03\b\x03\b" +
		"\x03\t\x03\t\x03\t\x05\t\u0206\n\t\x03\t\x03\t\x05\t\u020A\n\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u0211\n\t\x03\t\x03\t\x05\t\u0215\n\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x05\t\u021C\n\t\x03\t\x03\t\x05\t\u0220\n\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0227\n\t\x03\t\x03\t\x05\t\u022B\n\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0232\n\t\x03\t\x03\t\x05\t\u0236" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u023D\n\t\x03\t\x03\t\x05\t\u0241" +
		"\n\t\x03\t\x03\t\x05\t\u0245\n\t\x03\n\x03\n\x03\n\x05\n\u024A\n\n\x03" +
		"\n\x03\n\x05\n\u024E\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0254\n\n\x03\n" +
		"\x03\n\x05\n\u0258\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u025E\n\n\x03\n\x03" +
		"\n\x05\n\u0262\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0268\n\n\x03\n\x03\n" +
		"\x05\n\u026C\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0272\n\n\x03\n\x03\n\x05" +
		"\n\u0276\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u027C\n\n\x03\n\x03\n\x05\n" +
		"\u0280\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0286\n\n\x03\n\x03\n\x05\n\u028A" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0290\n\n\x03\n\x03\n\x05\n\u0294\n" +
		"\n\x03\n\x05\n\u0297\n\n\x03\v\x03\v\x03\v\x05\v\u029C\n\v\x03\v\x05\v" +
		"\u029F\n\v\x03\v\x03\v\x05\v\u02A3\n\v\x03\v\x03\v\x03\v\x05\v\u02A8\n" +
		"\v\x03\v\x03\v\x05\v\u02AC\n\v\x03\v\x05\v\u02AF\n\v\x03\v\x03\v\x05\v" +
		"\u02B3\n\v\x03\v\x03\v\x03\v\x05\v\u02B8\n\v\x03\v\x03\v\x05\v\u02BC\n" +
		"\v\x03\v\x05\v\u02BF\n\v\x03\v\x03\v\x05\v\u02C3\n\v\x03\v\x03\v\x03\v" +
		"\x05\v\u02C8\n\v\x03\v\x03\v\x05\v\u02CC\n\v\x03\v\x05\v\u02CF\n\v\x03" +
		"\v\x03\v\x05\v\u02D3\n\v\x03\v\x03\v\x03\v\x05\v\u02D8\n\v\x03\v\x03\v" +
		"\x05\v\u02DC\n\v\x03\v\x05\v\u02DF\n\v\x03\v\x03\v\x05\v\u02E3\n\v\x03" +
		"\v\x03\v\x03\v\x05\v\u02E8\n\v\x03\v\x03\v\x05\v\u02EC\n\v\x03\v\x05\v" +
		"\u02EF\n\v\x03\v\x03\v\x05\v\u02F3\n\v\x03\v\x03\v\x03\v\x05\v\u02F8\n" +
		"\v\x03\v\x03\v\x05\v\u02FC\n\v\x03\v\x05\v\u02FF\n\v\x03\v\x03\v\x05\v" +
		"\u0303\n\v\x03\v\x03\v\x03\v\x05\v\u0308\n\v\x03\v\x03\v\x05\v\u030C\n" +
		"\v\x03\v\x05\v\u030F\n\v\x03\v\x03\v\x05\v\u0313\n\v\x03\v\x03\v\x03\v" +
		"\x05\v\u0318\n\v\x03\v\x03\v\x05\v\u031C\n\v\x03\v\x05\v\u031F\n\v\x03" +
		"\v\x03\v\x05\v\u0323\n\v\x03\v\x03\v\x03\v\x05\v\u0328\n\v\x03\v\x03\v" +
		"\x05\v\u032C\n\v\x03\v\x05\v\u032F\n\v\x03\v\x03\v\x05\v\u0333\n\v\x03" +
		"\v\x03\v\x03\v\x05\v\u0338\n\v\x03\v\x03\v\x05\v\u033C\n\v\x03\v\x05\v" +
		"\u033F\n\v\x03\v\x03\v\x05\v\u0343\n\v\x05\v\u0345\n\v\x03\f\x03\f\x03" +
		"\f\x05\f\u034A\n\f\x03\f\x03\f\x05\f\u034E\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x05\f\u0356\n\f\x03\f\x03\f\x03\f\x05\f\u035B\n\f\x03\f\x03" +
		"\f\x05\f\u035F\n\f\x03\f\x03\f\x03\f\x05\f\u0364\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x05\f\u036B\n\f\x03\f\x03\f\x03\f\x05\f\u0370\n\f\x03\f\x03" +
		"\f\x05\f\u0374\n\f\x03\f\x03\f\x05\f\u0378\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x05\f\u037E\n\f\x03\f\x03\f\x05\f\u0382\n\f\x03\f\x03\f\x05\f\u0386\n" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\u038C\n\f\x03\f\x03\f\x05\f\u0390\n\f" +
		"\x03\f\x03\f\x05\f\u0394\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u039A\n\f\x03" +
		"\f\x03\f\x05\f\u039E\n\f\x03\f\x03\f\x05\f\u03A2\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x05\f\u03A8\n\f\x03\f\x03\f\x05\f\u03AC\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u03B2\n\f\x03\f\x03\f\x05\f\u03B6\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x05\f\u03BC\n\f\x03\f\x03\f\x05\f\u03C0\n\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u03C6\n\f\x03\f\x03\f\x05\f\u03CA\n\f\x03\f\x03\f\x03\f\x03\f\x05\f" +
		"\u03D0\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u03D6\n\f\x03\f\x03\f\x05\f\u03DA" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u03E0\n\f\x03\f\x03\f\x05\f\u03E4\n" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\u03EA\n\f\x03\f\x03\f\x05\f\u03EE\n\f" +
		"\x03\f\x03\f\x03\f\x03\f\x05\f\u03F4\n\f\x03\f\x03\f\x05\f\u03F8\n\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\u03FE\n\f\x03\f\x03\f\x05\f\u0402\n\f\x03\f" +
		"\x03\f\x03\f\x03\f\x05\f\u0408\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u040E" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0414\n\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u041A\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0420\n\f\x03\f\x03\f\x05\f" +
		"\u0424\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u042A\n\f\x03\f\x03\f\x05\f\u042E" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0434\n\f\x03\f\x03\f\x05\f\u0438\n" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\u043E\n\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u0444\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u044A\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x05\f\u0450\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0456\n\f\x03\f\x05" +
		"\f\u0459\n\f\x03\r\x03\r\x03\r\x05\r\u045E\n\r\x03\r\x03\r\x05\r\u0462" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u046A\n\r\x03\r\x03\r\x03" +
		"\r\x05\r\u046F\n\r\x03\r\x03\r\x05\r\u0473\n\r\x03\r\x03\r\x03\r\x05\r" +
		"\u0478\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u047F\n\r\x03\r\x03\r\x03" +
		"\r\x05\r\u0484\n\r\x03\r\x03\r\x05\r\u0488\n\r\x03\r\x03\r\x05\r\u048C" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0492\n\r\x03\r\x03\r\x05\r\u0496\n" +
		"\r\x03\r\x03\r\x05\r\u049A\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04A0\n\r" +
		"\x03\r\x03\r\x05\r\u04A4\n\r\x03\r\x03\r\x05\r\u04A8\n\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\u04AE\n\r\x03\r\x03\r\x05\r\u04B2\n\r\x03\r\x03\r\x05\r" +
		"\u04B6\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04BC\n\r\x03\r\x03\r\x05\r\u04C0" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04C6\n\r\x03\r\x03\r\x05\r\u04CA\n" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04D0\n\r\x03\r\x03\r\x05\r\u04D4\n\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u04DA\n\r\x03\r\x03\r\x05\r\u04DE\n\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u04E4\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04EA" +
		"\n\r\x03\r\x03\r\x05\r\u04EE\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04F4\n" +
		"\r\x03\r\x03\r\x05\r\u04F8\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04FE\n\r" +
		"\x03\r\x03\r\x05\r\u0502\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0508\n\r\x03" +
		"\r\x03\r\x05\r\u050C\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0512\n\r\x03\r" +
		"\x03\r\x05\r\u0516\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u051C\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u0522\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0528\n\r" +
		"\x03\r\x03\r\x05\r\u052C\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0532\n\r\x03" +
		"\r\x03\r\x05\r\u0536\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u053C\n\r\x03\r" +
		"\x03\r\x05\r\u0540\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0546\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u054C\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0552\n\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u0558\n\r\x03\r\x03\r\x03\r\x03\r\x05\r" +
		"\u055E\n\r\x03\r\x05\r\u0561\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0566" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u056C\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u0572\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u0578\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u057E\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0584\n\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u0588\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u058E\n\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u0592\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u0598\n\x0E\x03\x0E\x03\x0E\x05\x0E\u059C\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u05A3\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u05A9\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05AF\n\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05B5\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u05BB\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05C1" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05C7\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u05CD\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u05D3\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05D9\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05DF\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u05E5\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u05EB\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05F1\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05F7\n\x0E\x03\x0E\x03\x0E\x05\x0E\u05FB" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0601\n\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u0605\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u060B" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\u060F\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u0615\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0619\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u0627\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u062C" +
		"\n\x0E\x03\x0E\x05\x0E\u062F\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u063A\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u0640\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0647\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u064E\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0655\n\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u065C\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0663\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u066E\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0678" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0682\n\x0F\x03\x0F\x05\x0F\u0685\n\x0F\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\u068A\n\x10\x03\x10\x03\x10\x05\x10\u068E\n\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\u0694\n\x10\x03\x10\x03\x10\x05\x10\u0698\n\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u069E\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\u06A4\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u06AA\n\x10\x03\x10\x05\x10\u06AD\n\x10\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\u06B2\n\x11\x03\x11\x03\x11\x05\x11\u06B6\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\u06BC\n\x11\x03\x11\x03\x11\x05\x11\u06C0\n\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x05\x11\u06C6\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u06CC\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u06D2" +
		"\n\x11\x03\x11\x05\x11\u06D5\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\u06DA" +
		"\n\x12\x03\x12\x07\x12\u06DD\n\x12\f\x12\x0E\x12\u06E0\v\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u06E5\n\x12\x03\x12\x07\x12\u06E8\n\x12\f\x12\x0E" +
		"\x12\u06EB\v\x12\x03\x12\x03\x12\x03\x12\x05\x12\u06F0\n\x12\x03\x12\x07" +
		"\x12\u06F3\n\x12\f\x12\x0E\x12\u06F6\v\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u06FB\n\x12\x03\x12\x07\x12\u06FE\n\x12\f\x12\x0E\x12\u0701\v\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0709\n\x12\x03" +
		"\x13\x05\x13\u070C\n\x13\x03\x13\x03\x13\x05\x13\u0710\n\x13\x03\x13\x03" +
		"\x13\x05\x13\u0714\n\x13\x03\x13\x03\x13\x05\x13\u0718\n\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\u071E\n\x13\x03\x13\x07\x13\u0721\n\x13\f" +
		"\x13\x0E\x13\u0724\v\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u072F\n\x13\x03\x13\x05\x13\u0732\n\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u0750\n\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0755\n\x14" +
		"\f\x14\x0E\x14\u0758\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0764\n\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u076A\n\x16\x03\x16\x03/\x02\x03&\x17\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02\x02" +
		"\f\x03\x02\x07\t\x03\x02\n\f\x03\x02\x0F\x11\x03\x02\x12\x13\x04\x02\xD1" +
		"\xD3\xD6\xD6\x03\x02\x19\x1A\x03\x02\x1B\x1C\x03\x02\xD1\xD3\x03\x02\x1F" +
		" \x03\x02!\"\x02\u097E\x02/\x03\x02\x02\x02\x049\x03\x02\x02\x02\x06E" +
		"\x03\x02\x02\x02\bG\x03\x02\x02\x02\nT\x03\x02\x02\x02\f\u01FE\x03\x02" +
		"\x02\x02\x0E\u0200\x03\x02\x02\x02\x10\u0244\x03\x02\x02\x02\x12\u0296" +
		"\x03\x02\x02\x02\x14\u0344\x03\x02\x02\x02\x16\u0458\x03\x02\x02\x02\x18" +
		"\u0560\x03\x02\x02\x02\x1A\u062E\x03\x02\x02\x02\x1C\u0684\x03\x02\x02" +
		"\x02\x1E\u06AC\x03\x02\x02\x02 \u06D4\x03\x02\x02\x02\"\u0708\x03\x02" +
		"\x02\x02$\u0731\x03\x02\x02\x02&\u074F\x03\x02\x02\x02(\u0763\x03\x02" +
		"\x02\x02*\u0769\x03\x02\x02\x02,.\x05\x04\x03\x02-,\x03\x02\x02\x02.1" +
		"\x03\x02\x02\x02/0\x03\x02\x02\x02/-\x03\x02\x02\x0202\x03\x02\x02\x02" +
		"1/\x03\x02\x02\x0223\x07\x02\x02\x033\x03\x03\x02\x02\x0246\x05\x06\x04" +
		"\x0257\x07\xD9\x02\x0265\x03\x02\x02\x0267\x03\x02\x02\x027:\x03\x02\x02" +
		"\x028:\x07\xD9\x02\x0294\x03\x02\x02\x0298\x03\x02\x02\x02:\x05\x03\x02" +
		"\x02\x02;<\x05\b\x05\x02<=\x05\"\x12\x02=F\x03\x02\x02\x02>?\x05\b\x05" +
		"\x02?@\x05\n\x06\x02@F\x03\x02\x02\x02AF\x05\b\x05\x02BF\x05$\x13\x02" +
		"CF\x05\"\x12\x02DF\x05\n\x06\x02E;\x03\x02\x02\x02E>\x03\x02\x02\x02E" +
		"A\x03\x02\x02\x02EB\x03\x02\x02\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02" +
		"F\x07\x03\x02\x02\x02GH\x07\xD8\x02\x02H\t\x03\x02\x02\x02IU\x05\f\x07" +
		"\x02JU\x05\x0E\b\x02KU\x05\x10\t\x02LU\x05\x12\n\x02MU\x05\x14\v\x02N" +
		"U\x05\x16\f\x02OU\x05\x18\r\x02PU\x05\x1A\x0E\x02QU\x05\x1C\x0F\x02RU" +
		"\x05\x1E\x10\x02SU\x05 \x11\x02TI\x03\x02\x02\x02TJ\x03\x02\x02\x02TK" +
		"\x03\x02\x02\x02TL\x03\x02\x02\x02TM\x03\x02\x02\x02TN\x03\x02\x02\x02" +
		"TO\x03\x02\x02\x02TP\x03\x02\x02\x02TQ\x03\x02\x02\x02TR\x03\x02\x02\x02" +
		"TS\x03\x02\x02\x02U\v\x03\x02\x02\x02VW\x07\'\x02\x02WY\x07\xCF\x02\x02" +
		"XZ\x07\x03\x02\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[\u01FF\x05&\x14\x02\\]\x07(\x02\x02]_\x07\xCF\x02\x02^`\x07\x03\x02\x02" +
		"_^\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02a\u01FF\x05&\x14" +
		"\x02bc\x07)\x02\x02ce\x07\xCF\x02\x02df\x07\x03\x02\x02ed\x03\x02\x02" +
		"\x02ef\x03\x02\x02\x02fg\x03\x02\x02\x02g\u01FF\x07\xD7\x02\x02hi\x07" +
		"*\x02\x02ik\x07\xCF\x02\x02jl\x07\x03\x02\x02kj\x03\x02\x02\x02kl\x03" +
		"\x02\x02\x02lw\x03\x02\x02\x02mo\x07\xCF\x02\x02np\x07\x03\x02\x02on\x03" +
		"\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02\x02qx\x05&\x14\x02rs\x05" +
		"&\x14\x02st\x07\x04\x02\x02tu\x07\xCF\x02\x02uv\x07\x05\x02\x02vx\x03" +
		"\x02\x02\x02wm\x03\x02\x02\x02wr\x03\x02\x02\x02x\u01FF\x03\x02\x02\x02" +
		"yz\x07+\x02\x02z|\x07";
	private static readonly _serializedATNSegment1: string =
		"\xCF\x02\x02{}\x07\x03\x02\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x03" +
		"\x02\x02\x02~\x80\x07\xCF\x02\x02\x7F\x81\x07\x03\x02\x02\x80\x7F\x03" +
		"\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\u01FF" +
		"\x07\xD7\x02\x02\x83\x84\x07,\x02\x02\x84\x86\x07\xCF\x02\x02\x85\x87" +
		"\x07\x03\x02\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88" +
		"\x03\x02\x02\x02\x88\x8A\x07\xCF\x02\x02\x89\x8B\x07\x03\x02\x02\x8A\x89" +
		"\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\u01FF" +
		"\x07\xD7\x02\x02\x8D\x8E\x07-\x02\x02\x8E\x90\x07\xCF\x02\x02\x8F\x91" +
		"\x07\x03\x02\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92" +
		"\x03\x02\x02\x02\x92\x94\x07\xCF\x02\x02\x93\x95\x07\x03\x02\x02\x94\x93" +
		"\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\u01FF" +
		"\x07\xD7\x02\x02\x97\x98\x07.\x02\x02\x98\x9A\x07\xCF\x02\x02\x99\x9B" +
		"\x07\x03\x02\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C" +
		"\x03\x02\x02\x02\x9C\x9E\x07\xCF\x02\x02\x9D\x9F\x07\x03\x02\x02\x9E\x9D" +
		"\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\u01FF" +
		"\x07\xD7\x02\x02\xA1\xA2\x07/\x02\x02\xA2\xA4\x07\xCF\x02\x02\xA3\xA5" +
		"\x07\x03\x02\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6" +
		"\x03\x02\x02\x02\xA6\xA8\x07\xCF\x02\x02\xA7\xA9\x07\x03\x02\x02\xA8\xA7" +
		"\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\u01FF" +
		"\x07\xD7\x02\x02\xAB\xAC\x070\x02\x02\xAC\xAE\x07\xCF\x02\x02\xAD\xAF" +
		"\x07\x03\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0" +
		"\x03\x02\x02\x02\xB0\xB2\x07\xCF\x02\x02\xB1\xB3\x07\x03\x02\x02\xB2\xB1" +
		"\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\u01FF" +
		"\x07\xD7\x02\x02\xB5\xB6\x071\x02\x02\xB6\xB8\x07\xCF\x02\x02\xB7\xB9" +
		"\x07\x03\x02\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xC4" +
		"\x03\x02\x02\x02\xBA\xBC\x07\xCF\x02\x02\xBB\xBD\x07\x03\x02\x02\xBC\xBB" +
		"\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC5" +
		"\x05&\x14\x02\xBF\xC0\x05&\x14\x02\xC0\xC1\x07\x04\x02\x02\xC1\xC2\x07" +
		"\xCF\x02\x02\xC2\xC3\x07\x05\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xBA\x03" +
		"\x02\x02\x02\xC4\xBF\x03\x02\x02\x02\xC5\u01FF\x03\x02\x02\x02\xC6\xC7" +
		"\x072\x02\x02\xC7\xC9\x07\xCF\x02\x02\xC8\xCA\x07\x03\x02\x02\xC9\xC8" +
		"\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xD5\x03\x02\x02\x02\xCB\xCD" +
		"\x07\xCF\x02\x02\xCC\xCE\x07\x03\x02\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE" +
		"\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD6\x05&\x14\x02\xD0\xD1" +
		"\x05&\x14\x02\xD1\xD2\x07\x04\x02\x02\xD2\xD3\x07\xCF\x02\x02\xD3\xD4" +
		"\x07\x05\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xCB\x03\x02\x02\x02\xD5\xD0" +
		"\x03\x02\x02\x02\xD6\u01FF\x03\x02\x02\x02\xD7\xD8\x073\x02\x02\xD8\xDA" +
		"\x07\xCF\x02\x02\xD9\xDB\x07\x03\x02\x02\xDA\xD9\x03\x02\x02\x02\xDA\xDB" +
		"\x03\x02\x02\x02\xDB\xE6\x03\x02\x02\x02\xDC\xDE\x07\xCF\x02\x02\xDD\xDF" +
		"\x07\x03\x02\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\xE7\x05&\x14\x02\xE1\xE2\x05&\x14\x02\xE2\xE3\x07" +
		"\x04\x02\x02\xE3\xE4\x07\xCF\x02\x02\xE4\xE5\x07\x05\x02\x02\xE5\xE7\x03" +
		"\x02\x02\x02\xE6\xDC\x03\x02\x02\x02\xE6\xE1\x03\x02\x02\x02\xE7\u01FF" +
		"\x03\x02\x02\x02\xE8\xE9\x074\x02\x02\xE9\xEB\x07\xCF\x02\x02\xEA\xEC" +
		"\x07\x03\x02\x02\xEB\xEA\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xF7" +
		"\x03\x02\x02\x02\xED\xEF\x07\xCF\x02\x02\xEE\xF0\x07\x03\x02\x02\xEF\xEE" +
		"\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF8" +
		"\x05&\x14\x02\xF2\xF3\x05&\x14\x02\xF3\xF4\x07\x04\x02\x02\xF4\xF5\x07" +
		"\xCF\x02\x02\xF5\xF6\x07\x05\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xED\x03" +
		"\x02\x02\x02\xF7\xF2\x03\x02\x02\x02\xF8\u01FF\x03\x02\x02\x02\xF9\xFA" +
		"\x075\x02\x02\xFA\xFC\x07\xCF\x02\x02\xFB\xFD\x07\x03\x02\x02\xFC\xFB" +
		"\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u0108\x03\x02\x02\x02\xFE" +
		"\u0100\x07\xCF\x02\x02\xFF\u0101\x07\x03\x02\x02\u0100\xFF\x03\x02\x02" +
		"\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0109" +
		"\x05&\x14\x02\u0103\u0104\x05&\x14\x02\u0104\u0105\x07\x04\x02\x02\u0105" +
		"\u0106\x07\xCF\x02\x02\u0106\u0107\x07\x05\x02\x02\u0107\u0109\x03\x02" +
		"\x02\x02\u0108\xFE\x03\x02\x02\x02\u0108\u0103\x03\x02\x02\x02\u0109\u01FF" +
		"\x03\x02\x02\x02\u010A\u010B\x076\x02\x02\u010B\u010D\x07\xCF\x02\x02" +
		"\u010C\u010E\x07\x03\x02\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03" +
		"\x02\x02\x02\u010E\u0119\x03\x02\x02\x02\u010F\u0111\x07\xCF\x02\x02\u0110" +
		"\u0112\x07\x03\x02\x02\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02" +
		"\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u011A\x05&\x14\x02\u0114\u0115" +
		"\x05&\x14\x02\u0115\u0116\x07\x04\x02\x02\u0116\u0117\x07\xCF\x02\x02" +
		"\u0117\u0118\x07\x05\x02\x02\u0118\u011A\x03\x02\x02\x02\u0119\u010F\x03" +
		"\x02\x02\x02\u0119\u0114\x03\x02\x02\x02\u011A\u01FF\x03\x02\x02\x02\u011B" +
		"\u011C\x077\x02\x02\u011C\u011E\x07\xCF\x02\x02\u011D\u011F\x07\x03\x02" +
		"\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u012A" +
		"\x03\x02\x02\x02\u0120\u0122\x07\xCF\x02\x02\u0121\u0123\x07\x03\x02\x02" +
		"\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03" +
		"\x02\x02\x02\u0124\u012B\x05&\x14\x02\u0125\u0126\x05&\x14\x02\u0126\u0127" +
		"\x07\x04\x02\x02\u0127\u0128\x07\xCF\x02\x02\u0128\u0129\x07\x05\x02\x02" +
		"\u0129\u012B\x03\x02\x02\x02\u012A\u0120\x03\x02\x02\x02\u012A\u0125\x03" +
		"\x02\x02\x02\u012B\u01FF\x03\x02\x02\x02\u012C\u012D\x078\x02\x02\u012D" +
		"\u012F\x07\xCF\x02\x02\u012E\u0130\x07\x03\x02\x02\u012F\u012E\x03\x02" +
		"\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u013B\x03\x02\x02\x02\u0131" +
		"\u0133\x07\xCF\x02\x02\u0132\u0134\x07\x03\x02\x02\u0133\u0132\x03\x02" +
		"\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135" +
		"\u013C\x05&\x14\x02\u0136\u0137\x05&\x14\x02\u0137\u0138\x07\x04\x02\x02" +
		"\u0138\u0139\x07\xCF\x02\x02\u0139\u013A\x07\x05\x02\x02\u013A\u013C\x03" +
		"\x02\x02\x02\u013B\u0131\x03\x02\x02\x02\u013B\u0136\x03\x02\x02\x02\u013C" +
		"\u01FF\x03\x02\x02\x02\u013D\u013E\x079\x02\x02\u013E\u0140\x07\xCF\x02" +
		"\x02\u013F\u0141\x07\x03\x02\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141" +
		"\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0144\x07\xCF\x02\x02" +
		"\u0143\u0145\x07\x03\x02\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03" +
		"\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u01FF\x05&\x14\x02\u0147" +
		"\u0148\x07:\x02\x02\u0148\u014A\x07\xCF\x02\x02\u0149\u014B\x07\x03\x02" +
		"\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014C" +
		"\x03\x02\x02\x02\u014C\u014E\x07\xCF\x02\x02\u014D\u014F\x07\x03\x02\x02" +
		"\u014E\u014D\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x03" +
		"\x02\x02\x02\u0150\u01FF\x05&\x14\x02\u0151\u0152\x07;\x02\x02\u0152\u0154" +
		"\x07\xCF\x02\x02\u0153\u0155\x07\x03\x02\x02\u0154\u0153\x03\x02\x02\x02" +
		"\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0158\x07" +
		"\xCF\x02\x02\u0157\u0159\x07\x03\x02\x02\u0158\u0157\x03\x02\x02\x02\u0158" +
		"\u0159\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u01FF\x05&\x14" +
		"\x02\u015B\u015C\x07<\x02\x02\u015C\u015E\x07\xCF\x02\x02\u015D\u015F" +
		"\x07\x03\x02\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02" +
		"\u015F\u0160\x03\x02\x02\x02\u0160\u0162\x07\xCF\x02\x02\u0161\u0163\x07" +
		"\x03\x02\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163" +
		"\u0164\x03\x02\x02\x02\u0164\u01FF\x05&\x14\x02\u0165\u0166\x07=\x02\x02" +
		"\u0166\u0168\x07\xCF\x02\x02\u0167\u0169\x07\x03\x02\x02\u0168\u0167\x03" +
		"\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
		"\u016C\x07\xCF\x02\x02\u016B\u016D\x07\x03\x02\x02\u016C\u016B\x03\x02" +
		"\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
		"\u01FF\x05&\x14\x02\u016F\u0170\x07>\x02\x02\u0170\u0172\x07\xCF\x02\x02" +
		"\u0171\u0173\x07\x03\x02\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03" +
		"\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0176\x07\xCF\x02\x02\u0175" +
		"\u0177\x07\x03\x02\x02\u0176\u0175\x03\x02\x02\x02\u0176\u0177\x03\x02" +
		"\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u01FF\x05&\x14\x02\u0179\u017A" +
		"\x07?\x02\x02\u017A\u017C\x07\xCF\x02\x02\u017B\u017D\x07\x03\x02\x02" +
		"\u017C\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x03" +
		"\x02\x02\x02\u017E\u0180\x07\xCF\x02\x02\u017F\u0181\x07\x03\x02\x02\u0180" +
		"\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x03\x02" +
		"\x02\x02\u0182\u01FF\x05&\x14\x02\u0183\u0184\x07@\x02\x02\u0184\u0186" +
		"\x07\xCF\x02\x02\u0185\u0187\x07\x03\x02\x02\u0186\u0185\x03\x02\x02\x02" +
		"\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u018A\x07" +
		"\xCF\x02\x02\u0189\u018B\x07\x03\x02\x02\u018A\u0189\x03\x02\x02\x02\u018A" +
		"\u018B\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u01FF\x05&\x14" +
		"\x02\u018D\u018E\x07A\x02\x02\u018E\u0190\x07\xCF\x02\x02\u018F\u0191" +
		"\x07\x03\x02\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02" +
		"\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x07\xCF\x02\x02\u0193\u0195\x07" +
		"\x03\x02\x02\u0194\u0193\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195" +
		"\u0196\x03\x02\x02\x02\u0196\u01FF\x05&\x14\x02\u0197\u0198\x07B\x02\x02" +
		"\u0198\u019A\x07\xCF\x02\x02\u0199\u019B\x07\x03\x02\x02\u019A\u0199\x03" +
		"\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C" +
		"\u019E\x07\xCF\x02\x02\u019D\u019F\x07\x03\x02\x02\u019E\u019D\x03\x02" +
		"\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0" +
		"\u01FF\x07\xCF\x02\x02\u01A1\u01A2\x07C\x02\x02\u01A2\u01A4\x07\xCF\x02" +
		"\x02\u01A3\u01A5\x07\x03\x02\x02\u01A4\u01A3\x03\x02\x02\x02\u01A4\u01A5" +
		"\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A8\x07\xCF\x02\x02" +
		"\u01A7\u01A9\x07\x03\x02\x02\u01A8\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03" +
		"\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01FF\x07\xCF\x02\x02\u01AB" +
		"\u01AC\x07D\x02\x02\u01AC\u01AE\x07\xCF\x02\x02\u01AD\u01AF\x07\x03\x02" +
		"\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0" +
		"\x03\x02\x02\x02\u01B0\u01B2\x07\xCF\x02\x02\u01B1\u01B3\x07\x03\x02\x02" +
		"\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03" +
		"\x02\x02\x02\u01B4\u01FF\x07\xCF\x02\x02\u01B5\u01B6\x07E\x02\x02\u01B6" +
		"\u01B8\x07\xCF\x02\x02\u01B7\u01B9\x07\x03\x02\x02\u01B8\u01B7\x03\x02" +
		"\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
		"\u01BC\x07\xCF\x02\x02\u01BB\u01BD\x07\x03\x02\x02\u01BC\u01BB\x03\x02" +
		"\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE" +
		"\u01FF\x07\xCF\x02\x02\u01BF\u01C0\x07F\x02\x02\u01C0\u01C2\x07\xCF\x02" +
		"\x02\u01C1\u01C3\x07\x03\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3" +
		"\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C6\x07\xCF\x02\x02" +
		"\u01C5\u01C7\x07\x03\x02\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03" +
		"\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01FF\x07\xCF\x02\x02\u01C9" +
		"\u01CA\x07G\x02\x02\u01CA\u01CC\x07\xCF\x02\x02\u01CB\u01CD\x07\x03\x02" +
		"\x02\u01CC\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE" +
		"\x03\x02\x02\x02\u01CE\u01D0\x07\xCF\x02\x02\u01CF\u01D1\x07\x03\x02\x02" +
		"\u01D0\u01CF\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x03" +
		"\x02\x02\x02\u01D2\u01FF\x07\xCF\x02\x02\u01D3\u01D4\x07H\x02\x02\u01D4" +
		"\u01D6\x07\xCF\x02\x02\u01D5\u01D7\x07\x03\x02\x02\u01D6\u01D5\x03\x02" +
		"\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8" +
		"\u01DA\x07\xCF\x02\x02\u01D9\u01DB\x07\x03\x02\x02\u01DA\u01D9\x03\x02" +
		"\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC" +
		"\u01FF\x07\xCF\x02\x02\u01DD\u01DE\x07I\x02\x02\u01DE\u01E0\x07\xCF\x02" +
		"\x02\u01DF\u01E1\x07\x03\x02\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0\u01E1" +
		"\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E4\x07\xCF\x02\x02" +
		"\u01E3\u01E5\x07\x03\x02\x02\u01E4\u01E3\x03\x02\x02\x02\u01E4\u01E5\x03" +
		"\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01FF\x07\xCF\x02\x02\u01E7" +
		"\u01E8\x07J\x02\x02\u01E8\u01EA\x07\xCF\x02\x02\u01E9\u01EB\x07\x03\x02" +
		"\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EC" +
		"\x03\x02\x02\x02\u01EC\u01EE\x07\xCF\x02\x02\u01ED\u01EF\x07\x03\x02\x02" +
		"\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x03" +
		"\x02\x02\x02\u01F0\u01FF\x07\xCF\x02\x02\u01F1\u01F2\x07K\x02\x02\u01F2" +
		"\u01F4\x07\xCF\x02\x02\u01F3\u01F5\x07\x03\x02\x02\u01F4\u01F3\x03\x02" +
		"\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6" +
		"\u01F8\x07\xCF\x02\x02\u01F7\u01F9\x07\x03\x02\x02\u01F8\u01F7\x03\x02" +
		"\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA" +
		"\u01FF\x07\xCF\x02\x02\u01FB\u01FF\x07L\x02\x02\u01FC\u01FF\x07M\x02\x02" +
		"\u01FD\u01FF\x07N\x02\x02\u01FEV\x03\x02\x02\x02\u01FE\\\x03\x02\x02\x02" +
		"\u01FEb\x03\x02\x02\x02\u01FEh\x03\x02\x02\x02\u01FEy\x03\x02\x02\x02" +
		"\u01FE\x83\x03\x02\x02\x02\u01FE\x8D\x03\x02\x02\x02\u01FE\x97\x03\x02" +
		"\x02\x02\u01FE\xA1\x03\x02\x02\x02\u01FE\xAB\x03\x02\x02\x02\u01FE\xB5" +
		"\x03\x02\x02\x02\u01FE\xC6\x03\x02\x02\x02\u01FE\xD7\x03\x02\x02\x02\u01FE" +
		"\xE8\x03\x02\x02\x02\u01FE\xF9\x03\x02\x02\x02\u01FE\u010A\x03\x02\x02" +
		"\x02\u01FE\u011B\x03\x02\x02\x02\u01FE\u012C\x03\x02\x02\x02\u01FE\u013D" +
		"\x03\x02\x02\x02\u01FE\u0147\x03\x02\x02\x02\u01FE\u0151\x03\x02\x02\x02" +
		"\u01FE\u015B\x03\x02\x02\x02\u01FE\u0165\x03\x02\x02\x02\u01FE\u016F\x03" +
		"\x02\x02\x02\u01FE\u0179\x03\x02\x02\x02\u01FE\u0183\x03\x02\x02\x02\u01FE" +
		"\u018D\x03\x02\x02\x02\u01FE\u0197\x03\x02\x02\x02\u01FE\u01A1\x03\x02" +
		"\x02\x02\u01FE\u01AB\x03\x02\x02\x02\u01FE\u01B5\x03\x02\x02\x02\u01FE" +
		"\u01BF\x03\x02\x02\x02\u01FE\u01C9\x03\x02\x02\x02\u01FE\u01D3\x03\x02" +
		"\x02\x02\u01FE\u01DD\x03\x02\x02\x02\u01FE\u01E7\x03\x02\x02\x02\u01FE" +
		"\u01F1\x03\x02\x02\x02\u01FE\u01FB\x03\x02\x02\x02\u01FE\u01FC\x03\x02" +
		"\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FF\r\x03\x02\x02\x02\u0200\u0201" +
		"\x07O\x02\x02\u0201\x0F\x03\x02\x02\x02\u0202\u0203\x07P\x02\x02\u0203" +
		"\u0205\x07\xCF\x02\x02\u0204\u0206\x07\x03\x02\x02\u0205\u0204\x03\x02" +
		"\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207" +
		"\u0209\x05&\x14\x02\u0208\u020A\x07\x03\x02\x02\u0209\u0208\x03\x02\x02" +
		"\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020C" +
		"\x07\xCF\x02\x02\u020C\u0245\x03\x02\x02\x02\u020D\u020E\x07Q\x02\x02" +
		"\u020E\u0210\x07\xCF\x02\x02\u020F\u0211\x07\x03\x02\x02\u0210\u020F\x03" +
		"\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212" +
		"\u0214\x05&\x14\x02\u0213\u0215\x07\x03\x02\x02\u0214\u0213\x03\x02\x02" +
		"\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0217" +
		"\x07\xCF\x02\x02\u0217\u0245\x03\x02\x02\x02\u0218\u0219\x07R\x02\x02" +
		"\u0219\u021B\x07\xCF\x02\x02\u021A\u021C\x07\x03\x02\x02\u021B\u021A\x03" +
		"\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D" +
		"\u021F\x05&\x14\x02\u021E\u0220\x07\x03\x02\x02\u021F\u021E\x03\x02\x02" +
		"\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0222" +
		"\x07\xCF\x02\x02\u0222\u0245\x03\x02\x02\x02\u0223\u0224\x07S\x02\x02" +
		"\u0224\u0226\x07\xCF\x02\x02\u0225\u0227\x07\x03\x02\x02\u0226\u0225\x03" +
		"\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228" +
		"\u022A\x05&\x14\x02\u0229\u022B\x07\x03\x02\x02\u022A\u0229\x03\x02\x02" +
		"\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022D" +
		"\x05*\x16\x02\u022D\u0245\x03\x02\x02\x02\u022E\u022F\x07T\x02\x02\u022F" +
		"\u0231\x07\xCF\x02\x02\u0230\u0232\x07\x03\x02\x02\u0231\u0230\x03\x02" +
		"\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233" +
		"\u0235\x05&\x14\x02\u0234\u0236\x07\x03\x02\x02\u0235\u0234\x03\x02\x02" +
		"\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238" +
		"\x05*\x16\x02\u0238\u0245\x03\x02\x02\x02\u0239\u023A\x07U\x02\x02\u023A" +
		"\u023C\x07\xCF\x02\x02\u023B\u023D\x07\x03\x02\x02\u023C\u023B\x03\x02" +
		"\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E" +
		"\u0240\x05&\x14\x02\u023F\u0241\x07\x03\x02\x02\u0240\u023F\x03\x02\x02" +
		"\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0243" +
		"\x05*\x16\x02\u0243\u0245\x03\x02\x02\x02\u0244\u0202\x03\x02\x02\x02" +
		"\u0244\u020D\x03\x02\x02\x02\u0244\u0218\x03\x02\x02\x02\u0244\u0223\x03" +
		"\x02\x02\x02\u0244\u022E\x03\x02\x02\x02\u0244\u0239\x03\x02\x02\x02\u0245" +
		"\x11\x03\x02\x02\x02\u0246\u0247\x07V\x02\x02\u0247\u0249\x07\xCF\x02" +
		"\x02\u0248\u024A\x07\x03\x02\x02\u0249\u0248\x03\x02\x02\x02\u0249\u024A" +
		"\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024D\x07\xCF\x02\x02" +
		"\u024C\u024E\x07\x03\x02\x02\u024D\u024C\x03\x02\x02\x02\u024D\u024E\x03" +
		"\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0297\x07\xCF\x02\x02\u0250" +
		"\u0251\x07W\x02\x02\u0251\u0253\x07\xCF\x02\x02\u0252\u0254\x07\x03\x02" +
		"\x02\u0253\u0252\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255" +
		"\x03\x02\x02\x02\u0255\u0257\x07\xCF\x02\x02\u0256\u0258\x07\x03\x02\x02" +
		"\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x03" +
		"\x02\x02\x02\u0259\u0297\x07\xCF\x02\x02\u025A\u025B\x07X\x02\x02\u025B" +
		"\u025D\x07\xCF\x02\x02\u025C\u025E\x07\x03\x02\x02\u025D\u025C\x03\x02" +
		"\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F" +
		"\u0261\x07\xCF\x02\x02\u0260\u0262\x07\x03\x02\x02\u0261\u0260\x03\x02" +
		"\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263" +
		"\u0297\x07\xCF\x02\x02\u0264\u0265\x07Y\x02\x02\u0265\u0267\x07\xCF\x02" +
		"\x02\u0266\u0268\x07\x03\x02\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268" +
		"\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x07\xCF\x02\x02" +
		"\u026A\u026C\x07\x03\x02\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03" +
		"\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u0297\x07\xCF\x02\x02\u026E" +
		"\u026F\x07Z\x02\x02\u026F\u0271\x07\xCF\x02\x02\u0270\u0272\x07\x03\x02" +
		"\x02\u0271\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0273" +
		"\x03\x02\x02\x02\u0273\u0275\x07\xCF\x02\x02\u0274\u0276\x07\x03\x02\x02" +
		"\u0275\u0274\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x03" +
		"\x02\x02\x02\u0277\u0297\x07\xCF\x02\x02\u0278\u0279\x07[\x02\x02\u0279" +
		"\u027B\x07\xCF\x02\x02\u027A\u027C\x07\x03\x02\x02\u027B\u027A\x03\x02" +
		"\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D" +
		"\u027F\x07\xCF\x02\x02\u027E\u0280\x07\x03\x02\x02\u027F\u027E\x03\x02" +
		"\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281" +
		"\u0297\x07\xCF\x02\x02\u0282\u0283\x07\\\x02\x02\u0283\u0285\x07\xCF\x02" +
		"\x02\u0284\u0286\x07\x03\x02\x02\u0285\u0284\x03\x02\x02\x02\u0285\u0286" +
		"\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0289\x07\xCF\x02\x02" +
		"\u0288\u028A\x07\x03\x02\x02\u0289\u0288\x03\x02\x02\x02\u0289\u028A\x03" +
		"\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u0297\x07\xCF\x02\x02\u028C" +
		"\u028D\x07]\x02\x02\u028D\u028F\x07\xCF\x02\x02\u028E\u0290\x07\x03\x02" +
		"\x02\u028F\u028E\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0291" +
		"\x03\x02\x02\x02\u0291\u0293\x07\xCF\x02\x02\u0292\u0294\x07\x03\x02\x02" +
		"\u0293\u0292\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x03" +
		"\x02\x02\x02\u0295\u0297\x07\xCF\x02\x02\u0296\u0246\x03\x02\x02\x02\u0296" +
		"\u0250\x03\x02\x02\x02\u0296\u025A\x03\x02\x02\x02\u0296\u0264\x03\x02" +
		"\x02\x02\u0296\u026E\x03\x02\x02\x02\u0296\u0278\x03\x02\x02\x02\u0296" +
		"\u0282\x03\x02\x02\x02\u0296\u028C\x03\x02\x02\x02\u0297\x13\x03\x02\x02" +
		"\x02\u0298\u0299\x07^\x02\x02\u0299\u029B\x07\xCF\x02\x02\u029A\u029C" +
		"\x07\x03\x02\x02\u029B\u029A\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02" +
		"\u029C\u029E\x03\x02\x02\x02\u029D\u029F\x07\x04\x02\x02\u029E\u029D\x03" +
		"\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0" +
		"\u02A2\x07\xCF\x02\x02\u02A1\u02A3\x07\x05\x02\x02\u02A2\u02A1\x03\x02" +
		"\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u0345\x03\x02\x02\x02\u02A4" +
		"\u02A5\x07_\x02\x02\u02A5\u02A7\x07\xCF\x02\x02\u02A6\u02A8\x07\x03\x02" +
		"\x02\u02A7\u02A6\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02A9" +
		"\x03\x02\x02\x02\u02A9\u02AB\x07\xCF\x02\x02\u02AA\u02AC\x07\x03\x02\x02" +
		"\u02AB\u02AA\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AE\x03" +
		"\x02\x02\x02\u02AD\u02AF\x07\x04\x02\x02\u02AE\u02AD\x03\x02\x02\x02\u02AE" +
		"\u02AF\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B2\x07\xCF" +
		"\x02\x02\u02B1\u02B3\x07\x05\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B2" +
		"\u02B3\x03\x02\x02\x02\u02B3\u0345\x03\x02\x02\x02\u02B4\u02B5\x07`\x02" +
		"\x02\u02B5\u02B7\x07\xCF\x02\x02\u02B6\u02B8\x07\x03\x02\x02\u02B7\u02B6" +
		"\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02" +
		"\u02B9\u02BB\x07\xCF\x02\x02\u02BA\u02BC\x07\x03\x02\x02\u02BB\u02BA\x03" +
		"\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BE\x03\x02\x02\x02\u02BD" +
		"\u02BF\x07\x04\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BE\u02BF\x03\x02" +
		"\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2\x07\xCF\x02\x02\u02C1" +
		"\u02C3\x07\x05\x02\x02\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02" +
		"\x02\x02\u02C3\u0345\x03\x02\x02\x02\u02C4\u02C5\x07a\x02\x02\u02C5\u02C7" +
		"\x07\xCF\x02\x02\u02C6\u02C8\x07\x03\x02\x02\u02C7\u02C6\x03\x02\x02\x02" +
		"\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CB\x07" +
		"\xCF\x02\x02\u02CA\u02CC\x07\x03\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CB" +
		"\u02CC\x03\x02\x02\x02\u02CC\u02CE\x03\x02\x02\x02\u02CD\u02CF\x07\x04" +
		"\x02\x02\u02CE\u02CD\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF" +
		"\u02D0\x03\x02\x02\x02\u02D0\u02D2\x07\xCF\x02\x02\u02D1\u02D3\x07\x05" +
		"\x02\x02\u02D2\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3" +
		"\u0345\x03\x02\x02\x02\u02D4\u02D5\x07b\x02\x02\u02D5\u02D7\x07\xCF\x02" +
		"\x02\u02D6\u02D8\x07\x03\x02\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7\u02D8" +
		"\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DB\x07\xCF\x02\x02" +
		"\u02DA\u02DC\x07\x03\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DB\u02DC\x03" +
		"\x02\x02\x02\u02DC\u02DE\x03\x02\x02\x02\u02DD\u02DF\x07\x04\x02\x02\u02DE" +
		"\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E0\x03\x02" +
		"\x02\x02\u02E0\u02E2\x07\xCF\x02\x02\u02E1\u02E3\x07\x05\x02\x02\u02E2" +
		"\u02E1\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u0345\x03\x02" +
		"\x02\x02\u02E4\u02E5\x07c\x02\x02\u02E5\u02E7\x07\xCF\x02\x02\u02E6\u02E8" +
		"\x07\x03\x02\x02\u02E7\u02E6\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02" +
		"\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EB\x07\xCF\x02\x02\u02EA\u02EC\x07" +
		"\x03\x02\x02\u02EB\u02EA\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC" +
		"\u02EE\x03\x02\x02\x02\u02ED\u02EF\x07\x04\x02\x02\u02EE\u02ED\x03\x02" +
		"\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0" +
		"\u02F2\x07\xCF\x02\x02\u02F1\u02F3\x07\x05\x02\x02\u02F2\u02F1\x03\x02" +
		"\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u0345\x03\x02\x02\x02\u02F4" +
		"\u02F5\x07d\x02\x02\u02F5\u02F7\x07\xCF\x02\x02\u02F6\u02F8\x07\x03\x02" +
		"\x02\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02F9" +
		"\x03\x02\x02\x02\u02F9\u02FB\x07\xCF\x02\x02\u02FA\u02FC\x07\x03\x02\x02" +
		"\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FE\x03" +
		"\x02\x02\x02\u02FD\u02FF\x07\x04\x02\x02\u02FE\u02FD\x03\x02\x02\x02\u02FE" +
		"\u02FF\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0302\x07\xCF" +
		"\x02\x02\u0301\u0303\x07\x05\x02\x02\u0302\u0301\x03\x02\x02\x02\u0302" +
		"\u0303\x03\x02\x02\x02\u0303\u0345\x03\x02\x02\x02\u0304\u0305\x07e\x02" +
		"\x02\u0305\u0307\x07\xCF\x02\x02\u0306\u0308\x07\x03\x02\x02\u0307\u0306" +
		"\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B" +
		"\x07\xCF\x02\x02\u030A\u030C\x07\x03\x02\x02\u030B\u030A\x03\x02\x02\x02" +
		"\u030B\u030C\x03\x02\x02\x02\u030C\u030E\x03\x02\x02\x02\u030D\u030F\x07" +
		"\x04\x02\x02\u030E\u030D\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F" +
		"\u0310\x03\x02\x02\x02\u0310\u0312\x07\xCF\x02\x02\u0311\u0313\x07\x05" +
		"\x02\x02\u0312\u0311\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313" +
		"\u0345\x03\x02\x02\x02\u0314\u0315\x07f\x02\x02\u0315\u0317\x07\xCF\x02" +
		"\x02\u0316\u0318\x07\x03\x02\x02\u0317\u0316\x03\x02\x02\x02\u0317\u0318" +
		"\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031B\x07\xCF\x02\x02" +
		"\u031A\u031C\x07\x03\x02\x02\u031B\u031A\x03\x02\x02\x02\u031B\u031C\x03" +
		"\x02\x02\x02\u031C\u031E\x03\x02\x02\x02\u031D\u031F\x07\x04\x02\x02\u031E" +
		"\u031D\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0320\x03\x02" +
		"\x02\x02\u0320\u0322\x07\xCF\x02\x02\u0321\u0323\x07\x05\x02\x02\u0322" +
		"\u0321\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0345\x03\x02" +
		"\x02\x02\u0324\u0325\x07g\x02\x02\u0325\u0327\x07\xCF\x02\x02\u0326\u0328" +
		"\x07\x03\x02\x02\u0327\u0326\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02" +
		"\u0328\u0329\x03\x02\x02\x02\u0329\u032B\x07\xCF\x02\x02\u032A\u032C\x07" +
		"\x03\x02\x02\u032B\u032A\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C" +
		"\u032E\x03\x02\x02\x02\u032D\u032F\x07\x04\x02\x02\u032E\u032D\x03\x02" +
		"\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330" +
		"\u0332\x07\xCF\x02\x02\u0331\u0333\x07\x05\x02\x02\u0332\u0331\x03\x02" +
		"\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0345\x03\x02\x02\x02\u0334" +
		"\u0335\x07h\x02\x02\u0335\u0337\x07\xCF\x02\x02\u0336\u0338\x07\x03\x02" +
		"\x02\u0337\u0336\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u0339" +
		"\x03\x02\x02\x02\u0339\u033B\x07\xCF\x02\x02\u033A\u033C\x07\x03\x02\x02" +
		"\u033B\u033A\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033E\x03" +
		"\x02\x02\x02\u033D\u033F\x07\x04\x02\x02\u033E\u033D\x03\x02\x02\x02\u033E" +
		"\u033F\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0342\x07\xCF" +
		"\x02\x02\u0341\u0343\x07\x05\x02\x02\u0342\u0341\x03\x02\x02\x02\u0342" +
		"\u0343\x03\x02\x02\x02\u0343\u0345\x03\x02\x02\x02\u0344\u0298\x03\x02" +
		"\x02\x02\u0344\u02A4\x03\x02\x02\x02\u0344\u02B4\x03\x02\x02\x02\u0344" +
		"\u02C4\x03\x02\x02\x02\u0344\u02D4\x03\x02\x02\x02\u0344\u02E4\x03\x02" +
		"\x02\x02\u0344\u02F4\x03\x02\x02\x02\u0344\u0304\x03\x02\x02\x02\u0344" +
		"\u0314\x03\x02\x02\x02\u0344\u0324\x03\x02\x02\x02\u0344\u0334\x03\x02" +
		"\x02\x02\u0345\x15\x03\x02\x02\x02\u0346\u0347\x07i\x02\x02\u0347\u0349" +
		"\x07\xD0\x02\x02\u0348\u034A\x07\x03\x02\x02\u0349\u0348\x03\x02\x02\x02" +
		"\u0349\u034A\x03\x02\x02\x02\u034A\u0355\x03\x02\x02\x02\u034B\u034D\x07" +
		"\xCF\x02\x02\u034C\u034E\x07\x03\x02\x02\u034D\u034C\x03\x02\x02\x02\u034D" +
		"\u034E\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02\u034F\u0356\x05&\x14" +
		"\x02\u0350\u0351\x05&\x14\x02\u0351\u0352\x07\x04\x02\x02\u0352\u0353" +
		"\x07\xCF\x02\x02\u0353\u0354\x07\x05\x02\x02\u0354\u0356\x03\x02\x02\x02" +
		"\u0355\u034B\x03\x02\x02\x02\u0355\u0350\x03\x02\x02\x02\u0356\u0459\x03" +
		"\x02\x02\x02\u0357\u036A\x07j\x02\x02\u0358\u035A\x07\xCF\x02\x02\u0359" +
		"\u035B\x07\x03\x02\x02\u035A\u0359\x03\x02\x02\x02\u035A\u035B\x03\x02" +
		"\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035E\x07\xD0\x02\x02\u035D" +
		"\u035F\x07\x03\x02\x02\u035E\u035D\x03\x02\x02\x02\u035E\u035F\x03\x02" +
		"\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u036B\x05&\x14\x02\u0361\u0363" +
		"\x07\xD0\x02\x02\u0362\u0364\x07\x03\x02\x02\u0363\u0362\x03\x02\x02\x02" +
		"\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0366\x05" +
		"&\x14\x02\u0366\u0367\x07\x04\x02\x02\u0367\u0368\x07\xCF\x02\x02\u0368" +
		"\u0369\x07\x05\x02\x02\u0369\u036B\x03\x02\x02\x02\u036A\u0358\x03\x02" +
		"\x02\x02\u036A\u0361\x03\x02\x02\x02\u036B\u0459\x03\x02\x02\x02\u036C" +
		"\u036D\x07k\x02\x02\u036D\u036F\x07\xD0\x02\x02\u036E\u0370\x07\x03\x02" +
		"\x02\u036F\u036E\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0371" +
		"\x03\x02\x02\x02\u0371\u0373\x07\xD0\x02\x02\u0372\u0374\x07\x03\x02\x02" +
		"\u0373\u0372\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0375\x03" +
		"\x02\x02\x02\u0375\u0377\x07\xD0\x02\x02\u0376\u0378\x07\x03\x02\x02\u0377" +
		"\u0376\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u0379\x03\x02" +
		"\x02\x02\u0379\u0459\x07\xD0\x02\x02\u037A\u037B\x07l\x02\x02\u037B\u037D" +
		"\x07\xD0\x02\x02\u037C\u037E\x07\x03\x02\x02\u037D\u037C\x03\x02\x02\x02" +
		"\u037D\u037E\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0381\x07" +
		"\xD0\x02\x02\u0380\u0382\x07\x03\x02\x02\u0381\u0380\x03\x02\x02\x02\u0381" +
		"\u0382\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0385\x07\xD0" +
		"\x02\x02\u0384\u0386\x07\x03\x02\x02\u0385\u0384\x03\x02\x02\x02\u0385" +
		"\u0386\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0459\x07\xD0" +
		"\x02\x02\u0388\u0389\x07m\x02\x02\u0389\u038B\x07\xD0\x02\x02\u038A\u038C" +
		"\x07\x03\x02\x02\u038B\u038A\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02" +
		"\u038C\u038D\x03\x02\x02\x02\u038D\u038F\x07\xD0\x02\x02\u038E\u0390\x07" +
		"\x03\x02\x02\u038F\u038E\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390" +
		"\u0391\x03\x02\x02\x02\u0391\u0393\x07\xD0\x02\x02\u0392\u0394\x07\x03" +
		"\x02\x02\u0393\u0392\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394" +
		"\u0395\x03\x02\x02\x02\u0395\u0459\x07\xD0\x02\x02\u0396\u0397\x07n\x02" +
		"\x02\u0397\u0399\x07\xD0\x02\x02\u0398\u039A\x07\x03\x02\x02\u0399\u0398" +
		"\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02" +
		"\u039B\u039D\x07\xD0\x02\x02\u039C\u039E\x07\x03\x02\x02\u039D\u039C\x03" +
		"\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F" +
		"\u03A1\x07\xD0\x02\x02\u03A0\u03A2\x07\x03\x02\x02\u03A1\u03A0\x03\x02" +
		"\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3" +
		"\u0459\x07\xD0\x02\x02\u03A4\u03A5\x07o\x02\x02\u03A5\u03A7\x07\xD0\x02" +
		"\x02\u03A6\u03A8\x07\x03\x02\x02\u03A7\u03A6\x03\x02\x02\x02\u03A7\u03A8" +
		"\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AB\x07\xD0\x02\x02" +
		"\u03AA\u03AC\x07\x03\x02\x02\u03AB\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03" +
		"\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u0459\x07\xD0\x02\x02\u03AE" +
		"\u03AF\x07p\x02\x02\u03AF\u03B1\x07\xD0\x02\x02\u03B0\u03B2\x07\x03\x02" +
		"\x02\u03B1\u03B0\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B3" +
		"\x03\x02\x02\x02\u03B3\u03B5\x07\xD0\x02\x02\u03B4\u03B6\x07\x03\x02\x02" +
		"\u03B5\u03B4\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B7\x03" +
		"\x02\x02\x02\u03B7\u0459\x07\xD0\x02\x02\u03B8\u03B9\x07q\x02\x02\u03B9" +
		"\u03BB\x07\xD0\x02\x02\u03BA\u03BC\x07\x03\x02\x02\u03BB\u03BA\x03\x02" +
		"\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD" +
		"\u03BF\x07\xD0\x02\x02\u03BE\u03C0\x07\x03\x02\x02\u03BF\u03BE\x03\x02" +
		"\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1" +
		"\u0459\x07\xD0\x02\x02\u03C2\u03C3\x07r\x02\x02\u03C3\u03C5\x07\xD0\x02" +
		"\x02\u03C4\u03C6\x07\x03\x02\x02\u03C5\u03C4\x03\x02\x02\x02\u03C5\u03C6" +
		"\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C9\x07\xD0\x02\x02" +
		"\u03C8\u03CA\x07\x03\x02\x02\u03C9\u03C8\x03\x02\x02\x02\u03C9\u03CA\x03" +
		"\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u0459\x07\xD0\x02\x02\u03CC" +
		"\u03CD\x07s\x02\x02\u03CD\u03CF\x07\xD0\x02\x02\u03CE\u03D0\x07\x03\x02" +
		"\x02\u03CF\u03CE\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D1" +
		"\x03\x02\x02\x02\u03D1\u0459\x07\xD0\x02\x02\u03D2\u03D3\x07t\x02\x02" +
		"\u03D3\u03D5\x07\xD0\x02\x02\u03D4\u03D6\x07\x03\x02\x02\u03D5\u03D4\x03" +
		"\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7" +
		"\u03D9\x07\xD0\x02\x02\u03D8\u03DA\x07\x03\x02\x02\u03D9\u03D8\x03\x02" +
		"\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB" +
		"\u0459\x07\xD0\x02\x02\u03DC\u03DD\x07u\x02\x02\u03DD\u03DF\x07\xD0\x02" +
		"\x02\u03DE\u03E0\x07\x03\x02\x02\u03DF\u03DE\x03\x02\x02\x02\u03DF\u03E0" +
		"\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1\u03E3\x07\xD0\x02\x02" +
		"\u03E2\u03E4\x07\x03\x02\x02\u03E3\u03E2\x03\x02\x02\x02\u03E3\u03E4\x03" +
		"\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u0459\x07\xD0\x02\x02\u03E6" +
		"\u03E7\x07v\x02\x02\u03E7\u03E9\x07\xD0\x02\x02\u03E8\u03EA\x07\x03\x02" +
		"\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\u03EB" +
		"\x03\x02\x02\x02\u03EB\u03ED\x07\xD0\x02\x02\u03EC\u03EE\x07\x03\x02\x02" +
		"\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03EF\x03" +
		"\x02\x02\x02\u03EF\u0459\x07\xD0\x02\x02\u03F0\u03F1\x07w\x02\x02\u03F1" +
		"\u03F3\x07\xD0\x02\x02\u03F2\u03F4\x07\x03\x02\x02\u03F3\u03F2\x03\x02" +
		"\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5" +
		"\u03F7\x07\xD0\x02\x02\u03F6\u03F8\x07\x03\x02\x02\u03F7\u03F6\x03\x02" +
		"\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9" +
		"\u0459\x07\xD0\x02\x02\u03FA\u03FB\x07x\x02\x02\u03FB\u03FD\x07\xD0\x02" +
		"\x02\u03FC\u03FE\x07\x03\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FD\u03FE" +
		"\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0401\x07\xD0\x02\x02" +
		"\u0400\u0402\x07\x03\x02\x02\u0401\u0400\x03\x02\x02\x02\u0401\u0402\x03" +
		"\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0459\x07\xD0\x02\x02\u0404" +
		"\u0405\x07y\x02\x02\u0405\u0407\x07\xCF\x02\x02\u0406\u0408\x07\x03\x02" +
		"\x02\u0407\u0406\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u0409" +
		"\x03\x02\x02\x02\u0409\u0459\x07\xD0\x02\x02\u040A\u040B\x07z\x02\x02" +
		"\u040B\u040D\x07\xCF\x02\x02\u040C\u040E\x07\x03\x02\x02\u040D\u040C\x03" +
		"\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F" +
		"\u0459\x07\xD0\x02\x02\u0410\u0411\x07{\x02\x02\u0411\u0413\x07\xCF\x02" +
		"\x02\u0412\u0414\x07\x03\x02\x02\u0413\u0412\x03\x02\x02\x02\u0413\u0414" +
		"\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0459\x07\xD0\x02\x02" +
		"\u0416\u0417\x07|\x02\x02\u0417\u0419\x07\xCF\x02\x02\u0418\u041A\x07" +
		"\x03\x02\x02\u0419\u0418\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A" +
		"\u041B\x03\x02\x02\x02\u041B\u0459\x07\xD0\x02\x02\u041C\u041D\x07}\x02" +
		"\x02\u041D\u041F\x07\xCF\x02\x02\u041E\u0420\x07\x03\x02\x02\u041F\u041E" +
		"\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02" +
		"\u0421\u0423\x07\xD0\x02\x02\u0422\u0424\x07\x03\x02\x02\u0423\u0422\x03" +
		"\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425" +
		"\u0459\x07\xD0\x02\x02\u0426\u0427\x07~\x02\x02\u0427\u0429\x07\xCF\x02" +
		"\x02\u0428\u042A\x07\x03\x02\x02\u0429\u0428\x03\x02\x02\x02\u0429\u042A" +
		"\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042D\x07\xD0\x02\x02" +
		"\u042C\u042E\x07\x03\x02\x02\u042D\u042C\x03\x02\x02\x02\u042D\u042E\x03" +
		"\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0459\x07\xD0\x02\x02\u0430" +
		"\u0431\x07\x7F\x02\x02\u0431\u0433\x07\xCF\x02\x02\u0432\u0434\x07\x03" +
		"\x02\x02\u0433\u0432\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434" +
		"\u0435\x03\x02\x02\x02\u0435\u0437\x07\xD0\x02\x02\u0436\u0438\x07\x03" +
		"\x02\x02\u0437\u0436\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438" +
		"\u0439\x03\x02\x02\x02\u0439\u0459\x07\xD0\x02\x02\u043A\u043B\x07\x80" +
		"\x02\x02\u043B\u043D\x07\xCF\x02\x02\u043C\u043E\x07\x03\x02\x02\u043D" +
		"\u043C\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E\u043F\x03\x02" +
		"\x02\x02\u043F\u0459\x07\xD0\x02\x02\u0440\u0441\x07\x81\x02\x02\u0441" +
		"\u0443\x07\xD0\x02\x02\u0442\u0444\x07\x03\x02\x02\u0443\u0442\x03\x02" +
		"\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445" +
		"\u0459\x07\xCF\x02\x02\u0446\u0447\x07\x82\x02\x02\u0447\u0449\x07\xD0" +
		"\x02\x02\u0448\u044A\x07\x03\x02\x02\u0449\u0448\x03\x02\x02\x02\u0449" +
		"\u044A\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u0459\x07\xCF" +
		"\x02\x02\u044C\u044D\x07\x83\x02\x02\u044D\u044F\x07\xD0\x02\x02\u044E" +
		"\u0450\x07\x03\x02\x02\u044F\u044E\x03\x02\x02\x02\u044F\u0450\x03\x02" +
		"\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0459\x07\xCF\x02\x02\u0452" +
		"\u0453\x07\x84\x02\x02\u0453\u0455\x07\xD0\x02\x02\u0454\u0456\x07\x03" +
		"\x02\x02\u0455\u0454\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456" +
		"\u0457\x03\x02\x02\x02\u0457\u0459\x07\xCF\x02\x02\u0458\u0346\x03\x02" +
		"\x02\x02\u0458\u0357\x03\x02\x02\x02\u0458\u036C\x03\x02\x02\x02\u0458" +
		"\u037A\x03\x02\x02\x02\u0458\u0388\x03\x02\x02\x02\u0458\u0396\x03\x02" +
		"\x02\x02\u0458\u03A4\x03\x02\x02\x02\u0458\u03AE\x03\x02\x02\x02\u0458" +
		"\u03B8\x03\x02\x02\x02\u0458\u03C2\x03\x02\x02\x02\u0458\u03CC\x03\x02" +
		"\x02\x02\u0458\u03D2\x03\x02\x02\x02\u0458\u03DC\x03\x02\x02\x02\u0458" +
		"\u03E6\x03\x02\x02\x02\u0458\u03F0\x03\x02\x02\x02\u0458\u03FA\x03\x02" +
		"\x02\x02\u0458\u0404\x03\x02\x02\x02\u0458\u040A\x03\x02\x02\x02\u0458" +
		"\u0410\x03\x02\x02\x02\u0458\u0416\x03\x02\x02\x02\u0458\u041C\x03\x02" +
		"\x02\x02\u0458\u0426\x03\x02\x02\x02\u0458\u0430\x03\x02\x02\x02\u0458" +
		"\u043A\x03\x02\x02\x02\u0458\u0440\x03\x02\x02\x02\u0458\u0446\x03\x02" +
		"\x02\x02\u0458\u044C\x03\x02\x02\x02\u0458\u0452\x03\x02\x02\x02\u0459" +
		"\x17\x03\x02\x02\x02\u045A\u045B\x07\x85\x02\x02\u045B\u045D\x07\xD0\x02" +
		"\x02\u045C\u045E\x07\x03\x02\x02\u045D\u045C\x03\x02\x02\x02\u045D\u045E" +
		"\x03\x02\x02\x02\u045E\u0469\x03\x02\x02\x02\u045F\u0461\x07\xCF\x02\x02" +
		"\u0460\u0462\x07\x03\x02\x02\u0461\u0460\x03\x02\x02\x02\u0461\u0462\x03" +
		"\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u046A\x05&\x14\x02\u0464" +
		"\u0465\x05&\x14\x02\u0465\u0466\x07\x04\x02\x02\u0466\u0467\x07\xCF\x02" +
		"\x02\u0467\u0468\x07\x05\x02\x02\u0468\u046A\x03\x02\x02\x02\u0469\u045F" +
		"\x03\x02\x02\x02\u0469\u0464\x03\x02\x02\x02\u046A\u0561\x03\x02\x02\x02" +
		"\u046B\u047E\x07\x86\x02\x02\u046C\u046E\x07\xCF\x02\x02\u046D\u046F\x07" +
		"\x03\x02\x02\u046E\u046D\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F" +
		"\u0470\x03\x02\x02\x02\u0470\u0472\x07\xD0\x02\x02\u0471\u0473\x07\x03" +
		"\x02\x02\u0472\u0471\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473" +
		"\u0474\x03\x02\x02\x02\u0474\u047F\x05&\x14\x02\u0475\u0477\x07\xD0\x02" +
		"\x02\u0476\u0478\x07\x03\x02\x02\u0477\u0476\x03\x02\x02\x02\u0477\u0478" +
		"\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047A\x05&\x14\x02" +
		"\u047A\u047B\x07\x04\x02\x02\u047B\u047C\x07\xCF\x02\x02\u047C\u047D\x07" +
		"\x05\x02\x02\u047D\u047F\x03\x02\x02\x02\u047E\u046C\x03\x02\x02\x02\u047E" +
		"\u0475\x03\x02\x02\x02\u047F\u0561\x03\x02\x02\x02\u0480\u0481\x07\x87" +
		"\x02\x02\u0481\u0483\x07\xD0\x02\x02\u0482\u0484\x07\x03\x02\x02\u0483" +
		"\u0482\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0485\x03\x02" +
		"\x02\x02\u0485\u0487\x07\xD0\x02\x02\u0486\u0488\x07\x03\x02\x02\u0487" +
		"\u0486\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u0489\x03\x02" +
		"\x02\x02\u0489\u048B\x07\xD0\x02\x02\u048A\u048C\x07\x03\x02\x02\u048B" +
		"\u048A\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02\u048C\u048D\x03\x02" +
		"\x02\x02\u048D\u0561\x07\xD0\x02\x02\u048E\u048F\x07\x88\x02\x02\u048F" +
		"\u0491\x07\xD0\x02\x02\u0490\u0492\x07\x03\x02\x02\u0491\u0490\x03\x02" +
		"\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493" +
		"\u0495\x07\xD0\x02\x02\u0494\u0496\x07\x03\x02\x02\u0495\u0494\x03\x02" +
		"\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497" +
		"\u0499\x07\xD0\x02\x02\u0498\u049A\x07\x03\x02\x02\u0499\u0498\x03\x02" +
		"\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B" +
		"\u0561\x07\xD0\x02\x02\u049C\u049D\x07\x89\x02\x02\u049D\u049F\x07\xD0" +
		"\x02\x02\u049E\u04A0\x07\x03\x02\x02\u049F\u049E\x03\x02\x02\x02\u049F" +
		"\u04A0\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1\u04A3\x07\xD0" +
		"\x02\x02\u04A2\u04A4\x07\x03\x02\x02\u04A3\u04A2\x03\x02\x02\x02\u04A3" +
		"\u04A4\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A7\x07\xD0" +
		"\x02\x02\u04A6\u04A8\x07\x03\x02\x02\u04A7\u04A6\x03\x02\x02\x02\u04A7" +
		"\u04A8\x03\x02\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u0561\x07\xD0" +
		"\x02\x02\u04AA\u04AB\x07\x8A\x02\x02\u04AB\u04AD\x07\xD0\x02\x02\u04AC" +
		"\u04AE\x07\x03\x02\x02\u04AD\u04AC\x03\x02\x02\x02\u04AD\u04AE\x03\x02" +
		"\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04B1\x07\xD0\x02\x02\u04B0" +
		"\u04B2\x07\x03\x02\x02\u04B1\u04B0\x03\x02\x02\x02\u04B1\u04B2\x03\x02" +
		"\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B5\x07\xD0\x02\x02\u04B4" +
		"\u04B6\x07\x03\x02\x02\u04B5\u04B4\x03\x02\x02\x02\u04B5\u04B6\x03\x02" +
		"\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u0561\x07\xD0\x02\x02\u04B8" +
		"\u04B9\x07\x8B\x02\x02\u04B9\u04BB\x07\xD0\x02\x02\u04BA\u04BC\x07\x03" +
		"\x02\x02\u04BB\u04BA\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC" +
		"\u04BD\x03\x02\x02\x02\u04BD\u04BF\x07\xD0\x02\x02\u04BE\u04C0\x07\x03" +
		"\x02\x02\u04BF\u04BE\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0" +
		"\u04C1\x03\x02\x02\x02\u04C1\u0561\x07\xD0\x02\x02\u04C2\u04C3\x07\x8C" +
		"\x02\x02\u04C3\u04C5\x07\xD0\x02\x02\u04C4\u04C6\x07\x03\x02\x02\u04C5" +
		"\u04C4\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C7\x03\x02" +
		"\x02\x02\u04C7\u04C9\x07\xD0\x02\x02\u04C8\u04CA\x07\x03\x02\x02\u04C9" +
		"\u04C8\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CB\x03\x02" +
		"\x02\x02\u04CB\u0561\x07\xD0\x02\x02\u04CC\u04CD\x07\x8D\x02\x02\u04CD" +
		"\u04CF\x07\xD0\x02\x02\u04CE\u04D0\x07\x03\x02\x02\u04CF\u04CE\x03\x02" +
		"\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1" +
		"\u04D3\x07\xD0\x02\x02\u04D2\u04D4\x07\x03\x02\x02\u04D3\u04D2\x03\x02" +
		"\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5" +
		"\u0561\x07\xD0\x02\x02\u04D6\u04D7\x07\x8E\x02\x02\u04D7\u04D9\x07\xD0" +
		"\x02\x02\u04D8\u04DA\x07\x03\x02\x02\u04D9\u04D8\x03\x02\x02\x02\u04D9" +
		"\u04DA\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04DD\x07\xD0" +
		"\x02\x02\u04DC\u04DE\x07\x03\x02\x02\u04DD\u04DC\x03\x02\x02\x02\u04DD" +
		"\u04DE\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u0561\x07\xD0" +
		"\x02\x02\u04E0\u04E1\x07\x8F\x02\x02\u04E1\u04E3\x07\xD0\x02\x02\u04E2" +
		"\u04E4\x07\x03\x02\x02\u04E3\u04E2\x03\x02\x02\x02\u04E3\u04E4\x03\x02" +
		"\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u0561\x07\xD0\x02\x02\u04E6" +
		"\u04E7\x07\x90\x02\x02\u04E7\u04E9\x07\xD0\x02\x02\u04E8\u04EA\x07\x03" +
		"\x02\x02\u04E9\u04E8\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA" +
		"\u04EB\x03\x02\x02\x02\u04EB\u04ED\x07\xD0\x02\x02\u04EC\u04EE\x07\x03" +
		"\x02\x02\u04ED\u04EC\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE" +
		"\u04EF\x03\x02\x02\x02\u04EF\u0561\x07\xD0\x02\x02\u04F0\u04F1\x07\x91" +
		"\x02\x02\u04F1\u04F3\x07\xD0\x02\x02\u04F2\u04F4\x07\x03\x02\x02\u04F3" +
		"\u04F2\x03\x02\x02\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4\u04F5\x03\x02" +
		"\x02\x02\u04F5\u04F7\x07\xD0\x02\x02\u04F6\u04F8\x07\x03\x02\x02\u04F7" +
		"\u04F6\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u04F9\x03\x02" +
		"\x02\x02\u04F9\u0561\x07\xD0\x02\x02\u04FA\u04FB\x07\x92\x02\x02\u04FB" +
		"\u04FD\x07\xD0\x02\x02\u04FC\u04FE\x07\x03\x02\x02\u04FD\u04FC\x03\x02" +
		"\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF" +
		"\u0501\x07\xD0\x02\x02\u0500\u0502\x07\x03\x02\x02\u0501\u0500\x03\x02" +
		"\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503" +
		"\u0561\x07\xD0\x02\x02\u0504\u0505\x07\x93\x02\x02\u0505\u0507\x07\xD0" +
		"\x02\x02\u0506\u0508\x07\x03\x02\x02\u0507\u0506\x03\x02\x02\x02\u0507" +
		"\u0508\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050B\x07\xD0" +
		"\x02\x02\u050A\u050C\x07\x03\x02\x02\u050B\u050A\x03\x02\x02\x02\u050B" +
		"\u050C\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u0561\x07\xD0" +
		"\x02\x02\u050E\u050F\x07\x94\x02\x02\u050F\u0511\x07\xD0\x02\x02\u0510" +
		"\u0512\x07\x03\x02\x02\u0511\u0510\x03\x02\x02\x02\u0511\u0512\x03\x02" +
		"\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0515\x07\xD0\x02\x02\u0514" +
		"\u0516\x07\x03\x02\x02\u0515\u0514\x03\x02\x02\x02\u0515\u0516\x03\x02" +
		"\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517\u0561\x07\xD0\x02\x02\u0518" +
		"\u0519\x07\x95\x02\x02\u0519\u051B\x07\xD0\x02\x02\u051A\u051C\x07\x03" +
		"\x02\x02\u051B\u051A\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C" +
		"\u051D\x03\x02\x02\x02\u051D\u0561\x07\xD0\x02\x02\u051E\u051F\x07\x96" +
		"\x02\x02\u051F\u0521\x07\xD0\x02\x02\u0520\u0522\x07\x03\x02\x02\u0521" +
		"\u0520\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522\u0523\x03\x02" +
		"\x02\x02\u0523\u0561\x07\xD0\x02\x02\u0524\u0525\x07\x97\x02\x02\u0525" +
		"\u0527\x07\xCF\x02\x02\u0526\u0528\x07\x03\x02\x02\u0527\u0526\x03\x02" +
		"\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529" +
		"\u052B\x07\xD0\x02\x02\u052A\u052C\x07\x03\x02\x02\u052B\u052A\x03\x02" +
		"\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D" +
		"\u0561\x07\xD0\x02\x02\u052E\u052F\x07\x98\x02\x02\u052F\u0531\x07\xCF" +
		"\x02\x02\u0530\u0532\x07\x03\x02\x02\u0531\u0530\x03\x02\x02\x02\u0531" +
		"\u0532\x03\x02\x02\x02\u0532\u0533\x03\x02\x02\x02\u0533\u0535\x07\xD0" +
		"\x02\x02\u0534\u0536\x07\x03\x02\x02\u0535\u0534\x03\x02\x02\x02\u0535" +
		"\u0536\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u0561\x07\xD0" +
		"\x02\x02\u0538\u0539\x07\x99\x02\x02\u0539\u053B\x07\xCF\x02\x02\u053A" +
		"\u053C\x07\x03\x02\x02\u053B\u053A\x03\x02\x02\x02\u053B\u053C\x03\x02" +
		"\x02\x02\u053C\u053D\x03\x02\x02\x02\u053D\u053F\x07\xD0\x02\x02\u053E" +
		"\u0540\x07\x03\x02\x02\u053F\u053E\x03\x02\x02\x02\u053F\u0540\x03\x02" +
		"\x02\x02\u0540\u0541\x03\x02\x02\x02\u0541\u0561\x07\xD0\x02\x02\u0542" +
		"\u0543\x07\x9A\x02\x02\u0543\u0545\x07\xCF\x02\x02\u0544\u0546\x07\x03" +
		"\x02\x02\u0545\u0544\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02\u0546" +
		"\u0547\x03\x02\x02\x02\u0547\u0561\x07\xD0\x02\x02\u0548\u0549\x07\x9B" +
		"\x02\x02\u0549\u054B\x07\xCF\x02\x02\u054A\u054C\x07\x03\x02\x02\u054B" +
		"\u054A\x03\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\u054D\x03\x02" +
		"\x02\x02\u054D\u0561\x07\xD0\x02\x02\u054E\u054F\x07\x9C\x02\x02\u054F" +
		"\u0551\x07\xCF\x02\x02\u0550\u0552\x07\x03\x02\x02\u0551\u0550\x03\x02" +
		"\x02\x02\u0551\u0552\x03\x02\x02\x02\u0552\u0553\x03\x02\x02\x02\u0553" +
		"\u0561\x07\xD0\x02\x02\u0554\u0555\x07\x9D\x02\x02\u0555\u0557\x07\xD0" +
		"\x02\x02\u0556\u0558\x07\x03\x02\x02\u0557\u0556\x03\x02\x02\x02\u0557" +
		"\u0558\x03\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\u0561\x07\xCF" +
		"\x02\x02\u055A\u055B\x07\x9E\x02\x02\u055B\u055D\x07\xD0\x02\x02\u055C" +
		"\u055E\x07\x03\x02\x02\u055D\u055C\x03\x02\x02\x02\u055D\u055E\x03\x02" +
		"\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F\u0561\x07\xCF\x02\x02\u0560" +
		"\u045A\x03\x02\x02\x02\u0560\u046B\x03\x02\x02\x02\u0560\u0480\x03\x02" +
		"\x02\x02\u0560\u048E\x03\x02\x02\x02\u0560\u049C\x03\x02\x02\x02\u0560" +
		"\u04AA\x03\x02\x02\x02\u0560\u04B8\x03\x02\x02\x02\u0560\u04C2\x03\x02" +
		"\x02\x02\u0560\u04CC\x03\x02\x02\x02\u0560\u04D6\x03\x02\x02\x02\u0560" +
		"\u04E0\x03\x02\x02\x02\u0560\u04E6\x03\x02\x02\x02\u0560\u04F0\x03\x02" +
		"\x02\x02\u0560\u04FA\x03\x02\x02\x02\u0560\u0504\x03\x02\x02\x02\u0560" +
		"\u050E\x03\x02\x02\x02\u0560\u0518\x03\x02\x02\x02\u0560\u051E\x03\x02" +
		"\x02\x02\u0560\u0524\x03\x02\x02\x02\u0560\u052E\x03\x02\x02\x02\u0560" +
		"\u0538\x03\x02\x02\x02\u0560\u0542\x03\x02\x02\x02\u0560\u0548\x03\x02" +
		"\x02\x02\u0560\u054E\x03\x02\x02\x02\u0560\u0554\x03\x02\x02\x02\u0560" +
		"\u055A\x03\x02\x02\x02\u0561\x19\x03\x02\x02\x02\u0562\u0563\x07\x9F\x02" +
		"\x02\u0563\u0565\x07\xCF\x02\x02\u0564\u0566\x07\x03\x02\x02\u0565\u0564" +
		"\x03\x02\x02\x02\u0565\u0566\x03\x02\x02\x02\u0566\u0567\x03\x02\x02\x02" +
		"\u0567\u062F\x07\xD7\x02\x02\u0568\u0569\x07\xA0\x02\x02\u0569\u056B\x07" +
		"\xCF\x02\x02\u056A\u056C\x07\x03\x02\x02\u056B\u056A\x03\x02\x02\x02\u056B" +
		"\u056C\x03\x02\x02\x02\u056C\u056D\x03\x02\x02\x02\u056D\u062F\x07\xD7" +
		"\x02\x02\u056E\u056F\x071\x02\x02\u056F\u0571\x07\xCF\x02\x02\u0570\u0572" +
		"\x07\x03\x02\x02\u0571\u0570\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02" +
		"\u0572\u0573\x03\x02\x02\x02\u0573\u062F\x07\xD7\x02\x02\u0574\u0575\x07" +
		"2\x02\x02\u0575\u0577\x07\xCF\x02\x02\u0576\u0578\x07\x03\x02\x02\u0577" +
		"\u0576\x03\x02\x02\x02\u0577\u0578\x03\x02\x02\x02\u0578\u0579\x03\x02" +
		"\x02\x02\u0579\u062F\x07\xD7\x02\x02\u057A\u057B\x073\x02\x02\u057B\u057D" +
		"\x07\xCF\x02\x02\u057C\u057E\x07\x03\x02\x02\u057D\u057C\x03\x02\x02\x02" +
		"\u057D\u057E\x03\x02\x02\x02\u057E\u057F\x03\x02\x02\x02\u057F\u062F\x07" +
		"\xD7\x02\x02\u0580\u0581\x076\x02\x02\u0581\u0583\x07\xCF\x02\x02\u0582" +
		"\u0584\x07\x03\x02\x02\u0583\u0582\x03\x02\x02\x02\u0583\u0584\x03\x02" +
		"\x02\x02\u0584\u0585\x03\x02\x02\x02\u0585\u0587\x07\xD7\x02\x02\u0586" +
		"\u0588\x07\x03\x02\x02\u0587\u0586\x03\x02\x02\x02\u0587\u0588\x03\x02" +
		"\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589\u062F\x07\xCF\x02\x02\u058A" +
		"\u058B\x077\x02\x02\u058B\u058D\x07\xCF\x02\x02\u058C";
	private static readonly _serializedATNSegment3: string =
		"\u058E\x07\x03\x02\x02\u058D\u058C\x03\x02\x02\x02\u058D\u058E\x03\x02" +
		"\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\u0591\x07\xD7\x02\x02\u0590" +
		"\u0592\x07\x03\x02\x02\u0591\u0590\x03\x02\x02\x02\u0591\u0592\x03\x02" +
		"\x02\x02\u0592\u0593\x03\x02\x02\x02\u0593\u062F\x07\xCF\x02\x02\u0594" +
		"\u0595\x078\x02\x02\u0595\u0597\x07\xCF\x02\x02\u0596\u0598\x07\x03\x02" +
		"\x02\u0597\u0596\x03\x02\x02\x02\u0597\u0598\x03\x02\x02\x02\u0598\u0599" +
		"\x03\x02\x02\x02\u0599\u059B\x07\xD7\x02\x02\u059A\u059C\x07\x03\x02\x02" +
		"\u059B\u059A\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\u059D\x03" +
		"\x02\x02\x02\u059D\u062F\x07\xCF\x02\x02\u059E\u062F\x07\xA1\x02\x02\u059F" +
		"\u05A0\x07\xA2\x02\x02\u05A0\u05A2\x07\xCF\x02\x02\u05A1\u05A3\x07\x03" +
		"\x02\x02\u05A2\u05A1\x03\x02\x02\x02\u05A2\u05A3\x03\x02\x02\x02\u05A3" +
		"\u05A4\x03\x02\x02\x02\u05A4\u062F\x05&\x14\x02\u05A5\u05A6\x07\xA3\x02" +
		"\x02\u05A6\u05A8\x07\xCF\x02\x02\u05A7\u05A9\x07\x03\x02\x02\u05A8\u05A7" +
		"\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AA\x03\x02\x02\x02" +
		"\u05AA\u062F\x07\xCF\x02\x02\u05AB\u05AC\x07\xA4\x02\x02\u05AC\u05AE\x07" +
		"\xCF\x02\x02\u05AD\u05AF\x07\x03\x02\x02\u05AE\u05AD\x03\x02\x02\x02\u05AE" +
		"\u05AF\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0\u062F\x07\xCF" +
		"\x02\x02\u05B1\u05B2\x07\xA5\x02\x02\u05B2\u05B4\x07\xCF\x02\x02\u05B3" +
		"\u05B5\x07\x03\x02\x02\u05B4\u05B3\x03\x02\x02\x02\u05B4\u05B5\x03\x02" +
		"\x02\x02\u05B5\u05B6\x03\x02\x02\x02\u05B6\u062F\x07\xCF\x02\x02\u05B7" +
		"\u05B8\x07\xA6\x02\x02\u05B8\u05BA\x07\xCF\x02\x02\u05B9\u05BB\x07\x03" +
		"\x02\x02\u05BA\u05B9\x03\x02\x02\x02\u05BA\u05BB\x03\x02\x02\x02\u05BB" +
		"\u05BC\x03\x02\x02\x02\u05BC\u062F\x07\xCF\x02\x02\u05BD\u05BE\x07\xA7" +
		"\x02\x02\u05BE\u05C0\x07\xCF\x02\x02\u05BF\u05C1\x07\x03\x02\x02\u05C0" +
		"\u05BF\x03\x02\x02\x02\u05C0\u05C1\x03\x02\x02\x02\u05C1\u05C2\x03\x02" +
		"\x02\x02\u05C2\u062F\x07\xCF\x02\x02\u05C3\u05C4\x07\xA8\x02\x02\u05C4" +
		"\u05C6\x07\xCF\x02\x02\u05C5\u05C7\x07\x03\x02\x02\u05C6\u05C5\x03\x02" +
		"\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C8\x03\x02\x02\x02\u05C8" +
		"\u062F\x07\xCF\x02\x02\u05C9\u05CA\x07\xA9\x02\x02\u05CA\u05CC\x07\xCF" +
		"\x02\x02\u05CB\u05CD\x07\x03\x02\x02\u05CC\u05CB\x03\x02\x02\x02\u05CC" +
		"\u05CD\x03\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02\u05CE\u062F\x07\xCF" +
		"\x02\x02\u05CF\u05D0\x07\xAA\x02\x02\u05D0\u05D2\x07\xCF\x02\x02\u05D1" +
		"\u05D3\x07\x03\x02\x02\u05D2\u05D1\x03\x02\x02\x02\u05D2\u05D3\x03\x02" +
		"\x02\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4\u062F\x07\xD7\x02\x02\u05D5" +
		"\u05D6\x07\xAB\x02\x02\u05D6\u05D8\x07\xCF\x02\x02\u05D7\u05D9\x07\x03" +
		"\x02\x02\u05D8\u05D7\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9" +
		"\u05DA\x03\x02\x02\x02\u05DA\u062F\x07\xD7\x02\x02\u05DB\u05DC\x07\xAC" +
		"\x02\x02\u05DC\u05DE\x07\xCF\x02\x02\u05DD\u05DF\x07\x03\x02\x02\u05DE" +
		"\u05DD\x03\x02\x02\x02\u05DE\u05DF\x03\x02\x02\x02\u05DF\u05E0\x03\x02" +
		"\x02\x02\u05E0\u062F\x07\xD7\x02\x02\u05E1\u05E2\x07\xAD\x02\x02\u05E2" +
		"\u05E4\x07\xCF\x02\x02\u05E3\u05E5\x07\x03\x02\x02\u05E4\u05E3\x03\x02" +
		"\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6" +
		"\u062F\x07\xD7\x02\x02\u05E7\u05E8\x07\xAE\x02\x02\u05E8\u05EA\x07\xCF" +
		"\x02\x02\u05E9\u05EB\x07\x03\x02\x02\u05EA\u05E9\x03\x02\x02\x02\u05EA" +
		"\u05EB\x03\x02\x02\x02\u05EB\u05EC\x03\x02\x02\x02\u05EC\u062F\x07\xD7" +
		"\x02\x02\u05ED\u05EE\x07\xAF\x02\x02\u05EE\u05F0\x07\xCF\x02\x02\u05EF" +
		"\u05F1\x07\x03\x02\x02\u05F0\u05EF\x03\x02\x02\x02\u05F0\u05F1\x03\x02" +
		"\x02\x02\u05F1\u05F2\x03\x02\x02\x02\u05F2\u062F\x07\xD7\x02\x02\u05F3" +
		"\u05F4\x07\xB0\x02\x02\u05F4\u05F6\x07\xCF\x02\x02\u05F5\u05F7\x07\x03" +
		"\x02\x02\u05F6\u05F5\x03\x02\x02\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7" +
		"\u05F8\x03\x02\x02\x02\u05F8\u05FA\x07\xCF\x02\x02\u05F9\u05FB\x07\x03" +
		"\x02\x02\u05FA\u05F9\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB" +
		"\u05FC\x03\x02\x02\x02\u05FC\u062F\x07\xD7\x02\x02\u05FD\u05FE\x07\xB1" +
		"\x02\x02\u05FE\u0600\x07\xCF\x02\x02\u05FF\u0601\x07\x03\x02\x02\u0600" +
		"\u05FF\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601\u0602\x03\x02" +
		"\x02\x02\u0602\u0604\x07\xCF\x02\x02\u0603\u0605\x07\x03\x02\x02\u0604" +
		"\u0603\x03\x02\x02\x02\u0604\u0605\x03\x02\x02\x02\u0605\u0606\x03\x02" +
		"\x02\x02\u0606\u062F\x07\xD7\x02\x02\u0607\u0608\x07\xB2\x02\x02\u0608" +
		"\u060A\x07\xCF\x02\x02\u0609\u060B\x07\x03\x02\x02\u060A\u0609\x03\x02" +
		"\x02\x02\u060A\u060B\x03\x02\x02\x02\u060B\u060C\x03\x02\x02\x02\u060C" +
		"\u060E\x07\xCF\x02\x02\u060D\u060F\x07\x03\x02\x02\u060E\u060D\x03\x02" +
		"\x02\x02\u060E\u060F\x03\x02\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610" +
		"\u062F\x07\xD7\x02\x02\u0611\u0612\x07\xB3\x02\x02\u0612\u0614\x07\xCF" +
		"\x02\x02\u0613\u0615\x07\x03\x02\x02\u0614\u0613\x03\x02\x02\x02\u0614" +
		"\u0615\x03\x02\x02\x02\u0615\u0616\x03\x02\x02\x02\u0616\u0618\x07\xCF" +
		"\x02\x02\u0617\u0619\x07\x03\x02\x02\u0618\u0617\x03\x02\x02\x02\u0618" +
		"\u0619\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A\u062F\x07\xD7" +
		"\x02\x02\u061B\u061C\x07\xB4\x02\x02\u061C\u062F\x07\xD7\x02\x02\u061D" +
		"\u061E\x07)\x02\x02\u061E\u062F\x07\xD7\x02\x02\u061F\u0620\x07\xB5\x02" +
		"\x02\u0620\u062F\x07\xCF\x02\x02\u0621\u0622\x07*\x02\x02\u0622\u062F" +
		"\x07\xCF\x02\x02\u0623\u062F\x07\xB6\x02\x02\u0624\u0626\x07\xB7\x02\x02" +
		"\u0625\u0627\x07\x03\x02\x02\u0626\u0625\x03\x02\x02\x02\u0626\u0627\x03" +
		"\x02\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628\u062F\x07\xD7\x02\x02\u0629" +
		"\u062B\x07\xB8\x02\x02\u062A\u062C\x07\x03\x02\x02\u062B\u062A\x03\x02" +
		"\x02\x02\u062B\u062C\x03\x02\x02\x02\u062C\u062D\x03\x02\x02\x02\u062D" +
		"\u062F\x07\xD7\x02\x02\u062E\u0562\x03\x02\x02\x02\u062E\u0568\x03\x02" +
		"\x02\x02\u062E\u056E\x03\x02\x02\x02\u062E\u0574\x03\x02\x02\x02\u062E" +
		"\u057A\x03\x02\x02\x02\u062E\u0580\x03\x02\x02\x02\u062E\u058A\x03\x02" +
		"\x02\x02\u062E\u0594\x03\x02\x02\x02\u062E\u059E\x03\x02\x02\x02\u062E" +
		"\u059F\x03\x02\x02\x02\u062E\u05A5\x03\x02\x02\x02\u062E\u05AB\x03\x02" +
		"\x02\x02\u062E\u05B1\x03\x02\x02\x02\u062E\u05B7\x03\x02\x02\x02\u062E" +
		"\u05BD\x03\x02\x02\x02\u062E\u05C3\x03\x02\x02\x02\u062E\u05C9\x03\x02" +
		"\x02\x02\u062E\u05CF\x03\x02\x02\x02\u062E\u05D5\x03\x02\x02\x02\u062E" +
		"\u05DB\x03\x02\x02\x02\u062E\u05E1\x03\x02\x02\x02\u062E\u05E7\x03\x02" +
		"\x02\x02\u062E\u05ED\x03\x02\x02\x02\u062E\u05F3\x03\x02\x02\x02\u062E" +
		"\u05FD\x03\x02\x02\x02\u062E\u0607\x03\x02\x02\x02\u062E\u0611\x03\x02" +
		"\x02\x02\u062E\u061B\x03\x02\x02\x02\u062E\u061D\x03\x02\x02\x02\u062E" +
		"\u061F\x03\x02\x02\x02\u062E\u0621\x03\x02\x02\x02\u062E\u0623\x03\x02" +
		"\x02\x02\u062E\u0624\x03\x02\x02\x02\u062E\u0629\x03\x02\x02\x02\u062F" +
		"\x1B\x03\x02\x02\x02\u0630\u0631\x07\xB9\x02\x02\u0631\u0685\x07\xCF\x02" +
		"\x02\u0632\u0633\x07\xBA\x02\x02\u0633\u0685\x07\xCF\x02\x02\u0634\u0635" +
		"\x07\xBB\x02\x02\u0635\u0685\x07\xCF\x02\x02\u0636\u0637\x07\xBC\x02\x02" +
		"\u0637\u0639\x07\xCF\x02\x02\u0638\u063A\x07\x03\x02\x02\u0639\u0638\x03" +
		"\x02\x02\x02\u0639\u063A\x03\x02\x02\x02\u063A\u063B\x03\x02\x02\x02\u063B" +
		"\u0685\x05&\x14\x02\u063C\u063D\x07\xBD\x02\x02\u063D\u063F\x05&\x14\x02" +
		"\u063E\u0640\x07\x03\x02\x02\u063F\u063E\x03\x02\x02\x02\u063F\u0640\x03" +
		"\x02\x02\x02\u0640\u0641\x03\x02\x02\x02\u0641\u0642\x07\xCF\x02\x02\u0642" +
		"\u0685\x03\x02\x02\x02\u0643\u0644\x07\xBE\x02\x02\u0644\u0646\x05&\x14" +
		"\x02\u0645\u0647\x07\x03\x02\x02\u0646\u0645\x03\x02\x02\x02\u0646\u0647" +
		"\x03\x02\x02\x02\u0647\u0648\x03\x02\x02\x02\u0648\u0649\x07\xCF\x02\x02" +
		"\u0649\u0685\x03\x02\x02\x02\u064A\u064B\x07\xBF\x02\x02\u064B\u064D\x05" +
		"&\x14\x02\u064C\u064E\x07\x03\x02\x02\u064D\u064C\x03\x02\x02\x02\u064D" +
		"\u064E\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F\u0650\x07\xCF" +
		"\x02\x02\u0650\u0685\x03\x02\x02\x02\u0651\u0652\x07\xC0\x02\x02\u0652" +
		"\u0654\x05&\x14\x02\u0653\u0655\x07\x03\x02\x02\u0654\u0653\x03\x02\x02" +
		"\x02\u0654\u0655\x03\x02\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656\u0657" +
		"\x05*\x16\x02\u0657\u0685\x03\x02\x02\x02\u0658\u0659\x07\xC1\x02\x02" +
		"\u0659\u065B\x05&\x14\x02\u065A\u065C\x07\x03\x02\x02\u065B\u065A\x03" +
		"\x02\x02\x02\u065B\u065C\x03\x02\x02\x02\u065C\u065D\x03\x02\x02\x02\u065D" +
		"\u065E\x05*\x16\x02\u065E\u0685\x03\x02\x02\x02\u065F\u0660\x07\xC2\x02" +
		"\x02\u0660\u0662\x05&\x14\x02\u0661\u0663\x07\x03\x02\x02\u0662\u0661" +
		"\x03\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u0664\x03\x02\x02\x02" +
		"\u0664\u0665\x05*\x16\x02\u0665\u0685\x03\x02\x02\x02\u0666\u0667\x07" +
		"\xC3\x02\x02\u0667\u0685\x07\xCF\x02\x02\u0668\u0669\x07\xC4\x02\x02\u0669" +
		"\u0685\x07\xCF\x02\x02\u066A\u066B\x07\xC4\x02\x02\u066B\u066D\x07\xCF" +
		"\x02\x02\u066C\u066E\x07\x03\x02\x02\u066D\u066C\x03\x02\x02\x02\u066D" +
		"\u066E\x03\x02\x02\x02\u066E\u066F\x03\x02\x02\x02\u066F\u0685\x07\xCF" +
		"\x02\x02\u0670\u0671\x07\xC5\x02\x02\u0671\u0685\x07\xCF\x02\x02\u0672" +
		"\u0673\x07\xC6\x02\x02\u0673\u0685\x07\xCF\x02\x02\u0674\u0675\x07\xC6" +
		"\x02\x02\u0675\u0677\x07\xCF\x02\x02\u0676\u0678\x07\x03\x02\x02\u0677" +
		"\u0676\x03\x02\x02\x02\u0677\u0678\x03\x02\x02\x02\u0678\u0679\x03\x02" +
		"\x02\x02\u0679\u0685\x07\xCF\x02\x02\u067A\u067B\x07\xC7\x02\x02\u067B" +
		"\u0685\x07\xCF\x02\x02\u067C\u067D\x07\xC8\x02\x02\u067D\u0685\x07\xCF" +
		"\x02\x02\u067E\u067F\x07\xC8\x02\x02\u067F\u0681\x07\xCF\x02\x02\u0680" +
		"\u0682\x07\x03\x02\x02\u0681\u0680\x03\x02\x02\x02\u0681\u0682\x03\x02" +
		"\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\u0685\x07\xCF\x02\x02\u0684" +
		"\u0630\x03\x02\x02\x02\u0684\u0632\x03\x02\x02\x02\u0684\u0634\x03\x02" +
		"\x02\x02\u0684\u0636\x03\x02\x02\x02\u0684\u063C\x03\x02\x02\x02\u0684" +
		"\u0643\x03\x02\x02\x02\u0684\u064A\x03\x02\x02\x02\u0684\u0651\x03\x02" +
		"\x02\x02\u0684\u0658\x03\x02\x02\x02\u0684\u065F\x03\x02\x02\x02\u0684" +
		"\u0666\x03\x02\x02\x02\u0684\u0668\x03\x02\x02\x02\u0684\u066A\x03\x02" +
		"\x02\x02\u0684\u0670\x03\x02\x02\x02\u0684\u0672\x03\x02\x02\x02\u0684" +
		"\u0674\x03\x02\x02\x02\u0684\u067A\x03\x02\x02\x02\u0684\u067C\x03\x02" +
		"\x02\x02\u0684\u067E\x03\x02\x02\x02\u0685\x1D\x03\x02\x02\x02\u0686\u0687" +
		"\x07i\x02\x02\u0687\u0689\x07\xD0\x02\x02\u0688\u068A\x07\x03\x02\x02" +
		"\u0689\u0688\x03\x02\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068B\x03" +
		"\x02\x02\x02\u068B\u068D\x07\xD7\x02\x02\u068C\u068E\x07\x03\x02\x02\u068D" +
		"\u068C\x03\x02\x02\x02\u068D\u068E\x03\x02\x02\x02\u068E\u068F\x03\x02" +
		"\x02\x02\u068F\u06AD\x07\xCF\x02\x02\u0690\u0691\x07j\x02\x02\u0691\u0693" +
		"\x07\xD0\x02\x02\u0692\u0694\x07\x03\x02\x02\u0693\u0692\x03\x02\x02\x02" +
		"\u0693\u0694\x03\x02\x02\x02\u0694\u0695\x03\x02\x02\x02\u0695\u0697\x07" +
		"\xD7\x02\x02\u0696\u0698\x07\x03\x02\x02\u0697\u0696\x03\x02\x02\x02\u0697" +
		"\u0698\x03\x02\x02\x02\u0698\u0699\x03\x02\x02\x02\u0699\u06AD\x07\xCF" +
		"\x02\x02\u069A\u069B\x07\xC9\x02\x02\u069B\u069D\x07\xD0\x02\x02\u069C" +
		"\u069E\x07\x03\x02\x02\u069D\u069C\x03\x02\x02\x02\u069D\u069E\x03\x02" +
		"\x02\x02\u069E\u069F\x03\x02\x02\x02\u069F\u06AD\x07\xD0\x02\x02\u06A0" +
		"\u06A1\x07\xCA\x02\x02\u06A1\u06A3\x07\xD0\x02\x02\u06A2\u06A4\x07\x03" +
		"\x02\x02\u06A3\u06A2\x03\x02\x02\x02\u06A3\u06A4\x03\x02\x02\x02\u06A4" +
		"\u06A5\x03\x02\x02\x02\u06A5\u06AD\x07\xD0\x02\x02\u06A6\u06A7\x07\xCB" +
		"\x02\x02\u06A7\u06A9\x07\xD0\x02\x02\u06A8\u06AA\x07\x03\x02\x02\u06A9" +
		"\u06A8\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AB\x03\x02" +
		"\x02\x02\u06AB\u06AD\x07\xD0\x02\x02\u06AC\u0686\x03\x02\x02\x02\u06AC" +
		"\u0690\x03\x02\x02\x02\u06AC\u069A\x03\x02\x02\x02\u06AC\u06A0\x03\x02" +
		"\x02\x02\u06AC\u06A6\x03\x02\x02\x02\u06AD\x1F\x03\x02\x02\x02\u06AE\u06AF" +
		"\x07\x85\x02\x02\u06AF\u06B1\x07\xD0\x02\x02\u06B0\u06B2\x07\x03\x02\x02" +
		"\u06B1\u06B0\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2\u06B3\x03" +
		"\x02\x02\x02\u06B3\u06B5\x07\xD7\x02\x02\u06B4\u06B6\x07\x03\x02\x02\u06B5" +
		"\u06B4\x03\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6\u06B7\x03\x02" +
		"\x02\x02\u06B7\u06D5\x07\xCF\x02\x02\u06B8\u06B9\x07\x86\x02\x02\u06B9" +
		"\u06BB\x07\xD0\x02\x02\u06BA\u06BC\x07\x03\x02\x02\u06BB\u06BA\x03\x02" +
		"\x02\x02\u06BB\u06BC\x03\x02\x02\x02\u06BC\u06BD\x03\x02\x02\x02\u06BD" +
		"\u06BF\x07\xD7\x02\x02\u06BE\u06C0\x07\x03\x02\x02\u06BF\u06BE\x03\x02" +
		"\x02\x02\u06BF\u06C0\x03\x02\x02\x02\u06C0\u06C1\x03\x02\x02\x02\u06C1" +
		"\u06D5\x07\xCF\x02\x02\u06C2\u06C3\x07\xCC\x02\x02\u06C3\u06C5\x07\xD0" +
		"\x02\x02\u06C4\u06C6\x07\x03\x02\x02\u06C5\u06C4\x03\x02\x02\x02\u06C5" +
		"\u06C6\x03\x02\x02\x02\u06C6\u06C7\x03\x02\x02\x02\u06C7\u06D5\x07\xD0" +
		"\x02\x02\u06C8\u06C9\x07\xCD\x02\x02\u06C9\u06CB\x07\xD0\x02\x02\u06CA" +
		"\u06CC\x07\x03\x02\x02\u06CB\u06CA\x03\x02\x02\x02\u06CB\u06CC\x03\x02" +
		"\x02\x02\u06CC\u06CD\x03\x02\x02\x02\u06CD\u06D5\x07\xD0\x02\x02\u06CE" +
		"\u06CF\x07\xCE\x02\x02\u06CF\u06D1\x07\xD0\x02\x02\u06D0\u06D2\x07\x03" +
		"\x02\x02\u06D1\u06D0\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2" +
		"\u06D3\x03\x02\x02\x02\u06D3\u06D5\x07\xD0\x02\x02\u06D4\u06AE\x03\x02" +
		"\x02\x02\u06D4\u06B8\x03\x02\x02\x02\u06D4\u06C2\x03\x02\x02\x02\u06D4" +
		"\u06C8\x03\x02\x02\x02\u06D4\u06CE\x03\x02\x02\x02\u06D5!\x03\x02\x02" +
		"\x02\u06D6\u06D7\x07\x06\x02\x02\u06D7\u06DE\x05&\x14\x02\u06D8\u06DA" +
		"\x07\x03\x02\x02\u06D9\u06D8\x03\x02\x02\x02\u06D9\u06DA\x03\x02\x02\x02" +
		"\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06DD\x05&\x14\x02\u06DC\u06D9\x03" +
		"\x02\x02\x02\u06DD\u06E0\x03\x02\x02\x02\u06DE\u06DC\x03\x02\x02\x02\u06DE" +
		"\u06DF\x03\x02\x02\x02\u06DF\u0709\x03\x02\x02\x02\u06E0\u06DE\x03\x02" +
		"\x02\x02\u06E1\u06E2\t\x02\x02\x02\u06E2\u06E9\x05&\x14\x02\u06E3\u06E5" +
		"\x07\x03\x02\x02\u06E4\u06E3\x03\x02\x02\x02\u06E4\u06E5\x03\x02\x02\x02" +
		"\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E8\x05&\x14\x02\u06E7\u06E4\x03" +
		"\x02\x02\x02\u06E8\u06EB\x03\x02\x02\x02\u06E9\u06E7\x03\x02\x02\x02\u06E9" +
		"\u06EA\x03\x02\x02\x02\u06EA\u0709\x03\x02\x02\x02\u06EB\u06E9\x03\x02" +
		"\x02\x02\u06EC\u06ED\t\x03\x02\x02\u06ED\u06F4\x05&\x14\x02\u06EE\u06F0" +
		"\x07\x03\x02\x02\u06EF\u06EE\x03\x02\x02\x02\u06EF\u06F0\x03\x02\x02\x02" +
		"\u06F0\u06F1\x03\x02\x02\x02\u06F1\u06F3\x05&\x14\x02\u06F2\u06EF\x03" +
		"\x02\x02\x02\u06F3\u06F6\x03\x02\x02\x02\u06F4\u06F2\x03\x02\x02\x02\u06F4" +
		"\u06F5\x03\x02\x02\x02\u06F5\u0709\x03\x02\x02\x02\u06F6\u06F4\x03\x02" +
		"\x02\x02\u06F7\u06F8\x07\r\x02\x02\u06F8\u06FF\x05(\x15\x02\u06F9\u06FB" +
		"\x07\x03\x02\x02\u06FA\u06F9\x03\x02\x02\x02\u06FA\u06FB\x03\x02\x02\x02" +
		"\u06FB\u06FC\x03\x02\x02\x02\u06FC\u06FE\x05(\x15\x02\u06FD\u06FA\x03" +
		"\x02\x02\x02\u06FE\u0701\x03\x02\x02\x02\u06FF\u06FD\x03\x02\x02\x02\u06FF" +
		"\u0700\x03\x02\x02\x02\u0700\u0709\x03\x02\x02\x02\u0701\u06FF\x03\x02" +
		"\x02\x02\u0702\u0703\x07\x0E\x02\x02\u0703\u0709\x07\xD5\x02\x02\u0704" +
		"\u0705\t\x04\x02\x02\u0705\u0709\x07\xD5\x02\x02\u0706\u0707\t\x05\x02" +
		"\x02\u0707\u0709\t\x06\x02\x02\u0708\u06D6\x03\x02\x02\x02\u0708\u06E1" +
		"\x03\x02\x02\x02\u0708\u06EC\x03\x02\x02\x02\u0708\u06F7\x03\x02\x02\x02" +
		"\u0708\u0702\x03\x02\x02\x02\u0708\u0704\x03\x02\x02\x02\u0708\u0706\x03" +
		"\x02\x02\x02\u0709#\x03\x02\x02\x02\u070A\u070C\x07\x14\x02\x02\u070B" +
		"\u070A\x03\x02\x02\x02\u070B\u070C\x03\x02\x02\x02\u070C\u070D\x03\x02" +
		"\x02\x02\u070D\u0732\x07\x15\x02\x02\u070E\u0710\x07\x14\x02\x02\u070F" +
		"\u070E\x03\x02\x02\x02\u070F\u0710\x03\x02\x02\x02\u0710\u0711\x03\x02" +
		"\x02\x02\u0711\u0732\x07\x16\x02\x02\u0712\u0714\x07\x14\x02\x02\u0713" +
		"\u0712\x03\x02\x02\x02\u0713\u0714\x03\x02\x02\x02\u0714\u0715\x03\x02" +
		"\x02\x02\u0715\u0732\x07\x17\x02\x02\u0716\u0718\x07\x14\x02\x02\u0717" +
		"\u0716\x03\x02\x02\x02\u0717\u0718\x03\x02\x02\x02\u0718\u0719\x03\x02" +
		"\x02\x02\u0719\u0732\x07\x18\x02\x02\u071A\u071B\t\x07\x02\x02\u071B\u0722" +
		"\x07\xD7\x02\x02\u071C\u071E\x07\x03\x02\x02\u071D\u071C\x03\x02\x02\x02" +
		"\u071D\u071E\x03\x02\x02\x02\u071E\u071F\x03\x02\x02\x02\u071F\u0721\x07" +
		"\xD7\x02\x02\u0720\u071D\x03\x02\x02\x02\u0721\u0724\x03\x02\x02\x02\u0722" +
		"\u0720\x03\x02\x02\x02\u0722\u0723\x03\x02\x02\x02\u0723\u0732\x03\x02" +
		"\x02\x02\u0724\u0722\x03\x02\x02\x02\u0725\u0726\t\b\x02\x02\u0726\u0732" +
		"\t\t\x02\x02\u0727\u0728\x07\x1D\x02\x02\u0728\u0732\t\t\x02\x02\u0729" +
		"\u072A\x07\x1E\x02\x02\u072A\u0732\x07\xD5\x02\x02\u072B\u072C\t\n\x02" +
		"\x02\u072C\u072E\x07\xD7\x02\x02\u072D\u072F\x07\x03\x02\x02\u072E\u072D" +
		"\x03\x02\x02\x02\u072E\u072F\x03\x02\x02\x02\u072F\u0730\x03\x02\x02\x02" +
		"\u0730\u0732\x05&\x14\x02\u0731\u070B\x03\x02\x02\x02\u0731\u070F\x03" +
		"\x02\x02\x02\u0731\u0713\x03\x02\x02\x02\u0731\u0717\x03\x02\x02\x02\u0731" +
		"\u071A\x03\x02\x02\x02\u0731\u0725\x03\x02\x02\x02\u0731\u0727\x03\x02" +
		"\x02\x02\u0731\u0729\x03\x02\x02\x02\u0731\u072B\x03\x02\x02\x02\u0732" +
		"%\x03\x02\x02\x02\u0733\u0734\b\x14\x01\x02\u0734\u0735\x07\x04\x02\x02" +
		"\u0735\u0736\x05&\x14\x02\u0736\u0737\x07\x05\x02\x02\u0737\u0750\x03" +
		"\x02\x02\x02\u0738\u0739\t\v\x02\x02\u0739\u0750\x05&\x14\r\u073A\u0750" +
		"\x07\xD1\x02\x02\u073B\u0750\x07\xD2\x02\x02\u073C\u0750\x07\xD3\x02\x02" +
		"\u073D\u0750\x07\xD6\x02\x02\u073E\u0750\x07\xD7\x02\x02\u073F\u0740\x07" +
		"#\x02\x02\u0740\u0741\x07\x04\x02\x02\u0741\u0742\x07\xD7\x02\x02\u0742" +
		"\u0750\x07\x05\x02\x02\u0743\u0744\x07$\x02\x02\u0744\u0745\x07\x04\x02" +
		"\x02\u0745\u0746\x07\xD7\x02\x02\u0746\u0750\x07\x05\x02\x02\u0747\u0748" +
		"\x07%\x02\x02\u0748\u0749\x07\x04\x02\x02\u0749\u074A\x07\xD7\x02\x02" +
		"\u074A\u0750\x07\x05\x02\x02\u074B\u074C\x07&\x02\x02\u074C\u074D\x07" +
		"\x04\x02\x02\u074D\u074E\x07\xD7\x02\x02\u074E\u0750\x07\x05\x02\x02\u074F" +
		"\u0733\x03\x02\x02\x02\u074F\u0738\x03\x02\x02\x02\u074F\u073A\x03\x02" +
		"\x02\x02\u074F\u073B\x03\x02\x02\x02\u074F\u073C\x03\x02\x02\x02\u074F" +
		"\u073D\x03\x02\x02\x02\u074F\u073E\x03\x02\x02\x02\u074F\u073F\x03\x02" +
		"\x02\x02\u074F\u0743\x03\x02\x02\x02\u074F\u0747\x03\x02\x02\x02\u074F" +
		"\u074B\x03\x02\x02\x02\u0750\u0756\x03\x02\x02\x02\u0751\u0752\f\f\x02" +
		"\x02\u0752\u0753\t\v\x02\x02\u0753\u0755\x05&\x14\r\u0754\u0751\x03\x02" +
		"\x02\x02\u0755\u0758\x03\x02\x02\x02\u0756\u0754\x03\x02\x02\x02\u0756" +
		"\u0757\x03\x02\x02\x02\u0757\'\x03\x02\x02\x02\u0758\u0756\x03\x02\x02" +
		"\x02\u0759\u075A\x07\x04\x02\x02\u075A\u075B\x05(\x15\x02\u075B\u075C" +
		"\x07\x05\x02\x02\u075C\u0764\x03\x02\x02\x02\u075D\u075E\t\v\x02\x02\u075E" +
		"\u0764\x05(\x15\x02\u075F\u0764\x07\xD1\x02\x02\u0760\u0764\x07\xD2\x02" +
		"\x02\u0761\u0764\x07\xD3\x02\x02\u0762\u0764\x07\xD4\x02\x02\u0763\u0759" +
		"\x03\x02\x02\x02\u0763\u075D\x03\x02\x02\x02\u0763\u075F\x03\x02\x02\x02" +
		"\u0763\u0760\x03\x02\x02\x02\u0763\u0761\x03\x02\x02\x02\u0763\u0762\x03" +
		"\x02\x02\x02\u0764)\x03\x02\x02\x02\u0765\u076A\x07\xD1\x02\x02\u0766" +
		"\u076A\x07\xD2\x02\x02\u0767\u076A\x07\xD3\x02\x02\u0768\u076A\x07\xD6" +
		"\x02\x02\u0769\u0765\x03\x02\x02\x02\u0769\u0766\x03\x02\x02\x02\u0769" +
		"\u0767\x03\x02\x02\x02\u0769\u0768\x03\x02\x02\x02\u076A+\x03\x02\x02" +
		"\x02\u0160/69ETY_ekow|\x80\x86\x8A\x90\x94\x9A\x9E\xA4\xA8\xAE\xB2\xB8" +
		"\xBC\xC4\xC9\xCD\xD5\xDA\xDE\xE6\xEB\xEF\xF7\xFC\u0100\u0108\u010D\u0111" +
		"\u0119\u011E\u0122\u012A\u012F\u0133\u013B\u0140\u0144\u014A\u014E\u0154" +
		"\u0158\u015E\u0162\u0168\u016C\u0172\u0176\u017C\u0180\u0186\u018A\u0190" +
		"\u0194\u019A\u019E\u01A4\u01A8\u01AE\u01B2\u01B8\u01BC\u01C2\u01C6\u01CC" +
		"\u01D0\u01D6\u01DA\u01E0\u01E4\u01EA\u01EE\u01F4\u01F8\u01FE\u0205\u0209" +
		"\u0210\u0214\u021B\u021F\u0226\u022A\u0231\u0235\u023C\u0240\u0244\u0249" +
		"\u024D\u0253\u0257\u025D\u0261\u0267\u026B\u0271\u0275\u027B\u027F\u0285" +
		"\u0289\u028F\u0293\u0296\u029B\u029E\u02A2\u02A7\u02AB\u02AE\u02B2\u02B7" +
		"\u02BB\u02BE\u02C2\u02C7\u02CB\u02CE\u02D2\u02D7\u02DB\u02DE\u02E2\u02E7" +
		"\u02EB\u02EE\u02F2\u02F7\u02FB\u02FE\u0302\u0307\u030B\u030E\u0312\u0317" +
		"\u031B\u031E\u0322\u0327\u032B\u032E\u0332\u0337\u033B\u033E\u0342\u0344" +
		"\u0349\u034D\u0355\u035A\u035E\u0363\u036A\u036F\u0373\u0377\u037D\u0381" +
		"\u0385\u038B\u038F\u0393\u0399\u039D\u03A1\u03A7\u03AB\u03B1\u03B5\u03BB" +
		"\u03BF\u03C5\u03C9\u03CF\u03D5\u03D9\u03DF\u03E3\u03E9\u03ED\u03F3\u03F7" +
		"\u03FD\u0401\u0407\u040D\u0413\u0419\u041F\u0423\u0429\u042D\u0433\u0437" +
		"\u043D\u0443\u0449\u044F\u0455\u0458\u045D\u0461\u0469\u046E\u0472\u0477" +
		"\u047E\u0483\u0487\u048B\u0491\u0495\u0499\u049F\u04A3\u04A7\u04AD\u04B1" +
		"\u04B5\u04BB\u04BF\u04C5\u04C9\u04CF\u04D3\u04D9\u04DD\u04E3\u04E9\u04ED" +
		"\u04F3\u04F7\u04FD\u0501\u0507\u050B\u0511\u0515\u051B\u0521\u0527\u052B" +
		"\u0531\u0535\u053B\u053F\u0545\u054B\u0551\u0557\u055D\u0560\u0565\u056B" +
		"\u0571\u0577\u057D\u0583\u0587\u058D\u0591\u0597\u059B\u05A2\u05A8\u05AE" +
		"\u05B4\u05BA\u05C0\u05C6\u05CC\u05D2\u05D8\u05DE\u05E4\u05EA\u05F0\u05F6" +
		"\u05FA\u0600\u0604\u060A\u060E\u0614\u0618\u0626\u062B\u062E\u0639\u063F" +
		"\u0646\u064D\u0654\u065B\u0662\u066D\u0677\u0681\u0684\u0689\u068D\u0693" +
		"\u0697\u069D\u06A3\u06A9\u06AC\u06B1\u06B5\u06BB\u06BF\u06C5\u06CB\u06D1" +
		"\u06D4\u06D9\u06DE\u06E4\u06E9\u06EF\u06F4\u06FA\u06FF\u0708\u070B\u070F" +
		"\u0713\u0717\u071D\u0722\u072E\u0731\u074F\u0756\u0763\u0769";
	public static readonly _serializedATN: string = Utils.join(
		[
			RISCVParser._serializedATNSegment0,
			RISCVParser._serializedATNSegment1,
			RISCVParser._serializedATNSegment2,
			RISCVParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RISCVParser.__ATN) {
			RISCVParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RISCVParser._serializedATN));
		}

		return RISCVParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RISCVParser.EOF, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_prog; }
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	public EOL(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_line; }
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public label_def(): Label_defContext | undefined {
		return this.tryGetRuleContext(0, Label_defContext);
	}
	public static_data(): Static_dataContext | undefined {
		return this.tryGetRuleContext(0, Static_dataContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_stmt; }
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
}


export class Label_defContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_label_def; }
	public copyFrom(ctx: Label_defContext): void {
		super.copyFrom(ctx);
	}
}
export class LABELContext extends Label_defContext {
	public LABEL(): TerminalNode { return this.getToken(RISCVParser.LABEL, 0); }
	constructor(ctx: Label_defContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLABEL) {
			listener.enterLABEL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLABEL) {
			listener.exitLABEL(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_instruction; }
	public copyFrom(ctx: InstructionContext): void {
		super.copyFrom(ctx);
	}
}
export class RV32IContext extends InstructionContext {
	public rv32i_ext(): Rv32i_extContext {
		return this.getRuleContext(0, Rv32i_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32I) {
			listener.enterRV32I(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32I) {
			listener.exitRV32I(this);
		}
	}
}
export class RV32ZifenceiContext extends InstructionContext {
	public rv32zifencei_ext(): Rv32zifencei_extContext {
		return this.getRuleContext(0, Rv32zifencei_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32Zifencei) {
			listener.enterRV32Zifencei(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32Zifencei) {
			listener.exitRV32Zifencei(this);
		}
	}
}
export class RV32ZicsrContext extends InstructionContext {
	public rv32zicsr_ext(): Rv32zicsr_extContext {
		return this.getRuleContext(0, Rv32zicsr_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32Zicsr) {
			listener.enterRV32Zicsr(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32Zicsr) {
			listener.exitRV32Zicsr(this);
		}
	}
}
export class RV32MContext extends InstructionContext {
	public rv32m_ext(): Rv32m_extContext {
		return this.getRuleContext(0, Rv32m_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32M) {
			listener.enterRV32M(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32M) {
			listener.exitRV32M(this);
		}
	}
}
export class RV32AContext extends InstructionContext {
	public rv32a_ext(): Rv32a_extContext {
		return this.getRuleContext(0, Rv32a_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32A) {
			listener.enterRV32A(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32A) {
			listener.exitRV32A(this);
		}
	}
}
export class RV32FContext extends InstructionContext {
	public rv32f_ext(): Rv32f_extContext {
		return this.getRuleContext(0, Rv32f_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32F) {
			listener.enterRV32F(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32F) {
			listener.exitRV32F(this);
		}
	}
}
export class RV32DContext extends InstructionContext {
	public rv32d_ext(): Rv32d_extContext {
		return this.getRuleContext(0, Rv32d_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32D) {
			listener.enterRV32D(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32D) {
			listener.exitRV32D(this);
		}
	}
}
export class RV32IPSEUDOSContext extends InstructionContext {
	public rv32i_ext_pseudos(): Rv32i_ext_pseudosContext {
		return this.getRuleContext(0, Rv32i_ext_pseudosContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32IPSEUDOS) {
			listener.enterRV32IPSEUDOS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32IPSEUDOS) {
			listener.exitRV32IPSEUDOS(this);
		}
	}
}
export class RV32ZicsrPSEUDOSContext extends InstructionContext {
	public rv32zicsr_ext_pseudos(): Rv32zicsr_ext_pseudosContext {
		return this.getRuleContext(0, Rv32zicsr_ext_pseudosContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32ZicsrPSEUDOS) {
			listener.enterRV32ZicsrPSEUDOS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32ZicsrPSEUDOS) {
			listener.exitRV32ZicsrPSEUDOS(this);
		}
	}
}
export class RV32FPSEUDOSContext extends InstructionContext {
	public rv32f_ext_pseudos(): Rv32f_ext_pseudosContext {
		return this.getRuleContext(0, Rv32f_ext_pseudosContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32FPSEUDOS) {
			listener.enterRV32FPSEUDOS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32FPSEUDOS) {
			listener.exitRV32FPSEUDOS(this);
		}
	}
}
export class RV32DPSEUDOSContext extends InstructionContext {
	public rv32d_ext_pseudos(): Rv32d_ext_pseudosContext {
		return this.getRuleContext(0, Rv32d_ext_pseudosContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32DPSEUDOS) {
			listener.enterRV32DPSEUDOS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32DPSEUDOS) {
			listener.exitRV32DPSEUDOS(this);
		}
	}
}


export class Rv32i_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32i_ext; }
	public copyFrom(ctx: Rv32i_extContext): void {
		super.copyFrom(ctx);
	}
}
export class LUIContext extends Rv32i_extContext {
	public I_LUI(): TerminalNode { return this.getToken(RISCVParser.I_LUI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLUI) {
			listener.enterLUI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLUI) {
			listener.exitLUI(this);
		}
	}
}
export class AUIPCContext extends Rv32i_extContext {
	public I_AUIPC(): TerminalNode { return this.getToken(RISCVParser.I_AUIPC, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAUIPC) {
			listener.enterAUIPC(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAUIPC) {
			listener.exitAUIPC(this);
		}
	}
}
export class JALContext extends Rv32i_extContext {
	public I_JAL(): TerminalNode { return this.getToken(RISCVParser.I_JAL, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJAL) {
			listener.enterJAL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJAL) {
			listener.exitJAL(this);
		}
	}
}
export class JALRContext extends Rv32i_extContext {
	public I_JALR(): TerminalNode { return this.getToken(RISCVParser.I_JALR, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJALR) {
			listener.enterJALR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJALR) {
			listener.exitJALR(this);
		}
	}
}
export class BEQContext extends Rv32i_extContext {
	public I_BEQ(): TerminalNode { return this.getToken(RISCVParser.I_BEQ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBEQ) {
			listener.enterBEQ(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBEQ) {
			listener.exitBEQ(this);
		}
	}
}
export class BNEContext extends Rv32i_extContext {
	public I_BNE(): TerminalNode { return this.getToken(RISCVParser.I_BNE, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBNE) {
			listener.enterBNE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBNE) {
			listener.exitBNE(this);
		}
	}
}
export class BLTContext extends Rv32i_extContext {
	public I_BLT(): TerminalNode { return this.getToken(RISCVParser.I_BLT, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLT) {
			listener.enterBLT(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLT) {
			listener.exitBLT(this);
		}
	}
}
export class BGEContext extends Rv32i_extContext {
	public I_BGE(): TerminalNode { return this.getToken(RISCVParser.I_BGE, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGE) {
			listener.enterBGE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGE) {
			listener.exitBGE(this);
		}
	}
}
export class BLTUContext extends Rv32i_extContext {
	public I_BLTU(): TerminalNode { return this.getToken(RISCVParser.I_BLTU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLTU) {
			listener.enterBLTU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLTU) {
			listener.exitBLTU(this);
		}
	}
}
export class BGEUContext extends Rv32i_extContext {
	public I_BGEU(): TerminalNode { return this.getToken(RISCVParser.I_BGEU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGEU) {
			listener.enterBGEU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGEU) {
			listener.exitBGEU(this);
		}
	}
}
export class LBContext extends Rv32i_extContext {
	public I_LB(): TerminalNode { return this.getToken(RISCVParser.I_LB, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLB) {
			listener.enterLB(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLB) {
			listener.exitLB(this);
		}
	}
}
export class LHContext extends Rv32i_extContext {
	public I_LH(): TerminalNode { return this.getToken(RISCVParser.I_LH, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLH) {
			listener.enterLH(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLH) {
			listener.exitLH(this);
		}
	}
}
export class LWContext extends Rv32i_extContext {
	public I_LW(): TerminalNode { return this.getToken(RISCVParser.I_LW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLW) {
			listener.enterLW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLW) {
			listener.exitLW(this);
		}
	}
}
export class LBUContext extends Rv32i_extContext {
	public I_LBU(): TerminalNode { return this.getToken(RISCVParser.I_LBU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLBU) {
			listener.enterLBU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLBU) {
			listener.exitLBU(this);
		}
	}
}
export class LHUContext extends Rv32i_extContext {
	public I_LHU(): TerminalNode { return this.getToken(RISCVParser.I_LHU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLHU) {
			listener.enterLHU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLHU) {
			listener.exitLHU(this);
		}
	}
}
export class SBContext extends Rv32i_extContext {
	public I_SB(): TerminalNode { return this.getToken(RISCVParser.I_SB, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSB) {
			listener.enterSB(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSB) {
			listener.exitSB(this);
		}
	}
}
export class SHContext extends Rv32i_extContext {
	public I_SH(): TerminalNode { return this.getToken(RISCVParser.I_SH, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSH) {
			listener.enterSH(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSH) {
			listener.exitSH(this);
		}
	}
}
export class SWContext extends Rv32i_extContext {
	public I_SW(): TerminalNode { return this.getToken(RISCVParser.I_SW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSW) {
			listener.enterSW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSW) {
			listener.exitSW(this);
		}
	}
}
export class ADDIContext extends Rv32i_extContext {
	public I_ADDI(): TerminalNode { return this.getToken(RISCVParser.I_ADDI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterADDI) {
			listener.enterADDI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitADDI) {
			listener.exitADDI(this);
		}
	}
}
export class SLTIContext extends Rv32i_extContext {
	public I_SLTI(): TerminalNode { return this.getToken(RISCVParser.I_SLTI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLTI) {
			listener.enterSLTI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLTI) {
			listener.exitSLTI(this);
		}
	}
}
export class SLTIUContext extends Rv32i_extContext {
	public I_SLTIU(): TerminalNode { return this.getToken(RISCVParser.I_SLTIU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLTIU) {
			listener.enterSLTIU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLTIU) {
			listener.exitSLTIU(this);
		}
	}
}
export class XORIContext extends Rv32i_extContext {
	public I_XORI(): TerminalNode { return this.getToken(RISCVParser.I_XORI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterXORI) {
			listener.enterXORI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitXORI) {
			listener.exitXORI(this);
		}
	}
}
export class ORIContext extends Rv32i_extContext {
	public I_ORI(): TerminalNode { return this.getToken(RISCVParser.I_ORI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterORI) {
			listener.enterORI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitORI) {
			listener.exitORI(this);
		}
	}
}
export class ANDIContext extends Rv32i_extContext {
	public I_ANDI(): TerminalNode { return this.getToken(RISCVParser.I_ANDI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterANDI) {
			listener.enterANDI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitANDI) {
			listener.exitANDI(this);
		}
	}
}
export class SLLIContext extends Rv32i_extContext {
	public I_SLLI(): TerminalNode { return this.getToken(RISCVParser.I_SLLI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLLI) {
			listener.enterSLLI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLLI) {
			listener.exitSLLI(this);
		}
	}
}
export class SRLIContext extends Rv32i_extContext {
	public I_SRLI(): TerminalNode { return this.getToken(RISCVParser.I_SRLI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSRLI) {
			listener.enterSRLI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSRLI) {
			listener.exitSRLI(this);
		}
	}
}
export class SRAIContext extends Rv32i_extContext {
	public I_SRAI(): TerminalNode { return this.getToken(RISCVParser.I_SRAI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSRAI) {
			listener.enterSRAI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSRAI) {
			listener.exitSRAI(this);
		}
	}
}
export class ADDContext extends Rv32i_extContext {
	public I_ADD(): TerminalNode { return this.getToken(RISCVParser.I_ADD, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterADD) {
			listener.enterADD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitADD) {
			listener.exitADD(this);
		}
	}
}
export class SUBContext extends Rv32i_extContext {
	public I_SUB(): TerminalNode { return this.getToken(RISCVParser.I_SUB, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSUB) {
			listener.enterSUB(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSUB) {
			listener.exitSUB(this);
		}
	}
}
export class SLLContext extends Rv32i_extContext {
	public I_SLL(): TerminalNode { return this.getToken(RISCVParser.I_SLL, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLL) {
			listener.enterSLL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLL) {
			listener.exitSLL(this);
		}
	}
}
export class SLTContext extends Rv32i_extContext {
	public I_SLT(): TerminalNode { return this.getToken(RISCVParser.I_SLT, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLT) {
			listener.enterSLT(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLT) {
			listener.exitSLT(this);
		}
	}
}
export class SLTUContext extends Rv32i_extContext {
	public I_SLTU(): TerminalNode { return this.getToken(RISCVParser.I_SLTU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLTU) {
			listener.enterSLTU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLTU) {
			listener.exitSLTU(this);
		}
	}
}
export class XORContext extends Rv32i_extContext {
	public I_XOR(): TerminalNode { return this.getToken(RISCVParser.I_XOR, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterXOR) {
			listener.enterXOR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitXOR) {
			listener.exitXOR(this);
		}
	}
}
export class SRLContext extends Rv32i_extContext {
	public I_SRL(): TerminalNode { return this.getToken(RISCVParser.I_SRL, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSRL) {
			listener.enterSRL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSRL) {
			listener.exitSRL(this);
		}
	}
}
export class SRAContext extends Rv32i_extContext {
	public I_SRA(): TerminalNode { return this.getToken(RISCVParser.I_SRA, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSRA) {
			listener.enterSRA(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSRA) {
			listener.exitSRA(this);
		}
	}
}
export class ORContext extends Rv32i_extContext {
	public I_OR(): TerminalNode { return this.getToken(RISCVParser.I_OR, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterOR) {
			listener.enterOR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitOR) {
			listener.exitOR(this);
		}
	}
}
export class ANDContext extends Rv32i_extContext {
	public I_AND(): TerminalNode { return this.getToken(RISCVParser.I_AND, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAND) {
			listener.enterAND(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAND) {
			listener.exitAND(this);
		}
	}
}
export class FENCEContext extends Rv32i_extContext {
	public I_FENCE(): TerminalNode { return this.getToken(RISCVParser.I_FENCE, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFENCE) {
			listener.enterFENCE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFENCE) {
			listener.exitFENCE(this);
		}
	}
}
export class ECALLContext extends Rv32i_extContext {
	public I_ECALL(): TerminalNode { return this.getToken(RISCVParser.I_ECALL, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterECALL) {
			listener.enterECALL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitECALL) {
			listener.exitECALL(this);
		}
	}
}
export class EBREAKContext extends Rv32i_extContext {
	public I_EBREAK(): TerminalNode { return this.getToken(RISCVParser.I_EBREAK, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterEBREAK) {
			listener.enterEBREAK(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitEBREAK) {
			listener.exitEBREAK(this);
		}
	}
}


export class Rv32zifencei_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32zifencei_ext; }
	public copyFrom(ctx: Rv32zifencei_extContext): void {
		super.copyFrom(ctx);
	}
}
export class FENCEIContext extends Rv32zifencei_extContext {
	public I_FENCEI(): TerminalNode { return this.getToken(RISCVParser.I_FENCEI, 0); }
	constructor(ctx: Rv32zifencei_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFENCEI) {
			listener.enterFENCEI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFENCEI) {
			listener.exitFENCEI(this);
		}
	}
}


export class Rv32zicsr_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32zicsr_ext; }
	public copyFrom(ctx: Rv32zicsr_extContext): void {
		super.copyFrom(ctx);
	}
}
export class CSRRWContext extends Rv32zicsr_extContext {
	public I_CSRRW(): TerminalNode { return this.getToken(RISCVParser.I_CSRRW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRW) {
			listener.enterCSRRW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRW) {
			listener.exitCSRRW(this);
		}
	}
}
export class CSRRSContext extends Rv32zicsr_extContext {
	public I_CSRRS(): TerminalNode { return this.getToken(RISCVParser.I_CSRRS, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRS) {
			listener.enterCSRRS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRS) {
			listener.exitCSRRS(this);
		}
	}
}
export class CSRRCContext extends Rv32zicsr_extContext {
	public I_CSRRC(): TerminalNode { return this.getToken(RISCVParser.I_CSRRC, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRC) {
			listener.enterCSRRC(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRC) {
			listener.exitCSRRC(this);
		}
	}
}
export class CSRRWIContext extends Rv32zicsr_extContext {
	public I_CSRRWI(): TerminalNode { return this.getToken(RISCVParser.I_CSRRWI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public uimm(): UimmContext {
		return this.getRuleContext(0, UimmContext);
	}
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRWI) {
			listener.enterCSRRWI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRWI) {
			listener.exitCSRRWI(this);
		}
	}
}
export class CSRRSIContext extends Rv32zicsr_extContext {
	public I_CSRRSI(): TerminalNode { return this.getToken(RISCVParser.I_CSRRSI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public uimm(): UimmContext {
		return this.getRuleContext(0, UimmContext);
	}
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRSI) {
			listener.enterCSRRSI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRSI) {
			listener.exitCSRRSI(this);
		}
	}
}
export class CSRRCIContext extends Rv32zicsr_extContext {
	public I_CSRRCI(): TerminalNode { return this.getToken(RISCVParser.I_CSRRCI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public uimm(): UimmContext {
		return this.getRuleContext(0, UimmContext);
	}
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRCI) {
			listener.enterCSRRCI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRCI) {
			listener.exitCSRRCI(this);
		}
	}
}


export class Rv32m_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32m_ext; }
	public copyFrom(ctx: Rv32m_extContext): void {
		super.copyFrom(ctx);
	}
}
export class MULContext extends Rv32m_extContext {
	public I_MUL(): TerminalNode { return this.getToken(RISCVParser.I_MUL, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMUL) {
			listener.enterMUL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMUL) {
			listener.exitMUL(this);
		}
	}
}
export class MULHContext extends Rv32m_extContext {
	public I_MULH(): TerminalNode { return this.getToken(RISCVParser.I_MULH, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMULH) {
			listener.enterMULH(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMULH) {
			listener.exitMULH(this);
		}
	}
}
export class MULHSUContext extends Rv32m_extContext {
	public I_MULHSU(): TerminalNode { return this.getToken(RISCVParser.I_MULHSU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMULHSU) {
			listener.enterMULHSU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMULHSU) {
			listener.exitMULHSU(this);
		}
	}
}
export class MULHUContext extends Rv32m_extContext {
	public I_MULHU(): TerminalNode { return this.getToken(RISCVParser.I_MULHU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMULHU) {
			listener.enterMULHU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMULHU) {
			listener.exitMULHU(this);
		}
	}
}
export class DIVContext extends Rv32m_extContext {
	public I_DIV(): TerminalNode { return this.getToken(RISCVParser.I_DIV, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterDIV) {
			listener.enterDIV(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitDIV) {
			listener.exitDIV(this);
		}
	}
}
export class DIVUContext extends Rv32m_extContext {
	public I_DIVU(): TerminalNode { return this.getToken(RISCVParser.I_DIVU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterDIVU) {
			listener.enterDIVU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitDIVU) {
			listener.exitDIVU(this);
		}
	}
}
export class REMContext extends Rv32m_extContext {
	public I_REM(): TerminalNode { return this.getToken(RISCVParser.I_REM, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterREM) {
			listener.enterREM(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitREM) {
			listener.exitREM(this);
		}
	}
}
export class REMUContext extends Rv32m_extContext {
	public I_REMU(): TerminalNode { return this.getToken(RISCVParser.I_REMU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterREMU) {
			listener.enterREMU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitREMU) {
			listener.exitREMU(this);
		}
	}
}


export class Rv32a_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32a_ext; }
	public copyFrom(ctx: Rv32a_extContext): void {
		super.copyFrom(ctx);
	}
}
export class LRWContext extends Rv32a_extContext {
	public I_LRW(): TerminalNode { return this.getToken(RISCVParser.I_LRW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLRW) {
			listener.enterLRW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLRW) {
			listener.exitLRW(this);
		}
	}
}
export class SCWContext extends Rv32a_extContext {
	public I_SCW(): TerminalNode { return this.getToken(RISCVParser.I_SCW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSCW) {
			listener.enterSCW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSCW) {
			listener.exitSCW(this);
		}
	}
}
export class AMOSWAPWContext extends Rv32a_extContext {
	public I_AMOSWAPW(): TerminalNode { return this.getToken(RISCVParser.I_AMOSWAPW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOSWAPW) {
			listener.enterAMOSWAPW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOSWAPW) {
			listener.exitAMOSWAPW(this);
		}
	}
}
export class AMOADDWContext extends Rv32a_extContext {
	public I_AMOADDW(): TerminalNode { return this.getToken(RISCVParser.I_AMOADDW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOADDW) {
			listener.enterAMOADDW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOADDW) {
			listener.exitAMOADDW(this);
		}
	}
}
export class AMOXORWContext extends Rv32a_extContext {
	public I_AMOXORW(): TerminalNode { return this.getToken(RISCVParser.I_AMOXORW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOXORW) {
			listener.enterAMOXORW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOXORW) {
			listener.exitAMOXORW(this);
		}
	}
}
export class AMOANDWContext extends Rv32a_extContext {
	public I_AMOANDW(): TerminalNode { return this.getToken(RISCVParser.I_AMOANDW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOANDW) {
			listener.enterAMOANDW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOANDW) {
			listener.exitAMOANDW(this);
		}
	}
}
export class AMOORWContext extends Rv32a_extContext {
	public I_AMOORW(): TerminalNode { return this.getToken(RISCVParser.I_AMOORW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOORW) {
			listener.enterAMOORW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOORW) {
			listener.exitAMOORW(this);
		}
	}
}
export class AMOMINWContext extends Rv32a_extContext {
	public I_AMOMINW(): TerminalNode { return this.getToken(RISCVParser.I_AMOMINW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOMINW) {
			listener.enterAMOMINW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOMINW) {
			listener.exitAMOMINW(this);
		}
	}
}
export class AMOMAXWContext extends Rv32a_extContext {
	public I_AMOMAXW(): TerminalNode { return this.getToken(RISCVParser.I_AMOMAXW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOMAXW) {
			listener.enterAMOMAXW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOMAXW) {
			listener.exitAMOMAXW(this);
		}
	}
}
export class AMOMINUWContext extends Rv32a_extContext {
	public I_AMOMINUW(): TerminalNode { return this.getToken(RISCVParser.I_AMOMINUW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOMINUW) {
			listener.enterAMOMINUW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOMINUW) {
			listener.exitAMOMINUW(this);
		}
	}
}
export class AMOMAXUWContext extends Rv32a_extContext {
	public I_AMOMAXUW(): TerminalNode { return this.getToken(RISCVParser.I_AMOMAXUW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOMAXUW) {
			listener.enterAMOMAXUW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOMAXUW) {
			listener.exitAMOMAXUW(this);
		}
	}
}


export class Rv32f_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32f_ext; }
	public copyFrom(ctx: Rv32f_extContext): void {
		super.copyFrom(ctx);
	}
}
export class FLWContext extends Rv32f_extContext {
	public I_FLW(): TerminalNode { return this.getToken(RISCVParser.I_FLW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLW) {
			listener.enterFLW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLW) {
			listener.exitFLW(this);
		}
	}
}
export class FSWContext extends Rv32f_extContext {
	public I_FSW(): TerminalNode { return this.getToken(RISCVParser.I_FSW, 0); }
	public XREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.FREG, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSW) {
			listener.enterFSW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSW) {
			listener.exitFSW(this);
		}
	}
}
export class FMADDSContext extends Rv32f_extContext {
	public I_FMADDS(): TerminalNode { return this.getToken(RISCVParser.I_FMADDS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMADDS) {
			listener.enterFMADDS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMADDS) {
			listener.exitFMADDS(this);
		}
	}
}
export class FMSUBSContext extends Rv32f_extContext {
	public I_FMSUBS(): TerminalNode { return this.getToken(RISCVParser.I_FMSUBS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMSUBS) {
			listener.enterFMSUBS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMSUBS) {
			listener.exitFMSUBS(this);
		}
	}
}
export class FNMSUBSContext extends Rv32f_extContext {
	public I_FNMSUBS(): TerminalNode { return this.getToken(RISCVParser.I_FNMSUBS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNMSUBS) {
			listener.enterFNMSUBS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNMSUBS) {
			listener.exitFNMSUBS(this);
		}
	}
}
export class FNMADDSContext extends Rv32f_extContext {
	public I_FNMADDS(): TerminalNode { return this.getToken(RISCVParser.I_FNMADDS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNMADDS) {
			listener.enterFNMADDS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNMADDS) {
			listener.exitFNMADDS(this);
		}
	}
}
export class FADDSContext extends Rv32f_extContext {
	public I_FADDS(): TerminalNode { return this.getToken(RISCVParser.I_FADDS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFADDS) {
			listener.enterFADDS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFADDS) {
			listener.exitFADDS(this);
		}
	}
}
export class FSUBSContext extends Rv32f_extContext {
	public I_FSUBS(): TerminalNode { return this.getToken(RISCVParser.I_FSUBS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSUBS) {
			listener.enterFSUBS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSUBS) {
			listener.exitFSUBS(this);
		}
	}
}
export class FMULSContext extends Rv32f_extContext {
	public I_FMULS(): TerminalNode { return this.getToken(RISCVParser.I_FMULS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMULS) {
			listener.enterFMULS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMULS) {
			listener.exitFMULS(this);
		}
	}
}
export class FDIVSContext extends Rv32f_extContext {
	public I_FDIVS(): TerminalNode { return this.getToken(RISCVParser.I_FDIVS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFDIVS) {
			listener.enterFDIVS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFDIVS) {
			listener.exitFDIVS(this);
		}
	}
}
export class FSQRTSContext extends Rv32f_extContext {
	public I_FSQRTS(): TerminalNode { return this.getToken(RISCVParser.I_FSQRTS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSQRTS) {
			listener.enterFSQRTS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSQRTS) {
			listener.exitFSQRTS(this);
		}
	}
}
export class FSGNJSContext extends Rv32f_extContext {
	public I_FSGNJS(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJS) {
			listener.enterFSGNJS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJS) {
			listener.exitFSGNJS(this);
		}
	}
}
export class FSGNJNSContext extends Rv32f_extContext {
	public I_FSGNJNS(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJNS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJNS) {
			listener.enterFSGNJNS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJNS) {
			listener.exitFSGNJNS(this);
		}
	}
}
export class FSGNJXSContext extends Rv32f_extContext {
	public I_FSGNJXS(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJXS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJXS) {
			listener.enterFSGNJXS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJXS) {
			listener.exitFSGNJXS(this);
		}
	}
}
export class FMINSContext extends Rv32f_extContext {
	public I_FMINS(): TerminalNode { return this.getToken(RISCVParser.I_FMINS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMINS) {
			listener.enterFMINS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMINS) {
			listener.exitFMINS(this);
		}
	}
}
export class FMAXSContext extends Rv32f_extContext {
	public I_FMAXS(): TerminalNode { return this.getToken(RISCVParser.I_FMAXS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMAXS) {
			listener.enterFMAXS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMAXS) {
			listener.exitFMAXS(this);
		}
	}
}
export class FCVTWSContext extends Rv32f_extContext {
	public I_FCVTWS(): TerminalNode { return this.getToken(RISCVParser.I_FCVTWS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTWS) {
			listener.enterFCVTWS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTWS) {
			listener.exitFCVTWS(this);
		}
	}
}
export class FCVTWUSContext extends Rv32f_extContext {
	public I_FCVTWUS(): TerminalNode { return this.getToken(RISCVParser.I_FCVTWUS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTWUS) {
			listener.enterFCVTWUS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTWUS) {
			listener.exitFCVTWUS(this);
		}
	}
}
export class FMVXWContext extends Rv32f_extContext {
	public I_FMVXW(): TerminalNode { return this.getToken(RISCVParser.I_FMVXW, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVXW) {
			listener.enterFMVXW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVXW) {
			listener.exitFMVXW(this);
		}
	}
}
export class FMVXSContext extends Rv32f_extContext {
	public I_FMVXS(): TerminalNode { return this.getToken(RISCVParser.I_FMVXS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVXS) {
			listener.enterFMVXS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVXS) {
			listener.exitFMVXS(this);
		}
	}
}
export class FEQSContext extends Rv32f_extContext {
	public I_FEQS(): TerminalNode { return this.getToken(RISCVParser.I_FEQS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFEQS) {
			listener.enterFEQS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFEQS) {
			listener.exitFEQS(this);
		}
	}
}
export class FLTSContext extends Rv32f_extContext {
	public I_FLTS(): TerminalNode { return this.getToken(RISCVParser.I_FLTS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLTS) {
			listener.enterFLTS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLTS) {
			listener.exitFLTS(this);
		}
	}
}
export class FLESContext extends Rv32f_extContext {
	public I_FLES(): TerminalNode { return this.getToken(RISCVParser.I_FLES, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLES) {
			listener.enterFLES(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLES) {
			listener.exitFLES(this);
		}
	}
}
export class FCLASSSContext extends Rv32f_extContext {
	public I_FCLASSS(): TerminalNode { return this.getToken(RISCVParser.I_FCLASSS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCLASSS) {
			listener.enterFCLASSS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCLASSS) {
			listener.exitFCLASSS(this);
		}
	}
}
export class FCVTSWContext extends Rv32f_extContext {
	public I_FCVTSW(): TerminalNode { return this.getToken(RISCVParser.I_FCVTSW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTSW) {
			listener.enterFCVTSW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTSW) {
			listener.exitFCVTSW(this);
		}
	}
}
export class FCVTSWUContext extends Rv32f_extContext {
	public I_FCVTSWU(): TerminalNode { return this.getToken(RISCVParser.I_FCVTSWU, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTSWU) {
			listener.enterFCVTSWU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTSWU) {
			listener.exitFCVTSWU(this);
		}
	}
}
export class FMVWXContext extends Rv32f_extContext {
	public I_FMVWX(): TerminalNode { return this.getToken(RISCVParser.I_FMVWX, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVWX) {
			listener.enterFMVWX(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVWX) {
			listener.exitFMVWX(this);
		}
	}
}
export class FMVSXContext extends Rv32f_extContext {
	public I_FMVSX(): TerminalNode { return this.getToken(RISCVParser.I_FMVSX, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVSX) {
			listener.enterFMVSX(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVSX) {
			listener.exitFMVSX(this);
		}
	}
}


export class Rv32d_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32d_ext; }
	public copyFrom(ctx: Rv32d_extContext): void {
		super.copyFrom(ctx);
	}
}
export class FLDContext extends Rv32d_extContext {
	public I_FLD(): TerminalNode { return this.getToken(RISCVParser.I_FLD, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLD) {
			listener.enterFLD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLD) {
			listener.exitFLD(this);
		}
	}
}
export class FSDContext extends Rv32d_extContext {
	public I_FSD(): TerminalNode { return this.getToken(RISCVParser.I_FSD, 0); }
	public XREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.FREG, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSD) {
			listener.enterFSD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSD) {
			listener.exitFSD(this);
		}
	}
}
export class FMADDDContext extends Rv32d_extContext {
	public I_FMADDD(): TerminalNode { return this.getToken(RISCVParser.I_FMADDD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMADDD) {
			listener.enterFMADDD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMADDD) {
			listener.exitFMADDD(this);
		}
	}
}
export class FMSUBDContext extends Rv32d_extContext {
	public I_FMSUBD(): TerminalNode { return this.getToken(RISCVParser.I_FMSUBD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMSUBD) {
			listener.enterFMSUBD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMSUBD) {
			listener.exitFMSUBD(this);
		}
	}
}
export class FNMSUBDContext extends Rv32d_extContext {
	public I_FNMSUBD(): TerminalNode { return this.getToken(RISCVParser.I_FNMSUBD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNMSUBD) {
			listener.enterFNMSUBD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNMSUBD) {
			listener.exitFNMSUBD(this);
		}
	}
}
export class FNMADDDContext extends Rv32d_extContext {
	public I_FNMADDD(): TerminalNode { return this.getToken(RISCVParser.I_FNMADDD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNMADDD) {
			listener.enterFNMADDD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNMADDD) {
			listener.exitFNMADDD(this);
		}
	}
}
export class FADDDContext extends Rv32d_extContext {
	public I_FADDD(): TerminalNode { return this.getToken(RISCVParser.I_FADDD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFADDD) {
			listener.enterFADDD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFADDD) {
			listener.exitFADDD(this);
		}
	}
}
export class FSUBDContext extends Rv32d_extContext {
	public I_FSUBD(): TerminalNode { return this.getToken(RISCVParser.I_FSUBD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSUBD) {
			listener.enterFSUBD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSUBD) {
			listener.exitFSUBD(this);
		}
	}
}
export class FMULDContext extends Rv32d_extContext {
	public I_FMULD(): TerminalNode { return this.getToken(RISCVParser.I_FMULD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMULD) {
			listener.enterFMULD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMULD) {
			listener.exitFMULD(this);
		}
	}
}
export class FDIVDContext extends Rv32d_extContext {
	public I_FDIVD(): TerminalNode { return this.getToken(RISCVParser.I_FDIVD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFDIVD) {
			listener.enterFDIVD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFDIVD) {
			listener.exitFDIVD(this);
		}
	}
}
export class FSQRTDContext extends Rv32d_extContext {
	public I_FSQRTD(): TerminalNode { return this.getToken(RISCVParser.I_FSQRTD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSQRTD) {
			listener.enterFSQRTD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSQRTD) {
			listener.exitFSQRTD(this);
		}
	}
}
export class FSGNJDContext extends Rv32d_extContext {
	public I_FSGNJD(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJD) {
			listener.enterFSGNJD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJD) {
			listener.exitFSGNJD(this);
		}
	}
}
export class FSGNJNDContext extends Rv32d_extContext {
	public I_FSGNJND(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJND, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJND) {
			listener.enterFSGNJND(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJND) {
			listener.exitFSGNJND(this);
		}
	}
}
export class FSGNJXDContext extends Rv32d_extContext {
	public I_FSGNJXD(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJXD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJXD) {
			listener.enterFSGNJXD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJXD) {
			listener.exitFSGNJXD(this);
		}
	}
}
export class FMINDContext extends Rv32d_extContext {
	public I_FMIND(): TerminalNode { return this.getToken(RISCVParser.I_FMIND, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMIND) {
			listener.enterFMIND(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMIND) {
			listener.exitFMIND(this);
		}
	}
}
export class FMAXDContext extends Rv32d_extContext {
	public I_FMAXD(): TerminalNode { return this.getToken(RISCVParser.I_FMAXD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMAXD) {
			listener.enterFMAXD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMAXD) {
			listener.exitFMAXD(this);
		}
	}
}
export class FCVTSDContext extends Rv32d_extContext {
	public I_FCVTSD(): TerminalNode { return this.getToken(RISCVParser.I_FCVTSD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTSD) {
			listener.enterFCVTSD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTSD) {
			listener.exitFCVTSD(this);
		}
	}
}
export class FCVTDSContext extends Rv32d_extContext {
	public I_FCVTDS(): TerminalNode { return this.getToken(RISCVParser.I_FCVTDS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTDS) {
			listener.enterFCVTDS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTDS) {
			listener.exitFCVTDS(this);
		}
	}
}
export class FEQDContext extends Rv32d_extContext {
	public I_FEQD(): TerminalNode { return this.getToken(RISCVParser.I_FEQD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFEQD) {
			listener.enterFEQD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFEQD) {
			listener.exitFEQD(this);
		}
	}
}
export class FLTDContext extends Rv32d_extContext {
	public I_FLTD(): TerminalNode { return this.getToken(RISCVParser.I_FLTD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLTD) {
			listener.enterFLTD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLTD) {
			listener.exitFLTD(this);
		}
	}
}
export class FLEDContext extends Rv32d_extContext {
	public I_FLED(): TerminalNode { return this.getToken(RISCVParser.I_FLED, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLED) {
			listener.enterFLED(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLED) {
			listener.exitFLED(this);
		}
	}
}
export class FCLASSDContext extends Rv32d_extContext {
	public I_FCLASSD(): TerminalNode { return this.getToken(RISCVParser.I_FCLASSD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCLASSD) {
			listener.enterFCLASSD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCLASSD) {
			listener.exitFCLASSD(this);
		}
	}
}
export class FCVTWDContext extends Rv32d_extContext {
	public I_FCVTWD(): TerminalNode { return this.getToken(RISCVParser.I_FCVTWD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTWD) {
			listener.enterFCVTWD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTWD) {
			listener.exitFCVTWD(this);
		}
	}
}
export class FCVTWUDContext extends Rv32d_extContext {
	public I_FCVTWUD(): TerminalNode { return this.getToken(RISCVParser.I_FCVTWUD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTWUD) {
			listener.enterFCVTWUD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTWUD) {
			listener.exitFCVTWUD(this);
		}
	}
}
export class FCVTDWContext extends Rv32d_extContext {
	public I_FCVTDW(): TerminalNode { return this.getToken(RISCVParser.I_FCVTDW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTDW) {
			listener.enterFCVTDW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTDW) {
			listener.exitFCVTDW(this);
		}
	}
}
export class FCVTDWUContext extends Rv32d_extContext {
	public I_FCVTDWU(): TerminalNode { return this.getToken(RISCVParser.I_FCVTDWU, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTDWU) {
			listener.enterFCVTDWU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTDWU) {
			listener.exitFCVTDWU(this);
		}
	}
}


export class Rv32i_ext_pseudosContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32i_ext_pseudos; }
	public copyFrom(ctx: Rv32i_ext_pseudosContext): void {
		super.copyFrom(ctx);
	}
}
export class LAPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LA(): TerminalNode { return this.getToken(RISCVParser.I_LA, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLAPSEUDO) {
			listener.enterLAPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLAPSEUDO) {
			listener.exitLAPSEUDO(this);
		}
	}
}
export class LLAPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LLA(): TerminalNode { return this.getToken(RISCVParser.I_LLA, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLLAPSEUDO) {
			listener.enterLLAPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLLAPSEUDO) {
			listener.exitLLAPSEUDO(this);
		}
	}
}
export class LBPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LB(): TerminalNode { return this.getToken(RISCVParser.I_LB, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLBPSEUDO) {
			listener.enterLBPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLBPSEUDO) {
			listener.exitLBPSEUDO(this);
		}
	}
}
export class LHPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LH(): TerminalNode { return this.getToken(RISCVParser.I_LH, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLHPSEUDO) {
			listener.enterLHPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLHPSEUDO) {
			listener.exitLHPSEUDO(this);
		}
	}
}
export class LWPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LW(): TerminalNode { return this.getToken(RISCVParser.I_LW, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLWPSEUDO) {
			listener.enterLWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLWPSEUDO) {
			listener.exitLWPSEUDO(this);
		}
	}
}
export class SBPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SB(): TerminalNode { return this.getToken(RISCVParser.I_SB, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSBPSEUDO) {
			listener.enterSBPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSBPSEUDO) {
			listener.exitSBPSEUDO(this);
		}
	}
}
export class SHPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SH(): TerminalNode { return this.getToken(RISCVParser.I_SH, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSHPSEUDO) {
			listener.enterSHPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSHPSEUDO) {
			listener.exitSHPSEUDO(this);
		}
	}
}
export class SWPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SW(): TerminalNode { return this.getToken(RISCVParser.I_SW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSWPSEUDO) {
			listener.enterSWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSWPSEUDO) {
			listener.exitSWPSEUDO(this);
		}
	}
}
export class NOPPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_NOP(): TerminalNode { return this.getToken(RISCVParser.I_NOP, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterNOPPSEUDO) {
			listener.enterNOPPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitNOPPSEUDO) {
			listener.exitNOPPSEUDO(this);
		}
	}
}
export class LIPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LI(): TerminalNode { return this.getToken(RISCVParser.I_LI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLIPSEUDO) {
			listener.enterLIPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLIPSEUDO) {
			listener.exitLIPSEUDO(this);
		}
	}
}
export class MVPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_MV(): TerminalNode { return this.getToken(RISCVParser.I_MV, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMVPSEUDO) {
			listener.enterMVPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMVPSEUDO) {
			listener.exitMVPSEUDO(this);
		}
	}
}
export class NOTPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_NOT(): TerminalNode { return this.getToken(RISCVParser.I_NOT, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterNOTPSEUDO) {
			listener.enterNOTPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitNOTPSEUDO) {
			listener.exitNOTPSEUDO(this);
		}
	}
}
export class NEGPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_NEG(): TerminalNode { return this.getToken(RISCVParser.I_NEG, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterNEGPSEUDO) {
			listener.enterNEGPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitNEGPSEUDO) {
			listener.exitNEGPSEUDO(this);
		}
	}
}
export class SEQZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SEQZ(): TerminalNode { return this.getToken(RISCVParser.I_SEQZ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSEQZPSEUDO) {
			listener.enterSEQZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSEQZPSEUDO) {
			listener.exitSEQZPSEUDO(this);
		}
	}
}
export class SNEZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SNEZ(): TerminalNode { return this.getToken(RISCVParser.I_SNEZ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSNEZPSEUDO) {
			listener.enterSNEZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSNEZPSEUDO) {
			listener.exitSNEZPSEUDO(this);
		}
	}
}
export class SLTZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SLTZ(): TerminalNode { return this.getToken(RISCVParser.I_SLTZ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLTZPSEUDO) {
			listener.enterSLTZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLTZPSEUDO) {
			listener.exitSLTZPSEUDO(this);
		}
	}
}
export class SGTZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SGTZ(): TerminalNode { return this.getToken(RISCVParser.I_SGTZ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSGTZPSEUDO) {
			listener.enterSGTZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSGTZPSEUDO) {
			listener.exitSGTZPSEUDO(this);
		}
	}
}
export class BEQZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BEQZ(): TerminalNode { return this.getToken(RISCVParser.I_BEQZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBEQZPSEUDO) {
			listener.enterBEQZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBEQZPSEUDO) {
			listener.exitBEQZPSEUDO(this);
		}
	}
}
export class BNEZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BNEZ(): TerminalNode { return this.getToken(RISCVParser.I_BNEZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBNEZPSEUDO) {
			listener.enterBNEZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBNEZPSEUDO) {
			listener.exitBNEZPSEUDO(this);
		}
	}
}
export class BLEZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BLEZ(): TerminalNode { return this.getToken(RISCVParser.I_BLEZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLEZPSEUDO) {
			listener.enterBLEZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLEZPSEUDO) {
			listener.exitBLEZPSEUDO(this);
		}
	}
}
export class BGEZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BGEZ(): TerminalNode { return this.getToken(RISCVParser.I_BGEZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGEZPSEUDO) {
			listener.enterBGEZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGEZPSEUDO) {
			listener.exitBGEZPSEUDO(this);
		}
	}
}
export class BLTZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BLTZ(): TerminalNode { return this.getToken(RISCVParser.I_BLTZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLTZPSEUDO) {
			listener.enterBLTZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLTZPSEUDO) {
			listener.exitBLTZPSEUDO(this);
		}
	}
}
export class BGTZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BGTZ(): TerminalNode { return this.getToken(RISCVParser.I_BGTZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGTZPSEUDO) {
			listener.enterBGTZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGTZPSEUDO) {
			listener.exitBGTZPSEUDO(this);
		}
	}
}
export class BGTPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BGT(): TerminalNode { return this.getToken(RISCVParser.I_BGT, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGTPSEUDO) {
			listener.enterBGTPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGTPSEUDO) {
			listener.exitBGTPSEUDO(this);
		}
	}
}
export class BLEPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BLE(): TerminalNode { return this.getToken(RISCVParser.I_BLE, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLEPSEUDO) {
			listener.enterBLEPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLEPSEUDO) {
			listener.exitBLEPSEUDO(this);
		}
	}
}
export class BGTUPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BGTU(): TerminalNode { return this.getToken(RISCVParser.I_BGTU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGTUPSEUDO) {
			listener.enterBGTUPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGTUPSEUDO) {
			listener.exitBGTUPSEUDO(this);
		}
	}
}
export class BLEUPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BLEU(): TerminalNode { return this.getToken(RISCVParser.I_BLEU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLEUPSEUDO) {
			listener.enterBLEUPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLEUPSEUDO) {
			listener.exitBLEUPSEUDO(this);
		}
	}
}
export class JPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_J(): TerminalNode { return this.getToken(RISCVParser.I_J, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJPSEUDO) {
			listener.enterJPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJPSEUDO) {
			listener.exitJPSEUDO(this);
		}
	}
}
export class JALPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_JAL(): TerminalNode { return this.getToken(RISCVParser.I_JAL, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJALPSEUDO) {
			listener.enterJALPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJALPSEUDO) {
			listener.exitJALPSEUDO(this);
		}
	}
}
export class JRPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_JR(): TerminalNode { return this.getToken(RISCVParser.I_JR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJRPSEUDO) {
			listener.enterJRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJRPSEUDO) {
			listener.exitJRPSEUDO(this);
		}
	}
}
export class JALRPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_JALR(): TerminalNode { return this.getToken(RISCVParser.I_JALR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJALRPSEUDO) {
			listener.enterJALRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJALRPSEUDO) {
			listener.exitJALRPSEUDO(this);
		}
	}
}
export class RETPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_RET(): TerminalNode { return this.getToken(RISCVParser.I_RET, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRETPSEUDO) {
			listener.enterRETPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRETPSEUDO) {
			listener.exitRETPSEUDO(this);
		}
	}
}
export class CALLPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_CALL(): TerminalNode { return this.getToken(RISCVParser.I_CALL, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCALLPSEUDO) {
			listener.enterCALLPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCALLPSEUDO) {
			listener.exitCALLPSEUDO(this);
		}
	}
}
export class TAILPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_TAIL(): TerminalNode { return this.getToken(RISCVParser.I_TAIL, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterTAILPSEUDO) {
			listener.enterTAILPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitTAILPSEUDO) {
			listener.exitTAILPSEUDO(this);
		}
	}
}


export class Rv32zicsr_ext_pseudosContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32zicsr_ext_pseudos; }
	public copyFrom(ctx: Rv32zicsr_ext_pseudosContext): void {
		super.copyFrom(ctx);
	}
}
export class RDINSTRETPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_RDINSTRET(): TerminalNode { return this.getToken(RISCVParser.I_RDINSTRET, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRDINSTRETPSEUDO) {
			listener.enterRDINSTRETPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRDINSTRETPSEUDO) {
			listener.exitRDINSTRETPSEUDO(this);
		}
	}
}
export class RDCYCLEPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_RDCYCLE(): TerminalNode { return this.getToken(RISCVParser.I_RDCYCLE, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRDCYCLEPSEUDO) {
			listener.enterRDCYCLEPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRDCYCLEPSEUDO) {
			listener.exitRDCYCLEPSEUDO(this);
		}
	}
}
export class RDTIMEPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_RDTIME(): TerminalNode { return this.getToken(RISCVParser.I_RDTIME, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRDTIMEPSEUDO) {
			listener.enterRDTIMEPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRDTIMEPSEUDO) {
			listener.exitRDTIMEPSEUDO(this);
		}
	}
}
export class CSRRPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRR(): TerminalNode { return this.getToken(RISCVParser.I_CSRR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRPSEUDO) {
			listener.enterCSRRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRPSEUDO) {
			listener.exitCSRRPSEUDO(this);
		}
	}
}
export class CSRWPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRW(): TerminalNode { return this.getToken(RISCVParser.I_CSRW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRWPSEUDO) {
			listener.enterCSRWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRWPSEUDO) {
			listener.exitCSRWPSEUDO(this);
		}
	}
}
export class CSRSPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRS(): TerminalNode { return this.getToken(RISCVParser.I_CSRS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRSPSEUDO) {
			listener.enterCSRSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRSPSEUDO) {
			listener.exitCSRSPSEUDO(this);
		}
	}
}
export class CSRCPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRC(): TerminalNode { return this.getToken(RISCVParser.I_CSRC, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRCPSEUDO) {
			listener.enterCSRCPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRCPSEUDO) {
			listener.exitCSRCPSEUDO(this);
		}
	}
}
export class CSRWIPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRWI(): TerminalNode { return this.getToken(RISCVParser.I_CSRWI, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public uimm(): UimmContext {
		return this.getRuleContext(0, UimmContext);
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRWIPSEUDO) {
			listener.enterCSRWIPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRWIPSEUDO) {
			listener.exitCSRWIPSEUDO(this);
		}
	}
}
export class CSRSIPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRSI(): TerminalNode { return this.getToken(RISCVParser.I_CSRSI, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public uimm(): UimmContext {
		return this.getRuleContext(0, UimmContext);
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRSIPSEUDO) {
			listener.enterCSRSIPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRSIPSEUDO) {
			listener.exitCSRSIPSEUDO(this);
		}
	}
}
export class CSRCIPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRCI(): TerminalNode { return this.getToken(RISCVParser.I_CSRCI, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public uimm(): UimmContext {
		return this.getRuleContext(0, UimmContext);
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRCIPSEUDO) {
			listener.enterCSRCIPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRCIPSEUDO) {
			listener.exitCSRCIPSEUDO(this);
		}
	}
}
export class FRCSRPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FRCSR(): TerminalNode { return this.getToken(RISCVParser.I_FRCSR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFRCSRPSEUDO) {
			listener.enterFRCSRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFRCSRPSEUDO) {
			listener.exitFRCSRPSEUDO(this);
		}
	}
}
export class FSCSRPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSCSR(): TerminalNode { return this.getToken(RISCVParser.I_FSCSR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSCSRPSEUDO) {
			listener.enterFSCSRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSCSRPSEUDO) {
			listener.exitFSCSRPSEUDO(this);
		}
	}
}
export class FSCSR2PSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSCSR(): TerminalNode { return this.getToken(RISCVParser.I_FSCSR, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSCSR2PSEUDO) {
			listener.enterFSCSR2PSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSCSR2PSEUDO) {
			listener.exitFSCSR2PSEUDO(this);
		}
	}
}
export class FRRMPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FRRM(): TerminalNode { return this.getToken(RISCVParser.I_FRRM, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFRRMPSEUDO) {
			listener.enterFRRMPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFRRMPSEUDO) {
			listener.exitFRRMPSEUDO(this);
		}
	}
}
export class FSRMPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSRM(): TerminalNode { return this.getToken(RISCVParser.I_FSRM, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSRMPSEUDO) {
			listener.enterFSRMPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSRMPSEUDO) {
			listener.exitFSRMPSEUDO(this);
		}
	}
}
export class FSRM2PSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSRM(): TerminalNode { return this.getToken(RISCVParser.I_FSRM, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSRM2PSEUDO) {
			listener.enterFSRM2PSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSRM2PSEUDO) {
			listener.exitFSRM2PSEUDO(this);
		}
	}
}
export class FRFLAGSPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FRFLAGS(): TerminalNode { return this.getToken(RISCVParser.I_FRFLAGS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFRFLAGSPSEUDO) {
			listener.enterFRFLAGSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFRFLAGSPSEUDO) {
			listener.exitFRFLAGSPSEUDO(this);
		}
	}
}
export class FSFLAGSPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSFLAGS(): TerminalNode { return this.getToken(RISCVParser.I_FSFLAGS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSFLAGSPSEUDO) {
			listener.enterFSFLAGSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSFLAGSPSEUDO) {
			listener.exitFSFLAGSPSEUDO(this);
		}
	}
}
export class FSFLAGS2PSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSFLAGS(): TerminalNode { return this.getToken(RISCVParser.I_FSFLAGS, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSFLAGS2PSEUDO) {
			listener.enterFSFLAGS2PSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSFLAGS2PSEUDO) {
			listener.exitFSFLAGS2PSEUDO(this);
		}
	}
}


export class Rv32f_ext_pseudosContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32f_ext_pseudos; }
	public copyFrom(ctx: Rv32f_ext_pseudosContext): void {
		super.copyFrom(ctx);
	}
}
export class FLWPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FLW(): TerminalNode { return this.getToken(RISCVParser.I_FLW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLWPSEUDO) {
			listener.enterFLWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLWPSEUDO) {
			listener.exitFLWPSEUDO(this);
		}
	}
}
export class FSWPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FSW(): TerminalNode { return this.getToken(RISCVParser.I_FSW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSWPSEUDO) {
			listener.enterFSWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSWPSEUDO) {
			listener.exitFSWPSEUDO(this);
		}
	}
}
export class FMVSPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FMVS(): TerminalNode { return this.getToken(RISCVParser.I_FMVS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVSPSEUDO) {
			listener.enterFMVSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVSPSEUDO) {
			listener.exitFMVSPSEUDO(this);
		}
	}
}
export class FABSSPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FABSS(): TerminalNode { return this.getToken(RISCVParser.I_FABSS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFABSSPSEUDO) {
			listener.enterFABSSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFABSSPSEUDO) {
			listener.exitFABSSPSEUDO(this);
		}
	}
}
export class FNEGSPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FNEGS(): TerminalNode { return this.getToken(RISCVParser.I_FNEGS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNEGSPSEUDO) {
			listener.enterFNEGSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNEGSPSEUDO) {
			listener.exitFNEGSPSEUDO(this);
		}
	}
}


export class Rv32d_ext_pseudosContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32d_ext_pseudos; }
	public copyFrom(ctx: Rv32d_ext_pseudosContext): void {
		super.copyFrom(ctx);
	}
}
export class FLDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FLD(): TerminalNode { return this.getToken(RISCVParser.I_FLD, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLDPSEUDO) {
			listener.enterFLDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLDPSEUDO) {
			listener.exitFLDPSEUDO(this);
		}
	}
}
export class FSDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FSD(): TerminalNode { return this.getToken(RISCVParser.I_FSD, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSDPSEUDO) {
			listener.enterFSDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSDPSEUDO) {
			listener.exitFSDPSEUDO(this);
		}
	}
}
export class FMVDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FMVD(): TerminalNode { return this.getToken(RISCVParser.I_FMVD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVDPSEUDO) {
			listener.enterFMVDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVDPSEUDO) {
			listener.exitFMVDPSEUDO(this);
		}
	}
}
export class FABSDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FABSD(): TerminalNode { return this.getToken(RISCVParser.I_FABSD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFABSDPSEUDO) {
			listener.enterFABSDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFABSDPSEUDO) {
			listener.exitFABSDPSEUDO(this);
		}
	}
}
export class FNEGDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FNEGD(): TerminalNode { return this.getToken(RISCVParser.I_FNEGD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNEGDPSEUDO) {
			listener.enterFNEGDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNEGDPSEUDO) {
			listener.exitFNEGDPSEUDO(this);
		}
	}
}


export class Static_dataContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_static_data; }
	public copyFrom(ctx: Static_dataContext): void {
		super.copyFrom(ctx);
	}
}
export class BYTEContext extends Static_dataContext {
	public _d: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBYTE) {
			listener.enterBYTE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBYTE) {
			listener.exitBYTE(this);
		}
	}
}
export class HALFContext extends Static_dataContext {
	public _d: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterHALF) {
			listener.enterHALF(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitHALF) {
			listener.exitHALF(this);
		}
	}
}
export class WORDContext extends Static_dataContext {
	public _d: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterWORD) {
			listener.enterWORD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitWORD) {
			listener.exitWORD(this);
		}
	}
}
export class FLOATContext extends Static_dataContext {
	public _d: Token;
	public fexpr(): FexprContext[];
	public fexpr(i: number): FexprContext;
	public fexpr(i?: number): FexprContext | FexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FexprContext);
		} else {
			return this.getRuleContext(i, FexprContext);
		}
	}
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLOAT) {
			listener.enterFLOAT(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLOAT) {
			listener.exitFLOAT(this);
		}
	}
}
export class ASCIIContext extends Static_dataContext {
	public _d: Token;
	public STRING(): TerminalNode { return this.getToken(RISCVParser.STRING, 0); }
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterASCII) {
			listener.enterASCII(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitASCII) {
			listener.exitASCII(this);
		}
	}
}
export class ASCIIZContext extends Static_dataContext {
	public _d: Token;
	public STRING(): TerminalNode { return this.getToken(RISCVParser.STRING, 0); }
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterASCIIZ) {
			listener.enterASCIIZ(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitASCIIZ) {
			listener.exitASCIIZ(this);
		}
	}
}
export class ZEROContext extends Static_dataContext {
	public _d: Token;
	public _i: Token;
	public INT(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.INT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.HEX, 0); }
	public BIN(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.BIN, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.CHAR, 0); }
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterZERO) {
			listener.enterZERO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitZERO) {
			listener.exitZERO(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_directive; }
	public copyFrom(ctx: DirectiveContext): void {
		super.copyFrom(ctx);
	}
}
export class BSSContext extends DirectiveContext {
	public _d: Token;
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBSS) {
			listener.enterBSS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBSS) {
			listener.exitBSS(this);
		}
	}
}
export class DATAContext extends DirectiveContext {
	public _d: Token;
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterDATA) {
			listener.enterDATA(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitDATA) {
			listener.exitDATA(this);
		}
	}
}
export class RODATAContext extends DirectiveContext {
	public _d: Token;
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRODATA) {
			listener.enterRODATA(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRODATA) {
			listener.exitRODATA(this);
		}
	}
}
export class TEXTContext extends DirectiveContext {
	public _d: Token;
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterTEXT) {
			listener.enterTEXT(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitTEXT) {
			listener.exitTEXT(this);
		}
	}
}
export class GLOBLContext extends DirectiveContext {
	public _d: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.ID);
		} else {
			return this.getToken(RISCVParser.ID, i);
		}
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterGLOBL) {
			listener.enterGLOBL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitGLOBL) {
			listener.exitGLOBL(this);
		}
	}
}
export class ALIGNContext extends DirectiveContext {
	public _d: Token;
	public _i: Token;
	public INT(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.INT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.HEX, 0); }
	public BIN(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.BIN, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterALIGN) {
			listener.enterALIGN(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitALIGN) {
			listener.exitALIGN(this);
		}
	}
}
export class BALIGNContext extends DirectiveContext {
	public _d: Token;
	public _i: Token;
	public INT(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.INT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.HEX, 0); }
	public BIN(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.BIN, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBALIGN) {
			listener.enterBALIGN(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBALIGN) {
			listener.exitBALIGN(this);
		}
	}
}
export class FILEContext extends DirectiveContext {
	public _d: Token;
	public STRING(): TerminalNode { return this.getToken(RISCVParser.STRING, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFILE) {
			listener.enterFILE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFILE) {
			listener.exitFILE(this);
		}
	}
}
export class EQUContext extends DirectiveContext {
	public _d: Token;
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterEQU) {
			listener.enterEQU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitEQU) {
			listener.exitEQU(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class PARENEXPRContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPARENEXPR) {
			listener.enterPARENEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPARENEXPR) {
			listener.exitPARENEXPR(this);
		}
	}
}
export class UNARYEXPRContext extends ExprContext {
	public _op: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterUNARYEXPR) {
			listener.enterUNARYEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitUNARYEXPR) {
			listener.exitUNARYEXPR(this);
		}
	}
}
export class PLUSEXPRContext extends ExprContext {
	public _op: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPLUSEXPR) {
			listener.enterPLUSEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPLUSEXPR) {
			listener.exitPLUSEXPR(this);
		}
	}
}
export class INTEXPRContext extends ExprContext {
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterINTEXPR) {
			listener.enterINTEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitINTEXPR) {
			listener.exitINTEXPR(this);
		}
	}
}
export class HEXEXPRContext extends ExprContext {
	public HEX(): TerminalNode { return this.getToken(RISCVParser.HEX, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterHEXEXPR) {
			listener.enterHEXEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitHEXEXPR) {
			listener.exitHEXEXPR(this);
		}
	}
}
export class BINEXPRContext extends ExprContext {
	public BIN(): TerminalNode { return this.getToken(RISCVParser.BIN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBINEXPR) {
			listener.enterBINEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBINEXPR) {
			listener.exitBINEXPR(this);
		}
	}
}
export class CHAREXPRContext extends ExprContext {
	public CHAR(): TerminalNode { return this.getToken(RISCVParser.CHAR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCHAREXPR) {
			listener.enterCHAREXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCHAREXPR) {
			listener.exitCHAREXPR(this);
		}
	}
}
export class IDEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterIDEXPR) {
			listener.enterIDEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitIDEXPR) {
			listener.exitIDEXPR(this);
		}
	}
}
export class HIRELEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterHIRELEXPR) {
			listener.enterHIRELEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitHIRELEXPR) {
			listener.exitHIRELEXPR(this);
		}
	}
}
export class LORELEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLORELEXPR) {
			listener.enterLORELEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLORELEXPR) {
			listener.exitLORELEXPR(this);
		}
	}
}
export class PCRELHIRELEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPCRELHIRELEXPR) {
			listener.enterPCRELHIRELEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPCRELHIRELEXPR) {
			listener.exitPCRELHIRELEXPR(this);
		}
	}
}
export class PCRELLORELEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPCRELLORELEXPR) {
			listener.enterPCRELLORELEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPCRELLORELEXPR) {
			listener.exitPCRELLORELEXPR(this);
		}
	}
}


export class FexprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_fexpr; }
	public copyFrom(ctx: FexprContext): void {
		super.copyFrom(ctx);
	}
}
export class PARENFEXPRContext extends FexprContext {
	public fexpr(): FexprContext {
		return this.getRuleContext(0, FexprContext);
	}
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPARENFEXPR) {
			listener.enterPARENFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPARENFEXPR) {
			listener.exitPARENFEXPR(this);
		}
	}
}
export class UNARYFEXPRContext extends FexprContext {
	public _op: Token;
	public fexpr(): FexprContext {
		return this.getRuleContext(0, FexprContext);
	}
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterUNARYFEXPR) {
			listener.enterUNARYFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitUNARYFEXPR) {
			listener.exitUNARYFEXPR(this);
		}
	}
}
export class INTFEXPRContext extends FexprContext {
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterINTFEXPR) {
			listener.enterINTFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitINTFEXPR) {
			listener.exitINTFEXPR(this);
		}
	}
}
export class HEXFEXPRContext extends FexprContext {
	public HEX(): TerminalNode { return this.getToken(RISCVParser.HEX, 0); }
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterHEXFEXPR) {
			listener.enterHEXFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitHEXFEXPR) {
			listener.exitHEXFEXPR(this);
		}
	}
}
export class BINFEXPRContext extends FexprContext {
	public BIN(): TerminalNode { return this.getToken(RISCVParser.BIN, 0); }
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBINFEXPR) {
			listener.enterBINFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBINFEXPR) {
			listener.exitBINFEXPR(this);
		}
	}
}
export class FLOATFEXPRContext extends FexprContext {
	public FLOAT(): TerminalNode { return this.getToken(RISCVParser.FLOAT, 0); }
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLOATFEXPR) {
			listener.enterFLOATFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLOATFEXPR) {
			listener.exitFLOATFEXPR(this);
		}
	}
}


export class UimmContext extends ParserRuleContext {
	public _i: Token;
	public INT(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.INT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.HEX, 0); }
	public BIN(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.BIN, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_uimm; }
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterUimm) {
			listener.enterUimm(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitUimm) {
			listener.exitUimm(this);
		}
	}
}


