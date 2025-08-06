import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with text', () => {
    const { container } = render(<Button text="Click me" size="md" />);
    const textElement = container.querySelector('.div');
    expect(textElement?.textContent).toBe('Click me');
  });

  it('renders without text when not provided', () => {
    const { container } = render(<Button />);
    const button = container.querySelector('.button');
    expect(button).toBeInTheDocument();
  });

  it('handles click event', () => {
    const handleClick = vi.fn();
    const { container } = render(<Button text="Click me" onClick={handleClick} />);
    
    const button = container.querySelector('.button');
    if (button) {
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }
  });

  it('applies correct variant classes', () => {
    const { container } = render(<Button text="Test" variant="primary" />);
    const button = container.querySelector('.button');
    expect(button).toHaveClass('primary');
  });

  it('applies size classes', () => {
    const { container } = render(<Button text="Test" size="md" />);
    const button = container.querySelector('.button');
    expect(button).toHaveClass('md');
  });
});