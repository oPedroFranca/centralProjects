import { render, screen } from '@testing-library/react';
import { SpinLoading } from '.';

describe('SpinLoading Component', () => {
  test('renders the SpinLoading component correctly', () => {
    render(<SpinLoading />);

    const spinLoadingElement = screen.getByTestId('status');

    expect(spinLoadingElement).toHaveClass('animate-spin');
    expect(spinLoadingElement).toHaveClass('h-5');
    expect(spinLoadingElement).toHaveClass('w-5');
    expect(spinLoadingElement).toHaveClass('border-2');
    expect(spinLoadingElement).toHaveClass('border-t-2');
    expect(spinLoadingElement).toHaveClass('border-l-transparent');
    expect(spinLoadingElement).toHaveClass('rounded-full');
  });
});
