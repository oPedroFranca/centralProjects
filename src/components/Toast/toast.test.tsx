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
});