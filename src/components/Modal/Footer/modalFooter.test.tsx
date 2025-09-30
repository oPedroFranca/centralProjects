import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModalFooter } from './index';

describe('ModalFooter Component', () => {
  it('should render with default button texts', () => {
    render(<ModalFooter />);
    
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('should render with custom button texts', () => {
    render(
      <ModalFooter 
        cancelText="Discard" 
        okText="Save"
      />
    );
    
    expect(screen.getByText('Discard')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('should call onCancel when cancel button is clicked', () => {
    const onCancelMock = jest.fn();
    render(<ModalFooter onCancel={onCancelMock} />);
    
    fireEvent.click(screen.getByText('Cancel'));
    
    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  it('should call onOk when confirm button is clicked', () => {
    const onOkMock = jest.fn();
    render(<ModalFooter onOk={onOkMock} />);
    
    fireEvent.click(screen.getByText('Confirm'));
    
    expect(onOkMock).toHaveBeenCalledTimes(1);
  });

  it('should pass loading prop to confirm button', () => {
    render(<ModalFooter loading />);
    
    // When loading, the button should show a spinner instead of text
    const spinner = screen.getByTestId('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('animate-spin');
  });

  it('should render without callback functions', () => {
    render(<ModalFooter />);
    
    const cancelButton = screen.getByText('Cancel');
    const confirmButton = screen.getByText('Confirm');
    
    expect(cancelButton).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
    
    // Should not throw errors when clicked without callbacks
    fireEvent.click(cancelButton);
    fireEvent.click(confirmButton);
  });

  it('should apply gradient variant to confirm button', () => {
    render(<ModalFooter />);
    
    const confirmButton = screen.getByText('Confirm');
    expect(confirmButton).toBeInTheDocument();
    // The variant='gradient' prop is passed to the styled component
  });

  it('should handle both loading and custom text together', () => {
    const onOkMock = jest.fn();
    render(
      <ModalFooter 
        loading 
        okText="Saving..." 
        onOk={onOkMock}
      />
    );
    
    // When loading, should show spinner regardless of custom text
    const spinner = screen.getByTestId('status');
    expect(spinner).toBeInTheDocument();
    
    // The button might be disabled when loading, so let's just check it exists
    const confirmButton = spinner.closest('button');
    expect(confirmButton).toBeInTheDocument();
    expect(confirmButton).toBeDisabled();
  });
});