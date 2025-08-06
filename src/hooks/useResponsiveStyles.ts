import { SPACING, BREAKPOINTS, isMobile, isDesktop } from '@/constants/theme';

/**
 * Hook pour centraliser la logique de styles responsive
 * Évite la répétition du pattern isMobile(screenWidth) ? ... : isDesktop(screenWidth) ? ...
 */
export const useResponsiveStyles = (screenWidth: number) => {
  const mobile = isMobile(screenWidth);
  const desktop = isDesktop(screenWidth);

  return {
    // Padding de section
    sectionPadding: mobile 
      ? `${SPACING['4xl']}px ${SPACING.xl}px` 
      : desktop 
        ? `${SPACING['5xl']}px`
        : undefined,
    
    // Padding de conteneur
    containerPadding: mobile
      ? `${SPACING.xl}px`
      : desktop
        ? `${SPACING['3xl']}px`
        : undefined,
    
    // Display
    display: mobile ? 'flex' : desktop ? 'inline-flex' : undefined,
    
    // Flex direction
    flexDirection: mobile ? 'column' as const : undefined,
    
    // Alignement du texte
    textAlign: mobile ? 'center' as const : undefined,
    
    // Largeur
    fullWidth: mobile || desktop ? '100%' : undefined,
    
    // Gap
    gap: mobile
      ? `${SPACING.xl}px`
      : desktop
        ? `${SPACING['2xl']}px`
        : undefined,
    
    // Font sizes
    titleFontSize: mobile ? '28px' : desktop ? '48px' : undefined,
    titleLineHeight: mobile ? '36px' : desktop ? '56px' : undefined,
    
    subtitleFontSize: mobile ? '18px' : desktop ? '24px' : undefined,
    subtitleLineHeight: mobile ? '26px' : desktop ? '32px' : undefined,
    
    // Min width
    minWidth: mobile ? `${BREAKPOINTS.MOBILE}px` : undefined,
    
    // Helpers
    isMobile: mobile,
    isDesktop: desktop,
    screenWidth,
  };
};

/**
 * Hook pour styles de section spécifiques
 */
export const useSectionStyles = (screenWidth: number) => {
  const base = useResponsiveStyles(screenWidth);
  
  return {
    ...base,
    wrapper: {
      alignSelf: 'stretch' as const,
      padding: base.sectionPadding,
      width: '100%',
    },
    container: {
      display: base.display,
      flexDirection: base.flexDirection,
      alignItems: 'center' as const,
      gap: base.gap,
      width: base.fullWidth,
    },
    title: {
      fontSize: base.titleFontSize,
      lineHeight: base.titleLineHeight,
      textAlign: base.textAlign,
    },
    subtitle: {
      fontSize: base.subtitleFontSize,
      lineHeight: base.subtitleLineHeight,
      textAlign: base.textAlign,
    },
  };
};

/**
 * Hook pour styles de carte/conteneur
 */
export const useCardStyles = (screenWidth: number) => {
  const base = useResponsiveStyles(screenWidth);
  
  return {
    ...base,
    card: {
      padding: base.containerPadding,
      width: base.fullWidth,
      display: base.display,
    },
    content: {
      flexDirection: base.flexDirection,
      gap: base.gap,
      alignItems: base.isMobile ? 'center' as const : 'flex-start' as const,
    },
  };
};