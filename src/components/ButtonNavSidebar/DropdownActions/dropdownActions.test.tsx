import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { DropdownActions } from './index';

describe('DropdownActions Component', () => {
  it('should render the dropdown trigger button', () => {
    render(<DropdownActions />);

    const triggerButton = screen.getByRole('button', { name: /opções do item/i });
    expect(triggerButton).toBeInTheDocument();
  });

  it('should render dropdown menu when trigger is clicked', () => {
    render(<DropdownActions />);

    const triggerButton = screen.getByRole('button', { name: /opções do item/i });
    fireEvent.click(triggerButton);

    expect(screen.getByText('Editar')).toBeInTheDocument();
    expect(screen.getByText('Excluir')).toBeInTheDocument();
  });

  it('should call onEdit when Edit option is clicked', () => {
    const onEdit = jest.fn();
    render(<DropdownActions onEdit={onEdit} />);

    const triggerButton = screen.getByRole('button', { name: /opções do item/i });
    fireEvent.click(triggerButton);

    const editButton = screen.getByText('Editar');
    fireEvent.click(editButton);

    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  it('should call onDelete when Delete option is clicked', () => {
    const onDelete = jest.fn();
    render(<DropdownActions onDelete={onDelete} />);

    const triggerButton = screen.getByRole('button', { name: /opções do item/i });
    fireEvent.click(triggerButton);

    const deleteButton = screen.getByText('Excluir');
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it('should close dropdown when clicking outside', () => {
    render(<DropdownActions />);

    const triggerButton = screen.getByRole('button', { name: /opções do item/i });
    fireEvent.click(triggerButton);

    // Verifica se o dropdown está aberto
    expect(screen.getByText('Editar')).toBeInTheDocument();

    // Simula clique fora do dropdown
    fireEvent.mouseDown(document.body);

    // Verifica se o dropdown foi fechado
    expect(screen.queryByText('Editar')).not.toBeInTheDocument();
  });

  it('should not call onEdit or onDelete when functions are not provided', () => {
    render(<DropdownActions />);

    const triggerButton = screen.getByRole('button', { name: /opções do item/i });
    fireEvent.click(triggerButton);

    const editButton = screen.getByText('Editar');
    const deleteButton = screen.getByText('Excluir');

    // Não deve gerar erro ao clicar sem as funções
    expect(() => {
      fireEvent.click(editButton);
      fireEvent.click(deleteButton);
    }).not.toThrow();
  });

  it('should have correct styling classes for trigger button', () => {
    render(<DropdownActions />);

    const triggerButton = screen.getByRole('button', { name: /opções do item/i });

    expect(triggerButton).toHaveClass('h-6');
    expect(triggerButton).toHaveClass('w-6');
    expect(triggerButton).toHaveClass('opacity-0');
    expect(triggerButton).toHaveClass('group-hover:opacity-100');
  });

  it('should have destructive styling for delete option', () => {
    render(<DropdownActions />);

    const triggerButton = screen.getByRole('button', { name: /opções do item/i });
    fireEvent.click(triggerButton);

    const deleteButton = screen.getByText('Excluir').closest('button');

    expect(deleteButton).toHaveClass('text-destructive');
    expect(deleteButton).toHaveClass('focus:text-destructive');
    expect(deleteButton).toHaveClass('focus:bg-destructive/10');
  });

  it('should render with correct icons', () => {
    render(<DropdownActions />);

    const triggerButton = screen.getByRole('button', { name: /opções do item/i });
    fireEvent.click(triggerButton);

    // Verifica se os ícones estão presentes nos elementos SVG
    const editIcon = screen.getByText('Editar').closest('button')?.querySelector('svg');
    const deleteIcon = screen.getByText('Excluir').closest('button')?.querySelector('svg');

    expect(editIcon).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
  });
});
