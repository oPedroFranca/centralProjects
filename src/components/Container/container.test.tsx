import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Container } from './index';

describe('Container Component', () => {
  it('should render children correctly', () => {
    render(
      <Container>
        <div>Test content</div>
      </Container>
    );

    const childContent = screen.getByText('Test content');
    expect(childContent).toBeInTheDocument();
  });

  it('should render multiple children', () => {
    render(
      <Container>
        <div>First child</div>
        <div>Second child</div>
      </Container>
    );

    const firstChild = screen.getByText('First child');
    const secondChild = screen.getByText('Second child');
    
    expect(firstChild).toBeInTheDocument();
    expect(secondChild).toBeInTheDocument();
  });

  it('should render with empty children', () => {
    const { container } = render(<Container>{null}</Container>);
    expect(container.firstChild).toBeInTheDocument();
  });
});