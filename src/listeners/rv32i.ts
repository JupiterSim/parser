import { isFunction } from 'lodash';

/**
 * RV32I Mixing.
 *
 * @param superclass - Super class object
 */
export const I = (superclass: any) =>
  class extends superclass {
    /** {@inheritdoc} */
    enterRV32IPSEUDOS(ctx: any) {
      if (!this.options.pseudos) {
        this.addError(ctx.start.line, ctx.start.column + 1, 'Pseudoinstructions are disabled');
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

    // Pseudos

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
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'addi' }
        };
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
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'addi' }
        };
        this.addNumber('0');
        this.mv(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitNOTPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.not)) {
        const mnemonic = ctx.I_NOT();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'xori' }
        };
        this.addNumber('-1');
        this.not(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitNEGPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.neg)) {
        const mnemonic = ctx.I_NEG();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'sub' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.neg(this.getPseudo(mnemonic, [this.getRType(tal, ctx.XREG(0), zero, ctx.XREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitSEQZPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.seqz)) {
        const mnemonic = ctx.I_SEQZ();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'sltiu' }
        };
        this.addNumber('1');
        this.seqz(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitSNEZPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.snez)) {
        const mnemonic = ctx.I_SNEZ();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'sltu' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.snez(this.getPseudo(mnemonic, [this.getRType(tal, ctx.XREG(0), zero, ctx.XREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitSLTZPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.sltz)) {
        const mnemonic = ctx.I_SLTZ();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'slt' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.sltz(this.getPseudo(mnemonic, [this.getRType(tal, ctx.XREG(0), ctx.XREG(1), zero)]));
      }
    }

    /** {@inheritdoc} */
    exitSGTZPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.sgtz)) {
        const mnemonic = ctx.I_SGTZ();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'slt' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.sgtz(this.getPseudo(mnemonic, [this.getRType(tal, ctx.XREG(0), zero, ctx.XREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitBEQZPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.beqz)) {
        const mnemonic = ctx.I_BEQZ();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'beq' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.beqz(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(), zero, ctx.ID())]));
      }
    }

    /** {@inheritdoc} */
    exitBNEZPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.bnez)) {
        const mnemonic = ctx.I_BNEZ();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'bne' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.bnez(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(), zero, ctx.ID())]));
      }
    }

    /** {@inheritdoc} */
    exitBLEZPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.blez)) {
        const mnemonic = ctx.I_BLEZ();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'bge' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.blez(this.getPseudo(mnemonic, [this.getBType(tal, zero, ctx.XREG(), ctx.ID())]));
      }
    }

    /** {@inheritdoc} */
    exitBGEZPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.bgez)) {
        const mnemonic = ctx.I_BGEZ();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'bge' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.bgez(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(), zero, ctx.ID())]));
      }
    }

    /** {@inheritdoc} */
    exitBLTZPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.bltz)) {
        const mnemonic = ctx.I_BLTZ();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'blt' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.bltz(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(), zero, ctx.ID())]));
      }
    }

    /** {@inheritdoc} */
    exitBGTPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.bgt)) {
        const mnemonic = ctx.I_BGT();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'blt' }
        };
        this.bgt(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(1), ctx.XREG(0), ctx.ID())]));
      }
    }

    /** {@inheritdoc} */
    exitBLEPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.ble)) {
        const mnemonic = ctx.I_BLE();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'bge' }
        };
        this.ble(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(1), ctx.XREG(0), ctx.ID())]));
      }
    }

    /** {@inheritdoc} */
    exitBGTUPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.bgtu)) {
        const mnemonic = ctx.I_BGTU();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'bltu' }
        };
        this.bgtu(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(1), ctx.XREG(0), ctx.ID())]));
      }
    }

    /** {@inheritdoc} */
    exitBLEUPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.bleu)) {
        const mnemonic = ctx.I_BLEU();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'bgeu' }
        };
        this.bleu(this.getPseudo(mnemonic, [this.getBType(tal, ctx.XREG(1), ctx.XREG(0), ctx.ID())]));
      }
    }

    /** {@inheritdoc} */
    exitJPSEUDO(ctx: any) {
      if (this.options.pseudos && isFunction(this.j)) {
        const mnemonic = ctx.I_J();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'jal' }
        };
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
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'jalr' }
        };
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
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'jalr' }
        };
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
  };
