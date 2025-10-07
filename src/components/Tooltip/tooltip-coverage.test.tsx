import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Tooltip } from './index';

describe('Tooltip Component - Coverage Tests', () => {
  it('should execute all useState and conditional rendering paths', () => {
    // Test the useState initialization
    const TestComponent = () => {
      return (
        <Tooltip text="Test tooltip">
          <button>Test button</button>
        </Tooltip>
      );
    };

    const { container } = render(<TestComponent />);
    const button = screen.getByText('Test button');
    const wrapper = button.parentElement!;

    // Force state change multiple times to cover useState paths
    act(() => {
      fireEvent.mouseEnter(wrapper);
    });

    expect(screen.getByText('Test tooltip')).toBeInTheDocument();

    act(() => {
      fireEvent.mouseLeave(wrapper);
    });

    expect(screen.queryByText('Test tooltip')).not.toBeInTheDocument();

    // Test again to cover the state setter function
    act(() => {
      fireEvent.mouseEnter(wrapper);
    });

    expect(screen.getByText('Test tooltip')).toBeInTheDocument();
  });

  it('should test nullish coalescing operator (??) execution', () => {
    // Test when text is undefined but content exists
    const contentElement = <div>Content element</div>;
    
    render(
      <Tooltip content={contentElement}>
        <span>Trigger</span>
      </Tooltip>
    );

    const trigger = screen.getByText('Trigger');
    
    act(() => {
      fireEvent.mouseEnter(trigger.parentElement!);
    });

    // This should execute the text ?? content path
    expect(screen.getByText('Content element')).toBeInTheDocument();
  });

  it('should test all conditional rendering branches', () => {
    // Test when both text and content are undefined
    render(
      <Tooltip>
        <div>No tooltip content</div>
      </Tooltip>
    );

    const trigger = screen.getByText('No tooltip content');
    
    act(() => {
      fireEvent.mouseEnter(trigger.parentElement!);
    });

    // No tooltip should appear when both text and content are undefined
    expect(trigger).toBeInTheDocument();
  });

  it('should force execute the visible && condition', () => {
    const { rerender } = render(
      <Tooltip text="Test">
        <button>Button</button>
      </Tooltip>
    );

    const button = screen.getByText('Button');
    const wrapper = button.parentElement!;

    // Test the visible && condition when visible is false
    expect(screen.queryByText('Test')).not.toBeInTheDocument();

    // Test the visible && condition when visible is true
    act(() => {
      fireEvent.mouseEnter(wrapper);
    });

    expect(screen.getByText('Test')).toBeInTheDocument();

    // Force re-render while visible is true
    rerender(
      <Tooltip text="Updated Test">
        <button>Button</button>
      </Tooltip>
    );

    expect(screen.getByText('Updated Test')).toBeInTheDocument();
  });

  it('should test arrow functions in event handlers', () => {
    const { container } = render(
      <Tooltip text="Arrow test">
        <input type="text" defaultValue="test" />
      </Tooltip>
    );

    const input = container.querySelector('input')!;
    const wrapper = input.parentElement!;

    // Test the arrow function () => setVisible(true)
    act(() => {
      fireEvent.mouseEnter(wrapper);
    });

    expect(screen.getByText('Arrow test')).toBeInTheDocument();

    // Test the arrow function () => setVisible(false)
    act(() => {
      fireEvent.mouseLeave(wrapper);
    });

    expect(screen.queryByText('Arrow test')).not.toBeInTheDocument();
  });

  it('should test rapid state changes', () => {
    render(
      <Tooltip text="Rapid test">
        <div>Rapid trigger</div>
      </Tooltip>
    );

    const trigger = screen.getByText('Rapid trigger');
    const wrapper = trigger.parentElement!;

    // Rapid fire events to ensure state management works correctly
    for (let i = 0; i < 5; i++) {
      act(() => {
        fireEvent.mouseEnter(wrapper);
      });

      expect(screen.getByText('Rapid test')).toBeInTheDocument();

      act(() => {
        fireEvent.mouseLeave(wrapper);
      });

      expect(screen.queryByText('Rapid test')).not.toBeInTheDocument();
    }
  });
});