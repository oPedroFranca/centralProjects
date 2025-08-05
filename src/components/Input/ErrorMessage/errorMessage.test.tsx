import { render, screen } from '@testing-library/react';
import ErrorMessage from '.';

describe('ErrorMessage Component', () => {
  test('renders error message correctly', () => {
    const message = "This is an error message";

    render(<ErrorMessage message={message} />);

    const errorMessage = screen.getByText(message);
    expect(errorMessage).toBeInTheDocument();

    const alertIcon = screen.getByTestId('alert-icon');
    expect(alertIcon).toBeInTheDocument();

    expect(errorMessage).toHaveClass('text-red-400');
  });
});
