/**
 * SSOT - Single Source of Truth pour le thème
 * Toutes les constantes de design doivent être définies ici
 */

// Breakpoints responsive
export const BREAKPOINTS = {
  MOBILE: 390,
  TABLET: 768,
  DESKTOP: 1440,
  WIDE: 1920,
} as const;

// Système de spacing unifié
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '3.5xl': 40,
  '4xl': 48,
  '5xl': 64,
  '6xl': 96,
  '7xl': 128,
  '8xl': 249,
} as const;

// Dimensions communes
export const DIMENSIONS = {
  // Containers
  containerPadding: {
    mobile: `${SPACING['4xl']}px ${SPACING.xl}px`,
    desktop: `${SPACING['5xl']}px`,
  },
  maxWidth: {
    content: '1200px',
    container: '1440px',
    wide: '1920px',
  },
  
  // Common widths
  divider: {
    mobile: '1',
    desktop: '200px',
  },
  
  // Images dimensions
  logo: {
    praxitherm: {
      mobile: { width: '179.78px', height: '33.6px' },
      desktop: { width: '224.73px', height: '42px' },
    },
    partner: {
      mobile: { width: '66px', height: '48px' },
      desktop: { width: '82.5px', height: '60px' },
    },
  },
  
  // Form elements
  input: {
    height: '48px',
    padding: `${SPACING.lg}px`,
  },
  
  // Sections
  section: {
    minWidth: {
      mobile: '390px',
    },
    padding: {
      mobile: `${SPACING['4xl']}px ${SPACING.xl}px`,
      desktop: `${SPACING['5xl']}px`,
    },
  },
} as const;

// Couleurs des icônes (utilisées dans les composants SVG)
export const ICON_COLORS = {
  primary: '#2B2E48',
  secondary: '#19161D',
  tertiary: '#959595',
  white: '#FFFFFF',
  black: '#000000',
} as const;

// Couleurs du Dashboard et graphiques
export const COLORS = {
  // Couleurs principales
  primary: '#52705F',      // Vert Monkey-co
  secondary: '#E67E22',    // Orange
  tertiary: '#3498db',     // Bleu
  quaternary: '#9b59b6',   // Violet
  
  // Backgrounds
  background: {
    white: '#ffffff',
    beige: '#f7fafc',
    dark: '#1a202c',
    card: '#ffffff',
    sidebar: '#2d3748',
  },
  
  // Textes
  text: {
    primary: '#2d3748',
    secondary: '#718096',
    light: '#a0aec0',
    dark: '#1a202c',
  },
  
  // États
  success: '#48bb78',
  warning: '#ed8936',
  danger: '#f56565',
  info: '#4299e1',
  
  // Graphiques
  chart: {
    primary: '#52705F',
    secondary: '#E67E22',
    tertiary: '#3498db',
    quaternary: '#9b59b6',
    quinary: '#1abc9c',
    senary: '#f39c12',
  },
} as const;

// Border radius standardisés
export const BORDER_RADIUS = {
  none: '0px',
  small: '4px',
  medium: '8px',
  large: '12px',
  xlarge: '16px',
  xxlarge: '24px',
  full: '9999px',
} as const;

// Animation durations
export const ANIMATIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

// Helper function pour obtenir le breakpoint actuel
export const getBreakpoint = (width: number): keyof typeof BREAKPOINTS => {
  if (width < BREAKPOINTS.TABLET) return 'MOBILE';
  if (width < BREAKPOINTS.DESKTOP) return 'TABLET';
  if (width < BREAKPOINTS.WIDE) return 'DESKTOP';
  return 'WIDE';
};

// Helper function pour responsive
export const isDesktop = (width: number): boolean => width >= BREAKPOINTS.DESKTOP;
export const isMobile = (width: number): boolean => width < BREAKPOINTS.DESKTOP;
export const isTablet = (width: number): boolean => 
  width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.DESKTOP;