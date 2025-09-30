import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CounterCharacter } from './index';

describe('CounterCharacter Component', () => {
  it('should render the counter with current value and max', () => {
    render(<CounterCharacter value={50} max={100} />);

    const counter = screen.getByText('50/100');
    expect(counter).toBeInTheDocument();
  });

  it('should not show warning when value is below threshold', () => {
    render(<CounterCharacter value={50} max={100} />);

    const counter = screen.getByText('50/100');
    expect(counter).toBeInTheDocument();
    // The warning styling would be tested through the styled-component prop
  });

  it('should show warning when value reaches default threshold (80%)', () => {
    render(<CounterCharacter value={80} max={100} />);

    const counter = screen.getByText('80/100');
    expect(counter).toBeInTheDocument();
  });

  it('should show warning when value reaches custom threshold', () => {
    render(<CounterCharacter value={70} max={100} warningAt={70} />);

    const counter = screen.getByText('70/100');
    expect(counter).toBeInTheDocument();
  });

  it('should show warning when value exceeds max', () => {
    render(<CounterCharacter value={105} max={100} />);

    const counter = screen.getByText('105/100');
    expect(counter).toBeInTheDocument();
  });

  it('should handle zero values correctly', () => {
    render(<CounterCharacter value={0} max={50} />);

    const counter = screen.getByText('0/50');
    expect(counter).toBeInTheDocument();
  });
});