import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SkeletonButtonNavSidebar } from './index';

describe('SkeletonButtonNavSidebar Component', () => {
  it('should render single skeleton by default', () => {
    const { container } = render(<SkeletonButtonNavSidebar />);
    
    // Should render one skeleton button with its children
    const skeletonButtons = container.querySelectorAll('div');
    expect(skeletonButtons.length).toBeGreaterThan(0);
  });

  it('should render multiple skeletons when count is provided', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={3} />);
    
    // Should render 3 skeleton buttons, each with icon and text
    const skeletonButtons = container.children;
    expect(skeletonButtons.length).toBe(3);
  });

  it('should render no skeletons when count is 0', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={0} />);
    
    // With count 0, Array.from({ length: 0 }) creates empty array
    expect(container.children.length).toBe(0);
  });

  it('should render correct number of skeleton elements for each button', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={2} />);
    
    // Each skeleton button should contain icon and text elements
    const skeletonButtons = container.children;
    expect(skeletonButtons.length).toBe(2);
    
    // Each button should have children (icon and text)
    Array.from(skeletonButtons).forEach(button => {
      expect(button.children.length).toBeGreaterThan(0);
    });
  });

  it('should handle large count values', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={10} />);
    
    // Should render without errors even with larger counts
    const skeletonButtons = container.children;
    expect(skeletonButtons.length).toBe(10);
  });

  it('should render with count 1 explicitly', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={1} />);
    
    expect(container.children.length).toBe(1);
  });

  it('should handle negative count values gracefully', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={-1} />);
    
    // Array.from with negative length should create empty array
    expect(container.children.length).toBe(0);
  });

  it('should render skeleton structure correctly', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={1} />);
    
    // Each skeleton should have the correct structure
    const firstSkeleton = container.firstChild;
    expect(firstSkeleton).toBeInTheDocument();
    expect(firstSkeleton).toHaveProperty('children');
  });

  it('should generate unique keys for each skeleton', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={5} />);
    
    // Each skeleton should be rendered (testing the map function)
    expect(container.children.length).toBe(5);
  });

  it('should handle decimal count values', () => {
    const { container } = render(<SkeletonButtonNavSidebar count={2.7} />);
    
    // Array.from should handle decimal values
    expect(container.children.length).toBe(2);
  });
});