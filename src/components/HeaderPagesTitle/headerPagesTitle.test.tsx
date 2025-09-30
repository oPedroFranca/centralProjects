import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeaderPagesTitle } from './index';

describe('HeaderPagesTitle Component', () => {
  it('should render the title and description correctly', () => {
    render(<HeaderPagesTitle title="Test Page Title" description="Test description" />);

    const title = screen.getByText('Test Page Title');
    const description = screen.getByText('Test description');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should render with empty title and description', () => {
    render(<HeaderPagesTitle title="" description="" />);

    const { container } = render(<HeaderPagesTitle title="" description="" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render with long title and description', () => {
    const longTitle = 'This is a very long title that should still render correctly';
    const longDescription = 'This is a very long description that should render correctly';
    render(<HeaderPagesTitle title={longTitle} description={longDescription} />);

    const title = screen.getByText(longTitle);
    const description = screen.getByText(longDescription);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should render with buttons', () => {
    const testButton = <button>Test Button</button>;
    render(
      <HeaderPagesTitle 
        title="Test Title" 
        description="Test Description" 
        buttons={testButton} 
      />
    );

    const title = screen.getByText('Test Title');
    const description = screen.getByText('Test Description');
    const button = screen.getByText('Test Button');
    
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should render without buttons when not provided', () => {
    render(<HeaderPagesTitle title="Test Title" description="Test Description" />);

    const title = screen.getByText('Test Title');
    const description = screen.getByText('Test Description');
    
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});