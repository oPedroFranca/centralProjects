import React from 'react';
import * as S from './styles';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children
}) => {

  return (
    <S.Button>
      {children}
    </S.Button>
  );
};

export default Button;
