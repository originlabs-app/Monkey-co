import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '@/constants/theme';

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: keyof typeof COLORS.text;
  className?: string;
  style?: React.CSSProperties;
}

export const Title: React.FC<TitleProps> = ({
  children,
  level = 2,
  color = 'primary',
  className = '',
  style,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const titleStyle: React.CSSProperties = {
    color: COLORS.text[color],
    fontFamily: 'var(--text-content-feature-strong-font-family)',
    fontWeight: 'var(--text-content-feature-strong-font-weight)',
    ...style,
  };

  return (
    <Tag className={`title title--h${level} ${className}`} style={titleStyle}>
      {children}
    </Tag>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  color: PropTypes.oneOf(Object.keys(COLORS.text) as Array<keyof typeof COLORS.text>),
  className: PropTypes.string,
  style: PropTypes.object,
};