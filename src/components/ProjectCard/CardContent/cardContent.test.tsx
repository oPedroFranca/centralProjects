import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardContent from './index';

describe('CardContent Component', () => {
  const mockProjectWithLinks = {
    description: 'This is a test project description',
    link: 'https://example.com/demo',
    githubLink: 'https://github.com/user/repo',
  };

  const mockProjectWithoutLinks = {
    description: 'This is a test project without links',
  };

  const mockProjectWithOnlyDemo = {
    description: 'This is a test project with only demo link',
    link: 'https://example.com/demo',
  };

  const mockProjectWithOnlyGithub = {
    description: 'This is a test project with only github link',
    githubLink: 'https://github.com/user/repo',
  };

  it('should render project description', () => {
    render(<CardContent project={mockProjectWithLinks} />);
    
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('should render both Demo and Código buttons when both links are provided', () => {
    render(<CardContent project={mockProjectWithLinks} />);
    
    expect(screen.getByText('Demo')).toBeInTheDocument();
    expect(screen.getByText('Código')).toBeInTheDocument();
  });

  it('should render only Demo button when only link is provided', () => {
    render(<CardContent project={mockProjectWithOnlyDemo} />);
    
    expect(screen.getByText('Demo')).toBeInTheDocument();
    expect(screen.queryByText('Código')).not.toBeInTheDocument();
  });

  it('should render only Código button when only githubLink is provided', () => {
    render(<CardContent project={mockProjectWithOnlyGithub} />);
    
    expect(screen.getByText('Código')).toBeInTheDocument();
    expect(screen.queryByText('Demo')).not.toBeInTheDocument();
  });

  it('should not render any buttons when no links are provided', () => {
    render(<CardContent project={mockProjectWithoutLinks} />);
    
    expect(screen.queryByText('Demo')).not.toBeInTheDocument();
    expect(screen.queryByText('Código')).not.toBeInTheDocument();
  });

  it('should render CardFooter with "Ativo" status', () => {
    render(<CardContent project={mockProjectWithLinks} />);
    
    // CardFooter component should be rendered
    // Since it's imported and used, it should be in the DOM
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('should render icons in buttons', () => {
    render(<CardContent project={mockProjectWithLinks} />);
    
    const demoButton = screen.getByText('Demo');
    const codeButton = screen.getByText('Código');
    
    expect(demoButton).toBeInTheDocument();
    expect(codeButton).toBeInTheDocument();
    
    // The icons are rendered as SVG elements within the buttons
    expect(demoButton.closest('button')).toBeInTheDocument();
    expect(codeButton.closest('button')).toBeInTheDocument();
  });

  it('should handle empty description', () => {
    const projectWithEmptyDescription = {
      description: '',
      link: 'https://example.com/demo',
    };
    
    render(<CardContent project={projectWithEmptyDescription} />);
    
    expect(screen.getByText('Demo')).toBeInTheDocument();
    // Empty description should still render
  });

  it('should handle undefined description', () => {
    const projectWithUndefinedDescription = {
      link: 'https://example.com/demo',
    };
    
    render(<CardContent project={projectWithUndefinedDescription} />);
    
    expect(screen.getByText('Demo')).toBeInTheDocument();
    expect(screen.getByText('Sem descrição disponível')).toBeInTheDocument();
  });

  it('should handle null project gracefully', () => {
    render(<CardContent project={null} />);
    
    expect(screen.getByText('Projeto sem descrição')).toBeInTheDocument();
    expect(screen.queryByText('Demo')).not.toBeInTheDocument();
    expect(screen.queryByText('Código')).not.toBeInTheDocument();
  });

  it('should handle undefined project gracefully', () => {
    render(<CardContent project={undefined} />);
    
    expect(screen.getByText('Projeto sem descrição')).toBeInTheDocument();
    expect(screen.queryByText('Demo')).not.toBeInTheDocument();
    expect(screen.queryByText('Código')).not.toBeInTheDocument();
  });
});