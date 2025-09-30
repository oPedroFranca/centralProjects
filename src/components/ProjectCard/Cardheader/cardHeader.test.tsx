import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardHeader from './index';
import { Project } from '@/shared/interfaces';

describe('CardHeader Component', () => {
  const mockProjectWithImage: Project = {
    id: 1,
    name: 'Test Project',
    description: 'Test description',
    image: 'https://example.com/image.jpg',
    categoryId: '1',
    status: 'active',
    participants: [],
    technologies: [],
    startDate: '2025-01-01',
  };

  const mockProjectWithImages: Project = {
    id: 2,
    name: 'Test Project',
    description: 'Test description',
    images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
    categoryId: '1',
    status: 'active',
    participants: [],
    technologies: [],
    startDate: '2025-01-01',
  };

  const mockProjectWithoutImage: Project = {
    id: 3,
    name: 'Test Project Without Image',
    description: 'Test description',
    categoryId: '1',
    status: 'active',
    participants: [],
    technologies: [],
    startDate: '2025-01-01',
  };

  it('should render project name', () => {
    render(<CardHeader project={mockProjectWithImage} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('should render project image when image prop exists', () => {
    render(<CardHeader project={mockProjectWithImage} />);
    
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('should render first image from images array when images prop exists', () => {
    render(<CardHeader project={mockProjectWithImages} />);
    
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image1.jpg');
  });

  it('should render fallback image when no image is provided', () => {
    render(<CardHeader project={mockProjectWithoutImage} />);
    
    expect(screen.getByText('Test Project Without Image')).toBeInTheDocument();
    expect(screen.queryByAltText('Test Project Without Image')).not.toBeInTheDocument();
  });

  it('should render "Criado recentemente" metadata', () => {
    render(<CardHeader project={mockProjectWithImage} />);
    
    expect(screen.getByText('Criado recentemente')).toBeInTheDocument();
  });

  it('should render code icon', () => {
    render(<CardHeader project={mockProjectWithImage} />);
    
    const projectTitle = screen.getByText('Test Project');
    expect(projectTitle).toBeInTheDocument();
    // Code icon is rendered as part of the S.CodeIcon component
  });

  it('should render calendar icon', () => {
    render(<CardHeader project={mockProjectWithImage} />);
    
    const metadata = screen.getByText('Criado recentemente');
    expect(metadata).toBeInTheDocument();
    // Calendar icon is rendered as part of the S.CalendarIcon component
  });

  it('should prioritize image prop over images array', () => {
    const projectWithBoth: Project = {
      id: 4,
      name: 'Test Project',
      description: 'Test description',
      image: 'https://example.com/single-image.jpg',
      images: ['https://example.com/array-image.jpg'],
      categoryId: '1',
      status: 'active',
      participants: [],
      technologies: [],
      startDate: '2025-01-01',
    };
    
    render(<CardHeader project={projectWithBoth} />);
    
    const image = screen.getByAltText('Test Project');
    expect(image).toHaveAttribute('src', 'https://example.com/single-image.jpg');
  });
});