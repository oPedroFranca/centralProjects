import { render, screen } from '@testing-library/react'

import { Divider } from './';

describe('Divider Component', () => {
  test('renders with default color and thickness', () => {
    render(<Divider />);

    const divider = screen.getByTestId('divider');

    expect(divider).toHaveClass('bg-white/20');
    expect(divider).toHaveClass('h-[1px]');
  });

  test('renders with custom color and thickness', () => {
    render(<Divider color="red-500" thickness="h-[2px]" />);
 
    const divider = screen.getByTestId('divider');

    expect(divider).toHaveClass('bg-red-500');
    expect(divider).toHaveClass('h-[2px]');
  });

  test('renders with custom additional props', () => {
    render(<Divider color="blue-500" thickness="h-[2px]" className="custom-class" />);

    const divider = screen.getByTestId('divider');
    
    expect(divider).toHaveClass('bg-blue-500');
    expect(divider).toHaveClass('h-[2px]');
    expect(divider).toHaveClass('custom-class');
  });
});
