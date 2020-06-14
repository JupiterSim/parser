// Generated from src/syntax/RISCV.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RISCVParser.
function RISCVListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RISCVListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RISCVListener.prototype.constructor = RISCVListener;

// Enter a parse tree produced by RISCVParser#prog.
RISCVListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#prog.
RISCVListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#line.
RISCVListener.prototype.enterLine = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#line.
RISCVListener.prototype.exitLine = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#stmt.
RISCVListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#stmt.
RISCVListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LABEL.
RISCVListener.prototype.enterLABEL = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LABEL.
RISCVListener.prototype.exitLABEL = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32I.
RISCVListener.prototype.enterRV32I = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32I.
RISCVListener.prototype.exitRV32I = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32Zifencei.
RISCVListener.prototype.enterRV32Zifencei = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32Zifencei.
RISCVListener.prototype.exitRV32Zifencei = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32Zicsr.
RISCVListener.prototype.enterRV32Zicsr = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32Zicsr.
RISCVListener.prototype.exitRV32Zicsr = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32M.
RISCVListener.prototype.enterRV32M = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32M.
RISCVListener.prototype.exitRV32M = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32A.
RISCVListener.prototype.enterRV32A = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32A.
RISCVListener.prototype.exitRV32A = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32F.
RISCVListener.prototype.enterRV32F = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32F.
RISCVListener.prototype.exitRV32F = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32D.
RISCVListener.prototype.enterRV32D = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32D.
RISCVListener.prototype.exitRV32D = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32IPSEUDOS.
RISCVListener.prototype.enterRV32IPSEUDOS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32IPSEUDOS.
RISCVListener.prototype.exitRV32IPSEUDOS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32ZicsrPSEUDOS.
RISCVListener.prototype.enterRV32ZicsrPSEUDOS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32ZicsrPSEUDOS.
RISCVListener.prototype.exitRV32ZicsrPSEUDOS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32FPSEUDOS.
RISCVListener.prototype.enterRV32FPSEUDOS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32FPSEUDOS.
RISCVListener.prototype.exitRV32FPSEUDOS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RV32DPSEUDOS.
RISCVListener.prototype.enterRV32DPSEUDOS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RV32DPSEUDOS.
RISCVListener.prototype.exitRV32DPSEUDOS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LUI.
RISCVListener.prototype.enterLUI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LUI.
RISCVListener.prototype.exitLUI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AUIPC.
RISCVListener.prototype.enterAUIPC = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AUIPC.
RISCVListener.prototype.exitAUIPC = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#JAL.
RISCVListener.prototype.enterJAL = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#JAL.
RISCVListener.prototype.exitJAL = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#JALR.
RISCVListener.prototype.enterJALR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#JALR.
RISCVListener.prototype.exitJALR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BEQ.
RISCVListener.prototype.enterBEQ = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BEQ.
RISCVListener.prototype.exitBEQ = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BNE.
RISCVListener.prototype.enterBNE = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BNE.
RISCVListener.prototype.exitBNE = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BLT.
RISCVListener.prototype.enterBLT = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BLT.
RISCVListener.prototype.exitBLT = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BGE.
RISCVListener.prototype.enterBGE = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BGE.
RISCVListener.prototype.exitBGE = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BLTU.
RISCVListener.prototype.enterBLTU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BLTU.
RISCVListener.prototype.exitBLTU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BGEU.
RISCVListener.prototype.enterBGEU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BGEU.
RISCVListener.prototype.exitBGEU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LB.
RISCVListener.prototype.enterLB = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LB.
RISCVListener.prototype.exitLB = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LH.
RISCVListener.prototype.enterLH = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LH.
RISCVListener.prototype.exitLH = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LW.
RISCVListener.prototype.enterLW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LW.
RISCVListener.prototype.exitLW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LBU.
RISCVListener.prototype.enterLBU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LBU.
RISCVListener.prototype.exitLBU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LHU.
RISCVListener.prototype.enterLHU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LHU.
RISCVListener.prototype.exitLHU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SB.
RISCVListener.prototype.enterSB = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SB.
RISCVListener.prototype.exitSB = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SH.
RISCVListener.prototype.enterSH = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SH.
RISCVListener.prototype.exitSH = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SW.
RISCVListener.prototype.enterSW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SW.
RISCVListener.prototype.exitSW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#ADDI.
RISCVListener.prototype.enterADDI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#ADDI.
RISCVListener.prototype.exitADDI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SLTI.
RISCVListener.prototype.enterSLTI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SLTI.
RISCVListener.prototype.exitSLTI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SLTIU.
RISCVListener.prototype.enterSLTIU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SLTIU.
RISCVListener.prototype.exitSLTIU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#XORI.
RISCVListener.prototype.enterXORI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#XORI.
RISCVListener.prototype.exitXORI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#ORI.
RISCVListener.prototype.enterORI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#ORI.
RISCVListener.prototype.exitORI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#ANDI.
RISCVListener.prototype.enterANDI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#ANDI.
RISCVListener.prototype.exitANDI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SLLI.
RISCVListener.prototype.enterSLLI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SLLI.
RISCVListener.prototype.exitSLLI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SRLI.
RISCVListener.prototype.enterSRLI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SRLI.
RISCVListener.prototype.exitSRLI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SRAI.
RISCVListener.prototype.enterSRAI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SRAI.
RISCVListener.prototype.exitSRAI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#ADD.
RISCVListener.prototype.enterADD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#ADD.
RISCVListener.prototype.exitADD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SUB.
RISCVListener.prototype.enterSUB = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SUB.
RISCVListener.prototype.exitSUB = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SLL.
RISCVListener.prototype.enterSLL = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SLL.
RISCVListener.prototype.exitSLL = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SLT.
RISCVListener.prototype.enterSLT = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SLT.
RISCVListener.prototype.exitSLT = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SLTU.
RISCVListener.prototype.enterSLTU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SLTU.
RISCVListener.prototype.exitSLTU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#XOR.
RISCVListener.prototype.enterXOR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#XOR.
RISCVListener.prototype.exitXOR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SRL.
RISCVListener.prototype.enterSRL = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SRL.
RISCVListener.prototype.exitSRL = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SRA.
RISCVListener.prototype.enterSRA = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SRA.
RISCVListener.prototype.exitSRA = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#OR.
RISCVListener.prototype.enterOR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#OR.
RISCVListener.prototype.exitOR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AND.
RISCVListener.prototype.enterAND = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AND.
RISCVListener.prototype.exitAND = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FENCE.
RISCVListener.prototype.enterFENCE = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FENCE.
RISCVListener.prototype.exitFENCE = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#ECALL.
RISCVListener.prototype.enterECALL = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#ECALL.
RISCVListener.prototype.exitECALL = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#EBREAK.
RISCVListener.prototype.enterEBREAK = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#EBREAK.
RISCVListener.prototype.exitEBREAK = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FENCEI.
RISCVListener.prototype.enterFENCEI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FENCEI.
RISCVListener.prototype.exitFENCEI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRRW.
RISCVListener.prototype.enterCSRRW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRRW.
RISCVListener.prototype.exitCSRRW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRRS.
RISCVListener.prototype.enterCSRRS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRRS.
RISCVListener.prototype.exitCSRRS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRRC.
RISCVListener.prototype.enterCSRRC = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRRC.
RISCVListener.prototype.exitCSRRC = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRRWI.
RISCVListener.prototype.enterCSRRWI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRRWI.
RISCVListener.prototype.exitCSRRWI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRRSI.
RISCVListener.prototype.enterCSRRSI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRRSI.
RISCVListener.prototype.exitCSRRSI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRRCI.
RISCVListener.prototype.enterCSRRCI = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRRCI.
RISCVListener.prototype.exitCSRRCI = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#MUL.
RISCVListener.prototype.enterMUL = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#MUL.
RISCVListener.prototype.exitMUL = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#MULH.
RISCVListener.prototype.enterMULH = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#MULH.
RISCVListener.prototype.exitMULH = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#MULHSU.
RISCVListener.prototype.enterMULHSU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#MULHSU.
RISCVListener.prototype.exitMULHSU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#MULHU.
RISCVListener.prototype.enterMULHU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#MULHU.
RISCVListener.prototype.exitMULHU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#DIV.
RISCVListener.prototype.enterDIV = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#DIV.
RISCVListener.prototype.exitDIV = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#DIVU.
RISCVListener.prototype.enterDIVU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#DIVU.
RISCVListener.prototype.exitDIVU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#REM.
RISCVListener.prototype.enterREM = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#REM.
RISCVListener.prototype.exitREM = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#REMU.
RISCVListener.prototype.enterREMU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#REMU.
RISCVListener.prototype.exitREMU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LRW.
RISCVListener.prototype.enterLRW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LRW.
RISCVListener.prototype.exitLRW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SCW.
RISCVListener.prototype.enterSCW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SCW.
RISCVListener.prototype.exitSCW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AMOSWAPW.
RISCVListener.prototype.enterAMOSWAPW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AMOSWAPW.
RISCVListener.prototype.exitAMOSWAPW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AMOADDW.
RISCVListener.prototype.enterAMOADDW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AMOADDW.
RISCVListener.prototype.exitAMOADDW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AMOXORW.
RISCVListener.prototype.enterAMOXORW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AMOXORW.
RISCVListener.prototype.exitAMOXORW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AMOANDW.
RISCVListener.prototype.enterAMOANDW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AMOANDW.
RISCVListener.prototype.exitAMOANDW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AMOORW.
RISCVListener.prototype.enterAMOORW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AMOORW.
RISCVListener.prototype.exitAMOORW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AMOMINW.
RISCVListener.prototype.enterAMOMINW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AMOMINW.
RISCVListener.prototype.exitAMOMINW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AMOMAXW.
RISCVListener.prototype.enterAMOMAXW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AMOMAXW.
RISCVListener.prototype.exitAMOMAXW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AMOMINUW.
RISCVListener.prototype.enterAMOMINUW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AMOMINUW.
RISCVListener.prototype.exitAMOMINUW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#AMOMAXUW.
RISCVListener.prototype.enterAMOMAXUW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#AMOMAXUW.
RISCVListener.prototype.exitAMOMAXUW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLW.
RISCVListener.prototype.enterFLW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLW.
RISCVListener.prototype.exitFLW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSW.
RISCVListener.prototype.enterFSW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSW.
RISCVListener.prototype.exitFSW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMADDS.
RISCVListener.prototype.enterFMADDS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMADDS.
RISCVListener.prototype.exitFMADDS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMSUBS.
RISCVListener.prototype.enterFMSUBS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMSUBS.
RISCVListener.prototype.exitFMSUBS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FNMSUBS.
RISCVListener.prototype.enterFNMSUBS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FNMSUBS.
RISCVListener.prototype.exitFNMSUBS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FNMADDS.
RISCVListener.prototype.enterFNMADDS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FNMADDS.
RISCVListener.prototype.exitFNMADDS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FADDS.
RISCVListener.prototype.enterFADDS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FADDS.
RISCVListener.prototype.exitFADDS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSUBS.
RISCVListener.prototype.enterFSUBS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSUBS.
RISCVListener.prototype.exitFSUBS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMULS.
RISCVListener.prototype.enterFMULS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMULS.
RISCVListener.prototype.exitFMULS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FDIVS.
RISCVListener.prototype.enterFDIVS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FDIVS.
RISCVListener.prototype.exitFDIVS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSQRTS.
RISCVListener.prototype.enterFSQRTS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSQRTS.
RISCVListener.prototype.exitFSQRTS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSGNJS.
RISCVListener.prototype.enterFSGNJS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSGNJS.
RISCVListener.prototype.exitFSGNJS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSGNJNS.
RISCVListener.prototype.enterFSGNJNS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSGNJNS.
RISCVListener.prototype.exitFSGNJNS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSGNJXS.
RISCVListener.prototype.enterFSGNJXS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSGNJXS.
RISCVListener.prototype.exitFSGNJXS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMINS.
RISCVListener.prototype.enterFMINS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMINS.
RISCVListener.prototype.exitFMINS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMAXS.
RISCVListener.prototype.enterFMAXS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMAXS.
RISCVListener.prototype.exitFMAXS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTWS.
RISCVListener.prototype.enterFCVTWS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTWS.
RISCVListener.prototype.exitFCVTWS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTWUS.
RISCVListener.prototype.enterFCVTWUS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTWUS.
RISCVListener.prototype.exitFCVTWUS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMVXW.
RISCVListener.prototype.enterFMVXW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMVXW.
RISCVListener.prototype.exitFMVXW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMVXS.
RISCVListener.prototype.enterFMVXS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMVXS.
RISCVListener.prototype.exitFMVXS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FEQS.
RISCVListener.prototype.enterFEQS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FEQS.
RISCVListener.prototype.exitFEQS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLTS.
RISCVListener.prototype.enterFLTS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLTS.
RISCVListener.prototype.exitFLTS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLES.
RISCVListener.prototype.enterFLES = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLES.
RISCVListener.prototype.exitFLES = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCLASSS.
RISCVListener.prototype.enterFCLASSS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCLASSS.
RISCVListener.prototype.exitFCLASSS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTSW.
RISCVListener.prototype.enterFCVTSW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTSW.
RISCVListener.prototype.exitFCVTSW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTSWU.
RISCVListener.prototype.enterFCVTSWU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTSWU.
RISCVListener.prototype.exitFCVTSWU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMVWX.
RISCVListener.prototype.enterFMVWX = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMVWX.
RISCVListener.prototype.exitFMVWX = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMVSX.
RISCVListener.prototype.enterFMVSX = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMVSX.
RISCVListener.prototype.exitFMVSX = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLD.
RISCVListener.prototype.enterFLD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLD.
RISCVListener.prototype.exitFLD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSD.
RISCVListener.prototype.enterFSD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSD.
RISCVListener.prototype.exitFSD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMADDD.
RISCVListener.prototype.enterFMADDD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMADDD.
RISCVListener.prototype.exitFMADDD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMSUBD.
RISCVListener.prototype.enterFMSUBD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMSUBD.
RISCVListener.prototype.exitFMSUBD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FNMSUBD.
RISCVListener.prototype.enterFNMSUBD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FNMSUBD.
RISCVListener.prototype.exitFNMSUBD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FNMADDD.
RISCVListener.prototype.enterFNMADDD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FNMADDD.
RISCVListener.prototype.exitFNMADDD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FADDD.
RISCVListener.prototype.enterFADDD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FADDD.
RISCVListener.prototype.exitFADDD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSUBD.
RISCVListener.prototype.enterFSUBD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSUBD.
RISCVListener.prototype.exitFSUBD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMULD.
RISCVListener.prototype.enterFMULD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMULD.
RISCVListener.prototype.exitFMULD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FDIVD.
RISCVListener.prototype.enterFDIVD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FDIVD.
RISCVListener.prototype.exitFDIVD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSQRTD.
RISCVListener.prototype.enterFSQRTD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSQRTD.
RISCVListener.prototype.exitFSQRTD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSGNJD.
RISCVListener.prototype.enterFSGNJD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSGNJD.
RISCVListener.prototype.exitFSGNJD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSGNJND.
RISCVListener.prototype.enterFSGNJND = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSGNJND.
RISCVListener.prototype.exitFSGNJND = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSGNJXD.
RISCVListener.prototype.enterFSGNJXD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSGNJXD.
RISCVListener.prototype.exitFSGNJXD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMIND.
RISCVListener.prototype.enterFMIND = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMIND.
RISCVListener.prototype.exitFMIND = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMAXD.
RISCVListener.prototype.enterFMAXD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMAXD.
RISCVListener.prototype.exitFMAXD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTSD.
RISCVListener.prototype.enterFCVTSD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTSD.
RISCVListener.prototype.exitFCVTSD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTDS.
RISCVListener.prototype.enterFCVTDS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTDS.
RISCVListener.prototype.exitFCVTDS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FEQD.
RISCVListener.prototype.enterFEQD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FEQD.
RISCVListener.prototype.exitFEQD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLTD.
RISCVListener.prototype.enterFLTD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLTD.
RISCVListener.prototype.exitFLTD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLED.
RISCVListener.prototype.enterFLED = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLED.
RISCVListener.prototype.exitFLED = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCLASSD.
RISCVListener.prototype.enterFCLASSD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCLASSD.
RISCVListener.prototype.exitFCLASSD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTWD.
RISCVListener.prototype.enterFCVTWD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTWD.
RISCVListener.prototype.exitFCVTWD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTWUD.
RISCVListener.prototype.enterFCVTWUD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTWUD.
RISCVListener.prototype.exitFCVTWUD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTDW.
RISCVListener.prototype.enterFCVTDW = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTDW.
RISCVListener.prototype.exitFCVTDW = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FCVTDWU.
RISCVListener.prototype.enterFCVTDWU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FCVTDWU.
RISCVListener.prototype.exitFCVTDWU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LAPSEUDO.
RISCVListener.prototype.enterLAPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LAPSEUDO.
RISCVListener.prototype.exitLAPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LLAPSEUDO.
RISCVListener.prototype.enterLLAPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LLAPSEUDO.
RISCVListener.prototype.exitLLAPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LBPSEUDO.
RISCVListener.prototype.enterLBPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LBPSEUDO.
RISCVListener.prototype.exitLBPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LHPSEUDO.
RISCVListener.prototype.enterLHPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LHPSEUDO.
RISCVListener.prototype.exitLHPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LWPSEUDO.
RISCVListener.prototype.enterLWPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LWPSEUDO.
RISCVListener.prototype.exitLWPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SBPSEUDO.
RISCVListener.prototype.enterSBPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SBPSEUDO.
RISCVListener.prototype.exitSBPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SHPSEUDO.
RISCVListener.prototype.enterSHPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SHPSEUDO.
RISCVListener.prototype.exitSHPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SWPSEUDO.
RISCVListener.prototype.enterSWPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SWPSEUDO.
RISCVListener.prototype.exitSWPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#NOPPSEUDO.
RISCVListener.prototype.enterNOPPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#NOPPSEUDO.
RISCVListener.prototype.exitNOPPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LIPSEUDO.
RISCVListener.prototype.enterLIPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LIPSEUDO.
RISCVListener.prototype.exitLIPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#MVPSEUDO.
RISCVListener.prototype.enterMVPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#MVPSEUDO.
RISCVListener.prototype.exitMVPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#NOTPSEUDO.
RISCVListener.prototype.enterNOTPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#NOTPSEUDO.
RISCVListener.prototype.exitNOTPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#NEGPSEUDO.
RISCVListener.prototype.enterNEGPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#NEGPSEUDO.
RISCVListener.prototype.exitNEGPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SEQZPSEUDO.
RISCVListener.prototype.enterSEQZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SEQZPSEUDO.
RISCVListener.prototype.exitSEQZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SNEZPSEUDO.
RISCVListener.prototype.enterSNEZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SNEZPSEUDO.
RISCVListener.prototype.exitSNEZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SLTZPSEUDO.
RISCVListener.prototype.enterSLTZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SLTZPSEUDO.
RISCVListener.prototype.exitSLTZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#SGTZPSEUDO.
RISCVListener.prototype.enterSGTZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#SGTZPSEUDO.
RISCVListener.prototype.exitSGTZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BEQZPSEUDO.
RISCVListener.prototype.enterBEQZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BEQZPSEUDO.
RISCVListener.prototype.exitBEQZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BNEZPSEUDO.
RISCVListener.prototype.enterBNEZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BNEZPSEUDO.
RISCVListener.prototype.exitBNEZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BLEZPSEUDO.
RISCVListener.prototype.enterBLEZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BLEZPSEUDO.
RISCVListener.prototype.exitBLEZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BGEZPSEUDO.
RISCVListener.prototype.enterBGEZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BGEZPSEUDO.
RISCVListener.prototype.exitBGEZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BLTZPSEUDO.
RISCVListener.prototype.enterBLTZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BLTZPSEUDO.
RISCVListener.prototype.exitBLTZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BGTZPSEUDO.
RISCVListener.prototype.enterBGTZPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BGTZPSEUDO.
RISCVListener.prototype.exitBGTZPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BGTPSEUDO.
RISCVListener.prototype.enterBGTPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BGTPSEUDO.
RISCVListener.prototype.exitBGTPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BLEPSEUDO.
RISCVListener.prototype.enterBLEPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BLEPSEUDO.
RISCVListener.prototype.exitBLEPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BGTUPSEUDO.
RISCVListener.prototype.enterBGTUPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BGTUPSEUDO.
RISCVListener.prototype.exitBGTUPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BLEUPSEUDO.
RISCVListener.prototype.enterBLEUPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BLEUPSEUDO.
RISCVListener.prototype.exitBLEUPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#JPSEUDO.
RISCVListener.prototype.enterJPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#JPSEUDO.
RISCVListener.prototype.exitJPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#JALPSEUDO.
RISCVListener.prototype.enterJALPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#JALPSEUDO.
RISCVListener.prototype.exitJALPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#JRPSEUDO.
RISCVListener.prototype.enterJRPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#JRPSEUDO.
RISCVListener.prototype.exitJRPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#JALRPSEUDO.
RISCVListener.prototype.enterJALRPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#JALRPSEUDO.
RISCVListener.prototype.exitJALRPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RETPSEUDO.
RISCVListener.prototype.enterRETPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RETPSEUDO.
RISCVListener.prototype.exitRETPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CALLPSEUDO.
RISCVListener.prototype.enterCALLPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CALLPSEUDO.
RISCVListener.prototype.exitCALLPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#TAILPSEUDO.
RISCVListener.prototype.enterTAILPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#TAILPSEUDO.
RISCVListener.prototype.exitTAILPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RDINSTRETPSEUDO.
RISCVListener.prototype.enterRDINSTRETPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RDINSTRETPSEUDO.
RISCVListener.prototype.exitRDINSTRETPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RDCYCLEPSEUDO.
RISCVListener.prototype.enterRDCYCLEPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RDCYCLEPSEUDO.
RISCVListener.prototype.exitRDCYCLEPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RDTIMEPSEUDO.
RISCVListener.prototype.enterRDTIMEPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RDTIMEPSEUDO.
RISCVListener.prototype.exitRDTIMEPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRRPSEUDO.
RISCVListener.prototype.enterCSRRPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRRPSEUDO.
RISCVListener.prototype.exitCSRRPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRWPSEUDO.
RISCVListener.prototype.enterCSRWPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRWPSEUDO.
RISCVListener.prototype.exitCSRWPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRSPSEUDO.
RISCVListener.prototype.enterCSRSPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRSPSEUDO.
RISCVListener.prototype.exitCSRSPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRCPSEUDO.
RISCVListener.prototype.enterCSRCPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRCPSEUDO.
RISCVListener.prototype.exitCSRCPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRWIPSEUDO.
RISCVListener.prototype.enterCSRWIPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRWIPSEUDO.
RISCVListener.prototype.exitCSRWIPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRSIPSEUDO.
RISCVListener.prototype.enterCSRSIPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRSIPSEUDO.
RISCVListener.prototype.exitCSRSIPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CSRCIPSEUDO.
RISCVListener.prototype.enterCSRCIPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CSRCIPSEUDO.
RISCVListener.prototype.exitCSRCIPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FRCSRPSEUDO.
RISCVListener.prototype.enterFRCSRPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FRCSRPSEUDO.
RISCVListener.prototype.exitFRCSRPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSCSRPSEUDO.
RISCVListener.prototype.enterFSCSRPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSCSRPSEUDO.
RISCVListener.prototype.exitFSCSRPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSCSR2PSEUDO.
RISCVListener.prototype.enterFSCSR2PSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSCSR2PSEUDO.
RISCVListener.prototype.exitFSCSR2PSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FRRMPSEUDO.
RISCVListener.prototype.enterFRRMPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FRRMPSEUDO.
RISCVListener.prototype.exitFRRMPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSRMPSEUDO.
RISCVListener.prototype.enterFSRMPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSRMPSEUDO.
RISCVListener.prototype.exitFSRMPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSRM2PSEUDO.
RISCVListener.prototype.enterFSRM2PSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSRM2PSEUDO.
RISCVListener.prototype.exitFSRM2PSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FRFLAGSPSEUDO.
RISCVListener.prototype.enterFRFLAGSPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FRFLAGSPSEUDO.
RISCVListener.prototype.exitFRFLAGSPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSFLAGSPSEUDO.
RISCVListener.prototype.enterFSFLAGSPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSFLAGSPSEUDO.
RISCVListener.prototype.exitFSFLAGSPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSFLAGS2PSEUDO.
RISCVListener.prototype.enterFSFLAGS2PSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSFLAGS2PSEUDO.
RISCVListener.prototype.exitFSFLAGS2PSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLWPSEUDO.
RISCVListener.prototype.enterFLWPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLWPSEUDO.
RISCVListener.prototype.exitFLWPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSWPSEUDO.
RISCVListener.prototype.enterFSWPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSWPSEUDO.
RISCVListener.prototype.exitFSWPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMVSPSEUDO.
RISCVListener.prototype.enterFMVSPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMVSPSEUDO.
RISCVListener.prototype.exitFMVSPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FABSSPSEUDO.
RISCVListener.prototype.enterFABSSPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FABSSPSEUDO.
RISCVListener.prototype.exitFABSSPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FNEGSPSEUDO.
RISCVListener.prototype.enterFNEGSPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FNEGSPSEUDO.
RISCVListener.prototype.exitFNEGSPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLDPSEUDO.
RISCVListener.prototype.enterFLDPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLDPSEUDO.
RISCVListener.prototype.exitFLDPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FSDPSEUDO.
RISCVListener.prototype.enterFSDPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FSDPSEUDO.
RISCVListener.prototype.exitFSDPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FMVDPSEUDO.
RISCVListener.prototype.enterFMVDPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FMVDPSEUDO.
RISCVListener.prototype.exitFMVDPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FABSDPSEUDO.
RISCVListener.prototype.enterFABSDPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FABSDPSEUDO.
RISCVListener.prototype.exitFABSDPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FNEGDPSEUDO.
RISCVListener.prototype.enterFNEGDPSEUDO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FNEGDPSEUDO.
RISCVListener.prototype.exitFNEGDPSEUDO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BYTE.
RISCVListener.prototype.enterBYTE = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BYTE.
RISCVListener.prototype.exitBYTE = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#HALF.
RISCVListener.prototype.enterHALF = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#HALF.
RISCVListener.prototype.exitHALF = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#WORD.
RISCVListener.prototype.enterWORD = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#WORD.
RISCVListener.prototype.exitWORD = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLOAT.
RISCVListener.prototype.enterFLOAT = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLOAT.
RISCVListener.prototype.exitFLOAT = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#ASCII.
RISCVListener.prototype.enterASCII = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#ASCII.
RISCVListener.prototype.exitASCII = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#ASCIIZ.
RISCVListener.prototype.enterASCIIZ = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#ASCIIZ.
RISCVListener.prototype.exitASCIIZ = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#ZERO.
RISCVListener.prototype.enterZERO = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#ZERO.
RISCVListener.prototype.exitZERO = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BSS.
RISCVListener.prototype.enterBSS = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BSS.
RISCVListener.prototype.exitBSS = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#DATA.
RISCVListener.prototype.enterDATA = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#DATA.
RISCVListener.prototype.exitDATA = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#RODATA.
RISCVListener.prototype.enterRODATA = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#RODATA.
RISCVListener.prototype.exitRODATA = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#TEXT.
RISCVListener.prototype.enterTEXT = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#TEXT.
RISCVListener.prototype.exitTEXT = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#GLOBL.
RISCVListener.prototype.enterGLOBL = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#GLOBL.
RISCVListener.prototype.exitGLOBL = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#ALIGN.
RISCVListener.prototype.enterALIGN = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#ALIGN.
RISCVListener.prototype.exitALIGN = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BALIGN.
RISCVListener.prototype.enterBALIGN = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BALIGN.
RISCVListener.prototype.exitBALIGN = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FILE.
RISCVListener.prototype.enterFILE = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FILE.
RISCVListener.prototype.exitFILE = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#EQU.
RISCVListener.prototype.enterEQU = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#EQU.
RISCVListener.prototype.exitEQU = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#IDEXPR.
RISCVListener.prototype.enterIDEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#IDEXPR.
RISCVListener.prototype.exitIDEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#LORELEXPR.
RISCVListener.prototype.enterLORELEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#LORELEXPR.
RISCVListener.prototype.exitLORELEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#PCRELHIRELEXPR.
RISCVListener.prototype.enterPCRELHIRELEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#PCRELHIRELEXPR.
RISCVListener.prototype.exitPCRELHIRELEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BINEXPR.
RISCVListener.prototype.enterBINEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BINEXPR.
RISCVListener.prototype.exitBINEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#INTEXPR.
RISCVListener.prototype.enterINTEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#INTEXPR.
RISCVListener.prototype.exitINTEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#CHAREXPR.
RISCVListener.prototype.enterCHAREXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#CHAREXPR.
RISCVListener.prototype.exitCHAREXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#PARENEXPR.
RISCVListener.prototype.enterPARENEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#PARENEXPR.
RISCVListener.prototype.exitPARENEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#HEXEXPR.
RISCVListener.prototype.enterHEXEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#HEXEXPR.
RISCVListener.prototype.exitHEXEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#PCRELLORELEXPR.
RISCVListener.prototype.enterPCRELLORELEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#PCRELLORELEXPR.
RISCVListener.prototype.exitPCRELLORELEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#UNARYEXPR.
RISCVListener.prototype.enterUNARYEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#UNARYEXPR.
RISCVListener.prototype.exitUNARYEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#PLUSEXPR.
RISCVListener.prototype.enterPLUSEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#PLUSEXPR.
RISCVListener.prototype.exitPLUSEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#HIRELEXPR.
RISCVListener.prototype.enterHIRELEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#HIRELEXPR.
RISCVListener.prototype.exitHIRELEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#PARENFEXPR.
RISCVListener.prototype.enterPARENFEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#PARENFEXPR.
RISCVListener.prototype.exitPARENFEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#UNARYFEXPR.
RISCVListener.prototype.enterUNARYFEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#UNARYFEXPR.
RISCVListener.prototype.exitUNARYFEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#INTFEXPR.
RISCVListener.prototype.enterINTFEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#INTFEXPR.
RISCVListener.prototype.exitINTFEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#HEXFEXPR.
RISCVListener.prototype.enterHEXFEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#HEXFEXPR.
RISCVListener.prototype.exitHEXFEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#BINFEXPR.
RISCVListener.prototype.enterBINFEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#BINFEXPR.
RISCVListener.prototype.exitBINFEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#FLOATFEXPR.
RISCVListener.prototype.enterFLOATFEXPR = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#FLOATFEXPR.
RISCVListener.prototype.exitFLOATFEXPR = function(ctx) {
};


// Enter a parse tree produced by RISCVParser#uimm.
RISCVListener.prototype.enterUimm = function(ctx) {
};

// Exit a parse tree produced by RISCVParser#uimm.
RISCVListener.prototype.exitUimm = function(ctx) {
};



exports.RISCVListener = RISCVListener;