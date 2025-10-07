import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import * as S from './styles';

describe('Toast Styles', () => {
  it('should render ToastBase component', () => {
    const { container } = render(<S.ToastBase>Base Toast</S.ToastBase>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('Base Toast');
  });

  it('should render SuccessToast component', () => {
    const { container } = render(<S.SuccessToast>Success Toast</S.SuccessToast>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('Success Toast');
  });

  it('should render ErrorToast component', () => {
    const { container } = render(<S.ErrorToast>Error Toast</S.ErrorToast>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('Error Toast');
  });

  it('should render WarningToast component', () => {
    const { container } = render(<S.WarningToast>Warning Toast</S.WarningToast>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('Warning Toast');
  });

  it('should render ToastIconWrapper component', () => {
    const { container } = render(<S.ToastIconWrapper>Icon</S.ToastIconWrapper>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('Icon');
  });

  it('should render ToastTextWrapper component', () => {
    const { container } = render(<S.ToastTextWrapper>Text Wrapper</S.ToastTextWrapper>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('Text Wrapper');
  });

  it('should render ToastTitle component', () => {
    const { container } = render(<S.ToastTitle>Title</S.ToastTitle>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('Title');
  });

  it('should render ToastDescription component', () => {
    const { container } = render(<S.ToastDescription>Description</S.ToastDescription>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('Description');
  });

  it('should test base styles constants', () => {
    expect(S.base).toContain('bg-primary-gray-800');
    expect(S.base).toContain('text-white');
    expect(S.base).toContain('flex');
    expect(S.base).toContain('shadow-2xl');
    expect(S.base).toContain('border');
    expect(S.base).toContain('rounded-md');
    expect(S.base).toContain('p-4');
  });

  it('should test success styles constant', () => {
    expect(S.success).toContain(S.base);
    expect(S.success).toContain('border-green-500/50');
  });

  it('should test error styles constant', () => {
    expect(S.error).toContain(S.base);
    expect(S.error).toContain('border-red-500/50');
  });

  it('should test warning styles constant', () => {
    expect(S.warning).toContain(S.base);
    expect(S.warning).toContain('border-yellow-500/50');
  });

  it('should render complex toast structure', () => {
    const { container } = render(
      <S.SuccessToast>
        <S.ToastIconWrapper>
          <div>Icon</div>
        </S.ToastIconWrapper>
        <S.ToastTextWrapper>
          <S.ToastTitle>Title</S.ToastTitle>
          <S.ToastDescription>Description</S.ToastDescription>
        </S.ToastTextWrapper>
      </S.SuccessToast>
    );
    
    expect(container.textContent).toContain('Icon');
    expect(container.textContent).toContain('Title');
    expect(container.textContent).toContain('Description');
  });
});