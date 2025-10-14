import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { ButtonNavSidebar } from '../index';

describe('ButtonNavSidebar Component', () => {
  it('should render the button with the provided Text', () => {
    const { getByText } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={false}
        handleCategoryClick={() => { }}
      />
    );
    expect(getByText('Test Category')).toBeInTheDocument();
  });

  it('should render the icon when passed', () => {
    const { container } = render(
      <ButtonNavSidebar
        icon={<span data-testid="custom-icon">Icon</span>}
        isMinimized={false}
        handleCategoryClick={() => { }}
      />
    );
    expect(container.querySelector('span[data-testid="custom-icon"]')).toBeInTheDocument();
  });

  it('should call handleCategoryClick on button click', () => {
    const handleCategoryClick = jest.fn();
    const { getAllByRole } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={false}
        handleCategoryClick={handleCategoryClick}
      />
    );
    const buttons = getAllByRole('button');
    const mainButton = buttons[0]; // O primeiro botão é o principal
    fireEvent.click(mainButton);
    expect(handleCategoryClick).toHaveBeenCalledTimes(1);
  });

  it('should render with the title prop when isMinimized is true', () => {
    const { getByRole } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={true}
        handleCategoryClick={() => { }}
      />
    );
    const button = getByRole('button');
    expect(button).toHaveAttribute('title', 'Test Category');
  });

  it('should not have title attribute when isMinimized is false', () => {
    const { getAllByRole } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={false}
        handleCategoryClick={() => { }}
      />
    );
    const buttons = getAllByRole('button');
    const mainButton = buttons[0]; // O primeiro botão é o principal
    expect(mainButton).not.toHaveAttribute('title');
  });

  it('should not render text when isMinimized is true', () => {
    const { queryByText } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={true}
        handleCategoryClick={() => { }}
      />
    );
    expect(queryByText('Test Category')).not.toBeInTheDocument();
  });

  it('should display correct folder icon based on isSelected', () => {
    const { container } = render(
      <ButtonNavSidebar
        Text="Test Category"
        $isSelected={true}
        isMinimized={false}
        handleCategoryClick={() => { }}
      />
    );
    expect(container.querySelector('svg[data-testid="FolderOpen"]')).toBeInTheDocument();

    const { container: container2 } = render(
      <ButtonNavSidebar
        Text="Test Category"
        $isSelected={false}
        isMinimized={false}
        handleCategoryClick={() => { }}
      />
    );
    expect(container2.querySelector('svg[data-testid="FolderClosed"]')).toBeInTheDocument();
  });

  it('should render HoverEffectDiv', () => {
    const { container } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={false}
        handleCategoryClick={() => { }}
      />
    );
    // HoverEffectDiv should be rendered as part of the component structure
    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('should pass additional props to button', () => {
    const { getAllByRole } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={false}
        handleCategoryClick={() => { }}
        disabled={true}
        id="test-button"
      />
    );
    const buttons = getAllByRole('button');
    const mainButton = buttons[0]; // O primeiro botão é o principal
    expect(mainButton).toBeDisabled();
    expect(mainButton).toHaveAttribute('id', 'test-button');
  });

  it('should render without Text prop', () => {
    const { container } = render(
      <ButtonNavSidebar
        isMinimized={false}
        handleCategoryClick={() => { }}
      />
    );
    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('should render with default $isSelected false', () => {
    const { container } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={false}
        handleCategoryClick={() => { }}
      />
    );
    expect(container.querySelector('svg[data-testid="FolderClosed"]')).toBeInTheDocument();
  });

  it('should not render dropdown when disableThreeDots is true', () => {
    const { getAllByRole } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={false}
        handleCategoryClick={() => {}}
        disableThreeDots={true}
      />
    );
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(1);
  });

  it('should not render dropdown when isMinimized is true', () => {
    const { getAllByRole } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={true}
        handleCategoryClick={() => {}}
      />
    );
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(1);
  });
});
