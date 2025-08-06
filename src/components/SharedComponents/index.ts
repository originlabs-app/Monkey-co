/**
 * Composants partagés entre Landing Page et Dashboard
 * Principe SSOT : Un seul endroit pour les composants réutilisables
 */

// Composants de base
export { Button } from '../Button';
export { BaseCard } from '../BaseCard';
export { LanguageSwitcher } from '../LanguageSwitcher';

// Typography components
export { Title } from '../Typography/Title';
export { Subtitle } from '../Typography/Subtitle';
export { Text } from '../Typography/Text';

// Layout components
export { Container } from '../Layout/Container';
export { Section } from '../Layout/Section';
export { Grid } from '../Layout/Grid';

// Feedback components
export { Badge } from '../Badge';
export { Progress } from '../Progress';

// Constants réutilisables
export * from '@/constants/theme';
export * from '@/constants/links';

// Hooks partagés
export { useResponsiveStyles } from '@/hooks/useResponsiveStyles';
export { useWindowWidth } from '@/breakpoints';