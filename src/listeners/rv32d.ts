import { isFunction } from 'lodash';

/**
 * RV32D Mixing.
 *
 * @param superclass - Super class object
 */
export const D = (superclass: any) =>
  class extends superclass {
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
        this.fsqrtd(this.getRType(ctx.I_FSQRTD(), ctx.FREG(0), ctx.FREG(1)));
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
        this.fcvtsd(this.getRType(ctx.I_FCVTSD(), ctx.FREG(0), ctx.FREG(1)));
      }
    }

    /** {@inheritdoc} */
    exitFCVTDS(ctx: any) {
      if (this.options.extensions.d && isFunction(this.fcvtds)) {
        this.fcvtds(this.getRType(ctx.I_FCVTDS(), ctx.FREG(0), ctx.FREG(1)));
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
        this.fclassd(this.getRType(ctx.I_FCLASSD(), ctx.XREG(), ctx.FREG()));
      }
    }

    /** {@inheritdoc} */
    exitFCVTWD(ctx: any) {
      if (this.options.extensions.d && isFunction(this.fcvtwd)) {
        this.fcvtwd(this.getRType(ctx.I_FCVTWD(), ctx.XREG(), ctx.FREG()));
      }
    }

    /** {@inheritdoc} */
    exitFCVTWUD(ctx: any) {
      if (this.options.extensions.d && isFunction(this.fcvtwud)) {
        this.fcvtwud(this.getRType(ctx.I_FCVTWUD(), ctx.XREG(), ctx.FREG()));
      }
    }

    /** {@inheritdoc} */
    exitFCVTDW(ctx: any) {
      if (this.options.extensions.d && isFunction(this.fcvtdw)) {
        this.fcvtdw(this.getRType(ctx.I_FCVTDW(), ctx.FREG(), ctx.XREG()));
      }
    }

    /** {@inheritdoc} */
    exitFCVTDWU(ctx: any) {
      if (this.options.extensions.d && isFunction(this.fcvtdwu)) {
        this.fcvtdwu(this.getRType(ctx.I_FCVTDWU(), ctx.FREG(), ctx.XREG()));
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
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'fsgnj.d' }
        };
        this.fmvd(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitFABSDPSEUDO(ctx: any) {
      if (this.options.extensions.d && this.options.pseudos && isFunction(this.fabsd)) {
        const mnemonic = ctx.I_FABSD();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'fsgnjx.d' }
        };
        this.fabsd(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitFNEGDPSEUDO(ctx: any) {
      if (this.options.extensions.d && this.options.pseudos && isFunction(this.fnegd)) {
        const mnemonic = ctx.I_FNEGD();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'fsgnjn.d' }
        };
        this.fnegd(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
      }
    }
  };
