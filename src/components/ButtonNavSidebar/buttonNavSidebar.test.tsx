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
    const { getByRole } = render(
      <ButtonNavSidebar
        Text="Test Category"
        isMinimized={false}
        handleCategoryClick={handleCategoryClick}
      />
    );
    const button = getByRole('button');
    fireEvent.click(button);
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
});
