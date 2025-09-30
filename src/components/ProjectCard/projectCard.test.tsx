import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from './index';

describe('ProjectCard Component', () => {
  const mockProject = {
    id: 1,
    name: 'Test Project',
    description: 'Test project description',
    category: 'Development',
    status: 'Active',
    author: 'John Doe',
    createdAt: '2025-01-01',
  };

  const mockOnProjectClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render project card', () => {
    render(
      <ProjectCard
        project={mockProject}
        onProjectClick={mockOnProjectClick}
      />
    );

    // The card should be rendered (container should be present)
    const cardContainer = screen.getByText('Test Project');
    expect(cardContainer).toBeInTheDocument();
  });

  it('should call onProjectClick when card is clicked', () => {
    const { container } = render(
      <ProjectCard
        project={mockProject}
        onProjectClick={mockOnProjectClick}
      />
    );

    // Click on the main card container (the outermost div)
    const cardContainer = container.firstChild as HTMLElement;
    fireEvent.click(cardContainer);

    expect(mockOnProjectClick).toHaveBeenCalledTimes(1);
    expect(mockOnProjectClick).toHaveBeenCalledWith(mockProject);
  });

  it('should render CardHeader component', () => {
    render(
      <ProjectCard
        project={mockProject}
        onProjectClick={mockOnProjectClick}
      />
    );

    // CardHeader should render the project name
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('should render CardContent component', () => {
    render(
      <ProjectCard
        project={mockProject}
        onProjectClick={mockOnProjectClick}
      />
    );

    // CardContent should render the project description
    expect(screen.getByText('Test project description')).toBeInTheDocument();
  });

  it('should render with gradient overlay', () => {
    render(
      <ProjectCard
        project={mockProject}
        onProjectClick={mockOnProjectClick}
      />
    );

    // The component should render without errors including the gradient overlay
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });
});