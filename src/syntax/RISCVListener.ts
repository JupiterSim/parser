// Generated from src/syntax/RISCV.g4 by ANTLR 4.7.3-SNAPSHOT
// @ts-nocheck

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { LUIContext } from './RISCVParser';
import { AUIPCContext } from './RISCVParser';
import { JALContext } from './RISCVParser';
import { JALRContext } from './RISCVParser';
import { BEQContext } from './RISCVParser';
import { BNEContext } from './RISCVParser';
import { BLTContext } from './RISCVParser';
import { BGEContext } from './RISCVParser';
import { BLTUContext } from './RISCVParser';
import { BGEUContext } from './RISCVParser';
import { LBContext } from './RISCVParser';
import { LHContext } from './RISCVParser';
import { LWContext } from './RISCVParser';
import { LBUContext } from './RISCVParser';
import { LHUContext } from './RISCVParser';
import { SBContext } from './RISCVParser';
import { SHContext } from './RISCVParser';
import { SWContext } from './RISCVParser';
import { ADDIContext } from './RISCVParser';
import { SLTIContext } from './RISCVParser';
import { SLTIUContext } from './RISCVParser';
import { XORIContext } from './RISCVParser';
import { ORIContext } from './RISCVParser';
import { ANDIContext } from './RISCVParser';
import { SLLIContext } from './RISCVParser';
import { SRLIContext } from './RISCVParser';
import { SRAIContext } from './RISCVParser';
import { ADDContext } from './RISCVParser';
import { SUBContext } from './RISCVParser';
import { SLLContext } from './RISCVParser';
import { SLTContext } from './RISCVParser';
import { SLTUContext } from './RISCVParser';
import { XORContext } from './RISCVParser';
import { SRLContext } from './RISCVParser';
import { SRAContext } from './RISCVParser';
import { ORContext } from './RISCVParser';
import { ANDContext } from './RISCVParser';
import { FENCEContext } from './RISCVParser';
import { ECALLContext } from './RISCVParser';
import { EBREAKContext } from './RISCVParser';
import { FLDContext } from './RISCVParser';
import { FSDContext } from './RISCVParser';
import { FMADDDContext } from './RISCVParser';
import { FMSUBDContext } from './RISCVParser';
import { FNMSUBDContext } from './RISCVParser';
import { FNMADDDContext } from './RISCVParser';
import { FADDDContext } from './RISCVParser';
import { FSUBDContext } from './RISCVParser';
import { FMULDContext } from './RISCVParser';
import { FDIVDContext } from './RISCVParser';
import { FSQRTDContext } from './RISCVParser';
import { FSGNJDContext } from './RISCVParser';
import { FSGNJNDContext } from './RISCVParser';
import { FSGNJXDContext } from './RISCVParser';
import { FMINDContext } from './RISCVParser';
import { FMAXDContext } from './RISCVParser';
import { FCVTSDContext } from './RISCVParser';
import { FCVTDSContext } from './RISCVParser';
import { FEQDContext } from './RISCVParser';
import { FLTDContext } from './RISCVParser';
import { FLEDContext } from './RISCVParser';
import { FCLASSDContext } from './RISCVParser';
import { FCVTWDContext } from './RISCVParser';
import { FCVTWUDContext } from './RISCVParser';
import { FCVTDWContext } from './RISCVParser';
import { FCVTDWUContext } from './RISCVParser';
import { FENCEIContext } from './RISCVParser';
import { FLDPSEUDOContext } from './RISCVParser';
import { FSDPSEUDOContext } from './RISCVParser';
import { FMVDPSEUDOContext } from './RISCVParser';
import { FABSDPSEUDOContext } from './RISCVParser';
import { FNEGDPSEUDOContext } from './RISCVParser';
import { CSRRWContext } from './RISCVParser';
import { CSRRSContext } from './RISCVParser';
import { CSRRCContext } from './RISCVParser';
import { CSRRWIContext } from './RISCVParser';
import { CSRRSIContext } from './RISCVParser';
import { CSRRCIContext } from './RISCVParser';
import { MULContext } from './RISCVParser';
import { MULHContext } from './RISCVParser';
import { MULHSUContext } from './RISCVParser';
import { MULHUContext } from './RISCVParser';
import { DIVContext } from './RISCVParser';
import { DIVUContext } from './RISCVParser';
import { REMContext } from './RISCVParser';
import { REMUContext } from './RISCVParser';
import { RDINSTRETPSEUDOContext } from './RISCVParser';
import { RDCYCLEPSEUDOContext } from './RISCVParser';
import { RDTIMEPSEUDOContext } from './RISCVParser';
import { CSRRPSEUDOContext } from './RISCVParser';
import { CSRWPSEUDOContext } from './RISCVParser';
import { CSRSPSEUDOContext } from './RISCVParser';
import { CSRCPSEUDOContext } from './RISCVParser';
import { CSRWIPSEUDOContext } from './RISCVParser';
import { CSRSIPSEUDOContext } from './RISCVParser';
import { CSRCIPSEUDOContext } from './RISCVParser';
import { FRCSRPSEUDOContext } from './RISCVParser';
import { FSCSRPSEUDOContext } from './RISCVParser';
import { FSCSR2PSEUDOContext } from './RISCVParser';
import { FRRMPSEUDOContext } from './RISCVParser';
import { FSRMPSEUDOContext } from './RISCVParser';
import { FSRM2PSEUDOContext } from './RISCVParser';
import { FRFLAGSPSEUDOContext } from './RISCVParser';
import { FSFLAGSPSEUDOContext } from './RISCVParser';
import { FSFLAGS2PSEUDOContext } from './RISCVParser';
import { BSSContext } from './RISCVParser';
import { DATAContext } from './RISCVParser';
import { RODATAContext } from './RISCVParser';
import { TEXTContext } from './RISCVParser';
import { GLOBLContext } from './RISCVParser';
import { ALIGNContext } from './RISCVParser';
import { BALIGNContext } from './RISCVParser';
import { FILEContext } from './RISCVParser';
import { EQUContext } from './RISCVParser';
import { LABELContext } from './RISCVParser';
import { RV32IContext } from './RISCVParser';
import { RV32ZifenceiContext } from './RISCVParser';
import { RV32ZicsrContext } from './RISCVParser';
import { RV32MContext } from './RISCVParser';
import { RV32AContext } from './RISCVParser';
import { RV32FContext } from './RISCVParser';
import { RV32DContext } from './RISCVParser';
import { RV32IPSEUDOSContext } from './RISCVParser';
import { RV32ZicsrPSEUDOSContext } from './RISCVParser';
import { RV32FPSEUDOSContext } from './RISCVParser';
import { RV32DPSEUDOSContext } from './RISCVParser';
import { PARENFEXPRContext } from './RISCVParser';
import { UNARYFEXPRContext } from './RISCVParser';
import { INTFEXPRContext } from './RISCVParser';
import { HEXFEXPRContext } from './RISCVParser';
import { BINFEXPRContext } from './RISCVParser';
import { FLOATFEXPRContext } from './RISCVParser';
import { LRWContext } from './RISCVParser';
import { SCWContext } from './RISCVParser';
import { AMOSWAPWContext } from './RISCVParser';
import { AMOADDWContext } from './RISCVParser';
import { AMOXORWContext } from './RISCVParser';
import { AMOANDWContext } from './RISCVParser';
import { AMOORWContext } from './RISCVParser';
import { AMOMINWContext } from './RISCVParser';
import { AMOMAXWContext } from './RISCVParser';
import { AMOMINUWContext } from './RISCVParser';
import { AMOMAXUWContext } from './RISCVParser';
import { LAPSEUDOContext } from './RISCVParser';
import { LLAPSEUDOContext } from './RISCVParser';
import { LBPSEUDOContext } from './RISCVParser';
import { LHPSEUDOContext } from './RISCVParser';
import { LWPSEUDOContext } from './RISCVParser';
import { SBPSEUDOContext } from './RISCVParser';
import { SHPSEUDOContext } from './RISCVParser';
import { SWPSEUDOContext } from './RISCVParser';
import { NOPPSEUDOContext } from './RISCVParser';
import { LIPSEUDOContext } from './RISCVParser';
import { MVPSEUDOContext } from './RISCVParser';
import { NOTPSEUDOContext } from './RISCVParser';
import { NEGPSEUDOContext } from './RISCVParser';
import { SEQZPSEUDOContext } from './RISCVParser';
import { SNEZPSEUDOContext } from './RISCVParser';
import { SLTZPSEUDOContext } from './RISCVParser';
import { SGTZPSEUDOContext } from './RISCVParser';
import { BEQZPSEUDOContext } from './RISCVParser';
import { BNEZPSEUDOContext } from './RISCVParser';
import { BLEZPSEUDOContext } from './RISCVParser';
import { BGEZPSEUDOContext } from './RISCVParser';
import { BLTZPSEUDOContext } from './RISCVParser';
import { BGTZPSEUDOContext } from './RISCVParser';
import { BGTPSEUDOContext } from './RISCVParser';
import { BLEPSEUDOContext } from './RISCVParser';
import { BGTUPSEUDOContext } from './RISCVParser';
import { BLEUPSEUDOContext } from './RISCVParser';
import { JPSEUDOContext } from './RISCVParser';
import { JALPSEUDOContext } from './RISCVParser';
import { JRPSEUDOContext } from './RISCVParser';
import { JALRPSEUDOContext } from './RISCVParser';
import { RETPSEUDOContext } from './RISCVParser';
import { CALLPSEUDOContext } from './RISCVParser';
import { TAILPSEUDOContext } from './RISCVParser';
import { BYTEContext } from './RISCVParser';
import { HALFContext } from './RISCVParser';
import { WORDContext } from './RISCVParser';
import { FLOATContext } from './RISCVParser';
import { ASCIIContext } from './RISCVParser';
import { ASCIIZContext } from './RISCVParser';
import { ZEROContext } from './RISCVParser';
import { PARENEXPRContext } from './RISCVParser';
import { UNARYEXPRContext } from './RISCVParser';
import { PLUSEXPRContext } from './RISCVParser';
import { INTEXPRContext } from './RISCVParser';
import { HEXEXPRContext } from './RISCVParser';
import { BINEXPRContext } from './RISCVParser';
import { CHAREXPRContext } from './RISCVParser';
import { IDEXPRContext } from './RISCVParser';
import { HIRELEXPRContext } from './RISCVParser';
import { LORELEXPRContext } from './RISCVParser';
import { PCRELHIRELEXPRContext } from './RISCVParser';
import { PCRELLORELEXPRContext } from './RISCVParser';
import { FLWContext } from './RISCVParser';
import { FSWContext } from './RISCVParser';
import { FMADDSContext } from './RISCVParser';
import { FMSUBSContext } from './RISCVParser';
import { FNMSUBSContext } from './RISCVParser';
import { FNMADDSContext } from './RISCVParser';
import { FADDSContext } from './RISCVParser';
import { FSUBSContext } from './RISCVParser';
import { FMULSContext } from './RISCVParser';
import { FDIVSContext } from './RISCVParser';
import { FSQRTSContext } from './RISCVParser';
import { FSGNJSContext } from './RISCVParser';
import { FSGNJNSContext } from './RISCVParser';
import { FSGNJXSContext } from './RISCVParser';
import { FMINSContext } from './RISCVParser';
import { FMAXSContext } from './RISCVParser';
import { FCVTWSContext } from './RISCVParser';
import { FCVTWUSContext } from './RISCVParser';
import { FMVXWContext } from './RISCVParser';
import { FMVXSContext } from './RISCVParser';
import { FEQSContext } from './RISCVParser';
import { FLTSContext } from './RISCVParser';
import { FLESContext } from './RISCVParser';
import { FCLASSSContext } from './RISCVParser';
import { FCVTSWContext } from './RISCVParser';
import { FCVTSWUContext } from './RISCVParser';
import { FMVWXContext } from './RISCVParser';
import { FMVSXContext } from './RISCVParser';
import { FLWPSEUDOContext } from './RISCVParser';
import { FSWPSEUDOContext } from './RISCVParser';
import { FMVSPSEUDOContext } from './RISCVParser';
import { FABSSPSEUDOContext } from './RISCVParser';
import { FNEGSPSEUDOContext } from './RISCVParser';
import { ProgContext } from './RISCVParser';
import { LineContext } from './RISCVParser';
import { StmtContext } from './RISCVParser';
import { Label_defContext } from './RISCVParser';
import { InstructionContext } from './RISCVParser';
import { Rv32i_extContext } from './RISCVParser';
import { Rv32zifencei_extContext } from './RISCVParser';
import { Rv32zicsr_extContext } from './RISCVParser';
import { Rv32m_extContext } from './RISCVParser';
import { Rv32a_extContext } from './RISCVParser';
import { Rv32f_extContext } from './RISCVParser';
import { Rv32d_extContext } from './RISCVParser';
import { Rv32i_ext_pseudosContext } from './RISCVParser';
import { Rv32zicsr_ext_pseudosContext } from './RISCVParser';
import { Rv32f_ext_pseudosContext } from './RISCVParser';
import { Rv32d_ext_pseudosContext } from './RISCVParser';
import { Static_dataContext } from './RISCVParser';
import { DirectiveContext } from './RISCVParser';
import { ExprContext } from './RISCVParser';
import { FexprContext } from './RISCVParser';
import { UimmContext } from './RISCVParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `RISCVParser`.
 */
export interface RISCVListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `LUI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterLUI?: (ctx: LUIContext) => void;
  /**
   * Exit a parse tree produced by the `LUI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitLUI?: (ctx: LUIContext) => void;

  /**
   * Enter a parse tree produced by the `AUIPC`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterAUIPC?: (ctx: AUIPCContext) => void;
  /**
   * Exit a parse tree produced by the `AUIPC`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitAUIPC?: (ctx: AUIPCContext) => void;

  /**
   * Enter a parse tree produced by the `JAL`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterJAL?: (ctx: JALContext) => void;
  /**
   * Exit a parse tree produced by the `JAL`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitJAL?: (ctx: JALContext) => void;

  /**
   * Enter a parse tree produced by the `JALR`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterJALR?: (ctx: JALRContext) => void;
  /**
   * Exit a parse tree produced by the `JALR`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitJALR?: (ctx: JALRContext) => void;

  /**
   * Enter a parse tree produced by the `BEQ`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterBEQ?: (ctx: BEQContext) => void;
  /**
   * Exit a parse tree produced by the `BEQ`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitBEQ?: (ctx: BEQContext) => void;

  /**
   * Enter a parse tree produced by the `BNE`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterBNE?: (ctx: BNEContext) => void;
  /**
   * Exit a parse tree produced by the `BNE`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitBNE?: (ctx: BNEContext) => void;

  /**
   * Enter a parse tree produced by the `BLT`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterBLT?: (ctx: BLTContext) => void;
  /**
   * Exit a parse tree produced by the `BLT`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitBLT?: (ctx: BLTContext) => void;

  /**
   * Enter a parse tree produced by the `BGE`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterBGE?: (ctx: BGEContext) => void;
  /**
   * Exit a parse tree produced by the `BGE`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitBGE?: (ctx: BGEContext) => void;

  /**
   * Enter a parse tree produced by the `BLTU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterBLTU?: (ctx: BLTUContext) => void;
  /**
   * Exit a parse tree produced by the `BLTU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitBLTU?: (ctx: BLTUContext) => void;

  /**
   * Enter a parse tree produced by the `BGEU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterBGEU?: (ctx: BGEUContext) => void;
  /**
   * Exit a parse tree produced by the `BGEU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitBGEU?: (ctx: BGEUContext) => void;

  /**
   * Enter a parse tree produced by the `LB`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterLB?: (ctx: LBContext) => void;
  /**
   * Exit a parse tree produced by the `LB`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitLB?: (ctx: LBContext) => void;

  /**
   * Enter a parse tree produced by the `LH`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterLH?: (ctx: LHContext) => void;
  /**
   * Exit a parse tree produced by the `LH`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitLH?: (ctx: LHContext) => void;

  /**
   * Enter a parse tree produced by the `LW`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterLW?: (ctx: LWContext) => void;
  /**
   * Exit a parse tree produced by the `LW`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitLW?: (ctx: LWContext) => void;

  /**
   * Enter a parse tree produced by the `LBU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterLBU?: (ctx: LBUContext) => void;
  /**
   * Exit a parse tree produced by the `LBU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitLBU?: (ctx: LBUContext) => void;

  /**
   * Enter a parse tree produced by the `LHU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterLHU?: (ctx: LHUContext) => void;
  /**
   * Exit a parse tree produced by the `LHU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitLHU?: (ctx: LHUContext) => void;

  /**
   * Enter a parse tree produced by the `SB`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSB?: (ctx: SBContext) => void;
  /**
   * Exit a parse tree produced by the `SB`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSB?: (ctx: SBContext) => void;

  /**
   * Enter a parse tree produced by the `SH`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSH?: (ctx: SHContext) => void;
  /**
   * Exit a parse tree produced by the `SH`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSH?: (ctx: SHContext) => void;

  /**
   * Enter a parse tree produced by the `SW`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSW?: (ctx: SWContext) => void;
  /**
   * Exit a parse tree produced by the `SW`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSW?: (ctx: SWContext) => void;

  /**
   * Enter a parse tree produced by the `ADDI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterADDI?: (ctx: ADDIContext) => void;
  /**
   * Exit a parse tree produced by the `ADDI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitADDI?: (ctx: ADDIContext) => void;

  /**
   * Enter a parse tree produced by the `SLTI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSLTI?: (ctx: SLTIContext) => void;
  /**
   * Exit a parse tree produced by the `SLTI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSLTI?: (ctx: SLTIContext) => void;

  /**
   * Enter a parse tree produced by the `SLTIU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSLTIU?: (ctx: SLTIUContext) => void;
  /**
   * Exit a parse tree produced by the `SLTIU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSLTIU?: (ctx: SLTIUContext) => void;

  /**
   * Enter a parse tree produced by the `XORI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterXORI?: (ctx: XORIContext) => void;
  /**
   * Exit a parse tree produced by the `XORI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitXORI?: (ctx: XORIContext) => void;

  /**
   * Enter a parse tree produced by the `ORI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterORI?: (ctx: ORIContext) => void;
  /**
   * Exit a parse tree produced by the `ORI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitORI?: (ctx: ORIContext) => void;

  /**
   * Enter a parse tree produced by the `ANDI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterANDI?: (ctx: ANDIContext) => void;
  /**
   * Exit a parse tree produced by the `ANDI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitANDI?: (ctx: ANDIContext) => void;

  /**
   * Enter a parse tree produced by the `SLLI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSLLI?: (ctx: SLLIContext) => void;
  /**
   * Exit a parse tree produced by the `SLLI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSLLI?: (ctx: SLLIContext) => void;

  /**
   * Enter a parse tree produced by the `SRLI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSRLI?: (ctx: SRLIContext) => void;
  /**
   * Exit a parse tree produced by the `SRLI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSRLI?: (ctx: SRLIContext) => void;

  /**
   * Enter a parse tree produced by the `SRAI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSRAI?: (ctx: SRAIContext) => void;
  /**
   * Exit a parse tree produced by the `SRAI`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSRAI?: (ctx: SRAIContext) => void;

  /**
   * Enter a parse tree produced by the `ADD`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterADD?: (ctx: ADDContext) => void;
  /**
   * Exit a parse tree produced by the `ADD`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitADD?: (ctx: ADDContext) => void;

  /**
   * Enter a parse tree produced by the `SUB`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSUB?: (ctx: SUBContext) => void;
  /**
   * Exit a parse tree produced by the `SUB`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSUB?: (ctx: SUBContext) => void;

  /**
   * Enter a parse tree produced by the `SLL`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSLL?: (ctx: SLLContext) => void;
  /**
   * Exit a parse tree produced by the `SLL`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSLL?: (ctx: SLLContext) => void;

  /**
   * Enter a parse tree produced by the `SLT`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSLT?: (ctx: SLTContext) => void;
  /**
   * Exit a parse tree produced by the `SLT`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSLT?: (ctx: SLTContext) => void;

  /**
   * Enter a parse tree produced by the `SLTU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSLTU?: (ctx: SLTUContext) => void;
  /**
   * Exit a parse tree produced by the `SLTU`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSLTU?: (ctx: SLTUContext) => void;

  /**
   * Enter a parse tree produced by the `XOR`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterXOR?: (ctx: XORContext) => void;
  /**
   * Exit a parse tree produced by the `XOR`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitXOR?: (ctx: XORContext) => void;

  /**
   * Enter a parse tree produced by the `SRL`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSRL?: (ctx: SRLContext) => void;
  /**
   * Exit a parse tree produced by the `SRL`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSRL?: (ctx: SRLContext) => void;

  /**
   * Enter a parse tree produced by the `SRA`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterSRA?: (ctx: SRAContext) => void;
  /**
   * Exit a parse tree produced by the `SRA`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitSRA?: (ctx: SRAContext) => void;

  /**
   * Enter a parse tree produced by the `OR`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterOR?: (ctx: ORContext) => void;
  /**
   * Exit a parse tree produced by the `OR`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitOR?: (ctx: ORContext) => void;

  /**
   * Enter a parse tree produced by the `AND`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterAND?: (ctx: ANDContext) => void;
  /**
   * Exit a parse tree produced by the `AND`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitAND?: (ctx: ANDContext) => void;

  /**
   * Enter a parse tree produced by the `FENCE`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterFENCE?: (ctx: FENCEContext) => void;
  /**
   * Exit a parse tree produced by the `FENCE`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitFENCE?: (ctx: FENCEContext) => void;

  /**
   * Enter a parse tree produced by the `ECALL`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterECALL?: (ctx: ECALLContext) => void;
  /**
   * Exit a parse tree produced by the `ECALL`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitECALL?: (ctx: ECALLContext) => void;

  /**
   * Enter a parse tree produced by the `EBREAK`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterEBREAK?: (ctx: EBREAKContext) => void;
  /**
   * Exit a parse tree produced by the `EBREAK`
   * labeled alternative in `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitEBREAK?: (ctx: EBREAKContext) => void;

  /**
   * Enter a parse tree produced by the `FLD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFLD?: (ctx: FLDContext) => void;
  /**
   * Exit a parse tree produced by the `FLD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFLD?: (ctx: FLDContext) => void;

  /**
   * Enter a parse tree produced by the `FSD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFSD?: (ctx: FSDContext) => void;
  /**
   * Exit a parse tree produced by the `FSD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFSD?: (ctx: FSDContext) => void;

  /**
   * Enter a parse tree produced by the `FMADDD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFMADDD?: (ctx: FMADDDContext) => void;
  /**
   * Exit a parse tree produced by the `FMADDD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFMADDD?: (ctx: FMADDDContext) => void;

  /**
   * Enter a parse tree produced by the `FMSUBD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFMSUBD?: (ctx: FMSUBDContext) => void;
  /**
   * Exit a parse tree produced by the `FMSUBD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFMSUBD?: (ctx: FMSUBDContext) => void;

  /**
   * Enter a parse tree produced by the `FNMSUBD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFNMSUBD?: (ctx: FNMSUBDContext) => void;
  /**
   * Exit a parse tree produced by the `FNMSUBD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFNMSUBD?: (ctx: FNMSUBDContext) => void;

  /**
   * Enter a parse tree produced by the `FNMADDD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFNMADDD?: (ctx: FNMADDDContext) => void;
  /**
   * Exit a parse tree produced by the `FNMADDD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFNMADDD?: (ctx: FNMADDDContext) => void;

  /**
   * Enter a parse tree produced by the `FADDD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFADDD?: (ctx: FADDDContext) => void;
  /**
   * Exit a parse tree produced by the `FADDD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFADDD?: (ctx: FADDDContext) => void;

  /**
   * Enter a parse tree produced by the `FSUBD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFSUBD?: (ctx: FSUBDContext) => void;
  /**
   * Exit a parse tree produced by the `FSUBD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFSUBD?: (ctx: FSUBDContext) => void;

  /**
   * Enter a parse tree produced by the `FMULD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFMULD?: (ctx: FMULDContext) => void;
  /**
   * Exit a parse tree produced by the `FMULD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFMULD?: (ctx: FMULDContext) => void;

  /**
   * Enter a parse tree produced by the `FDIVD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFDIVD?: (ctx: FDIVDContext) => void;
  /**
   * Exit a parse tree produced by the `FDIVD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFDIVD?: (ctx: FDIVDContext) => void;

  /**
   * Enter a parse tree produced by the `FSQRTD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFSQRTD?: (ctx: FSQRTDContext) => void;
  /**
   * Exit a parse tree produced by the `FSQRTD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFSQRTD?: (ctx: FSQRTDContext) => void;

  /**
   * Enter a parse tree produced by the `FSGNJD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFSGNJD?: (ctx: FSGNJDContext) => void;
  /**
   * Exit a parse tree produced by the `FSGNJD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFSGNJD?: (ctx: FSGNJDContext) => void;

  /**
   * Enter a parse tree produced by the `FSGNJND`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFSGNJND?: (ctx: FSGNJNDContext) => void;
  /**
   * Exit a parse tree produced by the `FSGNJND`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFSGNJND?: (ctx: FSGNJNDContext) => void;

  /**
   * Enter a parse tree produced by the `FSGNJXD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFSGNJXD?: (ctx: FSGNJXDContext) => void;
  /**
   * Exit a parse tree produced by the `FSGNJXD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFSGNJXD?: (ctx: FSGNJXDContext) => void;

  /**
   * Enter a parse tree produced by the `FMIND`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFMIND?: (ctx: FMINDContext) => void;
  /**
   * Exit a parse tree produced by the `FMIND`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFMIND?: (ctx: FMINDContext) => void;

  /**
   * Enter a parse tree produced by the `FMAXD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFMAXD?: (ctx: FMAXDContext) => void;
  /**
   * Exit a parse tree produced by the `FMAXD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFMAXD?: (ctx: FMAXDContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTSD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFCVTSD?: (ctx: FCVTSDContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTSD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFCVTSD?: (ctx: FCVTSDContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTDS`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFCVTDS?: (ctx: FCVTDSContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTDS`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFCVTDS?: (ctx: FCVTDSContext) => void;

  /**
   * Enter a parse tree produced by the `FEQD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFEQD?: (ctx: FEQDContext) => void;
  /**
   * Exit a parse tree produced by the `FEQD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFEQD?: (ctx: FEQDContext) => void;

  /**
   * Enter a parse tree produced by the `FLTD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFLTD?: (ctx: FLTDContext) => void;
  /**
   * Exit a parse tree produced by the `FLTD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFLTD?: (ctx: FLTDContext) => void;

  /**
   * Enter a parse tree produced by the `FLED`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFLED?: (ctx: FLEDContext) => void;
  /**
   * Exit a parse tree produced by the `FLED`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFLED?: (ctx: FLEDContext) => void;

  /**
   * Enter a parse tree produced by the `FCLASSD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFCLASSD?: (ctx: FCLASSDContext) => void;
  /**
   * Exit a parse tree produced by the `FCLASSD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFCLASSD?: (ctx: FCLASSDContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTWD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFCVTWD?: (ctx: FCVTWDContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTWD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFCVTWD?: (ctx: FCVTWDContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTWUD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFCVTWUD?: (ctx: FCVTWUDContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTWUD`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFCVTWUD?: (ctx: FCVTWUDContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTDW`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFCVTDW?: (ctx: FCVTDWContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTDW`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFCVTDW?: (ctx: FCVTDWContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTDWU`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterFCVTDWU?: (ctx: FCVTDWUContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTDWU`
   * labeled alternative in `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitFCVTDWU?: (ctx: FCVTDWUContext) => void;

  /**
   * Enter a parse tree produced by the `FENCEI`
   * labeled alternative in `RISCVParser.rv32zifencei_ext`.
   * @param ctx the parse tree
   */
  enterFENCEI?: (ctx: FENCEIContext) => void;
  /**
   * Exit a parse tree produced by the `FENCEI`
   * labeled alternative in `RISCVParser.rv32zifencei_ext`.
   * @param ctx the parse tree
   */
  exitFENCEI?: (ctx: FENCEIContext) => void;

  /**
   * Enter a parse tree produced by the `FLDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFLDPSEUDO?: (ctx: FLDPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FLDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFLDPSEUDO?: (ctx: FLDPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FSDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFSDPSEUDO?: (ctx: FSDPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FSDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFSDPSEUDO?: (ctx: FSDPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FMVDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFMVDPSEUDO?: (ctx: FMVDPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FMVDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFMVDPSEUDO?: (ctx: FMVDPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FABSDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFABSDPSEUDO?: (ctx: FABSDPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FABSDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFABSDPSEUDO?: (ctx: FABSDPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FNEGDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFNEGDPSEUDO?: (ctx: FNEGDPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FNEGDPSEUDO`
   * labeled alternative in `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFNEGDPSEUDO?: (ctx: FNEGDPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `CSRRW`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  enterCSRRW?: (ctx: CSRRWContext) => void;
  /**
   * Exit a parse tree produced by the `CSRRW`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  exitCSRRW?: (ctx: CSRRWContext) => void;

  /**
   * Enter a parse tree produced by the `CSRRS`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  enterCSRRS?: (ctx: CSRRSContext) => void;
  /**
   * Exit a parse tree produced by the `CSRRS`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  exitCSRRS?: (ctx: CSRRSContext) => void;

  /**
   * Enter a parse tree produced by the `CSRRC`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  enterCSRRC?: (ctx: CSRRCContext) => void;
  /**
   * Exit a parse tree produced by the `CSRRC`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  exitCSRRC?: (ctx: CSRRCContext) => void;

  /**
   * Enter a parse tree produced by the `CSRRWI`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  enterCSRRWI?: (ctx: CSRRWIContext) => void;
  /**
   * Exit a parse tree produced by the `CSRRWI`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  exitCSRRWI?: (ctx: CSRRWIContext) => void;

  /**
   * Enter a parse tree produced by the `CSRRSI`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  enterCSRRSI?: (ctx: CSRRSIContext) => void;
  /**
   * Exit a parse tree produced by the `CSRRSI`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  exitCSRRSI?: (ctx: CSRRSIContext) => void;

  /**
   * Enter a parse tree produced by the `CSRRCI`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  enterCSRRCI?: (ctx: CSRRCIContext) => void;
  /**
   * Exit a parse tree produced by the `CSRRCI`
   * labeled alternative in `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  exitCSRRCI?: (ctx: CSRRCIContext) => void;

  /**
   * Enter a parse tree produced by the `MUL`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  enterMUL?: (ctx: MULContext) => void;
  /**
   * Exit a parse tree produced by the `MUL`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  exitMUL?: (ctx: MULContext) => void;

  /**
   * Enter a parse tree produced by the `MULH`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  enterMULH?: (ctx: MULHContext) => void;
  /**
   * Exit a parse tree produced by the `MULH`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  exitMULH?: (ctx: MULHContext) => void;

  /**
   * Enter a parse tree produced by the `MULHSU`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  enterMULHSU?: (ctx: MULHSUContext) => void;
  /**
   * Exit a parse tree produced by the `MULHSU`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  exitMULHSU?: (ctx: MULHSUContext) => void;

  /**
   * Enter a parse tree produced by the `MULHU`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  enterMULHU?: (ctx: MULHUContext) => void;
  /**
   * Exit a parse tree produced by the `MULHU`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  exitMULHU?: (ctx: MULHUContext) => void;

  /**
   * Enter a parse tree produced by the `DIV`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  enterDIV?: (ctx: DIVContext) => void;
  /**
   * Exit a parse tree produced by the `DIV`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  exitDIV?: (ctx: DIVContext) => void;

  /**
   * Enter a parse tree produced by the `DIVU`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  enterDIVU?: (ctx: DIVUContext) => void;
  /**
   * Exit a parse tree produced by the `DIVU`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  exitDIVU?: (ctx: DIVUContext) => void;

  /**
   * Enter a parse tree produced by the `REM`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  enterREM?: (ctx: REMContext) => void;
  /**
   * Exit a parse tree produced by the `REM`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  exitREM?: (ctx: REMContext) => void;

  /**
   * Enter a parse tree produced by the `REMU`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  enterREMU?: (ctx: REMUContext) => void;
  /**
   * Exit a parse tree produced by the `REMU`
   * labeled alternative in `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  exitREMU?: (ctx: REMUContext) => void;

  /**
   * Enter a parse tree produced by the `RDINSTRETPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterRDINSTRETPSEUDO?: (ctx: RDINSTRETPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `RDINSTRETPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitRDINSTRETPSEUDO?: (ctx: RDINSTRETPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `RDCYCLEPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterRDCYCLEPSEUDO?: (ctx: RDCYCLEPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `RDCYCLEPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitRDCYCLEPSEUDO?: (ctx: RDCYCLEPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `RDTIMEPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterRDTIMEPSEUDO?: (ctx: RDTIMEPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `RDTIMEPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitRDTIMEPSEUDO?: (ctx: RDTIMEPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `CSRRPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterCSRRPSEUDO?: (ctx: CSRRPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `CSRRPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitCSRRPSEUDO?: (ctx: CSRRPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `CSRWPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterCSRWPSEUDO?: (ctx: CSRWPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `CSRWPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitCSRWPSEUDO?: (ctx: CSRWPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `CSRSPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterCSRSPSEUDO?: (ctx: CSRSPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `CSRSPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitCSRSPSEUDO?: (ctx: CSRSPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `CSRCPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterCSRCPSEUDO?: (ctx: CSRCPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `CSRCPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitCSRCPSEUDO?: (ctx: CSRCPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `CSRWIPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterCSRWIPSEUDO?: (ctx: CSRWIPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `CSRWIPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitCSRWIPSEUDO?: (ctx: CSRWIPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `CSRSIPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterCSRSIPSEUDO?: (ctx: CSRSIPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `CSRSIPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitCSRSIPSEUDO?: (ctx: CSRSIPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `CSRCIPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterCSRCIPSEUDO?: (ctx: CSRCIPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `CSRCIPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitCSRCIPSEUDO?: (ctx: CSRCIPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FRCSRPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFRCSRPSEUDO?: (ctx: FRCSRPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FRCSRPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFRCSRPSEUDO?: (ctx: FRCSRPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FSCSRPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFSCSRPSEUDO?: (ctx: FSCSRPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FSCSRPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFSCSRPSEUDO?: (ctx: FSCSRPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FSCSR2PSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFSCSR2PSEUDO?: (ctx: FSCSR2PSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FSCSR2PSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFSCSR2PSEUDO?: (ctx: FSCSR2PSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FRRMPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFRRMPSEUDO?: (ctx: FRRMPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FRRMPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFRRMPSEUDO?: (ctx: FRRMPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FSRMPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFSRMPSEUDO?: (ctx: FSRMPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FSRMPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFSRMPSEUDO?: (ctx: FSRMPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FSRM2PSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFSRM2PSEUDO?: (ctx: FSRM2PSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FSRM2PSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFSRM2PSEUDO?: (ctx: FSRM2PSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FRFLAGSPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFRFLAGSPSEUDO?: (ctx: FRFLAGSPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FRFLAGSPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFRFLAGSPSEUDO?: (ctx: FRFLAGSPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FSFLAGSPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFSFLAGSPSEUDO?: (ctx: FSFLAGSPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FSFLAGSPSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFSFLAGSPSEUDO?: (ctx: FSFLAGSPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FSFLAGS2PSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFSFLAGS2PSEUDO?: (ctx: FSFLAGS2PSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FSFLAGS2PSEUDO`
   * labeled alternative in `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFSFLAGS2PSEUDO?: (ctx: FSFLAGS2PSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BSS`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterBSS?: (ctx: BSSContext) => void;
  /**
   * Exit a parse tree produced by the `BSS`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitBSS?: (ctx: BSSContext) => void;

  /**
   * Enter a parse tree produced by the `DATA`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterDATA?: (ctx: DATAContext) => void;
  /**
   * Exit a parse tree produced by the `DATA`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitDATA?: (ctx: DATAContext) => void;

  /**
   * Enter a parse tree produced by the `RODATA`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterRODATA?: (ctx: RODATAContext) => void;
  /**
   * Exit a parse tree produced by the `RODATA`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitRODATA?: (ctx: RODATAContext) => void;

  /**
   * Enter a parse tree produced by the `TEXT`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterTEXT?: (ctx: TEXTContext) => void;
  /**
   * Exit a parse tree produced by the `TEXT`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitTEXT?: (ctx: TEXTContext) => void;

  /**
   * Enter a parse tree produced by the `GLOBL`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterGLOBL?: (ctx: GLOBLContext) => void;
  /**
   * Exit a parse tree produced by the `GLOBL`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitGLOBL?: (ctx: GLOBLContext) => void;

  /**
   * Enter a parse tree produced by the `ALIGN`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterALIGN?: (ctx: ALIGNContext) => void;
  /**
   * Exit a parse tree produced by the `ALIGN`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitALIGN?: (ctx: ALIGNContext) => void;

  /**
   * Enter a parse tree produced by the `BALIGN`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterBALIGN?: (ctx: BALIGNContext) => void;
  /**
   * Exit a parse tree produced by the `BALIGN`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitBALIGN?: (ctx: BALIGNContext) => void;

  /**
   * Enter a parse tree produced by the `FILE`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterFILE?: (ctx: FILEContext) => void;
  /**
   * Exit a parse tree produced by the `FILE`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitFILE?: (ctx: FILEContext) => void;

  /**
   * Enter a parse tree produced by the `EQU`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterEQU?: (ctx: EQUContext) => void;
  /**
   * Exit a parse tree produced by the `EQU`
   * labeled alternative in `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitEQU?: (ctx: EQUContext) => void;

  /**
   * Enter a parse tree produced by the `LABEL`
   * labeled alternative in `RISCVParser.label_def`.
   * @param ctx the parse tree
   */
  enterLABEL?: (ctx: LABELContext) => void;
  /**
   * Exit a parse tree produced by the `LABEL`
   * labeled alternative in `RISCVParser.label_def`.
   * @param ctx the parse tree
   */
  exitLABEL?: (ctx: LABELContext) => void;

  /**
   * Enter a parse tree produced by the `RV32I`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32I?: (ctx: RV32IContext) => void;
  /**
   * Exit a parse tree produced by the `RV32I`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32I?: (ctx: RV32IContext) => void;

  /**
   * Enter a parse tree produced by the `RV32Zifencei`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32Zifencei?: (ctx: RV32ZifenceiContext) => void;
  /**
   * Exit a parse tree produced by the `RV32Zifencei`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32Zifencei?: (ctx: RV32ZifenceiContext) => void;

  /**
   * Enter a parse tree produced by the `RV32Zicsr`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32Zicsr?: (ctx: RV32ZicsrContext) => void;
  /**
   * Exit a parse tree produced by the `RV32Zicsr`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32Zicsr?: (ctx: RV32ZicsrContext) => void;

  /**
   * Enter a parse tree produced by the `RV32M`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32M?: (ctx: RV32MContext) => void;
  /**
   * Exit a parse tree produced by the `RV32M`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32M?: (ctx: RV32MContext) => void;

  /**
   * Enter a parse tree produced by the `RV32A`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32A?: (ctx: RV32AContext) => void;
  /**
   * Exit a parse tree produced by the `RV32A`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32A?: (ctx: RV32AContext) => void;

  /**
   * Enter a parse tree produced by the `RV32F`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32F?: (ctx: RV32FContext) => void;
  /**
   * Exit a parse tree produced by the `RV32F`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32F?: (ctx: RV32FContext) => void;

  /**
   * Enter a parse tree produced by the `RV32D`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32D?: (ctx: RV32DContext) => void;
  /**
   * Exit a parse tree produced by the `RV32D`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32D?: (ctx: RV32DContext) => void;

  /**
   * Enter a parse tree produced by the `RV32IPSEUDOS`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32IPSEUDOS?: (ctx: RV32IPSEUDOSContext) => void;
  /**
   * Exit a parse tree produced by the `RV32IPSEUDOS`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32IPSEUDOS?: (ctx: RV32IPSEUDOSContext) => void;

  /**
   * Enter a parse tree produced by the `RV32ZicsrPSEUDOS`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32ZicsrPSEUDOS?: (ctx: RV32ZicsrPSEUDOSContext) => void;
  /**
   * Exit a parse tree produced by the `RV32ZicsrPSEUDOS`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32ZicsrPSEUDOS?: (ctx: RV32ZicsrPSEUDOSContext) => void;

  /**
   * Enter a parse tree produced by the `RV32FPSEUDOS`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32FPSEUDOS?: (ctx: RV32FPSEUDOSContext) => void;
  /**
   * Exit a parse tree produced by the `RV32FPSEUDOS`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32FPSEUDOS?: (ctx: RV32FPSEUDOSContext) => void;

  /**
   * Enter a parse tree produced by the `RV32DPSEUDOS`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterRV32DPSEUDOS?: (ctx: RV32DPSEUDOSContext) => void;
  /**
   * Exit a parse tree produced by the `RV32DPSEUDOS`
   * labeled alternative in `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitRV32DPSEUDOS?: (ctx: RV32DPSEUDOSContext) => void;

  /**
   * Enter a parse tree produced by the `PARENFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  enterPARENFEXPR?: (ctx: PARENFEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `PARENFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  exitPARENFEXPR?: (ctx: PARENFEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `UNARYFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  enterUNARYFEXPR?: (ctx: UNARYFEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `UNARYFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  exitUNARYFEXPR?: (ctx: UNARYFEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `INTFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  enterINTFEXPR?: (ctx: INTFEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `INTFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  exitINTFEXPR?: (ctx: INTFEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `HEXFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  enterHEXFEXPR?: (ctx: HEXFEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `HEXFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  exitHEXFEXPR?: (ctx: HEXFEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `BINFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  enterBINFEXPR?: (ctx: BINFEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `BINFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  exitBINFEXPR?: (ctx: BINFEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `FLOATFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  enterFLOATFEXPR?: (ctx: FLOATFEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `FLOATFEXPR`
   * labeled alternative in `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  exitFLOATFEXPR?: (ctx: FLOATFEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `LRW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterLRW?: (ctx: LRWContext) => void;
  /**
   * Exit a parse tree produced by the `LRW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitLRW?: (ctx: LRWContext) => void;

  /**
   * Enter a parse tree produced by the `SCW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterSCW?: (ctx: SCWContext) => void;
  /**
   * Exit a parse tree produced by the `SCW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitSCW?: (ctx: SCWContext) => void;

  /**
   * Enter a parse tree produced by the `AMOSWAPW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterAMOSWAPW?: (ctx: AMOSWAPWContext) => void;
  /**
   * Exit a parse tree produced by the `AMOSWAPW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitAMOSWAPW?: (ctx: AMOSWAPWContext) => void;

  /**
   * Enter a parse tree produced by the `AMOADDW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterAMOADDW?: (ctx: AMOADDWContext) => void;
  /**
   * Exit a parse tree produced by the `AMOADDW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitAMOADDW?: (ctx: AMOADDWContext) => void;

  /**
   * Enter a parse tree produced by the `AMOXORW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterAMOXORW?: (ctx: AMOXORWContext) => void;
  /**
   * Exit a parse tree produced by the `AMOXORW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitAMOXORW?: (ctx: AMOXORWContext) => void;

  /**
   * Enter a parse tree produced by the `AMOANDW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterAMOANDW?: (ctx: AMOANDWContext) => void;
  /**
   * Exit a parse tree produced by the `AMOANDW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitAMOANDW?: (ctx: AMOANDWContext) => void;

  /**
   * Enter a parse tree produced by the `AMOORW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterAMOORW?: (ctx: AMOORWContext) => void;
  /**
   * Exit a parse tree produced by the `AMOORW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitAMOORW?: (ctx: AMOORWContext) => void;

  /**
   * Enter a parse tree produced by the `AMOMINW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterAMOMINW?: (ctx: AMOMINWContext) => void;
  /**
   * Exit a parse tree produced by the `AMOMINW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitAMOMINW?: (ctx: AMOMINWContext) => void;

  /**
   * Enter a parse tree produced by the `AMOMAXW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterAMOMAXW?: (ctx: AMOMAXWContext) => void;
  /**
   * Exit a parse tree produced by the `AMOMAXW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitAMOMAXW?: (ctx: AMOMAXWContext) => void;

  /**
   * Enter a parse tree produced by the `AMOMINUW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterAMOMINUW?: (ctx: AMOMINUWContext) => void;
  /**
   * Exit a parse tree produced by the `AMOMINUW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitAMOMINUW?: (ctx: AMOMINUWContext) => void;

  /**
   * Enter a parse tree produced by the `AMOMAXUW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterAMOMAXUW?: (ctx: AMOMAXUWContext) => void;
  /**
   * Exit a parse tree produced by the `AMOMAXUW`
   * labeled alternative in `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitAMOMAXUW?: (ctx: AMOMAXUWContext) => void;

  /**
   * Enter a parse tree produced by the `LAPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterLAPSEUDO?: (ctx: LAPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `LAPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitLAPSEUDO?: (ctx: LAPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `LLAPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterLLAPSEUDO?: (ctx: LLAPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `LLAPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitLLAPSEUDO?: (ctx: LLAPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `LBPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterLBPSEUDO?: (ctx: LBPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `LBPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitLBPSEUDO?: (ctx: LBPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `LHPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterLHPSEUDO?: (ctx: LHPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `LHPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitLHPSEUDO?: (ctx: LHPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `LWPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterLWPSEUDO?: (ctx: LWPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `LWPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitLWPSEUDO?: (ctx: LWPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `SBPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterSBPSEUDO?: (ctx: SBPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `SBPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitSBPSEUDO?: (ctx: SBPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `SHPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterSHPSEUDO?: (ctx: SHPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `SHPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitSHPSEUDO?: (ctx: SHPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `SWPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterSWPSEUDO?: (ctx: SWPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `SWPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitSWPSEUDO?: (ctx: SWPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `NOPPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterNOPPSEUDO?: (ctx: NOPPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `NOPPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitNOPPSEUDO?: (ctx: NOPPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `LIPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterLIPSEUDO?: (ctx: LIPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `LIPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitLIPSEUDO?: (ctx: LIPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `MVPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterMVPSEUDO?: (ctx: MVPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `MVPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitMVPSEUDO?: (ctx: MVPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `NOTPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterNOTPSEUDO?: (ctx: NOTPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `NOTPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitNOTPSEUDO?: (ctx: NOTPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `NEGPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterNEGPSEUDO?: (ctx: NEGPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `NEGPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitNEGPSEUDO?: (ctx: NEGPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `SEQZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterSEQZPSEUDO?: (ctx: SEQZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `SEQZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitSEQZPSEUDO?: (ctx: SEQZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `SNEZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterSNEZPSEUDO?: (ctx: SNEZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `SNEZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitSNEZPSEUDO?: (ctx: SNEZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `SLTZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterSLTZPSEUDO?: (ctx: SLTZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `SLTZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitSLTZPSEUDO?: (ctx: SLTZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `SGTZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterSGTZPSEUDO?: (ctx: SGTZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `SGTZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitSGTZPSEUDO?: (ctx: SGTZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BEQZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBEQZPSEUDO?: (ctx: BEQZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BEQZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBEQZPSEUDO?: (ctx: BEQZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BNEZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBNEZPSEUDO?: (ctx: BNEZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BNEZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBNEZPSEUDO?: (ctx: BNEZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BLEZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBLEZPSEUDO?: (ctx: BLEZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BLEZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBLEZPSEUDO?: (ctx: BLEZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BGEZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBGEZPSEUDO?: (ctx: BGEZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BGEZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBGEZPSEUDO?: (ctx: BGEZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BLTZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBLTZPSEUDO?: (ctx: BLTZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BLTZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBLTZPSEUDO?: (ctx: BLTZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BGTZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBGTZPSEUDO?: (ctx: BGTZPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BGTZPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBGTZPSEUDO?: (ctx: BGTZPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BGTPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBGTPSEUDO?: (ctx: BGTPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BGTPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBGTPSEUDO?: (ctx: BGTPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BLEPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBLEPSEUDO?: (ctx: BLEPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BLEPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBLEPSEUDO?: (ctx: BLEPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BGTUPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBGTUPSEUDO?: (ctx: BGTUPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BGTUPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBGTUPSEUDO?: (ctx: BGTUPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BLEUPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterBLEUPSEUDO?: (ctx: BLEUPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `BLEUPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitBLEUPSEUDO?: (ctx: BLEUPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `JPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterJPSEUDO?: (ctx: JPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `JPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitJPSEUDO?: (ctx: JPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `JALPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterJALPSEUDO?: (ctx: JALPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `JALPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitJALPSEUDO?: (ctx: JALPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `JRPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterJRPSEUDO?: (ctx: JRPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `JRPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitJRPSEUDO?: (ctx: JRPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `JALRPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterJALRPSEUDO?: (ctx: JALRPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `JALRPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitJALRPSEUDO?: (ctx: JALRPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `RETPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterRETPSEUDO?: (ctx: RETPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `RETPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitRETPSEUDO?: (ctx: RETPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `CALLPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterCALLPSEUDO?: (ctx: CALLPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `CALLPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitCALLPSEUDO?: (ctx: CALLPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `TAILPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterTAILPSEUDO?: (ctx: TAILPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `TAILPSEUDO`
   * labeled alternative in `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitTAILPSEUDO?: (ctx: TAILPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `BYTE`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  enterBYTE?: (ctx: BYTEContext) => void;
  /**
   * Exit a parse tree produced by the `BYTE`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  exitBYTE?: (ctx: BYTEContext) => void;

  /**
   * Enter a parse tree produced by the `HALF`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  enterHALF?: (ctx: HALFContext) => void;
  /**
   * Exit a parse tree produced by the `HALF`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  exitHALF?: (ctx: HALFContext) => void;

  /**
   * Enter a parse tree produced by the `WORD`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  enterWORD?: (ctx: WORDContext) => void;
  /**
   * Exit a parse tree produced by the `WORD`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  exitWORD?: (ctx: WORDContext) => void;

  /**
   * Enter a parse tree produced by the `FLOAT`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  enterFLOAT?: (ctx: FLOATContext) => void;
  /**
   * Exit a parse tree produced by the `FLOAT`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  exitFLOAT?: (ctx: FLOATContext) => void;

  /**
   * Enter a parse tree produced by the `ASCII`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  enterASCII?: (ctx: ASCIIContext) => void;
  /**
   * Exit a parse tree produced by the `ASCII`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  exitASCII?: (ctx: ASCIIContext) => void;

  /**
   * Enter a parse tree produced by the `ASCIIZ`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  enterASCIIZ?: (ctx: ASCIIZContext) => void;
  /**
   * Exit a parse tree produced by the `ASCIIZ`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  exitASCIIZ?: (ctx: ASCIIZContext) => void;

  /**
   * Enter a parse tree produced by the `ZERO`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  enterZERO?: (ctx: ZEROContext) => void;
  /**
   * Exit a parse tree produced by the `ZERO`
   * labeled alternative in `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  exitZERO?: (ctx: ZEROContext) => void;

  /**
   * Enter a parse tree produced by the `PARENEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterPARENEXPR?: (ctx: PARENEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `PARENEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitPARENEXPR?: (ctx: PARENEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `UNARYEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterUNARYEXPR?: (ctx: UNARYEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `UNARYEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitUNARYEXPR?: (ctx: UNARYEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `PLUSEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterPLUSEXPR?: (ctx: PLUSEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `PLUSEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitPLUSEXPR?: (ctx: PLUSEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `INTEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterINTEXPR?: (ctx: INTEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `INTEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitINTEXPR?: (ctx: INTEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `HEXEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterHEXEXPR?: (ctx: HEXEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `HEXEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitHEXEXPR?: (ctx: HEXEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `BINEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterBINEXPR?: (ctx: BINEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `BINEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitBINEXPR?: (ctx: BINEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `CHAREXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterCHAREXPR?: (ctx: CHAREXPRContext) => void;
  /**
   * Exit a parse tree produced by the `CHAREXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitCHAREXPR?: (ctx: CHAREXPRContext) => void;

  /**
   * Enter a parse tree produced by the `IDEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterIDEXPR?: (ctx: IDEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `IDEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitIDEXPR?: (ctx: IDEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `HIRELEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterHIRELEXPR?: (ctx: HIRELEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `HIRELEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitHIRELEXPR?: (ctx: HIRELEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `LORELEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterLORELEXPR?: (ctx: LORELEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `LORELEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitLORELEXPR?: (ctx: LORELEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `PCRELHIRELEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterPCRELHIRELEXPR?: (ctx: PCRELHIRELEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `PCRELHIRELEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitPCRELHIRELEXPR?: (ctx: PCRELHIRELEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `PCRELLORELEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterPCRELLORELEXPR?: (ctx: PCRELLORELEXPRContext) => void;
  /**
   * Exit a parse tree produced by the `PCRELLORELEXPR`
   * labeled alternative in `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitPCRELLORELEXPR?: (ctx: PCRELLORELEXPRContext) => void;

  /**
   * Enter a parse tree produced by the `FLW`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFLW?: (ctx: FLWContext) => void;
  /**
   * Exit a parse tree produced by the `FLW`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFLW?: (ctx: FLWContext) => void;

  /**
   * Enter a parse tree produced by the `FSW`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFSW?: (ctx: FSWContext) => void;
  /**
   * Exit a parse tree produced by the `FSW`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFSW?: (ctx: FSWContext) => void;

  /**
   * Enter a parse tree produced by the `FMADDS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFMADDS?: (ctx: FMADDSContext) => void;
  /**
   * Exit a parse tree produced by the `FMADDS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFMADDS?: (ctx: FMADDSContext) => void;

  /**
   * Enter a parse tree produced by the `FMSUBS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFMSUBS?: (ctx: FMSUBSContext) => void;
  /**
   * Exit a parse tree produced by the `FMSUBS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFMSUBS?: (ctx: FMSUBSContext) => void;

  /**
   * Enter a parse tree produced by the `FNMSUBS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFNMSUBS?: (ctx: FNMSUBSContext) => void;
  /**
   * Exit a parse tree produced by the `FNMSUBS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFNMSUBS?: (ctx: FNMSUBSContext) => void;

  /**
   * Enter a parse tree produced by the `FNMADDS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFNMADDS?: (ctx: FNMADDSContext) => void;
  /**
   * Exit a parse tree produced by the `FNMADDS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFNMADDS?: (ctx: FNMADDSContext) => void;

  /**
   * Enter a parse tree produced by the `FADDS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFADDS?: (ctx: FADDSContext) => void;
  /**
   * Exit a parse tree produced by the `FADDS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFADDS?: (ctx: FADDSContext) => void;

  /**
   * Enter a parse tree produced by the `FSUBS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFSUBS?: (ctx: FSUBSContext) => void;
  /**
   * Exit a parse tree produced by the `FSUBS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFSUBS?: (ctx: FSUBSContext) => void;

  /**
   * Enter a parse tree produced by the `FMULS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFMULS?: (ctx: FMULSContext) => void;
  /**
   * Exit a parse tree produced by the `FMULS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFMULS?: (ctx: FMULSContext) => void;

  /**
   * Enter a parse tree produced by the `FDIVS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFDIVS?: (ctx: FDIVSContext) => void;
  /**
   * Exit a parse tree produced by the `FDIVS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFDIVS?: (ctx: FDIVSContext) => void;

  /**
   * Enter a parse tree produced by the `FSQRTS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFSQRTS?: (ctx: FSQRTSContext) => void;
  /**
   * Exit a parse tree produced by the `FSQRTS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFSQRTS?: (ctx: FSQRTSContext) => void;

  /**
   * Enter a parse tree produced by the `FSGNJS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFSGNJS?: (ctx: FSGNJSContext) => void;
  /**
   * Exit a parse tree produced by the `FSGNJS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFSGNJS?: (ctx: FSGNJSContext) => void;

  /**
   * Enter a parse tree produced by the `FSGNJNS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFSGNJNS?: (ctx: FSGNJNSContext) => void;
  /**
   * Exit a parse tree produced by the `FSGNJNS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFSGNJNS?: (ctx: FSGNJNSContext) => void;

  /**
   * Enter a parse tree produced by the `FSGNJXS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFSGNJXS?: (ctx: FSGNJXSContext) => void;
  /**
   * Exit a parse tree produced by the `FSGNJXS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFSGNJXS?: (ctx: FSGNJXSContext) => void;

  /**
   * Enter a parse tree produced by the `FMINS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFMINS?: (ctx: FMINSContext) => void;
  /**
   * Exit a parse tree produced by the `FMINS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFMINS?: (ctx: FMINSContext) => void;

  /**
   * Enter a parse tree produced by the `FMAXS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFMAXS?: (ctx: FMAXSContext) => void;
  /**
   * Exit a parse tree produced by the `FMAXS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFMAXS?: (ctx: FMAXSContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTWS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFCVTWS?: (ctx: FCVTWSContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTWS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFCVTWS?: (ctx: FCVTWSContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTWUS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFCVTWUS?: (ctx: FCVTWUSContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTWUS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFCVTWUS?: (ctx: FCVTWUSContext) => void;

  /**
   * Enter a parse tree produced by the `FMVXW`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFMVXW?: (ctx: FMVXWContext) => void;
  /**
   * Exit a parse tree produced by the `FMVXW`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFMVXW?: (ctx: FMVXWContext) => void;

  /**
   * Enter a parse tree produced by the `FMVXS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFMVXS?: (ctx: FMVXSContext) => void;
  /**
   * Exit a parse tree produced by the `FMVXS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFMVXS?: (ctx: FMVXSContext) => void;

  /**
   * Enter a parse tree produced by the `FEQS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFEQS?: (ctx: FEQSContext) => void;
  /**
   * Exit a parse tree produced by the `FEQS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFEQS?: (ctx: FEQSContext) => void;

  /**
   * Enter a parse tree produced by the `FLTS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFLTS?: (ctx: FLTSContext) => void;
  /**
   * Exit a parse tree produced by the `FLTS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFLTS?: (ctx: FLTSContext) => void;

  /**
   * Enter a parse tree produced by the `FLES`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFLES?: (ctx: FLESContext) => void;
  /**
   * Exit a parse tree produced by the `FLES`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFLES?: (ctx: FLESContext) => void;

  /**
   * Enter a parse tree produced by the `FCLASSS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFCLASSS?: (ctx: FCLASSSContext) => void;
  /**
   * Exit a parse tree produced by the `FCLASSS`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFCLASSS?: (ctx: FCLASSSContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTSW`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFCVTSW?: (ctx: FCVTSWContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTSW`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFCVTSW?: (ctx: FCVTSWContext) => void;

  /**
   * Enter a parse tree produced by the `FCVTSWU`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFCVTSWU?: (ctx: FCVTSWUContext) => void;
  /**
   * Exit a parse tree produced by the `FCVTSWU`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFCVTSWU?: (ctx: FCVTSWUContext) => void;

  /**
   * Enter a parse tree produced by the `FMVWX`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFMVWX?: (ctx: FMVWXContext) => void;
  /**
   * Exit a parse tree produced by the `FMVWX`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFMVWX?: (ctx: FMVWXContext) => void;

  /**
   * Enter a parse tree produced by the `FMVSX`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterFMVSX?: (ctx: FMVSXContext) => void;
  /**
   * Exit a parse tree produced by the `FMVSX`
   * labeled alternative in `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitFMVSX?: (ctx: FMVSXContext) => void;

  /**
   * Enter a parse tree produced by the `FLWPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFLWPSEUDO?: (ctx: FLWPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FLWPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFLWPSEUDO?: (ctx: FLWPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FSWPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFSWPSEUDO?: (ctx: FSWPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FSWPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFSWPSEUDO?: (ctx: FSWPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FMVSPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFMVSPSEUDO?: (ctx: FMVSPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FMVSPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFMVSPSEUDO?: (ctx: FMVSPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FABSSPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFABSSPSEUDO?: (ctx: FABSSPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FABSSPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFABSSPSEUDO?: (ctx: FABSSPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by the `FNEGSPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterFNEGSPSEUDO?: (ctx: FNEGSPSEUDOContext) => void;
  /**
   * Exit a parse tree produced by the `FNEGSPSEUDO`
   * labeled alternative in `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitFNEGSPSEUDO?: (ctx: FNEGSPSEUDOContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.prog`.
   * @param ctx the parse tree
   */
  enterProg?: (ctx: ProgContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.prog`.
   * @param ctx the parse tree
   */
  exitProg?: (ctx: ProgContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.line`.
   * @param ctx the parse tree
   */
  enterLine?: (ctx: LineContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.line`.
   * @param ctx the parse tree
   */
  exitLine?: (ctx: LineContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.stmt`.
   * @param ctx the parse tree
   */
  enterStmt?: (ctx: StmtContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.stmt`.
   * @param ctx the parse tree
   */
  exitStmt?: (ctx: StmtContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.label_def`.
   * @param ctx the parse tree
   */
  enterLabel_def?: (ctx: Label_defContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.label_def`.
   * @param ctx the parse tree
   */
  exitLabel_def?: (ctx: Label_defContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  enterInstruction?: (ctx: InstructionContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.instruction`.
   * @param ctx the parse tree
   */
  exitInstruction?: (ctx: InstructionContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  enterRv32i_ext?: (ctx: Rv32i_extContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32i_ext`.
   * @param ctx the parse tree
   */
  exitRv32i_ext?: (ctx: Rv32i_extContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32zifencei_ext`.
   * @param ctx the parse tree
   */
  enterRv32zifencei_ext?: (ctx: Rv32zifencei_extContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32zifencei_ext`.
   * @param ctx the parse tree
   */
  exitRv32zifencei_ext?: (ctx: Rv32zifencei_extContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  enterRv32zicsr_ext?: (ctx: Rv32zicsr_extContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32zicsr_ext`.
   * @param ctx the parse tree
   */
  exitRv32zicsr_ext?: (ctx: Rv32zicsr_extContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  enterRv32m_ext?: (ctx: Rv32m_extContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32m_ext`.
   * @param ctx the parse tree
   */
  exitRv32m_ext?: (ctx: Rv32m_extContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  enterRv32a_ext?: (ctx: Rv32a_extContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32a_ext`.
   * @param ctx the parse tree
   */
  exitRv32a_ext?: (ctx: Rv32a_extContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  enterRv32f_ext?: (ctx: Rv32f_extContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32f_ext`.
   * @param ctx the parse tree
   */
  exitRv32f_ext?: (ctx: Rv32f_extContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  enterRv32d_ext?: (ctx: Rv32d_extContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32d_ext`.
   * @param ctx the parse tree
   */
  exitRv32d_ext?: (ctx: Rv32d_extContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterRv32i_ext_pseudos?: (ctx: Rv32i_ext_pseudosContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32i_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitRv32i_ext_pseudos?: (ctx: Rv32i_ext_pseudosContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterRv32zicsr_ext_pseudos?: (ctx: Rv32zicsr_ext_pseudosContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32zicsr_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitRv32zicsr_ext_pseudos?: (ctx: Rv32zicsr_ext_pseudosContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterRv32f_ext_pseudos?: (ctx: Rv32f_ext_pseudosContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32f_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitRv32f_ext_pseudos?: (ctx: Rv32f_ext_pseudosContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  enterRv32d_ext_pseudos?: (ctx: Rv32d_ext_pseudosContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.rv32d_ext_pseudos`.
   * @param ctx the parse tree
   */
  exitRv32d_ext_pseudos?: (ctx: Rv32d_ext_pseudosContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  enterStatic_data?: (ctx: Static_dataContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.static_data`.
   * @param ctx the parse tree
   */
  exitStatic_data?: (ctx: Static_dataContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  enterDirective?: (ctx: DirectiveContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.directive`.
   * @param ctx the parse tree
   */
  exitDirective?: (ctx: DirectiveContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  enterExpr?: (ctx: ExprContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.expr`.
   * @param ctx the parse tree
   */
  exitExpr?: (ctx: ExprContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  enterFexpr?: (ctx: FexprContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.fexpr`.
   * @param ctx the parse tree
   */
  exitFexpr?: (ctx: FexprContext) => void;

  /**
   * Enter a parse tree produced by `RISCVParser.uimm`.
   * @param ctx the parse tree
   */
  enterUimm?: (ctx: UimmContext) => void;
  /**
   * Exit a parse tree produced by `RISCVParser.uimm`.
   * @param ctx the parse tree
   */
  exitUimm?: (ctx: UimmContext) => void;
}
