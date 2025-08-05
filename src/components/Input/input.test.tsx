import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './';

describe('Input Component', () => {
  test('renders with default type and placeholder', () => {
    render(<Input placeholder="Enter your text" />);

    const inputElement = screen.getByPlaceholderText(/enter your text/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('renders with password type and shows/hides password when clicking the eye icon', () => {
    render(<Input type="password" placeholder="Enter your password" />);

    const inputElement = screen.getByPlaceholderText(/enter your password/i);
    const eyeIcon = screen.getByTestId('eye-icon');

    // Verifica se o input está com o tipo 'password' inicialmente
    expect(inputElement).toHaveAttribute('type', 'password');

    // Clica no ícone para mostrar a senha
    fireEvent.click(eyeIcon);
    expect(inputElement).toHaveAttribute('type', 'text'); // Deve mudar para 'text'

    // Clica novamente para esconder a senha
    fireEvent.click(eyeIcon);
    expect(inputElement).toHaveAttribute('type', 'password'); // Deve voltar para 'password'
  });

  test('shows error message when error prop is passed', () => {
    render(<Input error="This is an error message" placeholder="Enter your text" />);

    const errorMessage = screen.getByText(/this is an error message/i);
    expect(errorMessage).toBeInTheDocument();
    
    const inputElement = screen.getByPlaceholderText(/enter your text/i);
    expect(inputElement).toHaveClass('border-red-400/50');
  });

  test('displays the left icon when leftIcon prop is passed', () => {
    render(<Input leftIcon={<div data-testid="left-icon" />} placeholder="Enter your text" />);

    const leftIcon = screen.getByTestId('left-icon');
    expect(leftIcon).toBeInTheDocument();
  });

  test('renders the alert icon when error is passed and focuses on the right position', () => {
    render(<Input error="This is an error message" placeholder="Enter your text" />);

    const alertIcon = screen.getByTestId('alert-icon');
    expect(alertIcon).toBeInTheDocument();
  });
});
