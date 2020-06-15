import { Segment } from '../../src/segment';
import { DebugInfo } from '../../src/debug';
import { SymbolTable } from '../../src/table';
import { Relocation } from '../../src/relocation';
import { Constant, Id, Plus } from '../../src/expr';

// Dummy debug information.
export const debugInfo: DebugInfo = {
  filename: 'test.s',
  line: 1,
  column: 2,
  source: 'add a0, a0, 10',
  indicator: 1
};

// Dummy symbol table.
export const st: SymbolTable = {
  locals: {
    'test.s': {
      bar: {
        segment: Segment.TEXT,
        debugInfo,
        address: 10
      }
    }
  },
  globals: {
    test: {
      segment: Segment.DATA,
      debugInfo,
      address: 0xbacacafe
    },
    main: {
      segment: Segment.BSS,
      debugInfo,
      address: 10
    }
  },
  expr: {
    'test.s': {
      x: new Constant(debugInfo, '10')
    }
  }
};

st.expr['test.s'].cycle = new Id(debugInfo, 'cycle', Relocation.ABSOLUTE, st);
st.expr['test.s'].y = new Plus(
  debugInfo,
  new Id(debugInfo, 'x', Relocation.ABSOLUTE, st),
  new Id(debugInfo, 'x', Relocation.ABSOLUTE, st)
);

// Dummy constants
export const three = new Constant(debugInfo, '3');
export const one = new Constant(debugInfo, '1');
export const id = new Id(debugInfo, 'test', Relocation.HI, st);
export const eSym = new Id(debugInfo, 'x', Relocation.ABSOLUTE, st);
export const eGlob = new Id(debugInfo, 'main', Relocation.ABSOLUTE, st);
export const eLoc = new Id(debugInfo, 'bar', Relocation.ABSOLUTE, st);
export const eInv = new Id(debugInfo, 'bazz', Relocation.ABSOLUTE, st);
export const eCycle = new Id(debugInfo, 'cycle', Relocation.ABSOLUTE, st);
export const eLo = new Id(debugInfo, 'test', Relocation.LO, st);
export const eHi = new Id(debugInfo, 'test', Relocation.HI, st);
export const ePcrel = new Id(debugInfo, 'test', Relocation.PCREL, st);
export const ePcrelHi = new Id(debugInfo, 'test', Relocation.PCREL_HI, st);
export const ePcrelLo = new Id(debugInfo, 'test', Relocation.PCREL_LO, st);
export const eValid = new Id(debugInfo, 'y', Relocation.ABSOLUTE, st);
