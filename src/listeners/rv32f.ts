import { isFunction } from 'lodash';

/**
 * RV32F Mixing.
 *
 * @param superclass - Super class object
 */
export const F = (superclass: any) =>
  class extends superclass {
    /** {@inheritdoc} */
    enterRV32F(ctx: any) {
      if (!this.options.extensions.f) {
        this.addError(ctx.start.line, ctx.start.column + 1, 'RV32F extension is disabled');
      }
    }

    /** {@inheritdoc} */
    enterRV32FPSEUDOS(ctx: any) {
      if (!this.options.extensions.f) {
        this.addError(ctx.start.line, ctx.start.column + 1, 'RV32F extension is disabled');
      } else if (!this.options.pseudos) {
        this.addError(ctx.start.line, ctx.start.column + 1, 'Pseudoinstructions are disabled');
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
        this.fsqrts(this.getRType(ctx.I_FSQRTS(), ctx.FREG(0), ctx.FREG(1)));
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
        this.fcvtws(this.getRType(ctx.I_FCVTWS(), ctx.XREG(), ctx.FREG()));
      }
    }

    /** {@inheritdoc} */
    exitFCVTWUS(ctx: any) {
      if (this.options.extensions.f && isFunction(this.fcvtwus)) {
        this.fcvtwus(this.getRType(ctx.I_FCVTWUS(), ctx.XREG(), ctx.FREG()));
      }
    }

    /** {@inheritdoc} */
    exitFMVXW(ctx: any) {
      if (this.options.extensions.f && isFunction(this.fmvxw)) {
        this.fmvxw(this.getRType(ctx.I_FMVXW(), ctx.XREG(), ctx.FREG()));
      }
    }

    /** {@inheritdoc} */
    exitFMVXS(ctx: any) {
      if (this.options.extensions.f && isFunction(this.fmvxs)) {
        this.fmvxs(this.getRType(ctx.I_FMVXS(), ctx.XREG(), ctx.FREG()));
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
        this.fclasss(this.getRType(ctx.I_FCLASSS(), ctx.XREG(), ctx.FREG()));
      }
    }

    /** {@inheritdoc} */
    exitFCVTSW(ctx: any) {
      if (this.options.extensions.f && isFunction(this.fcvtsw)) {
        this.fcvtsw(this.getRType(ctx.I_FCVTSW(), ctx.FREG(), ctx.XREG()));
      }
    }

    /** {@inheritdoc} */
    exitFCVTSWU(ctx: any) {
      if (this.options.extensions.f && isFunction(this.fcvtswu)) {
        this.fcvtswu(this.getRType(ctx.I_FCVTSWU(), ctx.FREG(), ctx.XREG()));
      }
    }

    /** {@inheritdoc} */
    exitFMVWX(ctx: any) {
      if (this.options.extensions.f && isFunction(this.fmvwx)) {
        this.fmvwx(this.getRType(ctx.I_FMVWX(), ctx.FREG(), ctx.XREG()));
      }
    }

    /** {@inheritdoc} */
    exitFMVSX(ctx: any) {
      if (this.options.extensions.f && isFunction(this.fmvsx)) {
        this.fmvsx(this.getRType(ctx.I_FMVSX(), ctx.FREG(), ctx.XREG()));
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
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'fsgnj.s' }
        };
        this.fmvs(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitFABSSPSEUDO(ctx: any) {
      if (this.options.extensions.f && this.options.pseudos && isFunction(this.fabss)) {
        const mnemonic = ctx.I_FABSS();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'fsgnjx.s' }
        };
        this.fabss(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
      }
    }

    /** {@inheritdoc} */
    exitFNEGSPSEUDO(ctx: any) {
      if (this.options.extensions.f && this.options.pseudos && isFunction(this.fnegs)) {
        const mnemonic = ctx.I_FNEGS();
        const tal = {
          ...mnemonic,
          symbol: { ...mnemonic.symbol, text: 'fsgnjn.s' }
        };
        this.fnegs(this.getPseudo(mnemonic, [this.getRType(tal, ctx.FREG(0), ctx.FREG(1), ctx.FREG(1))]));
      }
    }
  };
