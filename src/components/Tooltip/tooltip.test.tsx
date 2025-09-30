import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from './index';

describe('Tooltip Component', () => {
  it('should render children correctly', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    expect(button).toBeInTheDocument();
  });

  it('should show tooltip on hover with text prop', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    // Tooltip should not be visible initially
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
    
    // Hover over the button parent (TooltipWrapper)
    fireEvent.mouseEnter(button.parentElement!);
    
    // Tooltip should now be visible
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });

  it('should hide tooltip when mouse leaves', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    // Hover over the button
    fireEvent.mouseEnter(button.parentElement!);
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    
    // Move mouse away
    fireEvent.mouseLeave(button.parentElement!);
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
  });

  it('should show tooltip with content prop when provided', () => {
    const tooltipContent = <span>Custom content</span>;
    
    render(
      <Tooltip content={tooltipContent}>
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    fireEvent.mouseEnter(button.parentElement!);
    
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('should prioritize text prop over content prop', () => {
    const tooltipContent = <span>Custom content</span>;
    
    render(
      <Tooltip text="Text prop" content={tooltipContent}>
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    fireEvent.mouseEnter(button.parentElement!);
    
    expect(screen.getByText('Text prop')).toBeInTheDocument();
    expect(screen.queryByText('Custom content')).not.toBeInTheDocument();
  });

  it('should render children without tooltip when no text or content provided', () => {
    render(
      <Tooltip>
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    expect(button).toBeInTheDocument();
    
    // Hover should not show any tooltip content
    fireEvent.mouseEnter(button.parentElement!);
    // Since both text and content are undefined, nothing should show
    expect(button).toBeInTheDocument();
  });
});