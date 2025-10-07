import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from './index';

describe('Tooltip Component', () => {
  it('should render children correctly', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    expect(button).toBeInTheDocument();
  });

  it('should show tooltip on hover with text prop', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    // Tooltip should not be visible initially
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
    
    // Hover over the button parent (TooltipWrapper)
    fireEvent.mouseEnter(button.parentElement!);
    
    // Tooltip should now be visible
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });

  it('should hide tooltip when mouse leaves', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    // Hover over the button
    fireEvent.mouseEnter(button.parentElement!);
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    
    // Move mouse away
    fireEvent.mouseLeave(button.parentElement!);
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
  });

  it('should show tooltip with content prop when provided', () => {
    const tooltipContent = <span>Custom content</span>;
    
    render(
      <Tooltip content={tooltipContent}>
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    fireEvent.mouseEnter(button.parentElement!);
    
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('should prioritize text prop over content prop', () => {
    const tooltipContent = <span>Custom content</span>;
    
    render(
      <Tooltip text="Text prop" content={tooltipContent}>
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    fireEvent.mouseEnter(button.parentElement!);
    
    expect(screen.getByText('Text prop')).toBeInTheDocument();
    expect(screen.queryByText('Custom content')).not.toBeInTheDocument();
  });

  it('should render children without tooltip when no text or content provided', () => {
    render(
      <Tooltip>
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    expect(button).toBeInTheDocument();
    
    // Hover should not show any tooltip content
    fireEvent.mouseEnter(button.parentElement!);
    // Since both text and content are undefined, nothing should show
    expect(button).toBeInTheDocument();
  });

  it('should handle multiple mouse enter/leave events', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    const wrapper = button.parentElement!;
    
    // First hover
    fireEvent.mouseEnter(wrapper);
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    
    fireEvent.mouseLeave(wrapper);
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
    
    // Second hover
    fireEvent.mouseEnter(wrapper);
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    
    fireEvent.mouseLeave(wrapper);
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
  });

  it('should handle tooltip with empty string text', () => {
    const { container } = render(
      <Tooltip text="">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    fireEvent.mouseEnter(button.parentElement!);
    
    // Empty string should still render the tooltip container
    const tooltipContent = container.querySelector('[class*="absolute"]');
    expect(tooltipContent).toBeInTheDocument();
  });

  it('should handle tooltip with null content', () => {
    render(
      <Tooltip content={null}>
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    fireEvent.mouseEnter(button.parentElement!);
    
    // Should handle null content gracefully
    expect(button).toBeInTheDocument();
  });

  it('should handle complex content with JSX elements', () => {
    const complexContent = (
      <div>
        <strong>Bold text</strong>
        <span> and regular text</span>
      </div>
    );
    
    render(
      <Tooltip content={complexContent}>
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    
    fireEvent.mouseEnter(button.parentElement!);
    
    expect(screen.getByText('Bold text')).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === ' and regular text';
    })).toBeInTheDocument();
  });

  it('should maintain visible state correctly', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    const wrapper = button.parentElement!;
    
    // Initially not visible
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
    
    // Show on mouse enter
    fireEvent.mouseEnter(wrapper);
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    
    // Hide on mouse leave
    fireEvent.mouseLeave(wrapper);
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
  });

  it('should handle useState hook properly', () => {
    const { rerender } = render(
      <Tooltip text="Test tooltip">
        <button>Button</button>
      </Tooltip>
    );

    const button = screen.getByText('Button');
    const wrapper = button.parentElement!;
    
    // Test initial state
    expect(screen.queryByText('Test tooltip')).not.toBeInTheDocument();
    
    // Test state change on mouse enter
    fireEvent.mouseEnter(wrapper);
    expect(screen.getByText('Test tooltip')).toBeInTheDocument();
    
    // Rerender with different props
    rerender(
      <Tooltip text="Updated tooltip">
        <button>Button</button>
      </Tooltip>
    );
    
    // Should still be visible after rerender
    expect(screen.getByText('Updated tooltip')).toBeInTheDocument();
    
    // Test state change on mouse leave
    fireEvent.mouseLeave(wrapper);
    expect(screen.queryByText('Updated tooltip')).not.toBeInTheDocument();
  });

  it('should handle all prop combinations', () => {
    // Test with only text
    const { container: container1 } = render(
      <Tooltip text="Only text">
        <span>Child 1</span>
      </Tooltip>
    );
    
    fireEvent.mouseEnter(container1.firstChild as Element);
    expect(screen.getByText('Only text')).toBeInTheDocument();
    fireEvent.mouseLeave(container1.firstChild as Element);
    
    // Test with only content
    const { container: container2 } = render(
      <Tooltip content={<div>Only content</div>}>
        <span>Child 2</span>
      </Tooltip>
    );
    
    fireEvent.mouseEnter(container2.firstChild as Element);
    expect(screen.getByText('Only content')).toBeInTheDocument();
    fireEvent.mouseLeave(container2.firstChild as Element);
    
    // Test text priority over content
    const { container: container3 } = render(
      <Tooltip text="Text priority" content={<div>Content</div>}>
        <span>Child 3</span>
      </Tooltip>
    );
    
    fireEvent.mouseEnter(container3.firstChild as Element);
    expect(screen.getByText('Text priority')).toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('should render children in all scenarios', () => {
    // Test with string children
    render(
      <Tooltip text="Tooltip">
        String child
      </Tooltip>
    );
    expect(screen.getByText('String child')).toBeInTheDocument();
    
    // Test with element children
    render(
      <Tooltip text="Tooltip">
        <div>Element child</div>
      </Tooltip>
    );
    expect(screen.getByText('Element child')).toBeInTheDocument();
    
    // Test with multiple children
    render(
      <Tooltip text="Tooltip">
        <span>First</span>
        <span>Second</span>
      </Tooltip>
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});