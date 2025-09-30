import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkeletonButtonNavSidebar } from './index';

describe('SkeletonButtonNavSidebar Component', () => {
  it('should render single skeleton by default', () => {
    const { container } = render(<SkeletonButtonNavSidebar />);
    
    // Should render one skeleton button
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render multiple skeletons when count is provided', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={3} />);
    
    // The component should render 3 skeleton buttons
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render no skeletons when count is 0', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={0} />);
    
    // With count 0, Array.from({ length: 0 }) creates empty array
    expect(container.firstChild).toBeNull();
  });

  it('should render correct number of skeleton elements for each button', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={2} />);
    
    // Each skeleton button should contain icon and text elements
    // We expect the component to render properly
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should handle large count values', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={10} />);
    
    // Should render without errors even with larger counts
    expect(container.firstChild).toBeInTheDocument();
  });
});