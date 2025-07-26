import React from 'react';
import * as S from './styles';
import { SpinLoading } from '../SpinLoading';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  loading = false,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button $variant={variant} disabled={loading || rest.disabled} {...rest}>
      {loading ? (
        <SpinLoading />
      ) : (
        children
      )}
    </S.Button>
  );
};
