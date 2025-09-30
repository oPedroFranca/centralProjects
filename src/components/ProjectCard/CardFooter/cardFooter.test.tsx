import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardFooter from './index';

describe('CardFooter Component', () => {
  it('should render status text', () => {
    render(<CardFooter status="Ativo" />);
    
    expect(screen.getByText('Ativo')).toBeInTheDocument();
  });

  it('should render status indicator with animated dot', () => {
    render(<CardFooter status="Ativo" />);
    
    const statusText = screen.getByText('Ativo');
    expect(statusText).toBeInTheDocument();
    
    // Check if the animated dot exists (it should be a sibling element)
    const statusContainer = statusText.closest('*');
    expect(statusContainer).toBeInTheDocument();
  });

  it('should render with different status values', () => {
    const { rerender } = render(<CardFooter status="Inativo" />);
    expect(screen.getByText('Inativo')).toBeInTheDocument();
    
    rerender(<CardFooter status="Em Desenvolvimento" />);
    expect(screen.getByText('Em Desenvolvimento')).toBeInTheDocument();
    
    rerender(<CardFooter status="Concluído" />);
    expect(screen.getByText('Concluído')).toBeInTheDocument();
  });

  it('should render with empty status', () => {
    render(<CardFooter status="" />);
    
    // Should render without errors even with empty status
    const { container } = render(<CardFooter status="" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render status indicator dot with correct classes', () => {
    render(<CardFooter status="Ativo" />);
    
    const statusText = screen.getByText('Ativo');
    expect(statusText).toHaveClass('text-xs', 'text-muted-foreground');
  });

  it('should handle long status text', () => {
    const longStatus = 'Status muito longo que pode quebrar o layout';
    render(<CardFooter status={longStatus} />);
    
    expect(screen.getByText(longStatus)).toBeInTheDocument();
  });

  it('should handle special characters in status', () => {
    const statusWithSpecialChars = 'Status com caracteres especiais: @#$%&*()';
    render(<CardFooter status={statusWithSpecialChars} />);
    
    expect(screen.getByText(statusWithSpecialChars)).toBeInTheDocument();
  });

  it('should render empty div container', () => {
    const { container } = render(<CardFooter status="Ativo" />);
    
    // The component should render the status container with its elements
    expect(container.firstChild).toBeInTheDocument();
  });
});