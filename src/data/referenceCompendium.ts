export interface ReferenceEntry {
  id: string;
  domain: 'Science' | 'Mathematics' | 'Commerce' | 'History & Logic';
  name: string;
  symbolOrFormula: string;
  valueOrSummary: string;
  note: string;
}

export const REFERENCE_COMPENDIUM: ReferenceEntry[] = [
  {
    id: 'ref-c',
    domain: 'Science',
    name: 'Speed of Light in Vacuum',
    symbolOrFormula: 'c',
    valueOrSummary: '299,792,458 m/s',
    note: 'Universal upper speed limit for energy and information in relativity.',
  },
  {
    id: 'ref-g',
    domain: 'Science',
    name: 'Standard Earth Gravity',
    symbolOrFormula: 'g',
    valueOrSummary: '9.80665 m/s²',
    note: 'Surface gravitational acceleration at sea level.',
  },
  {
    id: 'ref-avogadro',
    domain: 'Science',
    name: 'Avogadro Constant',
    symbolOrFormula: 'N_A',
    valueOrSummary: '6.02214 × 10²³ mol⁻¹',
    note: 'Number of atoms or molecules in one mole of substance.',
  },
  {
    id: 'ref-pi',
    domain: 'Mathematics',
    name: 'Circle Ratio & Euler’s Number',
    symbolOrFormula: 'π  |  e',
    valueOrSummary: 'π ≈ 3.14159  |  e ≈ 2.71828',
    note: 'Foundational constants of circular geometry and continuous compounding.',
  },
  {
    id: 'ref-pyth',
    domain: 'Mathematics',
    name: 'Pythagorean & Quadratic Formulas',
    symbolOrFormula: 'a² + b² = c²  |  x = (−b ± √(b²−4ac)) / 2a',
    valueOrSummary: 'Euclidean distance & polynomial roots',
    note: 'Core equations used across engineering, physics, and architecture.',
  },
  {
    id: 'ref-rule72',
    domain: 'Commerce',
    name: 'Rule of 72 & Accounting Identity',
    symbolOrFormula: 'T_double ≈ 72 / r%  |  Assets = Liabilities + Equity',
    valueOrSummary: 'Compounding & balance-sheet equilibrium',
    note: 'Instant mental model for investment doubling and double-entry books.',
  },
  {
    id: 'ref-gdp',
    domain: 'Commerce',
    name: 'Macroeconomic Expenditure Identity',
    symbolOrFormula: 'GDP = C + I + G + (X − M)',
    valueOrSummary: 'Consumption + Investment + Govt + Net Exports',
    note: 'Measures total market value of final output inside national borders.',
  },
  {
    id: 'ref-bayes',
    domain: 'History & Logic',
    name: 'Bayes’ Updating & Occam’s Razor',
    symbolOrFormula: 'P(H|E) = P(E|H)P(H) / P(E)',
    valueOrSummary: 'Update prior beliefs proportionally to new evidence',
    note: 'Prefer simpler hypotheses with fewer unverified assumptions until evidence requires more.',
  },
];
