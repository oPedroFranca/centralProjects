import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModalHeader } from './index';

describe('ModalHeader Component', () => {
  it('should render header with close button', () => {
    render(<ModalHeader />);
    
    const closeButton = screen.getByLabelText('Close');
    expect(closeButton).toBeInTheDocument();
  });

  it('should render with title', () => {
    render(<ModalHeader title="Test Title" />);
    
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
    
    const closeButton = screen.getByLabelText('Close');
    expect(closeButton).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<ModalHeader onClose={onCloseMock} />);
    
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should render without onClose function', () => {
    render(<ModalHeader title="Test Title" />);
    
    const closeButton = screen.getByLabelText('Close');
    expect(closeButton).toBeInTheDocument();
    
    // Should not throw error when clicked without onClose
    fireEvent.click(closeButton);
  });

  it('should render close icon', () => {
    render(<ModalHeader />);
    
    const closeButton = screen.getByLabelText('Close');
    expect(closeButton).toBeInTheDocument();
    
    // Check if the IoClose icon is rendered (it should have the close button)
    expect(closeButton.querySelector('svg')).toBeInTheDocument();
  });
});