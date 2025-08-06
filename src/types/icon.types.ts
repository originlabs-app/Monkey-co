/**
 * Types communs pour toutes les icônes
 * Remplace temporairement les 'any' dans les icônes générées
 */

export interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  color?: string;
  fill?: string;
  stroke?: string;
}

// Pour les icônes qui ont des props spécifiques
export interface IconWithColorProps extends IconProps {
  color1?: string;
  color2?: string;
  color3?: string;
}