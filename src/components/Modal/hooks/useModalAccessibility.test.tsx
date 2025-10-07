import { renderHook } from '@testing-library/react';
import { useModalAccessibility } from './useModalAccessibility';

describe('useModalAccessibility', () => {
  beforeEach(() => {
    // Reset body overflow before each test
    document.body.style.overflow = '';
  });

  afterEach(() => {
    // Clean up after each test
    document.body.style.overflow = '';
  });

  it('should block scroll when modal is open', () => {
    renderHook(() => useModalAccessibility(true));
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should not block scroll when modal is closed', () => {
    renderHook(() => useModalAccessibility(false));
    expect(document.body.style.overflow).toBe('');
  });

  it('should restore scroll on unmount', () => {
    const { unmount } = renderHook(() => useModalAccessibility(true));
    expect(document.body.style.overflow).toBe('hidden');
    
    unmount();
    expect(document.body.style.overflow).toBe('');
  });

  it('should call onClose when Escape key is pressed', () => {
    const onClose = jest.fn();
    renderHook(() => useModalAccessibility(true, onClose));
    
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    window.dispatchEvent(escapeEvent);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose when other keys are pressed', () => {
    const onClose = jest.fn();
    renderHook(() => useModalAccessibility(true, onClose));
    
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    window.dispatchEvent(enterEvent);
    
    expect(onClose).not.toHaveBeenCalled();
  });

  it('should not add event listener when modal is closed', () => {
    const onClose = jest.fn();
    renderHook(() => useModalAccessibility(false, onClose));
    
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    window.dispatchEvent(escapeEvent);
    
    expect(onClose).not.toHaveBeenCalled();
  });

  it('should work without onClose callback', () => {
    expect(() => {
      renderHook(() => useModalAccessibility(true));
      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      window.dispatchEvent(escapeEvent);
    }).not.toThrow();
  });

  it('should preserve previous overflow value', () => {
    document.body.style.overflow = 'scroll';
    
    const { unmount } = renderHook(() => useModalAccessibility(true));
    expect(document.body.style.overflow).toBe('hidden');
    
    unmount();
    expect(document.body.style.overflow).toBe('scroll');
  });

  it('should update when isOpen changes', () => {
    const { rerender } = renderHook(
      ({ isOpen }) => useModalAccessibility(isOpen),
      { initialProps: { isOpen: false } }
    );
    
    expect(document.body.style.overflow).toBe('');
    
    rerender({ isOpen: true });
    expect(document.body.style.overflow).toBe('hidden');
    
    rerender({ isOpen: false });
    expect(document.body.style.overflow).toBe('');
  });

  it('should return dialogRef', () => {
    const { result } = renderHook(() => useModalAccessibility(true));
    expect(result.current.dialogRef).toBeDefined();
    expect(result.current.dialogRef.current).toBeNull();
  });
});