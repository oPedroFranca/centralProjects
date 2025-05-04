import React from 'react';
import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <S.Button $variant={variant} {...rest} >
      {children}
    </S.Button>
  );
};

export default Button;
