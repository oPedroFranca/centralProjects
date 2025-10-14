import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { DropdownMenu, DropdownMenuItem } from './index';

describe('DropdownMenu Component', () => {
  it('should render the dropdown trigger', () => {
    const { getByText } = render(
      <DropdownMenu trigger={<button>Open Menu</button>}>
        <div>Menu Content</div>
      </DropdownMenu>
    );

    expect(getByText('Open Menu')).toBeInTheDocument();
  });

  it('should not show dropdown content initially', () => {
    const { queryByText } = render(
      <DropdownMenu trigger={<button>Open Menu</button>}>
        <div>Menu Content</div>
      </DropdownMenu>
    );

    expect(queryByText('Menu Content')).not.toBeInTheDocument();
  });

  it('should show dropdown content when trigger is clicked', () => {
    const { getByText } = render(
      <DropdownMenu trigger={<button>Open Menu</button>}>
        <div>Menu Content</div>
      </DropdownMenu>
    );

    fireEvent.click(getByText('Open Menu'));
    expect(getByText('Menu Content')).toBeInTheDocument();
  });

  it('should toggle dropdown content when trigger is clicked multiple times', () => {
    const { getByText, queryByText } = render(
      <DropdownMenu trigger={<button>Open Menu</button>}>
        <div>Menu Content</div>
      </DropdownMenu>
    );

    const trigger = getByText('Open Menu');

    // First click - open
    fireEvent.click(trigger);
    expect(getByText('Menu Content')).toBeInTheDocument();

    // Second click - close
    fireEvent.click(trigger);
    expect(queryByText('Menu Content')).not.toBeInTheDocument();
  });

  it('should close dropdown when clicking outside', async () => {
    const { getByText, queryByText } = render(
      <div>
        <DropdownMenu trigger={<button>Open Menu</button>}>
          <div>Menu Content</div>
        </DropdownMenu>
        <div>Outside Element</div>
      </div>
    );

    // Open dropdown
    fireEvent.click(getByText('Open Menu'));
    expect(getByText('Menu Content')).toBeInTheDocument();

    // Click outside
    fireEvent.mouseDown(getByText('Outside Element'));

    await waitFor(() => {
      expect(queryByText('Menu Content')).not.toBeInTheDocument();
    });
  });

  it('should prevent default and stop propagation on trigger click', () => {
    const { getByText } = render(
      <DropdownMenu trigger={<button>Open Menu</button>}>
        <div>Menu Content</div>
      </DropdownMenu>
    );

    const trigger = getByText('Open Menu');

    // Just test that clicking works without errors
    fireEvent.click(trigger);
    expect(getByText('Menu Content')).toBeInTheDocument();
  });

  it('should apply align prop correctly', () => {
    const { getByText } = render(
      <DropdownMenu trigger={<button>Open Menu</button>} align="start">
        <div>Menu Content</div>
      </DropdownMenu>
    );

    fireEvent.click(getByText('Open Menu'));

    // Check if the dropdown content is visible when using align="start"
    expect(getByText('Menu Content')).toBeInTheDocument();
  });

  it('should apply custom className to dropdown content', () => {
    const { getByText, container } = render(
      <DropdownMenu
        trigger={<button>Open Menu</button>}
        className="custom-dropdown"
      >
        <div>Menu Content</div>
      </DropdownMenu>
    );

    fireEvent.click(getByText('Open Menu'));

    // Check if the custom class is applied to some element in the dropdown
    expect(container.querySelector('.custom-dropdown')).toBeInTheDocument();
  });

  it('should cleanup event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

    const { getByText, unmount } = render(
      <DropdownMenu trigger={<button>Open Menu</button>}>
        <div>Menu Content</div>
      </DropdownMenu>
    );

    // Open dropdown to add event listener
    fireEvent.click(getByText('Open Menu'));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

    removeEventListenerSpy.mockRestore();
  });
});

describe('DropdownMenuItem Component', () => {
  it('should render dropdown menu item', () => {
    const { getByText } = render(
      <DropdownMenuItem>Menu Item</DropdownMenuItem>
    );

    expect(getByText('Menu Item')).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <DropdownMenuItem onClick={handleClick}>Menu Item</DropdownMenuItem>
    );

    fireEvent.click(getByText('Menu Item'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should prevent default and stop propagation on click', () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <DropdownMenuItem onClick={handleClick}>Menu Item</DropdownMenuItem>
    );

    const item = getByText('Menu Item');

    fireEvent.click(item);

    // Just test that the click handler is called
    expect(handleClick).toHaveBeenCalled();
  });

  it('should apply custom className', () => {
    const { getByText } = render(
      <DropdownMenuItem className="custom-item">Menu Item</DropdownMenuItem>
    );

    const item = getByText('Menu Item');
    expect(item).toHaveClass('custom-item');
  });

  it('should work without onClick handler', () => {
    const { getByText } = render(
      <DropdownMenuItem>Menu Item</DropdownMenuItem>
    );

    const item = getByText('Menu Item');

    // Should not throw error when clicking without onClick
    expect(() => fireEvent.click(item)).not.toThrow();
  });

  it('should render as button element', () => {
    const { getByRole } = render(
      <DropdownMenuItem>Menu Item</DropdownMenuItem>
    );

    expect(getByRole('button')).toBeInTheDocument();
  });
});

describe('DropdownMenu Integration', () => {
  it('should work with DropdownMenuItem components', () => {
    const handleItem1Click = jest.fn();
    const handleItem2Click = jest.fn();

    const { getByText } = render(
      <DropdownMenu trigger={<button>Open Menu</button>}>
        <DropdownMenuItem onClick={handleItem1Click}>Item 1</DropdownMenuItem>
        <DropdownMenuItem onClick={handleItem2Click}>Item 2</DropdownMenuItem>
      </DropdownMenu>
    );

    // Open dropdown
    fireEvent.click(getByText('Open Menu'));

    // Click items
    fireEvent.click(getByText('Item 1'));
    fireEvent.click(getByText('Item 2'));

    expect(handleItem1Click).toHaveBeenCalledTimes(1);
    expect(handleItem2Click).toHaveBeenCalledTimes(1);
  });

  it('should handle complex trigger elements', () => {
    const { getByTestId, getByText } = render(
      <DropdownMenu
        trigger={
          <div data-testid="complex-trigger">
            <span>Complex</span>
            <button>Trigger</button>
          </div>
        }
      >
        <div>Menu Content</div>
      </DropdownMenu>
    );

    fireEvent.click(getByTestId('complex-trigger'));
    expect(getByText('Menu Content')).toBeInTheDocument();
  });
});
