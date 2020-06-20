import { isFunction } from 'lodash';

/**
 * RV32Zicsr Mixing.
 *
 * @param superclass - Super class object
 */
export const Zicsr = (superclass: any) =>
  class extends superclass {
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
        this.csrrwi(this.getIType(ctx.I_CSRRWI(), ctx.XREG(0), ctx.uimm().i, true));
      }
    }

    /** {@inheritdoc} */
    exitCSRRSI(ctx: any) {
      if (this.options.extensions.zicsr && isFunction(this.csrrsi)) {
        this.csrrsi(this.getIType(ctx.I_CSRRSI(), ctx.XREG(0), ctx.uimm().i, true));
      }
    }

    /** {@inheritdoc} */
    exitCSRRCI(ctx: any) {
      if (this.options.extensions.zicsr && isFunction(this.csrrci)) {
        this.csrrci(this.getIType(ctx.I_CSRRCI(), ctx.XREG(0), ctx.uimm().i, true));
      }
    }

    /** {@inheritdoc} */
    exitRDINSTRETPSEUDO(ctx: any) {
      if (!this.options.pseudos) return;
      if (!this.options.extensions.zicsr) return;
      const mnemonic = ctx.I_RDINSTRET();
      const tal = {
        ...mnemonic,
        symbol: { ...mnemonic.symbol, text: 'csrrs' }
      };
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
      const tal = {
        ...mnemonic,
        symbol: { ...mnemonic.symbol, text: 'csrrs' }
      };
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
      const tal = {
        ...mnemonic,
        symbol: { ...mnemonic.symbol, text: 'csrrs' }
      };
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
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrs' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.csrr(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
      }
    }

    /** {@inheritdoc} */
    exitCSRWPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrw)) {
        const mnemonic = ctx.I_CSRW();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrw' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.csrw(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
      }
    }

    /** {@inheritdoc} */
    exitCSRSPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrs)) {
        const mnemonic = ctx.I_CSRS();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrs' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.csrs(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
      }
    }

    /** {@inheritdoc} */
    exitCSRCPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrc)) {
        const mnemonic = ctx.I_CSRC();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrc' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.csrc(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
      }
    }

    /** {@inheritdoc} */
    exitCSRWIPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrwi)) {
        const mnemonic = ctx.I_CSRWI();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrwi' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.csrwi(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.uimm().i, true)]));
      }
    }

    /** {@inheritdoc} */
    exitCSRSIPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrsi)) {
        const mnemonic = ctx.I_CSRSI();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrsi' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.csrsi(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.uimm().i, true)]));
      }
    }

    /** {@inheritdoc} */
    exitCSRCIPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.csrci)) {
        const mnemonic = ctx.I_CSRCI();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrci' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.csrci(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.uimm().i, true)]));
      }
    }

    /** {@inheritdoc} */
    exitFRCSRPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.frcsr)) {
        const mnemonic = ctx.I_FRCSR();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrs' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.addNumber('0x3');
        this.frcsr(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
      }
    }

    /** {@inheritdoc} */
    exitFSCSR2PSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fscsr)) {
        const mnemonic = ctx.I_FSCSR();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrw' }
        };
        this.addNumber('0x3');
        this.fscsr(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitFSCSRPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fscsr)) {
        const mnemonic = ctx.I_FSCSR();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrw' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.addNumber('0x3');
        this.fscsr(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
      }
    }

    /** {@inheritdoc} */
    exitFRRMPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.frrm)) {
        const mnemonic = ctx.I_FRRM();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrs' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.addNumber('0x2');
        this.frrm(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
      }
    }

    /** {@inheritdoc} */
    exitFSRM2PSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fsrm)) {
        const mnemonic = ctx.I_FSRM();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrw' }
        };
        this.addNumber('0x2');
        this.fsrm(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitFSRMPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fsrm)) {
        const mnemonic = ctx.I_FSRM();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrw' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.addNumber('0x2');
        this.fsrm(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
      }
    }

    /** {@inheritdoc} */
    exitFRFLAGSPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.frflags)) {
        const mnemonic = ctx.I_FRFLAGS();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrs' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.addNumber('0x1');
        this.frflags(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(), zero)]));
      }
    }

    /** {@inheritdoc} */
    exitFSFLAGS2PSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fsflags)) {
        const mnemonic = ctx.I_FSFLAGS();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrw' }
        };
        this.addNumber('0x1');
        this.fsflags(this.getPseudo(mnemonic, [this.getIType(tal, ctx.XREG(0), ctx.XREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitFSFLAGSPSEUDO(ctx: any) {
      if (this.options.extensions.zicsr && this.options.pseudos && isFunction(this.fsflags)) {
        const mnemonic = ctx.I_FSFLAGS();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'csrrw' }
        };
        const zero = { symbol: { text: 'x0' } };
        this.addNumber('0x1');
        this.fsflags(this.getPseudo(mnemonic, [this.getIType(tal, zero, ctx.XREG())]));
      }
    }
  };
