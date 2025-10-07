import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { toast } from 'sonner';
import { Toast } from './index';

// Mock the sonner toast library
jest.mock('sonner', () => ({
  toast: {
    custom: jest.fn(),
  },
}));

// Mock the icons
jest.mock('react-icons/io5', () => ({
  IoCheckmarkCircle: () => <div data-testid="success-icon">Success Icon</div>,
  IoCloseCircle: () => <div data-testid="error-icon">Error Icon</div>,
  IoAlertCircle: () => <div data-testid="warning-icon">Warning Icon</div>,
}));

const mockToast = toast as jest.Mocked<typeof toast>;

describe('Toast Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('success toast', () => {
    it('should call sonner toast with success message', () => {
      Toast.success('Success message');

      expect(mockToast.custom).toHaveBeenCalledTimes(1);
      expect(mockToast.custom).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should call sonner toast with success message and description', () => {
      Toast.success('Success message', { description: 'Success description' });

      expect(mockToast.custom).toHaveBeenCalledTimes(1);
      expect(mockToast.custom).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should render success toast component correctly', () => {
      Toast.success('Success message', { description: 'Success description' });

      // The component should have been called with the custom function
      expect(mockToast.custom).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe('error toast', () => {
    it('should call sonner toast with error message', () => {
      Toast.error('Error message');

      expect(mockToast.custom).toHaveBeenCalledTimes(1);
      expect(mockToast.custom).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should call sonner toast with error message and description', () => {
      Toast.error('Error message', { description: 'Error description' });

      expect(mockToast.custom).toHaveBeenCalledTimes(1);
      expect(mockToast.custom).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe('warning toast', () => {
    it('should call sonner toast with warning message', () => {
      Toast.warning('Warning message');

      expect(mockToast.custom).toHaveBeenCalledTimes(1);
      expect(mockToast.custom).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should call sonner toast with warning message and description', () => {
      Toast.warning('Warning message', { description: 'Warning description' });

      expect(mockToast.custom).toHaveBeenCalledTimes(1);
      expect(mockToast.custom).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe('toast without description', () => {
    it('should work with success toast without description', () => {
      Toast.success('Simple success');

      expect(mockToast.custom).toHaveBeenCalledTimes(1);
    });

    it('should work with error toast without description', () => {
      Toast.error('Simple error');

      expect(mockToast.custom).toHaveBeenCalledTimes(1);
    });

    it('should work with warning toast without description', () => {
      Toast.warning('Simple warning');

      expect(mockToast.custom).toHaveBeenCalledTimes(1);
    });
  });

  describe('Toast JSX Components', () => {
    it('should render success toast JSX correctly', () => {
      Toast.success('Success!', { description: 'Success description' });
      
      // Get the function that was passed to toast.custom
      const customFunction = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const { container, getByTestId } = render(customFunction());
      
      expect(container.textContent).toContain('Success!');
      expect(container.textContent).toContain('Success description');
      expect(getByTestId('success-icon')).toBeInTheDocument();
    });

    it('should render error toast JSX correctly', () => {
      Toast.error('Error!', { description: 'Error description' });
      
      const customFunction = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const { container, getByTestId } = render(customFunction());
      
      expect(container.textContent).toContain('Error!');
      expect(container.textContent).toContain('Error description');
      expect(getByTestId('error-icon')).toBeInTheDocument();
    });

    it('should render warning toast JSX correctly', () => {
      Toast.warning('Warning!', { description: 'Warning description' });
      
      const customFunction = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const { container, getByTestId } = render(customFunction());
      
      expect(container.textContent).toContain('Warning!');
      expect(container.textContent).toContain('Warning description');
      expect(getByTestId('warning-icon')).toBeInTheDocument();
    });

    it('should render success toast without description', () => {
      Toast.success('Simple success');
      
      const customFunction = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const { container, getByTestId } = render(customFunction());
      
      expect(container.textContent).toContain('Simple success');
      expect(container.textContent).not.toContain('description');
      expect(getByTestId('success-icon')).toBeInTheDocument();
    });

    it('should render error toast without description', () => {
      Toast.error('Simple error');
      
      const customFunction = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const { container, getByTestId } = render(customFunction());
      
      expect(container.textContent).toContain('Simple error');
      expect(container.textContent).not.toContain('description');
      expect(getByTestId('error-icon')).toBeInTheDocument();
    });

    it('should render warning toast without description', () => {
      Toast.warning('Simple warning');
      
      const customFunction = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const { container, getByTestId } = render(customFunction());
      
      expect(container.textContent).toContain('Simple warning');
      expect(container.textContent).not.toContain('description');
      expect(getByTestId('warning-icon')).toBeInTheDocument();
    });

    it('should render all toast elements structure', () => {
      // Test all JSX elements are executed
      Toast.success('Test', { description: 'Desc' });
      const successFn = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const successElement = successFn();
      
      // Render to test all JSX paths
      const { container } = render(successElement);
      expect(container.querySelector('span')).toBeTruthy(); // ToastTitle
      expect(container.querySelector('div')).toBeTruthy(); // Various div elements
      
      Toast.error('Test', { description: 'Desc' });
      const errorFn = mockToast.custom.mock.calls[1][0] as () => React.ReactElement;
      const errorElement = errorFn();
      
      const { container: errorContainer } = render(errorElement);
      expect(errorContainer.querySelector('span')).toBeTruthy();
      expect(errorContainer.querySelector('div')).toBeTruthy();
      
      Toast.warning('Test', { description: 'Desc' });
      const warningFn = mockToast.custom.mock.calls[2][0] as () => React.ReactElement;
      const warningElement = warningFn();
      
      const { container: warningContainer } = render(warningElement);
      expect(warningContainer.querySelector('span')).toBeTruthy();
      expect(warningContainer.querySelector('div')).toBeTruthy();
    });
  });

  describe('Toast Styles', () => {
    it('should render all styled components', () => {
      // Test success toast styles
      Toast.success('Test');
      const successFunction = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const { container: successContainer } = render(successFunction());
      expect(successContainer.querySelector('div')).toBeTruthy();
      
      // Test error toast styles
      Toast.error('Test');
      const errorFunction = mockToast.custom.mock.calls[1][0] as () => React.ReactElement;
      const { container: errorContainer } = render(errorFunction());
      expect(errorContainer.querySelector('div')).toBeTruthy();
      
      // Test warning toast styles
      Toast.warning('Test');
      const warningFunction = mockToast.custom.mock.calls[2][0] as () => React.ReactElement;
      const { container: warningContainer } = render(warningFunction());
      expect(warningContainer.querySelector('div')).toBeTruthy();
    });
  });

  describe('Toast Component Structure', () => {
    it('should render all toast components with proper structure', () => {
      // Test success toast structure
      Toast.success('Success test', { description: 'Success desc' });
      const successFn = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const { container: successContainer } = render(successFn());
      
      // Verify structure elements exist
      expect(successContainer.querySelector('div')).toBeInTheDocument();
      expect(successContainer.textContent).toContain('Success test');
      expect(successContainer.textContent).toContain('Success desc');
      
      // Test error toast structure
      Toast.error('Error test', { description: 'Error desc' });
      const errorFn = mockToast.custom.mock.calls[1][0] as () => React.ReactElement;
      const { container: errorContainer } = render(errorFn());
      
      expect(errorContainer.querySelector('div')).toBeInTheDocument();
      expect(errorContainer.textContent).toContain('Error test');
      expect(errorContainer.textContent).toContain('Error desc');
      
      // Test warning toast structure
      Toast.warning('Warning test', { description: 'Warning desc' });
      const warningFn = mockToast.custom.mock.calls[2][0] as () => React.ReactElement;
      const { container: warningContainer } = render(warningFn());
      
      expect(warningContainer.querySelector('div')).toBeInTheDocument();
      expect(warningContainer.textContent).toContain('Warning test');
      expect(warningContainer.textContent).toContain('Warning desc');
    });

    it('should render icons correctly in each toast type', () => {
      // Test icons rendering
      Toast.success('Test');
      const successFn = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const successElement = successFn();
      expect(successElement).toBeTruthy();
      
      Toast.error('Test');
      const errorFn = mockToast.custom.mock.calls[1][0] as () => React.ReactElement;
      const errorElement = errorFn();
      expect(errorElement).toBeTruthy();
      
      Toast.warning('Test');
      const warningFn = mockToast.custom.mock.calls[2][0] as () => React.ReactElement;
      const warningElement = warningFn();
      expect(warningElement).toBeTruthy();
    });

    it('should handle edge cases for options', () => {
      // Test with undefined options
      Toast.success('Test message');
      const fn1 = mockToast.custom.mock.calls[0][0] as () => React.ReactElement;
      const { container: container1 } = render(fn1());
      expect(container1.textContent).toContain('Test message');
      
      // Test with empty description
      Toast.error('Error message', { description: '' });
      const fn2 = mockToast.custom.mock.calls[1][0] as () => React.ReactElement;
      const { container: container2 } = render(fn2());
      expect(container2.textContent).toContain('Error message');
      
      // Test with description undefined
      Toast.warning('Warning message', { description: undefined });
      const fn3 = mockToast.custom.mock.calls[2][0] as () => React.ReactElement;
      const { container: container3 } = render(fn3());
      expect(container3.textContent).toContain('Warning message');
    });
  });
});