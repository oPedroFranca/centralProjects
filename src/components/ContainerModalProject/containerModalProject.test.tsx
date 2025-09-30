import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ContainerModalProject } from './index';

describe('ContainerModalProject Component', () => {
  it('should render children correctly', () => {
    render(
      <ContainerModalProject>
        <div>Test content</div>
      </ContainerModalProject>
    );

    const childContent = screen.getByText('Test content');
    expect(childContent).toBeInTheDocument();
  });

  it('should render with title', () => {
    render(
      <ContainerModalProject title="Test Title">
        <div>Content</div>
      </ContainerModalProject>
    );

    const title = screen.getByText('Test Title');
    const content = screen.getByText('Content');
    
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('should render with icon', () => {
    const testIcon = <span data-testid="test-icon">📝</span>;
    render(
      <ContainerModalProject icon={testIcon}>
        <div>Content</div>
      </ContainerModalProject>
    );

    const icon = screen.getByTestId('test-icon');
    const content = screen.getByText('Content');
    
    expect(icon).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('should render with both title and icon', () => {
    const testIcon = <span data-testid="test-icon">📝</span>;
    render(
      <ContainerModalProject title="Test Title" icon={testIcon}>
        <div>Content</div>
      </ContainerModalProject>
    );

    const title = screen.getByText('Test Title');
    const icon = screen.getByTestId('test-icon');
    const content = screen.getByText('Content');
    
    expect(title).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('should render without header when no title or icon provided', () => {
    render(
      <ContainerModalProject>
        <div>Only content</div>
      </ContainerModalProject>
    );

    const content = screen.getByText('Only content');
    expect(content).toBeInTheDocument();
  });

  it('should render multiple children', () => {
    render(
      <ContainerModalProject title="Container Title">
        <div>First child</div>
        <div>Second child</div>
      </ContainerModalProject>
    );

    const title = screen.getByText('Container Title');
    const firstChild = screen.getByText('First child');
    const secondChild = screen.getByText('Second child');
    
    expect(title).toBeInTheDocument();
    expect(firstChild).toBeInTheDocument();
    expect(secondChild).toBeInTheDocument();
  });
});