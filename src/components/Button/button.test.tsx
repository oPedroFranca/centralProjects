import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../index';

// Mock SpinLoading component
jest.mock('../SpinLoading', () => ({
  SpinLoading: () => <div data-testid="spin-loading">Loading...</div>
}));

describe("Button Component", () => {
  it("should render the button with primary variant by default", () => {
    const { getByRole } = render(<Button>Click Me</Button>);
    const button = getByRole('button', { name: /Click Me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it("should render the button with secondary variant", () => {
    const { getByRole } = render(<Button variant="secondary">Click Me</Button>);
    const button = getByRole('button', { name: /Click Me/i });
    expect(button).toBeInTheDocument();
  });

  it("should render the button with gradient variant", () => {
    const { getByRole } = render(<Button variant="gradient">Click Me</Button>);
    const button = getByRole('button', { name: /Click Me/i });
    expect(button).toBeInTheDocument();
  });

  it("should handle click events", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click Me</Button>);
    const button = getByRole('button');
    
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should show loading spinner when loading is true", () => {
    const { getByTestId, queryByText } = render(<Button loading={true}>Click Me</Button>);
    
    expect(getByTestId('spin-loading')).toBeInTheDocument();
    expect(queryByText('Click Me')).not.toBeInTheDocument();
  });

  it("should disable button when loading is true", () => {
    const { getByRole } = render(<Button loading={true}>Click Me</Button>);
    const button = getByRole('button');
    
    expect(button).toBeDisabled();
  });

  it("should disable button when disabled prop is true", () => {
    const { getByRole } = render(<Button disabled={true}>Click Me</Button>);
    const button = getByRole('button');
    
    expect(button).toBeDisabled();
  });

  it("should disable button when both loading and disabled are true", () => {
    const { getByRole } = render(<Button loading={true} disabled={true}>Click Me</Button>);
    const button = getByRole('button');
    
    expect(button).toBeDisabled();
  });

  it("should pass through additional props", () => {
    const { getByRole } = render(<Button type="submit" id="test-button">Submit</Button>);
    const button = getByRole('button');
    
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('id', 'test-button');
  });
});

describe('Button Styles', () => {
  it('should apply primary styles', () => {
    const { container } = render(<Button variant="primary">Primary</Button>);
    const button = container.firstChild as HTMLElement;
    
    // Check if the styled component is rendered
    expect(button).toBeTruthy();
    expect(button.tagName).toBe('BUTTON');
  });

  it('should apply secondary styles', () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>);
    const button = container.firstChild as HTMLElement;
    
    expect(button).toBeTruthy();
    expect(button.tagName).toBe('BUTTON');
  });

  it('should apply gradient styles', () => {
    const { container } = render(<Button variant="gradient">Gradient</Button>);
    const button = container.firstChild as HTMLElement;
    
    expect(button).toBeTruthy();
    expect(button.tagName).toBe('BUTTON');
  });

  it('should apply default primary variant when no variant is specified', () => {
    const { container } = render(<Button>Default</Button>);
    const button = container.firstChild as HTMLElement;
    
    expect(button).toBeTruthy();
    expect(button.tagName).toBe('BUTTON');
  });
});