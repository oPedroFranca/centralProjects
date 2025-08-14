import React from 'react';
import * as S from './styles';
import { SpinLoading } from '../SpinLoading';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient';
  loading?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  loading = false,
  ...rest
}: IButtonProps) => {
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
