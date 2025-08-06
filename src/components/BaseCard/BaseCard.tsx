import React from 'react';
import PropTypes from 'prop-types';
import { BORDER_RADIUS, COLORS, SPACING } from '@/constants/theme';
import './BaseCard.css';

interface BaseCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'large' | 'highlighted' | 'transparent';
  padding?: keyof typeof SPACING;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  children,
  variant = 'default',
  padding = '2xl',
  className = '',
  onClick,
  style,
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: variant === 'transparent' ? 'transparent' : COLORS.background.card,
    borderRadius: BORDER_RADIUS.large,
    padding: `${SPACING[padding]}px`,
    ...style,
  };

  return (
    <div
      className={`base-card base-card--${variant} ${className}`}
      onClick={onClick}
      style={cardStyle}
    >
      {children}
    </div>
  );
};

BaseCard.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'large', 'highlighted', 'transparent']),
  padding: PropTypes.oneOf(Object.keys(SPACING) as Array<keyof typeof SPACING>),
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};