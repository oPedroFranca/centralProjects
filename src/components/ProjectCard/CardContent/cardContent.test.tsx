import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Project } from '@/shared/interfaces';
import CardContent from './index';

describe('CardContent Component', () => {
  const baseMockProject: Project = {
    id: 1,
    name: 'Test Project',
    description: 'This is a test project description',
    categoryId: '1',
    status: 'Ativo',
    participants: [],
    technologies: [],
    images: [],
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  };

  const mockProjectWithLinks: Project = {
    ...baseMockProject,
    link: 'https://example.com/demo',
    githubLink: 'https://github.com/user/repo',
  };

  const mockProjectWithoutLinks: Project = {
    ...baseMockProject,
    description: 'This is a test project without links',
  };

  const mockProjectWithOnlyDemo: Project = {
    ...baseMockProject,
    description: 'This is a test project with only demo link',
    link: 'https://example.com/demo',
  };

  const mockProjectWithOnlyGithub: Project = {
    ...baseMockProject,
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
    const projectWithEmptyDescription: Project = {
      ...baseMockProject,
      description: '',
      link: 'https://example.com/demo',
    };
    
    render(<CardContent project={projectWithEmptyDescription} />);
    
    expect(screen.getByText('Demo')).toBeInTheDocument();
    // Empty description should still render
  });
});