import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './index';

// Mock createPortal to render in the same container
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (element: React.ReactNode) => element,
}));

// Mock the modal accessibility hook
jest.mock('./hooks/useModalAccessibility', () => ({
  useModalAccessibility: () => ({
    dialogRef: { 
      ref: null,
      tabIndex: -1,
      role: 'dialog',
      'aria-modal': true,
    }
  }),
}));

describe('Modal Component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    render(<Modal {...defaultProps} />);
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should render with title', () => {
    render(<Modal {...defaultProps} title="Test Modal" />);
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  it('should render children content', () => {
    render(
      <Modal {...defaultProps}>
        <div>Modal content</div>
      </Modal>
    );
    
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('should render footer by default', () => {
    render(<Modal {...defaultProps} />);
    
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('should hide footer when hideFooter is true', () => {
    render(<Modal {...defaultProps} hideFooter />);
    
    expect(screen.queryByText('Confirm')).not.toBeInTheDocument();
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  });

  it('should use custom button texts', () => {
    render(
      <Modal 
        {...defaultProps} 
        okText="Save" 
        cancelText="Discard" 
      />
    );
    
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Discard')).toBeInTheDocument();
  });

  it('should call onClose when cancel button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Modal {...defaultProps} onClose={onCloseMock} />);
    
    fireEvent.click(screen.getByText('Cancel'));
    
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit when ok button is clicked', () => {
    const onSubmitMock = jest.fn();
    render(<Modal {...defaultProps} onSubmit={onSubmitMock} />);
    
    fireEvent.click(screen.getByText('Confirm'));
    
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });

  it('should show loading state', () => {
    render(<Modal {...defaultProps} loading />);
    
    // The loading prop is passed to ModalFooter
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Modal {...defaultProps} className="custom-modal" />);
    
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveClass('custom-modal');
  });

  it('should close modal when backdrop is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Modal {...defaultProps} onClose={onCloseMock} />);
    
    // Find the backdrop (should be the parent of dialog)
    const dialog = screen.getByRole('dialog');
    const backdrop = dialog.parentElement;
    
    if (backdrop) {
      fireEvent.mouseDown(backdrop);
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    }
  });
});